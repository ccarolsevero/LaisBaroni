import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Psicoterapia para Autoconhecimento e Desenvolvimento Emocional",
  description:
    "Você não precisa estar em crise para querer se compreender melhor.",
};

const perguntas = [
  "Por que algumas situações mexem tanto comigo?",
  "Por que tenho tanta dificuldade para colocar limites?",
  "Por que faço determinadas escolhas repetidamente?",
  "Que padrões da minha história ainda influenciam quem sou hoje?",
];

const faqs = [
  {
    question: "Posso fazer terapia mesmo sem ter um problema específico?",
    answer:
      "Sim. O desejo de se conhecer melhor, compreender escolhas, emoções ou padrões também pode motivar a busca por psicoterapia.",
  },
  {
    question: "Preciso ter um objetivo definido antes de começar?",
    answer:
      "Não. As questões e os objetivos do processo podem ser construídos e compreendidos ao longo dos encontros.",
  },
  {
    question: "O atendimento pode ser online?",
    answer: "Sim. Há atendimento presencial e online.",
  },
];

export default function PsicoterapiaAutoconhecimentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Autoconhecimento e desenvolvimento emocional"
        title="Você não precisa estar em crise para querer se compreender melhor"
        description="Nem sempre é preciso estar em crise para buscar psicoterapia. O desejo de compreender melhor suas emoções, escolhas e padrões também pode ser um motivo para começar."
        image={photos.psicoterapia}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Terapia também é para quem quer se conhecer"
            title="“Minha vida está bem. Ainda assim, sinto que há coisas sobre mim que gostaria de entender melhor.”"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Nem toda busca por psicoterapia começa em sofrimento intenso. Às
              vezes, começa pela vontade de compreender melhor emoções, escolhas,
              necessidades e a forma como você reage.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser trabalhado na psicoterapia?"
            title="Algumas perguntas não surgem porque algo está errado. Surgem porque você começou a olhar para si com mais atenção"
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {perguntas.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-mist px-6 py-5 font-display text-xl font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como eu trabalho"
            title="Sua história não cabe em uma fórmula pronta"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Meu trabalho é orientado principalmente pela TCC e pela Terapia do
              Esquema, considerando pensamentos, emoções, necessidades, padrões e
              a história de cada pessoa.
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
            Experiência clínica para compreender diferentes histórias e
            necessidades.
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
        title="Talvez você não esteja procurando uma resposta. Talvez queira começar a fazer perguntas melhores sobre si"
        description=""
      />
    </>
  );
}
