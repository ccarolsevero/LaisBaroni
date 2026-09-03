import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

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
  "Conflitos e padrões que se repetem nas relações",
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
        description="Relacionamentos podem revelar padrões que se repetem: dificuldade para colocar limites, medo de perder o outro, necessidade constante de aprovação ou a sensação de estar sempre vivendo versões parecidas da mesma história."
        extra="Na psicoterapia, podemos compreender o que sustenta essas repetições e como sua história influencia a maneira como você se relaciona hoje."
        pills={[
          site.pills.therapy,
          "TCC • Terapia do Esquema • Psicopatologia",
          site.pills.mestrado,
        ]}
        image={photos.psicoterapia}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Quando o relacionamento muda, mas o padrão continua"
            title="Talvez não seja apenas sobre escolher “a pessoa errada”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>Você muda de relacionamento, mas algumas sensações permanecem.</p>
            <p>
              Pode ser difícil dizer não. Você se responsabiliza demais pelo outro.
              Precisa constantemente de aprovação. Tem medo de ser abandonado ou
              acaba cedendo para evitar conflitos.
            </p>
            <p>
              Em outros casos, percebe que se afasta justamente quando alguém se
              aproxima.
            </p>
            <p>
              Quando uma situação se repete, pode valer a pena olhar não apenas para
              quem está do outro lado, mas para o padrão que se constrói na relação.
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
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>Essas experiências podem ter histórias muito diferentes.</p>
            <p>
              A psicoterapia permite compreender o que essas formas de se relacionar
              significam para você, sem reduzir sua história a um rótulo.
            </p>
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
              outros e às relações.
            </p>
            <p>
              A Terapia do Esquema ajuda a identificar padrões emocionais,
              necessidades e formas de enfrentamento que podem continuar
              influenciando os vínculos na vida adulta.
            </p>
            <p>Perceber o padrão é importante. Mas o trabalho não termina aí.</p>
            <p>
              A questão também é compreender por que ele continua fazendo sentido
              emocionalmente, mesmo quando racionalmente você sabe que gostaria de
              agir diferente.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser trabalhado na psicoterapia?"
            title="Dependendo da história e das necessidades de cada pessoa, podem aparecer questões relacionadas a:"
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {temas.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Não se trata de encaixar a pessoa em um padrão, mas de compreender como
            ele aparece e qual função teve, ou ainda tem, em sua história.
          </p>
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
              O processo começa pela sua história, pelas relações que fazem parte
              dela e pelas questões que estão trazendo sofrimento ou despertando
              dúvidas hoje.
            </p>
            <p>
              Meu trabalho é orientado principalmente pela Terapia do Esquema e pela
              Terapia Cognitivo-Comportamental (TCC), considerando as necessidades e
              particularidades de cada pessoa.
            </p>
            <p>Atendimento presencial e online.</p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir seu processo?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Quase duas décadas de clínica mostram que aquilo que se repete costuma
            ter uma história.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação profissional e clínica desde 2009.
            </p>
            <p>
              Tenho formação em Neuropsicologia e Psicopatologia no IPq-USP, em TCC
              e Terapia do Esquema pelo CETCC, e em Reabilitação Cognitiva pelo
              INESP. A ACT integra meus estudos e conhecimentos clínicos.
            </p>

            <p>
              Essa trajetória orienta um trabalho que busca compreender não apenas a
              relação atual, mas também os padrões emocionais, necessidades e
              experiências que atravessam a maneira como cada pessoa constrói seus
              vínculos.
            </p>
          </div>
          <p className="mt-6 text-sm tracking-wide text-peach">
            {site.credentialLines.therapy}
          </p>
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
        description="Se relacionamentos, limites ou padrões emocionais têm gerado sofrimento ou questionamentos, entre em contato para saber mais sobre a psicoterapia."
      />
    </>
  );
}
