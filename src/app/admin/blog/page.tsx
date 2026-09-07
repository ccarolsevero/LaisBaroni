import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { categories } from "@/lib/blog";
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
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mid">
            Cada texto entra em um dos quatro conjuntos do blog. Escolha a
            categoria para criar no formato certo.
          </p>
        </div>
        <Link
          href="/admin/posts/novo"
          className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-white transition hover:bg-mid"
        >
          Novo artigo
        </Link>
      </div>

      <div className="mt-10 space-y-8">
        {categories.map((category) => {
          const items = posts.filter((post) => post.category === category.slug);
          return (
            <section key={category.slug} className="rounded-2xl bg-white px-6 py-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl text-ink">{category.label}</h2>
                  <p className="mt-1 text-sm text-mid">{category.description}</p>
                </div>
                <Link
                  href={`/admin/posts/novo?categoria=${category.slug}`}
                  className="text-sm font-medium text-ink hover:text-mid"
                >
                  Novo neste conjunto
                </Link>
              </div>

              {items.length === 0 ? (
                <p className="mt-6 text-sm text-mid">Nenhum artigo neste conjunto ainda.</p>
              ) : (
                <div className="mt-4 divide-y divide-mist">
                  {items.map((post) => (
                    <div
                      key={post.slug}
                      className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-display text-xl text-ink">{post.title}</p>
                        <p className="mt-1 text-sm text-mid">
                          {post.date} · {post.published ? "Publicado" : "Rascunho"} · /
                          {post.slug}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        {post.published ? (
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm text-mid hover:text-ink"
                          >
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
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}
