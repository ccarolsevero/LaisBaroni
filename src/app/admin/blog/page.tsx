import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getCategoryLabel } from "@/lib/blog";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Admin · Blog",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const posts = await getAllPosts({ includeDrafts: true });

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-mid uppercase">
            Painel
          </p>
          <h1 className="font-display mt-2 text-4xl text-ink">Artigos</h1>
        </div>
        <Link
          href="/admin/posts/novo"
          className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-white transition hover:bg-mid"
        >
          Novo artigo
        </Link>
      </div>

      <div className="mt-10 divide-y divide-mist rounded-2xl bg-white px-6">
        {posts.length === 0 ? (
          <p className="py-8 text-mid">Nenhum artigo ainda.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-2xl text-ink">{post.title}</p>
                <p className="mt-1 text-sm text-mid">
                  {post.date} · {getCategoryLabel(post.category)} ·{" "}
                  {post.published ? "Publicado" : "Rascunho"} · /{post.slug}
                </p>
              </div>
              <div className="flex gap-4">
                {post.published ? (
                  <Link href={`/blog/${post.slug}`} className="text-sm text-mid hover:text-ink">
                    Ver
                  </Link>
                ) : null}
                <Link
                  href={`/admin/posts/${post.slug}`}
                  className="text-sm font-medium text-ink hover:text-mid"
                >
                  Editar
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
