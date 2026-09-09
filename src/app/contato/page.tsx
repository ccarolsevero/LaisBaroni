import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Para informações ou agendamentos, entre em contato pelo WhatsApp.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Para informações ou agendamentos, entre em contato pelo WhatsApp."
        image={photos.heroHome}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <ul className="max-w-3xl space-y-8 text-[15px] leading-relaxed text-ink">
            <li>
              <p className="text-[10px] tracking-[0.16em] text-mid uppercase">
                Endereço
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block hover:text-mid"
              >
                {site.address}
              </a>
            </li>
            <li>
              <p className="text-[10px] tracking-[0.16em] text-mid uppercase">
                WhatsApp
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block hover:text-mid"
              >
                {site.whatsapp.display}
              </a>
            </li>
            <li>
              <p className="text-[10px] tracking-[0.16em] text-mid uppercase">
                E-mail
              </p>
              <a href={`mailto:${site.email}`} className="mt-1 block hover:text-mid">
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-10 min-h-[360px] overflow-hidden rounded-2xl bg-mist lg:min-h-[520px]">
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
