import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import {
  IconArrow,
  IconBrain,
  IconChat,
  IconGraduate,
} from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Laís",
  description:
    "Quase duas décadas de clínica ensinam que compreender uma pessoa exige mais do que encontrar um nome para o que ela sente.",
};

const formacao = [
  "Psicóloga desde 2008",
  "Mestre pela Universidade de São Paulo — USP",
  "Formação em Neuropsicologia pela USP",
  "Formação em Terapia Cognitivo-Comportamental — TCC",
  "Formação em Terapia do Esquema",
  "Formação em Psicopatologia",
  site.crp,
];

const praticas = [
  {
    href: "/avaliacao-neuropsicologica",
    icon: IconBrain,
    tone: "bg-soft text-ink",
    title: "Avaliação Neuropsicológica",
    text: "Investigar com cuidado para compreender o funcionamento cognitivo, emocional e comportamental para além de resultados isolados.",
    cta: "Conheça a Avaliação Neuropsicológica",
  },
  {
    href: "/psicoterapia",
    icon: IconChat,
    tone: "bg-ink text-white",
    title: "Psicoterapia",
    text: "Compreender emoções, experiências e padrões que influenciam a maneira como cada pessoa se relaciona consigo, com os outros e com aquilo que vive.",
    cta: "Conheça a Psicoterapia",
  },
  {
    href: "/supervisao-clinica",
    icon: IconGraduate,
    tone: "bg-mid text-white",
    title: "Supervisão Clínica",
    text: "Compartilhar experiência e conhecimento para ampliar o raciocínio clínico e a compreensão de casos.",
    cta: "Conheça a Supervisão",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Laís Barone"
        title="Quase duas décadas de clínica ensinam que compreender uma pessoa exige mais do que encontrar um nome para o que ela sente."
        description="Sou Laís Barone, psicóloga e neuropsicóloga, com atuação desde 2008."
        extra="Minha trajetória foi construída entre clínica, estudo e diferentes formas de compreender o funcionamento humano — sempre com o compromisso de olhar para cada pessoa dentro da sua história e do seu contexto."
        pills={[
          "Mestre e Neuropsicóloga pela USP",
          "TCC • Terapia do Esquema • Psicopatologia",
        ]}
        primary={{ href: "/#atuacao", label: "Conheça minhas áreas de atuação" }}
        secondary={{
          href: whatsappUrl(),
          label: "Fale comigo pelo WhatsApp",
          external: true,
        }}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Minha trajetória"
            title="A experiência não trouxe respostas prontas. Trouxe perguntas melhores."
          />
          <div className="space-y-5 text-[15px] leading-relaxed text-mid sm:text-base">
            <p>
              Desde 2008, minha trajetória profissional vem sendo construída a partir
              do encontro entre experiência clínica e formação acadêmica.
            </p>
            <p>
              Sou Mestre pela Universidade de São Paulo (USP) e tenho formação em
              Neuropsicologia pela USP, além de formação em Terapia
              Cognitivo-Comportamental (TCC), Terapia do Esquema e Psicopatologia.
            </p>
            <p>
              Cada uma dessas áreas ampliou meu olhar sobre aquilo que encontro na
              prática: aspectos cognitivos, emocionais, comportamentais e relacionais
              que não podem ser compreendidos de forma isolada.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Formação e experiência"
            title="Conhecimento técnico importa. Saber integrá-lo à realidade de cada pessoa também."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {formacao.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-peach py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="A forma de trabalhar"
            title="Uma mesma dificuldade pode contar histórias completamente diferentes."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">
            <p>
              Ao longo dos anos, fui aprendendo a não olhar para uma queixa de forma
              isolada.
            </p>
            <p>
              Uma dificuldade de atenção não conta toda a história. Um diagnóstico
              não resume uma pessoa. E um padrão emocional não existe separado das
              experiências que ajudaram a construí-lo.
            </p>
            <p>
              Por isso, meu trabalho busca integrar conhecimento técnico, história,
              contexto e individualidade, seja em uma avaliação neuropsicológica, na
              psicoterapia ou na discussão de um caso em supervisão.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Na prática"
            title="Três formas de colocar esse olhar em prática"
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {praticas.map((item) => (
              <article
                key={item.href}
                className={`flex flex-col rounded-2xl p-8 ${item.tone}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-8 text-[1.85rem] leading-snug font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-85">
                  {item.text}
                </p>
                <ButtonLink
                  href={item.href}
                  variant={item.href === "/avaliacao-neuropsicologica" ? "secondary" : "ghost"}
                  className="mt-8 self-start"
                >
                  {item.cta}
                  <IconArrow />
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="O que orienta meu trabalho"
            title="Técnica para investigar. Experiência para interpretar. Escuta para compreender quem está por trás da queixa."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mid sm:text-base">
            <p>Não acredito em uma forma única de compreender pessoas diferentes.</p>
            <p>
              Meu trabalho é construído a partir das particularidades de cada caso,
              integrando minha experiência clínica às referências teóricas que
              fizeram parte da minha formação.
            </p>
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              Antes de procurar uma resposta, é preciso compreender bem a pergunta.
            </p>
          </div>
        </Container>
      </section>

      <ContactBand
        title="Se você chegou até aqui para conhecer quem estará do outro lado, agora conhece um pouco da trajetória que sustenta meu trabalho."
        description="Entre em contato para saber mais sobre avaliação neuropsicológica, psicoterapia individual ou supervisão clínica."
        primary={{ href: "/#atuacao", label: "Conheça minhas áreas de atuação" }}
      />
    </>
  );
}
