import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { revalidatePath } from "next/cache";
import { remark } from "remark";
import html from "remark-html";
import {
  categories,
  getCategory,
  isCategorySlug,
  type CategorySlug,
} from "@/lib/blog";
import { getSql, hasDatabase } from "@/lib/db";

export type PostMeta = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  category: CategorySlug;
  published: boolean;
};

export type Post = PostMeta & {
  content: string;
};

export type PostInput = {
  title: string;
  slug?: string;
  date?: string;
  excerpt: string;
  image?: string;
  category: string;
  published: boolean;
  content: string;
};

type PostRow = {
  slug: string;
  title: string;
  date: string | Date;
  excerpt: string;
  image: string | null;
  category: string | null;
  published: boolean;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");
const defaultCategory: CategorySlug = categories[0].slug;

function formatDate(value: string | Date) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value).slice(0, 10);
}

function normalizeCategory(value: string | null | undefined): CategorySlug {
  if (value && isCategorySlug(value)) return value;
  return defaultCategory;
}

function mapRow(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    date: formatDate(row.date),
    excerpt: row.excerpt ?? "",
    image: row.image || undefined,
    category: normalizeCategory(row.category),
    published: Boolean(row.published),
    content: row.content ?? "",
  };
}

function parseMarkdownFile(filename: string): Post {
  const slugFromFile = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    title: String(data.title ?? slugFromFile),
    slug: String(data.slug ?? slugFromFile),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    excerpt: String(data.excerpt ?? ""),
    image: data.image ? String(data.image) : undefined,
    category: normalizeCategory(data.category ? String(data.category) : undefined),
    published: Boolean(data.published ?? false),
    content: content.trim(),
  };
}

function getPostsFromFiles(options?: { includeDrafts?: boolean }): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
  const posts = files
    .map(parseMarkdownFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  if (options?.includeDrafts) return posts;
  return posts.filter((post) => post.published);
}

function revalidatePostPaths(slug?: string, category?: string) {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  if (category) revalidatePath(`/blog/categoria/${category}`);
  if (slug) {
    revalidatePath(`/blog/${slug}`);
    revalidatePath(`/admin/posts/${slug}`);
  }
}

function requireDatabaseForWrites() {
  if (!hasDatabase()) {
    throw new Error(
      "Para criar ou editar artigos, configure DATABASE_URL (Neon) em .env.local e rode npm run db:setup.",
    );
  }
}

export function slugify(input: string) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function getAllPosts(options?: {
  includeDrafts?: boolean;
}): Promise<Post[]> {
  if (!hasDatabase()) {
    return getPostsFromFiles(options);
  }

  const sql = getSql();
  const rows = options?.includeDrafts
    ? ((await sql`
        SELECT slug, title, date, excerpt, image, category, published, content
        FROM posts
        ORDER BY date DESC, slug ASC
      `) as PostRow[])
    : ((await sql`
        SELECT slug, title, date, excerpt, image, category, published, content
        FROM posts
        WHERE published = true
        ORDER BY date DESC, slug ASC
      `) as PostRow[]);

  return rows.map(mapRow);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!hasDatabase()) {
    return getPostsFromFiles({ includeDrafts: true }).find((post) => post.slug === slug) ?? null;
  }

  const sql = getSql();
  const rows = (await sql`
    SELECT slug, title, date, excerpt, image, category, published, content
    FROM posts
    WHERE slug = ${slug}
    LIMIT 1
  `) as PostRow[];

  if (!rows[0]) return null;
  return mapRow(rows[0]);
}

export async function getPostsByCategory(slug: string) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === slug);
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function savePost(input: PostInput, previousSlug?: string) {
  requireDatabaseForWrites();
  const sql = getSql();
  const slug = slugify(input.slug || input.title);
  if (!slug) throw new Error("Slug inválido");

  const category = normalizeCategory(input.category);
  if (!getCategory(category)) {
    throw new Error("Categoria inválida.");
  }

  const date = input.date || new Date().toISOString().slice(0, 10);
  const image = input.image?.trim() ? input.image.trim() : null;
  const excerpt = input.excerpt || "";
  const content = input.content.trim();
  const published = Boolean(input.published);
  const title = input.title;

  if (previousSlug && previousSlug !== slug) {
    const existing = await getPostBySlug(slug);
    if (existing) {
      throw new Error("Já existe um artigo com este slug.");
    }

    await sql`
      UPDATE posts
      SET
        slug = ${slug},
        title = ${title},
        date = ${date},
        excerpt = ${excerpt},
        image = ${image},
        category = ${category},
        published = ${published},
        content = ${content},
        updated_at = NOW()
      WHERE slug = ${previousSlug}
    `;
    revalidatePostPaths(previousSlug, category);
  } else {
    await sql`
      INSERT INTO posts (slug, title, date, excerpt, image, category, published, content, updated_at)
      VALUES (${slug}, ${title}, ${date}, ${excerpt}, ${image}, ${category}, ${published}, ${content}, NOW())
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        date = EXCLUDED.date,
        excerpt = EXCLUDED.excerpt,
        image = EXCLUDED.image,
        category = EXCLUDED.category,
        published = EXCLUDED.published,
        content = EXCLUDED.content,
        updated_at = NOW()
    `;
  }

  revalidatePostPaths(slug, category);
  const post = await getPostBySlug(slug);
  if (!post) throw new Error("Não foi possível salvar o artigo.");
  return post;
}

export async function deletePost(slug: string) {
  requireDatabaseForWrites();
  const sql = getSql();
  const existing = await getPostBySlug(slug);
  if (!existing) return false;

  await sql`DELETE FROM posts WHERE slug = ${slug}`;
  revalidatePostPaths(slug, existing.category);
  return true;
}
