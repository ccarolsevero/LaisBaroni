import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconAdult, IconArrow, IconChild } from "@/components/icons";
import { LineMarks } from "@/components/illustrations";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica para Autismo / TEA",
  description:
    "Quando algumas características começam a chamar atenção, compreender a história por trás delas é mais importante do que procurar respostas em uma lista de sinais.",
};

const infoMessage =
  "Olá, Laís. Gostaria de informações sobre a avaliação para Autismo.";

const aspectos = [
  "Comunicação",
  "Interação social",
  "Atenção",
  "Memória",
  "Funções executivas",
  "Comportamento e desenvolvimento",
  "Outras funções cognitivas relevantes",
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
        title="Quando algumas características começam a chamar atenção, compreender a história por trás delas é mais importante do que procurar respostas em uma lista de sinais."
        description="Dúvidas relacionadas à comunicação, interação social, comportamento, interesses ou desenvolvimento podem levar à investigação de Transtorno do Espectro Autista (TEA) na infância ou na vida adulta."
        extra="A avaliação contribui para compreender essas características dentro da história, do desenvolvimento e do funcionamento de cada pessoa."
        pills={[
          site.pills.neuro,
        ]}
        image={photos.avaliacao}
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre a avaliação",
          external: true,
        }}
        secondary={{
          href: whatsappUrl(),
          label: "Fale comigo pelo WhatsApp",
          external: true,
        }}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Para quem é a avaliação?"
            title="A dúvida sobre Autismo pode surgir em diferentes momentos da vida."
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
                  Talvez algumas características tenham chamado a atenção da família,
                  da escola ou de outro profissional.
                </p>
                <p>
                  Dificuldades nas interações, particularidades na comunicação,
                  comportamentos ou aspectos do desenvolvimento podem levantar
                  perguntas — mas uma característica isolada não define Autismo.
                </p>
                <p>A avaliação ajuda a compreender o conjunto.</p>
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
                <p>Às vezes, a hipótese aparece somente na vida adulta.</p>
                <p>
                  Experiências vividas desde a infância, dificuldades nas relações ou
                  características que antes eram entendidas apenas como “meu jeito”
                  podem começar a ganhar outro significado.
                </p>
                <p>
                  Nesses casos, a investigação considera não apenas como a pessoa
                  funciona hoje, mas também sua história de desenvolvimento.
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
              Se reconhecer em algumas características pode despertar uma pergunta.
              Não responde a ela.
            </p>
            <p>
              Conteúdos sobre Autismo podem ajudar muitas pessoas a perceber aspectos
              da própria experiência ou do desenvolvimento dos filhos.
            </p>
            <p>
              Mas uma lista de características não consegue considerar história,
              contexto, intensidade, impacto e outras possíveis explicações.
            </p>
            <p>É justamente aí que uma avaliação cuidadosa faz diferença.</p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser investigado?"
            title="Avaliar significa compreender o funcionamento como um todo."
          />
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            De acordo com a necessidade de cada caso, podem ser considerados aspectos
            relacionados a:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aspectos.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Essas informações são interpretadas junto à história e ao contexto de
            cada pessoa.
          </p>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Infância e vida adulta"
            title="Na infância e na vida adulta, a investigação precisa olhar para histórias diferentes"
          />
          <p className="mt-6 max-w-3xl text-lg text-ink">
            A hipótese pode ser a mesma. O caminho até ela não é.
          </p>
          <div className="mt-10 grid gap-3 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na infância</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                A história do desenvolvimento e informações da família e de outros
                contextos relevantes ajudam a compreender as características
                observadas.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na vida adulta</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                Olhar para experiências e características presentes ao longo da vida
                ganha uma importância especial, principalmente quando nunca houve uma
                investigação anterior.
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
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a avaliação?"
            title="A avaliação não começa perguntando “onde estão os sinais de Autismo?”. Começa conhecendo a pessoa."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo parte da queixa, da história e das questões que motivaram a
              busca.
            </p>
            <p>
              A partir disso, são utilizados procedimentos e instrumentos adequados à
              idade e aos objetivos da investigação.
            </p>
            <p>
              As informações são analisadas em conjunto e, ao final, acontece a
              devolutiva, com a apresentação dos resultados, conclusões e possíveis
              orientações.
            </p>
          </div>
          <blockquote className="mt-12">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              Uma hipótese orienta a investigação. Não deveria determinar a resposta
              antes dela.
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
            Quando o funcionamento humano é complexo, experiência clínica importa.
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
              Minha experiência clínica e acadêmica orienta uma avaliação que integra
              instrumentos, história, desenvolvimento e contexto, evitando conclusões
              baseadas em características isoladas.
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
        title="Quando existe uma dúvida sobre Autismo, o caminho não precisa começar pela certeza. Pode começar pela investigação."
        description="Se a dúvida é sobre você ou seu filho, entre em contato para receber informações sobre a avaliação."
        primary={{
          href: whatsappUrl("Olá, Laís. Gostaria de informações sobre a avaliação para Autismo."),
          label: "Quero informações sobre a avaliação para Autismo",
          external: true,
        }}
      />
    </>
  );
}
