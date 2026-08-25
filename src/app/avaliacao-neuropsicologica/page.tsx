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
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica",
  description:
    "Quando as dificuldades começam a levantar perguntas, uma avaliação cuidadosa pode ajudar a encontrar respostas.",
};

const infoMessage =
  "Olá, Laís. Gostaria de informações sobre a avaliação neuropsicológica.";

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
      "A avaliação investiga essas dificuldades considerando como elas aparecem, a história e o funcionamento de cada pessoa.",
    ],
    cta: "Saiba mais sobre avaliação para TDAH",
  },
  {
    href: "/avaliacao-neuropsicologica/autismo",
    icon: IconPuzzle,
    tone: "bg-soft text-ink",
    title: "Avaliação Neuropsicológica e Autismo",
    paragraphs: [
      "Quando algumas características começam a fazer mais sentido — e também a trazer novas perguntas.",
      "A avaliação permite investigar essas questões considerando a história, o desenvolvimento e o contexto de cada pessoa.",
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
  "O processo começa pela compreensão da queixa, da história e da pergunta que motivou a avaliação.",
  "A partir disso, são selecionados procedimentos e instrumentos adequados à investigação. Depois, as informações são analisadas em conjunto.",
  "Ao final, acontece a devolutiva, com a apresentação e discussão dos resultados e possíveis orientações.",
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
        title="Quando as dificuldades começam a levantar perguntas, uma avaliação cuidadosa pode ajudar a encontrar respostas."
        description="Dificuldades de atenção, memória, aprendizagem, organização ou comportamento podem ter diferentes explicações. A avaliação neuropsicológica ajuda a compreender o que pode estar por trás delas, considerando o funcionamento, a história e o contexto de cada pessoa."
        note="Avaliação neuropsicológica infantil, adulta e em idosos"
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
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Quando vale investigar?"
            title="Nem toda dificuldade significa um diagnóstico. Mas algumas perguntas merecem ser investigadas."
          />
          <div className="space-y-5 text-[15px] leading-relaxed text-ink/80 sm:text-base">
            <p>
              Esquecimentos frequentes, dificuldade para manter a atenção, organizar
              tarefas, aprender ou lidar com determinadas situações podem despertar
              dúvidas.
            </p>
            <p>
              Isso pode acontecer na infância, aparecer — ou ganhar outro peso — na
              vida adulta, ou surgir no envelhecimento, quando mudanças cognitivas
              começam a interferir na autonomia e nas atividades cotidianas.
            </p>
            <p>
              A avaliação também pode ser útil quando existe discrepância entre o
              funcionamento cognitivo esperado e o desempenho da pessoa na vida
              cotidiana — por exemplo, quando suas capacidades não se traduzem de
              modo consistente no estudo, no trabalho, na organização da rotina ou
              na autonomia.
            </p>
            <p>
              A avaliação não parte de um diagnóstico pronto. Ela investiga o que
              pode estar por trás daquilo que está sendo observado.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que é a avaliação neuropsicológica?"
            title="Um teste mostra uma parte. Uma avaliação precisa compreender o conjunto."
          />
          <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-relaxed text-ink/80 sm:text-base">
            <p>
              É um processo clínico que investiga aspectos como atenção, memória,
              linguagem, funções executivas e aprendizagem, de acordo com a
              necessidade de cada pessoa.
            </p>
            <p>
              A avaliação não se resume à aplicação de testes. A compreensão
              integra história clínica, observação, dados quantitativos e
              qualitativos, funções preservadas e comprometidas, hipóteses clínicas
              e impacto funcional.
            </p>
            <p>
              Ela ajuda a entender não só as dificuldades, mas também o que a pessoa
              preserva e consegue fazer bem — e de que forma memória, atenção,
              raciocínio, organização e outras habilidades aparecem no dia a dia.
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
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed text-ink/80 sm:text-base">
            <p>Essas frases podem ser o começo de uma investigação — não uma conclusão.</p>
            <p>
              Dificuldades de memória, atenção, organização ou raciocínio podem ter
              diferentes causas. A Avaliação Neuropsicológica integra história
              clínica, funcionamento cotidiano, observação e instrumentos para
              compreender essas mudanças. Quando pertinentes, informações de outros
              profissionais podem enriquecer a análise do caso.
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
            title="Avaliar não é fazer uma sequência de testes e esperar que eles deem uma resposta."
          />
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {processo.map((text, index) => (
              <article key={text} className="rounded-2xl bg-mist p-7">
                <p className="font-display text-3xl text-mid">0{index + 1}</p>
                <p className="mt-4 leading-relaxed text-ink/80">{text}</p>
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
            interpretado — e não apenas calculado.
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
              Minha experiência clínica e acadêmica orienta um trabalho que
              considera os resultados dos instrumentos dentro da história e do
              contexto de cada pessoa.
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
        title="Talvez você ainda não saiba qual é a resposta. A avaliação existe justamente para investigar a pergunta."
        description="Entre em contato para saber mais sobre a avaliação neuropsicológica."
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre a avaliação",
          external: true,
        }}
      />
    </>
  );
}
