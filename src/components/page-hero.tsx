import Image from "next/image";
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
  primary,
  secondary,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  extra?: string;
  note?: string;
  pills?: string[];
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-soft/45 lg:hidden" />
      <div className="pointer-events-none absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-peach/60 lg:hidden" />
      <Container
        className={`relative py-14 sm:py-16 ${
          image ? "grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center" : ""
        }`}
      >
        <div>
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
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {primary ? (
              <ButtonLink href={primary.href} variant="primary" external={primary.external}>
                {primary.label}
              </ButtonLink>
            ) : null}
            {secondary ? (
              <ButtonLink href={secondary.href} variant="secondary" external={secondary.external}>
                <IconWhatsApp />
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        {image ? (
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-soft/30 lg:mx-0 lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
