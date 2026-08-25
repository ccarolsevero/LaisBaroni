import Link from "next/link";
import { getCategory, getCategoryLabel } from "@/lib/blog";
import type { Post } from "@/lib/posts";
import { IconArrow } from "./icons";

export function ArticleCard({ post }: { post: Post }) {
  const category = getCategoryLabel(post.category);
  const tone = getCategory(post.category)?.tone ?? "bg-mist text-ink";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white">
      <div className={`relative h-44 ${tone}`}>
        <span className="absolute inset-0 opacity-20">
          <span className="absolute top-8 right-8 h-24 w-24 rounded-full border border-current" />
          <span className="absolute bottom-6 left-8 h-16 w-16 rounded-full border border-current" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-ink uppercase">
          {category}
        </p>
        <h3 className="font-display mt-3 text-[1.45rem] leading-snug font-medium text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-mid">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm text-ink"
        >
          Leia mais
          <IconArrow />
        </Link>
      </div>
    </article>
  );
}
