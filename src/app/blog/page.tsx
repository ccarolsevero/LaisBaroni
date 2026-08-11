import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { IconArrow } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { categories } from "@/lib/blog";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdos sobre Neuropsicologia, saúde emocional, relações e padrões de comportamento, traduzindo temas complexos para uma linguagem mais próxima da vida real.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Psicologia para compreender além das respostas rápidas."
        description="Conteúdos sobre Neuropsicologia, saúde emocional, relações e padrões de comportamento, traduzindo temas complexos para uma linguagem mais próxima da vida real."
      />

      <section className="bg-base py-16 sm:py-20">
        <Container>
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-mid uppercase">
            Categorias
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.slug}
                className={`flex flex-col rounded-2xl p-8 ${category.tone}`}
              >
                <h2 className="font-display text-[1.85rem] leading-snug font-medium">
                  {category.label}
                </h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-85">
                  {category.description}
                </p>
                <Link
                  href={`/blog/categoria/${category.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm"
                >
                  Ver conteúdos
                  <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-[2.15rem] font-medium">Conteúdos mais recentes</h2>
          {posts.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-mid">Em breve, novos conteúdos.</p>
          )}
        </Container>
      </section>
    </>
  );
}
