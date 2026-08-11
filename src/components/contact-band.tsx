import { site, whatsappUrl } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Container } from "./ui";
import { IconWhatsApp } from "./icons";

export function ContactBand({
  title = "Se você está buscando compreender algo melhor, podemos começar por uma conversa.",
  description = "Entre em contato para saber mais sobre avaliação neuropsicológica, psicoterapia individual ou supervisão clínica.",
  modality = site.modality,
  primary,
}: {
  title?: string;
  description?: string;
  modality?: string;
  primary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="bg-ink text-white">
      <Container className="grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Contato
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[1.15] font-medium text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">{description}</p>
          {modality ? <p className="mt-4 text-soft">{modality}</p> : null}
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          {primary ? (
            <ButtonLink href={primary.href} variant="peach" external={primary.external}>
              {primary.label}
            </ButtonLink>
          ) : null}
          <ButtonLink href={whatsappUrl()} variant="ghost" external>
            <IconWhatsApp />
            Fale comigo pelo WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
