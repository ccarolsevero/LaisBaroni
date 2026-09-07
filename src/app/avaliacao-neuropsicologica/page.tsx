import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import {
  IconAdult,
  IconArrow,
  IconChild,
  IconElderly,
  IconPuzzle,
  IconSearch,
} from "@/components/icons";
import { LineMarks } from "@/components/illustrations";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica",
  description:
    "Quando as dificuldades começam a levantar perguntas, uma avaliação cuidadosa pode ajudar a encontrar respostas.",
};

const tipos = [
  {
    href: "/avaliacao-neuropsicologica/infantil",
    icon: IconChild,
    tone: "bg-soft text-ink",
    title: "Avaliação Neuropsicológica Infantil",
    paragraphs: [
      "Quando dificuldades de aprendizagem, atenção, comportamento ou desenvolvimento começam a gerar dúvidas.",
    ],
    cta: "Conheça a Avaliação Infantil",
  },
  {
    href: "/avaliacao-neuropsicologica/adultos",
    icon: IconAdult,
    tone: "bg-ink text-white",
    title: "Avaliação Neuropsicológica em Adultos",
    paragraphs: [
      "Algumas dificuldades acompanham você há anos. Outras começaram agora. Entender essa diferença importa.",
    ],
    cta: "Conheça a Avaliação em Adultos",
  },
  {
    href: "/avaliacao-neuropsicologica/idosos",
    icon: IconElderly,
    tone: "bg-peach text-ink",
    title: "Avaliação Neuropsicológica em Idosos",
    paragraphs: [
      "Quando mudanças de memória, atenção, linguagem ou organização começam a interferir na autonomia e no cotidiano.",
    ],
    cta: "Conheça a Avaliação em Idosos",
  },
  {
    href: "/avaliacao-neuropsicologica/tdah",
    icon: IconSearch,
    tone: "bg-mid text-white",
    title: "Avaliação Neuropsicológica para TDAH",
    paragraphs: [
      "Quando a dúvida é TDAH, reconhecer alguns sinais não basta. É preciso entender o que está por trás deles.",
    ],
    cta: "Saiba mais sobre avaliação para TDAH",
  },
  {
    href: "/avaliacao-neuropsicologica/autismo",
    icon: IconPuzzle,
    tone: "bg-soft text-ink",
    title: "Avaliação Neuropsicológica e Autismo",
    paragraphs: [
      "Quando algumas características começam a fazer mais sentido e também a trazer novas perguntas.",
    ],
    cta: "Saiba mais sobre avaliação e Autismo",
  },
];

const quotes = [
  "Não consigo me concentrar.",
  "Esqueço tudo.",
  "Sempre tive dificuldade para me organizar.",
  "Meu filho não acompanha a escola como esperávamos.",
];

const processo = [
  "Começa pela queixa, pela história e pela pergunta que motivou a avaliação.",
  "Em seguida, selecionamos os procedimentos adequados e analisamos as informações em conjunto.",
  "Ao final, a devolutiva apresenta os resultados e possíveis orientações.",
];

const faqs = [
  {
    question: "A avaliação serve apenas para investigar TDAH ou Autismo?",
    answer:
      "Não. Diferentes questões relacionadas ao funcionamento cognitivo, emocional e comportamental podem ser investigadas.",
  },
  {
    question: "Preciso ter uma suspeita de diagnóstico?",
    answer:
      "Não. A avaliação pode começar justamente pela necessidade de compreender melhor uma dificuldade.",
  },
  {
    question: "Fazer um teste é o mesmo que fazer uma avaliação?",
    answer:
      "Não. Os testes são parte do processo e precisam ser interpretados junto às demais informações.",
  },
  {
    question: "A avaliação é igual para todas as pessoas?",
    answer:
      "Não. O processo é definido de acordo com a idade, a demanda e os objetivos da avaliação.",
  },
  {
    question: "A Laís avalia crianças, adultos e idosos?",
    answer:
      "Sim. A avaliação neuropsicológica é realizada com crianças, adultos e idosos.",
  },
];

