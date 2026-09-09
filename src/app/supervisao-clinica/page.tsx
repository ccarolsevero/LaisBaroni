import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supervisão Clínica",
  description:
    "Alguns casos não pedem uma resposta rápida. Pedem um olhar clínico mais aprofundado.",
};

const temas = [
  "Formulação de caso e raciocínio clínico",
  "Raciocínio transdiagnóstico e psicopatologia",
  "Relação terapêutica e respostas do terapeuta",
  "Manejo de impasses e tomada de decisão clínica",
  "Articulação entre teoria e prática",
  "Desenvolvimento de autonomia profissional",
];

const faqs = [
  {
    question: "Preciso ter muita experiência clínica para fazer supervisão?",
    answer:
      "Não necessariamente. Profissionais em diferentes momentos da trajetória podem buscar supervisão para desenvolver o raciocínio clínico e discutir casos.",
  },
  {
    question: "Posso levar um caso específico?",
    answer:
      "Sim. A discussão de casos e dos impasses que aparecem na prática faz parte da proposta da supervisão.",
  },
];

export default function SupervisaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Supervisão clínica"
        title="Alguns casos não pedem uma resposta rápida. Pedem um olhar clínico mais aprofundado"
        description="A supervisão clínica é um espaço para discutir casos, ampliar hipóteses e pensar intervenções, desenvolvendo raciocínio clínico e autonomia profissional."
        pills={[
          site.pills.supervision,
          "TCC • Terapia do Esquema • ACT • Psicopatologia • Neuropsicologia",
          site.pills.mestrado,
        ]}
        image={photos.supervisao}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Para quem é a supervisão?"
            title="Você não precisa estar “sem saber o que fazer” para levar um caso à supervisão"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A supervisão pode fazer sentido tanto diante de dúvidas e impasses
              em um caso quanto para profissionais que desejam aprofundar o
              raciocínio clínico e desenvolver maior segurança na prática.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser trabalhado na supervisão?"
            title="Às vezes, a dificuldade não está em conhecer a teoria. Está em saber o que fazer com ela diante daquela pessoa"
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {temas.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Qual é o olhar que orienta a supervisão?"
            title="Compreender o sintoma é importante. Compreender a pessoa que apresenta esse sintoma é ainda mais"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A supervisão integra diferentes perspectivas clínicas para ampliar a
              compreensão do caso, considerando sintomas, padrões, história,
              contexto e relação terapêutica.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir a supervisão?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica não elimina as perguntas. Ela muda a qualidade das
            perguntas que fazemos diante de um caso.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Atuo como professora e supervisora no curso de
              Neuropsicologia do CETCC; como supervisora clínica no INESP e no
              IPq-USP; e realizei supervisão de psicólogos clínicos angolanos em
              programa intensivo na Beneficência Portuguesa.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona?"
            title="Um espaço para levar casos reais e pensar a clínica com profundidade"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Os encontros partem dos casos e das questões trazidas pelo
              profissional, com espaço para discutir compreensão do caso,
              hipóteses, condução e intervenções.
            </p>
          </div>
          <ButtonLink
            href={whatsappUrl(
              "Olá, Laís. Gostaria de saber mais sobre a supervisão clínica.",
            )}
            variant="primary"
            external
            className="mt-8"
          >
            Quero saber sobre a supervisão
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading title="Dúvidas frequentes" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <ContactBand
        title="Quando um caso faz você pensar mais, ele também pode fazer sua clínica crescer"
        description=""
        modality=""
      />
    </>
  );
}
