import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { EditorialGrid } from "@/components/editorial-grid";
import {
  IconArrow,
  IconBrain,
  IconChat,
  IconGraduate,
  IconWhatsApp,
} from "@/components/icons";
import { LineMarks } from "@/components/illustrations";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

const areas = [
  {
    href: "/avaliacao-neuropsicologica",
    icon: IconBrain,
    tone: "bg-soft text-ink",
    pill: "Avaliação",
    title: "Avaliação Neuropsicológica",
    lead: "Quando existem dúvidas, investigar com cuidado faz diferença.",
    text: "Compreende o funcionamento cognitivo, emocional e comportamental além de resultados isolados.",
    cta: "Conheça a Avaliação Neuropsicológica",
  },
  {
    href: "/psicoterapia",
    icon: IconChat,
    tone: "bg-ink text-white",
    pill: "Psicoterapia",
    title: "Psicoterapia Individual",
    lead: "Entender o que acontece nem sempre é suficiente para deixar de repetir.",
    text: "Olhamos para emoções, relações, necessidades e padrões que influenciam escolhas e vínculos no presente.",
    cta: "Conheça a Psicoterapia",
  },
  {
    href: "/supervisao-clinica",
    icon: IconGraduate,
    tone: "bg-mid text-white",
    pill: "Supervisão",
    title: "Supervisão Clínica",
    lead: "A prática clínica também se constrói quando aprendemos a olhar melhor para cada caso.",
    text: "Espaço para discutir casos, ampliar hipóteses e aprofundar o raciocínio clínico.",
    cta: "Conheça a Supervisão Clínica",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink lg:min-h-[88vh]">
        <Image
          src={photos.heroHome.src}
          alt={photos.heroHome.alt}
          fill
          priority
          quality={95}
          className="object-cover object-[70%_top] sm:object-[72%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/15 sm:via-ink/45 sm:to-ink/10" />
        <Container className="relative flex min-h-[78vh] flex-col justify-end py-14 lg:min-h-[88vh] lg:justify-center lg:py-20">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-[2rem] leading-[1.15] font-medium text-balance sm:text-5xl">
              Avaliação neuropsicológica e psicoterapia para compreender além do
              que aparece à primeira vista.
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-white/90 sm:text-base">
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação
              profissional e clínica desde 2009. Meu trabalho une experiência
              clínica, conhecimento técnico e um olhar individualizado para
              compreender cada pessoa em sua história e contexto.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] tracking-[0.08em] text-white uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/80">
              {site.services.join(" • ")}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#atuacao" variant="peach">
                Conheça meu trabalho
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl()}
                variant="ghost"
                external
                className="ring-white/40"
              >
                <IconWhatsApp />
                Fale comigo pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="atuacao" className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Áreas de atuação"
            title="Diferentes caminhos para diferentes necessidades."
            description="Meu trabalho acontece em três frentes, cada uma com objetivos e processos próprios."
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.href}
                className={`flex flex-col rounded-2xl p-8 ${area.tone}`}
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
                <p className="mt-4 text-[15px] leading-relaxed opacity-85">{area.lead}</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-80">{area.text}</p>
                <ButtonLink
                  href={area.href}
                  variant={area.href === "/psicoterapia" || area.href === "/supervisao-clinica" ? "ghost" : "secondary"}
                  className="mt-8 self-start bg-white/15"
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
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Sobre Laís Baroni"
              title="Uma trajetória construída entre ciência, experiência clínica e um olhar que não se limita ao sintoma."
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

      <section className="bg-peach py-12 sm:py-16">
        <Container className="max-w-4xl">
          <SectionHeading
            align="center"
            eyebrow="Um pouco sobre a forma como trabalho"
            title="A mesma queixa pode contar histórias completamente diferentes."
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed hero-copy sm:text-base">
            Dificuldade de concentração, esquecimentos ou um comportamento isolado
            não contam a história inteira. Por isso, o trabalho começa por uma
            pergunta:
          </p>
          <blockquote className="mt-8 text-center">
            <LineMarks className="mx-auto mb-3 h-8 w-12 text-ink/40" />
            <p className="font-display text-3xl leading-snug font-medium text-ink sm:text-4xl">
              O que precisamos compreender melhor aqui?
            </p>
          </blockquote>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed hero-copy sm:text-base">
            É a partir dessa compreensão que conduzo avaliação, psicoterapia e
            supervisão clínica.
          </p>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Psicologia para quem quer compreender além das respostas rápidas."
            description="No blog, compartilho reflexões e conteúdos sobre Neuropsicologia, avaliação neuropsicológica, relações, padrões emocionais, psicopatologia e prática clínica, traduzindo assuntos complexos para uma linguagem mais próxima da vida real."
          />
          <div className="mt-12">
            <EditorialGrid />
          </div>
          <div className="mt-10">
            <ButtonLink href="/blog" variant="primary">
              Acesse o blog
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