export default function AvaliacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação Neuropsicológica"
        title="Quando as dificuldades começam a levantar perguntas, uma avaliação cuidadosa pode ajudar a encontrar respostas"
        description="Dificuldades de atenção, memória, aprendizagem ou comportamento podem ter explicações diferentes. A avaliação ajuda a compreender o que pode estar por trás delas."
        note="Avaliação neuropsicológica infantil, adulta e em idosos"
        pills={[...site.credentials]}
        image={photos.avaliacao}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Quando vale investigar?"
            title="Nem toda dificuldade significa um diagnóstico. Mas algumas perguntas merecem ser investigadas"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Esquecimentos, dificuldade de atenção, organização ou aprendizagem
              podem despertar dúvidas na infância, na vida adulta ou no
              envelhecimento.
            </p>
            <p>
              Também vale investigar quando o potencial cognitivo não se traduz no
              estudo, no trabalho ou na autonomia. A avaliação não parte de um
              diagnóstico pronto: ela investiga o que pode estar por trás do que
              está sendo observado.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que é a avaliação neuropsicológica?"
            title="Um teste mostra uma parte. Uma avaliação precisa compreender o conjunto"
          />
          <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              É um processo clínico que investiga atenção, memória, linguagem,
              funções executivas e aprendizagem, conforme cada caso.
            </p>
            <p>
              Não se resume a testes. Integra história, observação, funções
              preservadas e comprometidas, e o impacto no dia a dia. Ajuda a
              entender as dificuldades e também o que a pessoa consegue fazer bem.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="A mesma queixa"
            title="A mesma queixa pode ter explicações diferentes"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {quotes.map((quote, index) => (
              <blockquote
                key={quote}
                className={`rounded-2xl p-8 font-display text-[1.65rem] leading-snug font-medium ${
                  index % 2 === 0 ? "bg-ink text-white" : "bg-soft text-ink"
                }`}
              >
                “{quote}”
              </blockquote>
            ))}
          </div>
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Essas frases podem ser o começo de uma investigação, não uma
              conclusão. Memória, atenção ou organização podem ter causas
              diferentes. A avaliação integra história, cotidiano e instrumentos
              para compreender o que mudou.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading title="Qual avaliação você está procurando?" />
          <div className="mt-12 grid gap-3 lg:grid-cols-2">
            {tipos.map((tipo) => (
              <article
                key={tipo.href}
                className={`flex flex-col rounded-2xl p-8 ${tipo.tone}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
                  <tipo.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-8 text-[1.85rem] leading-snug font-medium">
                  {tipo.title}
                </h3>
                <div className="mt-4 flex-1 space-y-3 text-[15px] leading-relaxed opacity-85">
                  {tipo.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ButtonLink
                  href={tipo.href}
                  variant={
                    tipo.href.includes("infantil") ||
                    tipo.href.includes("autismo") ||
                    tipo.href.includes("idosos")
                      ? "secondary"
                      : "ghost"
                  }
                  className="mt-8 self-start"
                >
                  {tipo.cta}
                  <IconArrow />
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Como funciona?"
            title="Avaliar não é fazer uma sequência de testes e esperar que eles deem uma resposta"
          />
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {processo.map((text, index) => (
              <article key={text} className="rounded-2xl bg-mist p-7">
                <p className="font-display text-3xl text-mid">0{index + 1}</p>
                <p className="mt-4 leading-relaxed hero-copy">{text}</p>
              </article>
            ))}
          </div>
          <blockquote className="mt-12 max-w-3xl">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink sm:text-4xl">
              A avaliação não começa no teste. Começa na pergunta que precisamos
              investigar.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir sua avaliação?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica faz diferença quando o resultado precisa ser
            interpretado, não apenas calculado.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Formação em Neuropsicologia e Psicopatologia no IPq-USP,
              TCC e Terapia do Esquema no CETCC, e Reabilitação Cognitiva no INESP.
              Também desenvolvo pesquisa de mestrado em Psicologia na USP.
            </p>
            <p>
              Essa trajetória orienta um trabalho que lê os resultados dentro da
              história e do contexto de cada pessoa.
            </p>
          </div>
          <p className="mt-6 text-sm tracking-wide text-peach">
            {site.credentialLines.neuro}
          </p>
          <ButtonLink href="/sobre" variant="peach" className="mt-8">
            Conheça minha trajetória
          </ButtonLink>
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
        title="Talvez você ainda não saiba qual é a resposta. A avaliação existe justamente para investigar a pergunta"
        description="Entre em contato para saber mais sobre a avaliação neuropsicológica."
      />
    </>
  );
}
