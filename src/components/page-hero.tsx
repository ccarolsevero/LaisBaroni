import Image from "next/image";
import { whatsappUrl } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Container, Pill } from "./ui";
import { IconWhatsApp } from "./icons";

export function PageHero({
  eyebrow,
  title,
  description,
  extra,
  note,
  pills,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  extra?: string;
  note?: string;
  pills?: string[];
  image?: {
    src: string;
    alt: string;
    className?: string;
    unoptimized?: boolean;
  };
}) {
  const cta = (
    <ButtonLink href={whatsappUrl()} variant={image ? "peach" : "primary"} external>
      <IconWhatsApp />
      Fale comigo pelo WhatsApp
    </ButtonLink>
  );

  const copy = (
    <>
      <span className="inline-flex rounded-full bg-peach px-3.5 py-1.5 text-[12px] font-medium tracking-[0.08em] text-ink uppercase">
        {eyebrow}
      </span>
      <h1 className="font-display mt-5 text-[2rem] leading-[1.18] font-medium break-words lg:text-balance sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-white/90 sm:text-base">
        {description}
      </p>
      {extra ? (
        <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:text-base">
          {extra}
        </p>
      ) : null}
      {note ? (
        <p className="mt-5 inline-flex rounded-full bg-peach px-4 py-2 text-sm text-ink">
          {note}
        </p>
      ) : null}
      {pills?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-peach px-3.5 py-1.5 text-[12px] leading-snug text-ink"
            >
              {pill}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-10">{cta}</div>
    </>
  );

  if (image) {
    return (
      <section className="relative bg-ink lg:min-h-[76vh]">
        <div className="relative aspect-[4/3] w-full overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={95}
            unoptimized={image.unoptimized}
            className={
              image.className ??
              "object-cover object-center lg:object-[72%_center]"
            }
            sizes="100vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink/90 via-ink/55 to-ink/15 lg:block" />
        <Container className="relative py-10 lg:flex lg:min-h-[76vh] lg:flex-col lg:justify-center lg:py-20">
          <div className="max-w-xl text-white lg:max-w-2xl">{copy}</div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-soft/45 lg:hidden" />
      <div className="pointer-events-none absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-peach/60 lg:hidden" />
      <Container className="relative py-14 sm:py-16">
        <Pill>{eyebrow}</Pill>
        <h1 className="font-display mt-5 max-w-3xl text-[2rem] leading-[1.18] font-medium text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="hero-copy relative mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base">
          {description}
        </p>
        {extra ? (
          <p className="hero-copy relative mt-3 max-w-2xl text-[15px] leading-relaxed sm:text-base">
            {extra}
          </p>
        ) : null}
        {note ? (
          <p className="mt-5 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm text-ink">
            {note}
          </p>
        ) : null}
        {pills?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/80 px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-ink"
              >
                {pill}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-10">{cta}</div>
      </Container>
    </section>
  );
}
