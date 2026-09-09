import type { ComponentProps } from "react";
import Image from "next/image";
import { ArticleCard } from "@/components/article-card";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { HeroImage } from "@/components/page-hero";
import {
  IconArrow,
  IconBrain,
  IconChat,
  IconGraduate,
  IconWhatsApp,
} from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { getAllPosts } from "@/lib/posts";
import { site, whatsappUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

function HomeHeading(props: ComponentProps<typeof SectionHeading>) {
  return (
    <div className="text-left [&_h2]:break-words [&_h2]:[text-wrap:auto] lg:[&_h2]:[text-wrap:balance]">
      <SectionHeading {...props} />
    </div>
  );
}

const areas = [
  {
    href: "/avaliacao-neuropsicologica",
    icon: IconBrain,
    tone: "bg-soft text-ink",
    pill: "Avaliação",
    title: "Avaliação Neuropsicológica",
    text: "Compreende o funcionamento cognitivo, emocional e comportamental além de resultados isolados.",
    cta: "Conheça a Avaliação Neuropsicológica",
  },
  {
    href: "/psicoterapia",
    icon: IconChat,
    tone: "bg-ink text-white",
    pill: "Psicoterapia",
    title: "Psicoterapia Individual",
    text: "Olhamos para emoções, relações, necessidades e padrões que influenciam escolhas e vínculos no presente.",
    cta: "Conheça a Psicoterapia",
  },
  {
    href: "/supervisao-clinica",
    icon: IconGraduate,
    tone: "bg-mid text-white",
    pill: "Supervisão",
    title: "Supervisão Clínica",
    text: "Espaço para discutir casos, ampliar hipóteses e aprofundar o raciocínio clínico.",
    cta: "Conheça a Supervisão Clínica",
  },
];

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <section className="relative bg-ink lg:min-h-[88vh]">
        <HeroImage image={photos.heroHome} />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink/90 via-ink/45 to-ink/10 lg:block" />
        <Container className="relative py-10 lg:flex lg:min-h-[88vh] lg:flex-col lg:justify-center lg:py-20">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-[2rem] leading-[1.15] font-medium break-words lg:text-balance sm:text-5xl">
              Avaliação neuropsicológica e psicoterapia para compreender além do
              que aparece à primeira vista
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-white/90 sm:text-base">
              Psicóloga e neuropsicóloga com atuação clínica desde 2009, em São
              Paulo e online.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-peach px-3.5 py-1.5 text-[12px] leading-snug text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/80">
              {site.services.join(" • ")}
            </p>
            <div className="mt-10">
              <ButtonLink href={whatsappUrl()} variant="peach" external>
                <IconWhatsApp />
                Fale comigo pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="atuacao" className="bg-base py-12 sm:py-16">
        <Container className="text-left">
          <HomeHeading
            eyebrow="Áreas de atuação"
            title="Diferentes caminhos para diferentes necessidades"
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.href}
                className={`flex flex-col items-start text-left rounded-2xl p-8 ${area.tone}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
                  <area.icon className="h-6 w-6" />
                </span>
                <p className="mt-8 text-[10px] font-medium tracking-[0.16em] uppercase opacity-70">
                  {area.pill}
                </p>
                <h3 className="font-display mt-3 text-[1.85rem] leading-snug font-medium">
                  {area.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-80">{area.text}</p>
                <ButtonLink
                  href={area.href}
                  variant={area.href === "/psicoterapia" || area.href === "/supervisao-clinica" ? "ghost" : "secondary"}
                  className="mt-8 self-start justify-start text-left bg-white/15"
                >
                  {area.cta}
                  <IconArrow />
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-soft">
            <Image
              src={photos.homeSobre.src}
              alt={photos.homeSobre.alt}
              fill
              quality={90}
              className="object-contain object-center sm:object-cover sm:object-[center_15%]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div className="text-left">
            <HomeHeading
              eyebrow="Sobre Laís Baroni"
              title="Uma trajetória construída entre ciência, experiência clínica e um olhar que não se limita ao sintoma"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed hero-copy sm:text-base">
              <p>
                Sou psicóloga e neuropsicóloga, com atuação profissional e clínica
                desde 2009. Tenho formação em Neuropsicologia e Psicopatologia no
                IPq-USP, em TCC e Terapia do Esquema pelo CETCC, e em Reabilitação
                Cognitiva pelo INESP. Atuo também em supervisão clínica e docência.
              </p>
              <p>
                Meu trabalho une conhecimento técnico e experiência clínica sem
                perder de vista que uma mesma dificuldade pode ter significados
                diferentes de uma pessoa para outra.
              </p>
            </div>
            <ButtonLink href="/sobre" variant="primary" className="mt-8">
              Conheça minha trajetória
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container className="text-left">
          <HomeHeading
            eyebrow="Blog"
            title="Psicologia para quem quer compreender além das respostas rápidas"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/blog" variant="primary">
              Acesse o blog
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <div className="[&_h2]:break-words [&_h2]:[text-wrap:auto] lg:[&_h2]:[text-wrap:balance]">
        <ContactBand description="" />
      </div>
    </>
  );
}
