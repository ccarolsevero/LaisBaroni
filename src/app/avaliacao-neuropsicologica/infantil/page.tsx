import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconArrow } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica Infantil",
  description:
    "Quando uma dificuldade começa a chamar atenção, entender o que está por trás dela pode fazer toda a diferença.",
};

const aspectos = [
  "Atenção",
  "Memória",
  "Aprendizagem",
  "Linguagem",
  "Funções executivas",
  "Raciocínio e outras funções cognitivas",
];

const etapas = [
  {
    title: "Conversa com os responsáveis",
    text: "O processo começa pela queixa e pela história da criança.",
  },
  {
    title: "Avaliação",
    text: "São utilizados procedimentos e instrumentos adequados à idade e à necessidade de cada caso.",
  },
  {
    title: "Devolutiva",
    text: "Os responsáveis recebem os resultados e as orientações relacionadas à avaliação.",
  },
];

const faqs = [
  {
    question:
      "Preciso ter um diagnóstico ou encaminhamento para procurar a avaliação?",
    answer:
      "Não necessariamente. A própria existência de dificuldades ou dúvidas pode ser o motivo para buscar uma avaliação.",
  },
  {
    question: "A avaliação serve para investigar TDAH e Autismo?",
    answer:
      "Essas podem estar entre as hipóteses investigadas quando houver indicação, mas a avaliação não parte da obrigação de confirmar um diagnóstico.",
  },
  {
    question: "A escola participa do processo?",
    answer:
      "Informações do contexto escolar podem ser relevantes para a compreensão do caso. A necessidade e a forma de obtê-las dependem de cada avaliação.",
  },
  {
    question: "Meu filho vai apenas fazer testes?",
    answer:
      "Não. Os instrumentos são parte do processo. A avaliação considera também a história, a queixa e outras informações relevantes.",
  },
];

export default function AvaliacaoInfantilPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação neuropsicológica infantil"
        title="Quando uma dificuldade começa a chamar atenção, entender o que está por trás dela pode fazer toda a diferença"
        description="Dificuldades na aprendizagem, atenção, comportamento ou desenvolvimento podem gerar dúvidas. A avaliação ajuda a compreender o que pode estar acontecendo."
        image={photos.infantil}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="O que leva uma família a buscar uma avaliação?"
            title="Às vezes, a dúvida começa com uma frase simples: “Por que isso está sendo tão difícil para ele?”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A escola percebe uma dificuldade. A criança não acompanha algumas
              atividades. Manter a atenção exige um esforço enorme. Ou alguns
              comportamentos começam a gerar dúvidas.
            </p>
            <p>
              Esses sinais, sozinhos, não definem um diagnóstico. Mas podem indicar
              que vale compreender melhor o que está acontecendo.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que a avaliação pode investigar?"
            title="Não é apenas sobre descobrir uma dificuldade. É sobre compreender como aquela criança funciona"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aspectos.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Essas informações são analisadas junto à história de desenvolvimento,
            contexto e queixa que motivou a avaliação.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Meu filho tem TDAH? Autismo? É uma dificuldade de aprendizagem?”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              É comum a família chegar com uma suspeita levantada pela escola ou
              por outro profissional. A avaliação ajuda a investigar as diferentes
              possibilidades e compreender o funcionamento da criança antes de
              chegar a conclusões.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/avaliacao-neuropsicologica/tdah"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-mid"
            >
              Saiba mais sobre avaliação para TDAH
              <IconArrow />
            </Link>
            <Link
              href="/avaliacao-neuropsicologica/autismo"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-mid"
            >
              Saiba mais sobre avaliação para Autismo
              <IconArrow />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Como funciona a avaliação neuropsicológica infantil?"
            title="A criança não chega para “passar em uma prova”"
          />
          <div className="mt-12 grid items-stretch gap-3 md:grid-cols-3">
            {etapas.map((etapa, index) => (
              <article key={etapa.title} className="flex h-full flex-col rounded-2xl bg-mist p-7">
                <p className="font-display text-3xl text-mid">0{index + 1}</p>
                <h3 className="font-display mt-4 text-xl font-medium text-ink">
                  {etapa.title}
                </h3>
                <p className="mt-3 leading-relaxed hero-copy">{etapa.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir a avaliação?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica para compreender cada caso com cuidado e
            profundidade.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Formação em Neuropsicologia e Psicopatologia no IPq-USP,
              TCC e Terapia do Esquema no CETCC, e Reabilitação Cognitiva no INESP.
              Também desenvolvo pesquisa de mestrado em Psicologia na USP.
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
        title="Se alguma coisa no desenvolvimento, na aprendizagem ou no comportamento do seu filho está gerando dúvidas, vale compreender melhor antes de tirar conclusões"
        description=""
      />
    </>
  );
}
