import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconArrow } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica em Adultos",
  description:
    "Algumas dificuldades acompanham você há anos. Outras começaram agora. Entender essa diferença importa.",
};

const aspectos = [
  "Atenção",
  "Memória",
  "Linguagem",
  "Funções executivas",
  "Raciocínio",
  "Aprendizagem e outras funções cognitivas",
];

const etapas = [
  {
    title: "Entrevista inicial",
    text: "O processo começa pela sua história e pelas questões que motivaram a avaliação.",
  },
  {
    title: "Avaliação",
    text: "São selecionados os procedimentos e instrumentos adequados ao objetivo da investigação.",
  },
  {
    title: "Devolutiva",
    text: "Ao final, os resultados são apresentados e discutidos, junto às possíveis orientações.",
  },
];

const faqs = [
  {
    question: "Preciso ter uma suspeita de diagnóstico para procurar uma avaliação?",
    answer:
      "Não. A busca pode começar justamente porque existem dificuldades ou mudanças que você deseja compreender melhor.",
  },
  {
    question: "A avaliação pode investigar TDAH em adultos?",
    answer:
      "Quando houver indicação, o TDAH pode estar entre as hipóteses consideradas no processo de investigação. A avaliação não parte, porém, da obrigação de confirmar essa hipótese.",
  },
  {
    question: "E Autismo em adultos?",
    answer:
      "Dúvidas relacionadas ao funcionamento e à história de desenvolvimento também podem levar adultos a buscar uma avaliação. A investigação considera o conjunto das informações, não características isoladas.",
  },
  {
    question: "Fazer testes online é a mesma coisa?",
    answer:
      "Não. Testes isolados não equivalem a uma avaliação neuropsicológica, que envolve um processo clínico mais amplo de investigação e interpretação.",
  },
  {
    question: "Nunca fui avaliado quando criança. Ainda posso fazer uma avaliação?",
    answer:
      "Sim. Muitos adultos procuram avaliação justamente para compreender questões que não foram investigadas anteriormente.",
  },
];

export default function AvaliacaoAdultosPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação neuropsicológica em adultos"
        title="Algumas dificuldades acompanham você há anos. Outras começaram agora. Entender essa diferença importa"
        description="Dificuldades de atenção, memória, organização ou mudanças no funcionamento podem ter diferentes explicações. A avaliação ajuda a compreender o que pode estar acontecendo."
        image={photos.avaliacao}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="O que leva um adulto a procurar uma avaliação?"
            title="“Eu sempre fui assim ou alguma coisa mudou?”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Talvez seja difícil se concentrar, organizar tarefas ou terminar o
              que começou. Em outros casos, a dúvida aparece quando memória ou
              atenção mudam em relação ao que sempre foi habitual.
            </p>
            <p>
              Essas dificuldades podem aparecer no trabalho, nos estudos, na
              rotina ou na autonomia e nem sempre tiveram início recentemente.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que a avaliação pode investigar?"
            title="A pergunta não é apenas “o que está difícil?”, mas “como você funciona?”"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aspectos.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Os resultados são interpretados junto à história e ao contexto de cada
            pessoa.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Será que eu tenho TDAH? Autismo? Ou existe outra explicação?”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Muitos adultos procuram uma avaliação após se identificarem com
              características relacionadas ao TDAH ou ao Autismo, ou por
              perceberem dificuldades que os acompanham há anos. Essas hipóteses
              podem ser investigadas sem partir da necessidade de confirmar um
              diagnóstico.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/avaliacao-neuropsicologica/tdah" variant="primary">
              Avaliação e TDAH
              <IconArrow />
            </ButtonLink>
            <ButtonLink href="/avaliacao-neuropsicologica/autismo" variant="secondary">
              Avaliação e Autismo
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Como funciona a avaliação em adultos?"
            title="Você não chega para provar que tem ou não tem um diagnóstico"
          />
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {etapas.map((etapa, index) => (
              <article key={etapa.title} className="rounded-2xl bg-mist p-7">
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
            Quem vai conduzir sua avaliação?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica para uma avaliação cuidadosa e individualizada.
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
        title="Você não precisa chegar com a resposta. Pode chegar com a dúvida."
        description=""
      />
    </>
  );
}
