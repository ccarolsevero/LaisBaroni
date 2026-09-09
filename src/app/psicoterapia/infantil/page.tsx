import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconArrow } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Psicoterapia Infantil",
  description:
    "Quando seu filho ainda não consegue explicar o que está sentindo, algumas mudanças podem começar a falar por ele.",
};

const motivos = [
  "Medos e inseguranças",
  "Ansiedade e preocupações",
  "Mudanças de comportamento",
  "Conflitos e dificuldades nos relacionamentos",
  "Mudanças importantes na família ou na rotina",
];

const faqs = [
  {
    question: "Meu filho precisa ter um diagnóstico para fazer psicoterapia?",
    answer:
      "Não. A psicoterapia pode ser procurada a partir de dificuldades emocionais, comportamentais ou relacionais, mesmo sem um diagnóstico.",
  },
  {
    question: "Os pais participam da psicoterapia?",
    answer:
      "Os responsáveis podem participar em diferentes momentos, de acordo com a idade da criança e as necessidades do processo.",
  },
  {
    question:
      "Como saber se meu filho precisa de psicoterapia ou avaliação neuropsicológica?",
    answer:
      "São processos com objetivos diferentes. A psicoterapia é um acompanhamento terapêutico; a avaliação neuropsicológica tem caráter investigativo. A demanda inicial ajuda a compreender qual caminho pode ser mais adequado.",
  },
  {
    question: "Psicoterapia infantil é igual à psicoterapia de adultos?",
    answer:
      "Não. O trabalho precisa considerar o desenvolvimento e as formas de comunicação próprias da infância.",
  },
];

export default function PsicoterapiaInfantilPage() {
  return (
    <>
      <PageHero
        eyebrow="Psicoterapia infantil"
        title="Quando seu filho ainda não consegue explicar o que está sentindo, algumas mudanças podem começar a falar por ele"
        description="Mudanças no comportamento, medos ou dificuldades emocionais e relacionais podem gerar dúvidas nos responsáveis. A psicoterapia infantil ajuda a compreender e trabalhar o que a criança está vivendo."
        image={photos.infantil}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Quando procurar"
            title="Nem toda mudança significa que existe um problema. Mas algumas mudanças merecem ser compreendidas"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O primeiro passo não é encontrar um rótulo. É compreender o que ela
              pode estar vivendo.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Meu filho não fala sobre o que está acontecendo.”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Crianças nem sempre expressam o que sentem como os adultos.
              Dependendo da idade, emoções podem aparecer no comportamento, nas
              brincadeiras, nas relações ou em mudanças na rotina.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading title="O que pode levar os responsáveis a buscar psicoterapia?" />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {motivos.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl bg-ink p-8 text-white sm:p-10">
            <p className="text-[11px] tracking-[0.16em] text-peach uppercase">
              Psicoterapia infantil
            </p>
            <h2 className="font-display mt-4 text-3xl font-medium">
              Acompanhamento terapêutico
            </h2>
            <p className="mt-5 leading-relaxed text-mist">
              Acompanhamento de questões emocionais, comportamentais e relacionais.
            </p>
          </article>
          <article className="rounded-2xl bg-soft p-8 text-ink sm:p-10">
            <p className="text-[11px] tracking-[0.16em] uppercase opacity-70">
              Avaliação neuropsicológica
            </p>
            <h2 className="font-display mt-4 text-3xl font-medium">
              Processo de investigação
            </h2>
            <p className="mt-5 leading-relaxed opacity-85">
              Investigação de questões relacionadas ao funcionamento cognitivo,
              aprendizagem ou atenção.
            </p>
          </article>
        </Container>
        <Container>
          <ButtonLink
            href="/avaliacao-neuropsicologica/infantil"
            variant="primary"
            className="mt-8"
          >
            Conheça a Avaliação Neuropsicológica Infantil
            <IconArrow />
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a psicoterapia infantil?"
            title="Para compreender uma criança, também é preciso conhecer o contexto em que ela vive"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo considera a idade, o desenvolvimento e as necessidades da
              criança. Os responsáveis podem participar em diferentes momentos, de
              acordo com cada caso.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai acompanhar seu filho?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica para compreender cada criança com cuidado e
            profundidade.
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
        title="Seu filho não precisa saber explicar perfeitamente o que está acontecendo para que vocês possam começar a compreender"
        description=""
        modality="Atendimento presencial e online, conforme adequação ao atendimento."
      />
    </>
  );
}
