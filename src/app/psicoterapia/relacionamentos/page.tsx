import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Psicoterapia para Relacionamentos e Padrões Emocionais",
  description:
    "As pessoas mudam. Mas por que algumas histórias parecem sempre terminar do mesmo jeito?",
};

const quotes = [
  "Eu sei que essa relação me faz mal, mas não consigo sair.",
  "Sempre acabo cedendo para não perder a pessoa.",
  "Parece que eu preciso ser escolhido para me sentir suficiente.",
  "Tenho dificuldade para confiar e acabo me afastando.",
  "Se eu colocar limites, tenho medo de decepcionar.",
];

const temas = [
  "Dificuldade para estabelecer limites",
  "Dependência emocional",
  "Medo de abandono ou rejeição",
  "Necessidade excessiva de aprovação",
  "Autocobrança e dificuldade de priorizar as próprias necessidades",
  "Dificuldade para confiar ou se permitir criar vínculos",
];

const faqs = [
  {
    question: "Essa psicoterapia é apenas para quem está em um relacionamento?",
    answer:
      "Não. Questões relacionais também podem aparecer em vínculos familiares, amizades, relações profissionais ou na dificuldade de construir e manter relações.",
  },
  {
    question: "Dependência emocional pode ser trabalhada na psicoterapia?",
    answer:
      "Questões relacionadas à dependência emocional, limites, medo de abandono e outras dificuldades nos vínculos podem fazer parte do processo terapêutico.",
  },
  {
    question: "Preciso terminar meu relacionamento para começar a terapia?",
    answer:
      "Não. A psicoterapia não parte de uma decisão previamente definida sobre permanecer ou sair de uma relação. O espaço é para compreender sua experiência, necessidades e escolhas.",
  },
  {
    question: "É terapia de casal?",
    answer:
      "Não. Esta página se refere à psicoterapia individual voltada também à compreensão de questões relacionais.",
  },
  {
    question: "O atendimento pode ser online?",
    answer: "Sim. Há atendimento presencial e online.",
  },
];

export default function PsicoterapiaRelacionamentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Relacionamentos e padrões emocionais"
        title="As pessoas mudam. Mas por que algumas histórias parecem sempre terminar do mesmo jeito?"
        description="Dificuldade para colocar limites, medo de perder o outro, necessidade de aprovação ou relações que parecem repetir a mesma história podem gerar sofrimento. A psicoterapia ajuda a compreender o que sustenta esses padrões."
        image={photos.psicoterapia}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Quando o relacionamento muda, mas o padrão continua"
            title="Talvez não seja apenas sobre escolher “a pessoa errada”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Você muda de relacionamento, mas algumas sensações permanecem:
              dificuldade para dizer não, medo de abandono, necessidade de
              aprovação ou o hábito de se afastar quando alguém se aproxima.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Repetições"
            title="Algumas repetições começam a ficar familiares"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {quotes.map((quote, index) => (
              <blockquote
                key={quote}
                className={`rounded-2xl p-8 font-display text-[1.5rem] leading-snug font-medium ${
                  index === quotes.length - 1 ? "sm:col-span-2" : ""
                } ${index % 2 === 0 ? "bg-ink text-white" : "bg-soft text-ink"}`}
              >
                “{quote}”
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Terapia do Esquema e relacionamentos"
            title="Alguns padrões começam muito antes do relacionamento em que você está hoje"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Ao longo da vida, construímos formas de compreender a nós mesmos, aos
              outros e às relações. A Terapia do Esquema ajuda a identificar
              padrões, necessidades e formas de enfrentamento que continuam
              influenciando os vínculos.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading title="O que pode ser trabalhado na psicoterapia?" />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {temas.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a psicoterapia?"
            title="O objetivo não é ensinar você a “escolher melhor”. É compreender como você participa das relações que constrói"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo parte da sua história e das questões que hoje geram
              sofrimento ou dúvidas nas relações. O trabalho é orientado
              principalmente pela Terapia do Esquema e pela TCC.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir seu processo?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica para compreender relações, padrões e necessidades
            com profundidade.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Formação em Neuropsicologia e Psicopatologia no IPq-USP,
              TCC e Terapia do Esquema no CETCC, e Reabilitação Cognitiva no INESP.
              A ACT integra meus estudos clínicos.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading title="Dúvidas frequentes" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <ContactBand
        title="Talvez você já tenha percebido o que se repete. Agora pode ser hora de compreender por quê"
        description=""
      />
    </>
  );
}
