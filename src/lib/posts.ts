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
import {
  loadStoredPosts,
  persistStoredPosts,
  type StoredPost,
} from "@/lib/post-store";

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

const postsDirectory = path.join(process.cwd(), "content/posts");
const defaultCategory: CategorySlug = categories[0].slug;

function normalizeCategory(value: string | null | undefined): CategorySlug {
  if (value && isCategorySlug(value)) return value;
  return defaultCategory;
}

function mapStored(row: StoredPost): Post {
  return {
    slug: row.slug,
    title: row.title,
    date: String(row.date ?? "").slice(0, 10),
    excerpt: row.excerpt ?? "",
    image: row.image ? row.image : undefined,
    category: normalizeCategory(row.category),
    published: Boolean(row.published),
    content: row.content ?? "",
  };
}

function toStored(post: Post): StoredPost {
  return {
    title: post.title,
    slug: post.slug,
    date: post.date,
    excerpt: post.excerpt,
    image: post.image ?? "",
    category: post.category,
    published: post.published,
    content: post.content,
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

function filterPosts(posts: Post[], options?: { includeDrafts?: boolean }) {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  if (options?.includeDrafts) return sorted;
  return sorted.filter((post) => post.published);
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

async function readPosts(): Promise<Post[]> {
  const stored = await loadStoredPosts();
  if (stored.length > 0) return stored.map(mapStored);
  return getPostsFromFiles({ includeDrafts: true });
}

export async function getAllPosts(options?: {
  includeDrafts?: boolean;
}): Promise<Post[]> {
  return filterPosts(await readPosts(), options);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return (await readPosts()).find((post) => post.slug === slug) ?? null;
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
  const slug = slugify(input.slug || input.title);
  if (!slug) throw new Error("Slug inválido");

  const category = normalizeCategory(input.category);
  if (!getCategory(category)) {
    throw new Error("Categoria inválida.");
  }

  const next: Post = {
    title: input.title,
    slug,
    date: input.date || new Date().toISOString().slice(0, 10),
    excerpt: input.excerpt || "",
    image: input.image?.trim() ? input.image.trim() : undefined,
    category,
    published: true,
    content: input.content.trim(),
  };

  const posts = await readPosts();

  if (previousSlug && previousSlug !== slug) {
    const clash = posts.find((post) => post.slug === slug);
    if (clash) throw new Error("Já existe um artigo com este slug.");
  }

  const withoutPrevious = posts.filter(
    (post) => post.slug !== (previousSlug || slug),
  );
  withoutPrevious.push(next);

  await persistStoredPosts(withoutPrevious.map(toStored));
  if (previousSlug && previousSlug !== slug) {
    revalidatePostPaths(previousSlug, category);
  }
  revalidatePostPaths(slug, category);
  return next;
}

export async function deletePost(slug: string) {
  const posts = await readPosts();
  const existing = posts.find((post) => post.slug === slug);
  if (!existing) return false;

  await persistStoredPosts(
    posts.filter((post) => post.slug !== slug).map(toStored),
  );
  revalidatePostPaths(slug, existing.category);
  return true;
}
