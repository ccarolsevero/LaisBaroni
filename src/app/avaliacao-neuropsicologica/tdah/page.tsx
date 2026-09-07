import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconAdult, IconArrow, IconChild } from "@/components/icons";
import { LineMarks } from "@/components/illustrations";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

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
  "Outras funções cognitivas relevantes",
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
        description="Dificuldades de atenção, organização, impulsividade ou comportamento podem levantar a hipótese de TDAH tanto na infância quanto na vida adulta."
        extra="A avaliação investiga essas dificuldades considerando como elas aparecem, a história da pessoa e o funcionamento como um todo."
        pills={[
          ...site.credentials,
        ]}
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
                  Talvez a escola tenha chamado atenção para concentração,
                  organização ou impulsividade. Ou a família já perceba isso há
                  algum tempo. Ter essas dificuldades não significa, por si só,
                  TDAH. A avaliação ajuda a compreender o que está acontecendo.
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
                  adulta, essas dificuldades podem gerar novas perguntas, inclusive
                  sobre TDAH. A investigação olha o funcionamento de hoje e a
                  história dessas dificuldades.
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
              Porque dificuldade de atenção não é sinônimo de TDAH. Características
              parecidas podem aparecer por razões diferentes.
            </p>
            <p>
              Uma avaliação cuidadosa não procura só sinais que confirmem uma
              hipótese. Considera quando as dificuldades começaram, onde aparecem
              e qual impacto provocam.
            </p>
          </div>
          <blockquote className="mt-12">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              A pergunta não é apenas “tem sintomas de TDAH?”. É “o que explica as
              dificuldades dessa pessoa?”.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser investigado?"
            title="O diagnóstico não está no resultado de um único teste"
          />
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            De acordo com cada caso, podem ser investigados aspectos como:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aspectos.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Os resultados são interpretados junto à história, ao contexto e às demais
            informações obtidas durante a avaliação.
          </p>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Infância e vida adulta"
            title="Na infância e na vida adulta, o olhar não é o mesmo"
          />
          <p className="mt-6 max-w-3xl text-lg text-ink">
            Crianças e adultos podem chegar com a mesma hipótese, mas a investigação
            precisa considerar momentos de vida diferentes.
          </p>
          <div className="mt-10 grid gap-3 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na infância</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                Informações sobre desenvolvimento, rotina familiar e contexto
                escolar ajudam a compreender as dificuldades apresentadas.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-medium">Na vida adulta</h3>
              <p className="mt-4 leading-relaxed hero-copy">
                A investigação considera o funcionamento atual e a trajetória,
                inclusive dificuldades presentes desde fases anteriores da vida.
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
            title="Você não chega para provar que é TDAH. Seu filho também não"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo começa pela queixa, pela história e pela pergunta que
              motivou a avaliação. Depois, usamos procedimentos adequados à idade.
              Ao final, a devolutiva apresenta resultados e possíveis orientações.
            </p>
          </div>
          <blockquote className="mt-12">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              Investigar bem é tão importante quanto chegar a uma conclusão.
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
            Experiência clínica importa quando é preciso olhar além do sintoma mais
            evidente.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Formação em Neuropsicologia e Psicopatologia no IPq-USP,
              TCC e Terapia do Esquema no CETCC, e Reabilitação Cognitiva no INESP.
              Também desenvolvo pesquisa de mestrado em Psicologia na USP.
            </p>
            <p>
              Essa trajetória orienta uma avaliação que integra instrumentos,
              história e contexto, evitando conclusões baseadas em características
              isoladas.
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
        title="Se a pergunta é “será que é TDAH?”, você não precisa chegar com a resposta"
        description="Se a dúvida é sobre você ou seu filho, entre em contato para saber mais sobre a avaliação neuropsicológica."
      />
    </>
  );
}
