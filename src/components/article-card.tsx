import Link from "next/link";
import Image from "next/image";
import { getCategory, getCategoryLabel } from "@/lib/blog";
import { mediaUrl } from "@/lib/media";
import type { Post } from "@/lib/posts";
import { IconArrow } from "./icons";

const CARD_EXCERPT_LENGTH = 110;

function cardExcerpt(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= CARD_EXCERPT_LENGTH) return clean;
  const slice = clean.slice(0, CARD_EXCERPT_LENGTH);
  const lastSpace = slice.lastIndexOf(" ");
  const clipped = slice.slice(0, lastSpace > 70 ? lastSpace : CARD_EXCERPT_LENGTH).trim();
  return `${clipped}…`;
}

export function ArticleCard({ post }: { post: Post }) {
  const category = getCategoryLabel(post.category);
  const tone = getCategory(post.category)?.tone ?? "bg-mist text-ink";
  const image = mediaUrl(post.image);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
      <div className={`relative h-44 ${tone}`}>
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            unoptimized
          />
        ) : (
          <span className="absolute inset-0 opacity-20">
            <span className="absolute top-8 right-8 h-24 w-24 rounded-full border border-current" />
            <span className="absolute bottom-6 left-8 h-16 w-16 rounded-full border border-current" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-ink uppercase">
          {category}
        </p>
        <h3 className="font-display mt-3 line-clamp-2 min-h-[2.5em] text-[1.45rem] leading-snug font-medium text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-mid">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 min-h-[2.625rem] text-sm leading-relaxed hero-copy">
          {cardExcerpt(post.excerpt)}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto pt-5 inline-flex items-center gap-2 text-sm text-ink"
        >
          Leia mais
          <IconArrow />
        </Link>
      </div>
    </article>
  );
}
