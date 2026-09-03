import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { LineMarks } from "@/components/illustrations";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica Infantil",
  description:
    "Quando uma dificuldade começa a chamar atenção, entender o que está por trás dela pode fazer toda a diferença.",
};

const infoMessage =
  "Olá, Laís. Gostaria de informações sobre a avaliação neuropsicológica infantil.";

const aspectos = [
  "Atenção",
  "Memória",
  "Aprendizagem",
  "Linguagem",
  "Funções executivas",
  "Raciocínio e outras funções cognitivas",
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
        title="Quando uma dificuldade começa a chamar atenção, entender o que está por trás dela pode fazer toda a diferença."
        description="Dificuldades na aprendizagem, atenção, comportamento ou desenvolvimento podem gerar muitas dúvidas para a família."
        extra="A avaliação neuropsicológica infantil ajuda a investigar como a criança funciona em diferentes aspectos, considerando seus recursos, dificuldades, história e contexto."
        pills={[
          ...site.credentials,
        ]}
        image={photos.infantil}
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre a avaliação infantil",
          external: true,
        }}
        secondary={{
          href: whatsappUrl(),
          label: "Fale comigo pelo WhatsApp",
          external: true,
        }}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="O que leva uma família a buscar uma avaliação?"
            title="Às vezes, a dúvida começa com uma frase simples: “Por que isso está sendo tão difícil para ele?”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A escola percebe uma dificuldade. A criança não consegue acompanhar
              algumas atividades como esperado. Manter a atenção parece exigir um
              esforço enorme. Aprender determinados conteúdos se torna muito difícil.
              Ou alguns comportamentos começam a gerar dúvidas na família.
            </p>
            <p>Esses sinais, sozinhos, não definem um diagnóstico.</p>
            <p>Mas podem indicar que vale compreender melhor o que está acontecendo.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que a avaliação pode investigar?"
            title="Não é apenas sobre descobrir uma dificuldade. É sobre compreender como aquela criança funciona."
          />
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            De acordo com a necessidade de cada caso, a avaliação pode investigar
            aspectos como:
          </p>
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
              A avaliação não deveria começar pela resposta. Deveria começar pela
              investigação.
            </p>
            <p>
              É comum que a família chegue à avaliação já com uma hipótese,
              levantada pela escola, por outro profissional ou pelas próprias
              observações.
            </p>
            <p>Mas comportamentos parecidos podem ter explicações diferentes.</p>
            <p>
              Por isso, o objetivo da avaliação não é simplesmente confirmar uma
              suspeita. É reunir e interpretar informações que ajudem a compreender o
              funcionamento daquela criança e as hipóteses que precisam ser
              consideradas.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a avaliação neuropsicológica infantil?"
            title="A criança não chega para “passar em uma prova”."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo começa pela compreensão da queixa e da história da criança,
              incluindo informações relevantes sobre seu desenvolvimento e cotidiano.
            </p>
            <p>
              A partir disso, são utilizados procedimentos e instrumentos adequados à
              idade e ao objetivo da investigação.
            </p>
            <p>
              Os dados obtidos são analisados em conjunto e, ao final, é realizada
              uma devolutiva com os responsáveis, com a apresentação dos resultados e
              possíveis orientações.
            </p>
          </div>
          <blockquote className="mt-12">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              Um resultado isolado não conta a história de uma criança.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir a avaliação?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência para investigar com técnica. Cuidado para não reduzir uma
            criança a um resultado.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação profissional
              e clínica desde 2009.
            </p>
            <p>
              Tenho formação em Neuropsicologia e Psicopatologia no IPq-USP, em TCC
              e Terapia do Esquema pelo CETCC, e em Reabilitação Cognitiva pelo
              INESP. Também desenvolvo Pesquisa de Mestrado em Psicologia no
              Instituto de Psicologia da USP (IP-USP), com ingresso em 2019.
            </p>
            <p>
              Minha experiência clínica e acadêmica orienta uma avaliação que
              considera os instrumentos utilizados, mas também a história, o
              desenvolvimento e as particularidades de cada criança.
            </p>
          </div>
          <p className="mt-6 text-sm tracking-wide text-peach">
            {site.credentialLines.neuro}
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
        title="Se alguma coisa no desenvolvimento, na aprendizagem ou no comportamento do seu filho está gerando dúvidas, vale compreender melhor antes de tirar conclusões."
        description="Entre em contato para receber informações sobre a avaliação neuropsicológica infantil."
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre a avaliação infantil",
          external: true,
        }}
      />
    </>
  );
}
