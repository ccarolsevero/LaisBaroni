import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconAdult, IconArrow, IconChild } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica para TDAH",
  description:
    "Quando a dúvida é TDAH, reconhecer alguns sinais não basta. É preciso entender o que está por trás deles.",
};

const aspectos = [
  "Atenção",
  "Memória",
  "Funções executivas",
  "Organização e planejamento",
  "Controle inibitório",
];

const faqs = [
  {
    question: "Meu filho é muito distraído. Isso significa TDAH?",
    answer:
      "Não. Dificuldades de atenção podem aparecer por diferentes razões. A presença de uma característica isolada não permite chegar a essa conclusão.",
  },
  {
    question: "Descobri características de TDAH só depois de adulto. Ainda posso investigar?",
    answer:
      "Sim. Adultos podem procurar avaliação mesmo quando essas questões não foram investigadas na infância.",
  },
  {
    question: "Um teste consegue dizer se é TDAH?",
    answer:
      "Um teste isolado não equivale a uma avaliação completa. A investigação considera diferentes informações do caso.",
  },
  {
    question: "Preciso chegar com encaminhamento ou diagnóstico?",
    answer:
      "Não necessariamente. A própria existência de uma dúvida pode motivar a procura por uma avaliação.",
  },
];

export default function AvaliacaoTdahPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação para TDAH"
        title="Quando a dúvida é TDAH, reconhecer alguns sinais não basta. É preciso entender o que está por trás deles"
        description="Dificuldades de atenção, organização ou impulsividade podem levantar a hipótese de TDAH na infância ou na vida adulta. A avaliação ajuda a investigar o que pode estar por trás desses sinais."
        image={photos.avaliacao}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Para quem é a avaliação?"
            title="A dúvida sobre TDAH pode aparecer em momentos muito diferentes da vida"
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
                  Talvez a escola tenha chamado atenção para dificuldades de
                  concentração, organização ou impulsividade, ou a família já
                  perceba esses sinais há algum tempo. A avaliação ajuda a
                  compreender o que está acontecendo.
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
                  Talvez você tenha passado anos ouvindo que era distraído,
                  desorganizado ou que precisava “se esforçar mais”. Na vida
                  adulta, essas dificuldades podem levantar novas perguntas,
                  inclusive sobre TDAH.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="Por que não basta identificar os sintomas?" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Dificuldade de atenção não é sinônimo de TDAH. A avaliação considera
              quando os sinais começaram, em quais contextos aparecem e como
              impactam a vida da pessoa.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser investigado?"
            title="O diagnóstico não está no resultado de um único teste"
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
            title="Na infância e na vida adulta, o olhar não é o mesmo"
          />
          <div className="mt-10 grid gap-3 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na infância</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                A investigação considera o desenvolvimento, a rotina familiar e o
                contexto escolar.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na vida adulta</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                A investigação considera o funcionamento atual e dificuldades que
                podem estar presentes desde fases anteriores da vida.
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
            title="Você não chega para provar que é TDAH. Seu filho também não"
          />
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl bg-mist p-7">
              <p className="font-display text-3xl text-mid">01</p>
              <h3 className="font-display mt-4 text-xl font-medium text-ink">
                Entrevista inicial
              </h3>
              <p className="mt-3 leading-relaxed hero-copy">
                O processo começa pelas dificuldades percebidas e pela história da
                pessoa.
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
        title="Se a pergunta é “será que é TDAH?”, você não precisa chegar com a resposta"
        description=""
      />
    </>
  );
}
