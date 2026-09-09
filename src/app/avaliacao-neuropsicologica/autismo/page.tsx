import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconAdult, IconArrow, IconChild } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica para Autismo / TEA",
  description:
    "Quando algumas características começam a chamar atenção, compreender a história por trás delas é mais importante do que procurar respostas em uma lista de sinais.",
};

const aspectos = [
  "Comunicação",
  "Interação social",
  "Atenção",
  "Memória",
  "Funções executivas",
  "Comportamento e desenvolvimento",
];

const faqs = [
  {
    question:
      "Meu filho apresenta algumas características de Autismo. Isso significa que ele é autista?",
    answer:
      "Não. Características isoladas não permitem chegar a essa conclusão. Elas podem indicar a necessidade de uma investigação mais cuidadosa.",
  },
  {
    question: "Posso investigar Autismo mesmo sendo adulto?",
    answer:
      "Sim. A busca por avaliação também pode acontecer na vida adulta, inclusive quando determinadas questões nunca foram investigadas anteriormente.",
  },
  {
    question: "Me identifiquei com conteúdos sobre Autismo. Devo fazer uma avaliação?",
    answer:
      "A identificação pode despertar dúvidas, mas não substitui uma avaliação. Se essas questões são relevantes para você, buscar orientação profissional pode ajudar a compreender se uma investigação é indicada.",
  },
  {
    question: "Um teste consegue identificar Autismo?",
    answer:
      "Um instrumento isolado não equivale a uma avaliação completa. Diferentes informações precisam ser consideradas e interpretadas em conjunto.",
  },
  {
    question: "Preciso ter encaminhamento?",
    answer:
      "Não necessariamente. A própria existência de uma dúvida pode motivar a busca por orientação sobre avaliação.",
  },
];

export default function AvaliacaoAutismoPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação para Autismo / TEA"
        title="Quando algumas características começam a chamar atenção, compreender a história por trás delas é mais importante do que procurar respostas em uma lista de sinais"
        description="Dúvidas relacionadas à comunicação, interação social, comportamento ou desenvolvimento podem levar à investigação de Autismo na infância ou na vida adulta. A avaliação ajuda a compreender essas características com mais profundidade."
        image={photos.avaliacao}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Para quem é a avaliação?"
            title="A dúvida sobre Autismo pode surgir em diferentes momentos da vida"
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-2">
            <article className="rounded-2xl bg-soft p-8 text-ink">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/50">
                <IconChild className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-6 text-[1.85rem] leading-snug font-medium">
                Estou buscando uma avaliação para meu filho
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed opacity-85">
                <p>
                  Talvez algumas características relacionadas à comunicação,
                  interação ou desenvolvimento tenham chamado a atenção da
                  família, da escola ou de outro profissional. A avaliação ajuda
                  a compreender melhor o que está acontecendo.
                </p>
              </div>
            </article>
            <article className="rounded-2xl bg-ink p-8 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                <IconAdult className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-6 text-[1.85rem] leading-snug font-medium">
                Estou buscando uma avaliação para mim
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-mist">
                <p>
                  Às vezes, a hipótese aparece apenas na vida adulta.
                  Experiências da infância, dificuldades nas relações ou
                  características vistas durante anos como “meu jeito” podem
                  começar a levantar novas perguntas.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Eu me identifiquei com vários sinais. Isso significa que sou autista?”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Se identificar com características relacionadas ao Autismo pode
              despertar uma dúvida, mas não é suficiente para chegar a uma
              conclusão. A avaliação permite investigar essas características
              considerando a história e o funcionamento de cada pessoa.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser investigado?"
            title="Avaliar significa compreender o funcionamento como um todo"
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aspectos.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Infância e vida adulta"
            title="Na infância e na vida adulta, a investigação precisa olhar para histórias diferentes"
          />
          <div className="mt-10 grid gap-3 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na infância</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                A investigação considera a história do desenvolvimento e
                informações da família e de outros contextos importantes.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na vida adulta</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                A investigação considera experiências presentes ao longo da vida,
                principalmente quando nunca houve uma avaliação anterior.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/avaliacao-neuropsicologica/infantil" variant="primary">
              Conheça a Avaliação Infantil
              <IconArrow />
            </ButtonLink>
            <ButtonLink href="/avaliacao-neuropsicologica/adultos" variant="secondary">
              Conheça a Avaliação em Adultos
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Como funciona a avaliação?"
            title="A avaliação não começa perguntando “onde estão os sinais de Autismo?”. Começa conhecendo a pessoa"
          />
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl bg-mist p-7">
              <p className="font-display text-3xl text-mid">01</p>
              <h3 className="font-display mt-4 text-xl font-medium text-ink">
                Entrevista inicial
              </h3>
              <p className="mt-3 leading-relaxed hero-copy">
                O processo começa pelas dúvidas que motivaram a busca e pela
                história da pessoa.
              </p>
            </article>
            <article className="rounded-2xl bg-mist p-7">
              <p className="font-display text-3xl text-mid">02</p>
              <h3 className="font-display mt-4 text-xl font-medium text-ink">
                Avaliação
              </h3>
              <p className="mt-3 leading-relaxed hero-copy">
                São utilizados procedimentos e instrumentos adequados à idade e aos
                objetivos da investigação.
              </p>
            </article>
            <article className="rounded-2xl bg-mist p-7">
              <p className="font-display text-3xl text-mid">03</p>
              <h3 className="font-display mt-4 text-xl font-medium text-ink">
                Devolutiva
              </h3>
              <p className="mt-3 leading-relaxed hero-copy">
                Os resultados são apresentados e discutidos, junto às possíveis
                orientações.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir a avaliação?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica para uma investigação cuidadosa e individualizada.
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
        title="Quando existe uma dúvida sobre Autismo, o caminho não precisa começar pela certeza. Pode começar pela investigação"
        description=""
      />
    </>
  );
}
