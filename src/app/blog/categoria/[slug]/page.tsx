import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { categories, getCategory } from "@/lib/blog";
import { photos } from "@/lib/photos";
import { getPostsByCategory } from "@/lib/posts";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/categoria/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.label, description: category.description };
}

export default async function BlogCategoryPage({
  params,
}: PageProps<"/blog/categoria/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={category.label}
        description={category.description}
        image={photos.consultorio}
        primary={{ href: "/blog", label: "Ver todos os conteúdos" }}
      />
      <section className="bg-white py-12 sm:py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-mid">Em breve, novos conteúdos nesta categoria.</p>
          )}
          <Link href="/blog" className="mt-10 inline-block text-sm text-mid hover:text-ink">
            ← Voltar ao blog
          </Link>
        </Container>
      </section>
    </>
  );
}
