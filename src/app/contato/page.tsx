import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { IconWhatsApp } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Para informações, dúvidas ou agendamentos, entre em contato pelo WhatsApp.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Para informações, dúvidas ou agendamentos, entre em contato pelo WhatsApp."
        image={photos.heroHome}
        primary={{
          href: whatsappUrl(),
          label: "Fale comigo pelo WhatsApp",
          external: true,
        }}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-3 lg:grid-cols-[0.9fr_1.2fr]">
          <aside className="rounded-2xl bg-ink p-8 text-white sm:p-10">
            <p className="font-display text-3xl font-medium">{site.name}</p>
            <p className="mt-2 text-mist">{site.role}</p>
            <p className="mt-1 text-sm tracking-[0.14em] text-peach uppercase">
              {site.crp}
            </p>
            <p className="mt-8 text-mist">{site.modality}</p>

            <ul className="mt-10 space-y-5 text-[15px] leading-relaxed">
              <li>
                <p className="text-[10px] tracking-[0.16em] text-peach uppercase">
                  Endereço
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block hover:text-peach"
                >
                  {site.address}
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-[0.16em] text-peach uppercase">
                  WhatsApp
                </p>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-peach">
                  {site.whatsapp.display}
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-[0.16em] text-peach uppercase">
                  E-mail
                </p>
                {site.email.includes("[") ? (
                  <p className="mt-1 text-mist">{site.email}</p>
                ) : (
                  <a href={`mailto:${site.email}`} className="mt-1 block hover:text-peach">
                    {site.email}
                  </a>
                )}
              </li>
            </ul>

            <ButtonLink href={whatsappUrl()} variant="peach" external className="mt-10">
              <IconWhatsApp />
              Fale comigo pelo WhatsApp
            </ButtonLink>
          </aside>

          <div className="min-h-[360px] overflow-hidden rounded-2xl bg-mist lg:min-h-full">
            <iframe
              title="Mapa do consultório"
              src={site.mapsEmbed}
              className="h-full min-h-[360px] w-full border-0 lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
