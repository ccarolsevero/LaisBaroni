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
  if (image) {
    return (
      <section className="relative min-h-[70vh] overflow-hidden bg-ink lg:min-h-[78vh]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-[center_20%] sm:object-[70%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20 sm:via-ink/50 sm:to-ink/10" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end py-14 lg:min-h-[78vh] lg:justify-center lg:py-20">
          <div className="max-w-2xl text-white">
            <Pill className="bg-white/15 text-white">{eyebrow}</Pill>
            <h1 className="font-display mt-5 text-[2rem] leading-[1.18] font-medium text-balance sm:text-5xl">
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
              <p className="mt-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm text-white">
                {note}
              </p>
            ) : null}
            {pills?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primary ? (
                <ButtonLink href={primary.href} variant="peach" external={primary.external}>
                  {primary.label}
                </ButtonLink>
              ) : null}
              {secondary ? (
                <ButtonLink
                  href={secondary.href}
                  variant="ghost"
                  external={secondary.external}
                  className="ring-white/40"
                >
                  <IconWhatsApp />
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
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
      </Container>
    </section>
  );
}
