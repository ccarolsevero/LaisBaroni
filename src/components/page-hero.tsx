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
}: {
  eyebrow: string;
  title: string;
  description: string;
  extra?: string;
  note?: string;
  pills?: string[];
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-soft/45" />
      <div className="pointer-events-none absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-peach/60" />
      <Container className="relative py-20 sm:py-24">
        <Pill>{eyebrow}</Pill>
        <h1 className="font-display mt-6 max-w-4xl text-[2.4rem] leading-[1.15] font-medium text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-mid sm:text-lg">
          {description}
        </p>
        {extra ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mid sm:text-lg">
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
