import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { getCategoryLabel } from "@/lib/blog";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/posts";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getAllPosts({ includeDrafts: true });
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || !post.published) return { title: "Artigo" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || !post.published) notFound();

  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className="bg-base">
      <Container className="max-w-3xl py-12 sm:py-16">
        <Link href="/blog" className="text-sm text-mid hover:text-ink">
          ← Voltar ao blog
        </Link>
        <p className="mt-8 text-[10px] font-medium tracking-[0.16em] text-mid uppercase">
          {getCategoryLabel(post.category)}
        </p>
        <time className="mt-3 block text-sm text-mid">
          {new Date(`${post.date}T00:00:00`).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
        <h1 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-8 text-xl leading-relaxed hero-copy">{post.excerpt}</p>
      </Container>

      {post.image ? (
        <div className="relative mx-auto h-[42vh] min-h-[240px] w-full max-w-5xl overflow-hidden px-5 sm:px-8">
          <div className="relative h-full overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              unoptimized
            />
          </div>
        </div>
      ) : null}

      <Container className="max-w-3xl py-14 sm:py-20">
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <Link
          href={`/blog/categoria/${post.category}`}
          className="mt-12 inline-block text-sm text-mid hover:text-ink"
        >
          ← Ver mais em {getCategoryLabel(post.category)}
        </Link>
      </Container>
    </article>
  );
}
