import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { neon } from "@neondatabase/serverless";

dotenv.config({ path: ".env.local" });
dotenv.config();

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error(
      "Defina DATABASE_URL no .env.local (connection string do Neon) e rode de novo.",
    );
    process.exit(1);
  }

  const sql = neon(url);

  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      date DATE NOT NULL,
      excerpt TEXT NOT NULL DEFAULT '',
      image TEXT,
      category TEXT NOT NULL DEFAULT 'saude-emocional',
      published BOOLEAN NOT NULL DEFAULT false,
      content TEXT NOT NULL DEFAULT '',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    ALTER TABLE posts
    ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'saude-emocional'
  `;

  const postsDir = path.join(process.cwd(), "content/posts");
  if (!fs.existsSync(postsDir)) {
    console.log("Tabela pronta. Nenhum Markdown em content/posts para sincronizar.");
    return;
  }

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
  let upserted = 0;

  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);
    const slug = String(data.slug ?? file.replace(/\.md$/, ""));
    const title = String(data.title ?? slug);
    const date = String(data.date ?? new Date().toISOString().slice(0, 10));
    const excerpt = String(data.excerpt ?? "");
    const image = data.image ? String(data.image) : null;
    const category = String(data.category ?? "saude-emocional");
    const published = Boolean(data.published ?? false);
    const body = content.trim();

    await sql`
      INSERT INTO posts (slug, title, date, excerpt, image, category, published, content, updated_at)
      VALUES (${slug}, ${title}, ${date}, ${excerpt}, ${image}, ${category}, ${published}, ${body}, NOW())
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
    upserted += 1;
    console.log(`✓ ${slug}`);
  }

  console.log(`\nTabela pronta. ${upserted} artigo(s) sincronizado(s) do Markdown.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
