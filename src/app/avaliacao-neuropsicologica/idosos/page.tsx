import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { LineMarks } from "@/components/illustrations";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica em Idosos",
  description:
    "Quando mudanças de memória, atenção ou organização começam a interferir na autonomia, uma avaliação cuidadosa pode ajudar a compreender o que está acontecendo.",
};

const infoMessage =
  "Olá, Laís. Gostaria de informações sobre a avaliação neuropsicológica em idosos.";

const indicacoes = [
  "Alterações de memória, atenção, linguagem, organização ou raciocínio",
  "Mudanças em relação ao funcionamento habitual",
  "Impacto na autonomia e nas atividades cotidianas",
  "Investigação de comprometimento cognitivo leve e síndromes demenciais",
  "Diagnósticos diferenciais e compreensão do perfil cognitivo atual",
];

const faqs = [
  {
    question: "Toda queixa de memória indica demência?",
    answer:
      "Não. Nem toda queixa de memória indica demência. A avaliação ajuda a compreender o que mudou, quando a mudança começou, como evoluiu e de que forma interfere na vida cotidiana. Diferentes fatores influenciam o funcionamento cognitivo, como aspectos neurológicos, emocionais, clínicos, medicamentosos e relacionados ao sono.",
  },
  {
    question: "A avaliação só identifica dificuldades?",
    answer:
      "Não. A avaliação ajuda a entender não só as dificuldades, mas também o que a pessoa preserva e consegue fazer bem — e como essas habilidades aparecem no dia a dia.",
  },
  {
    question: "Preciso ter um diagnóstico prévio para procurar a avaliação?",
    answer:
      "Não. A busca pode começar justamente porque existem mudanças ou dúvidas que merecem ser investigadas com mais cuidado.",
  },
];

export default function AvaliacaoIdososPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação neuropsicológica em idosos"
        title="Quando mudanças cognitivas começam a levantar perguntas, investigar com cuidado faz diferença."
        description="Ao longo do envelhecimento, algumas mudanças cognitivas podem ocorrer de forma esperada, enquanto outras merecem investigação mais cuidadosa."
        extra="A Avaliação Neuropsicológica contribui para compreender o perfil cognitivo atual, identificar capacidades preservadas e dificuldades, e auxiliar na investigação de alterações associadas ao envelhecimento."
        pills={[site.pills.neuro]}
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
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Quando vale investigar?"
            title="Mudanças que interferem na autonomia merecem um olhar mais atento."
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Alterações de memória, atenção, linguagem, organização ou raciocínio —
              sobretudo quando representam uma mudança em relação ao funcionamento
              habitual ou começam a interferir na autonomia e nas atividades
              cotidianas — podem indicar a necessidade de uma avaliação mais
              detalhada.
            </p>
            <p>
              A avaliação pode contribuir para investigar o funcionamento cognitivo
              no envelhecimento, comprometimento cognitivo leve, síndromes
              demenciais e diagnósticos diferenciais, considerando também
              capacidades preservadas, autonomia e repercussões na vida cotidiana.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que a avaliação pode investigar?"
            title="Compreender o perfil cognitivo atual — incluindo o que está preservado."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {indicacoes.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Nem toda queixa de memória indica demência. Diferentes fatores
              influenciam o funcionamento cognitivo, e a avaliação busca
              compreender o conjunto — sem reduzir o envelhecimento a um único
              diagnóstico.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona?"
            title="A avaliação não se resume à aplicação de testes."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A compreensão integra história clínica, observação, dados
              quantitativos e qualitativos, funções preservadas e comprometidas,
              hipóteses clínicas e impacto funcional.
            </p>
            <p>
              Esse conjunto de informações mostra como memória, atenção, raciocínio,
              organização e outras habilidades aparecem no dia a dia e de que forma
              podem influenciar a autonomia e a rotina.
            </p>
          </div>
          <blockquote className="mt-12">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              Investigar com cuidado é diferente de alarmar. A avaliação existe para
              compreender — não para reduzir a pessoa a uma queixa.
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
              INESP.
            </p>
            <p>
              Minha experiência clínica orienta uma avaliação que integra os
              resultados dos instrumentos à história, ao contexto e às
              particularidades de cada pessoa.
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
        title="Mudanças cognitivas merecem compreensão — não conclusões apressadas."
        description="Se você ou alguém próximo está percebendo alterações que gostaria de compreender melhor, entre em contato para receber informações sobre a avaliação neuropsicológica em idosos."
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre a avaliação",
          external: true,
        }}
      />
    </>
  );
}
