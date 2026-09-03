import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psicoterapia para Ansiedade, Estresse e Sofrimento Emocional",
  description:
    "Quando a mente não desliga e até o que parecia simples começa a exigir demais.",
};

const motivos = [
  "Preocupação difícil de controlar",
  "Crises de ansiedade",
  "Sensação de estar sempre em alerta",
  "Estresse e sobrecarga",
  "Irritabilidade e dificuldade para desacelerar",
  "Alterações de humor e desânimo",
  "Sofrimento que começa a interferir no cotidiano",
];

const faqs = [
  {
    question:
      "Preciso saber se tenho um transtorno de ansiedade antes de procurar terapia?",
    answer:
      "Não. Você pode procurar psicoterapia a partir das dificuldades que está vivendo, mesmo sem um diagnóstico.",
  },
  {
    question: "A Laís atende pessoas com crises de ansiedade?",
    answer:
      "A psicoterapia pode trabalhar questões relacionadas à ansiedade e às crises, considerando as características e necessidades de cada caso.",
  },
  {
    question: "Estresse também pode ser trabalhado na psicoterapia?",
    answer:
      "Sim. Estresse, sobrecarga e a forma como a pessoa vem lidando com essas experiências podem fazer parte do processo terapêutico.",
  },
  {
    question:
      "E se eu estiver apenas percebendo que emocionalmente não estou bem?",
    answer:
      "Isso também pode ser motivo para procurar psicoterapia. Não é necessário conseguir nomear previamente tudo o que está acontecendo.",
  },
  {
    question: "O atendimento é online?",
    answer: "Há atendimento presencial e online.",
  },
];

export default function PsicoterapiaAnsiedadePage() {
  return (
    <>
      <PageHero
        eyebrow="Ansiedade, estresse e sofrimento emocional"
        title="Quando a mente não desliga e até o que parecia simples começa a exigir demais"
        description="Preocupações constantes, ansiedade, estresse, sobrecarga ou mudanças no humor podem começar a ocupar espaço demais na rotina, nas relações e na forma como você se sente."
        extra="Na psicoterapia, buscamos compreender o que está acontecendo, o que mantém esse sofrimento e como ele se relaciona com a sua história e com o momento que você está vivendo."
        pills={[
          site.pills.therapy,
          "TCC • Terapia do Esquema • Psicopatologia",
          site.pills.mestrado,
        ]}
        image={photos.psicoterapia}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Quando o sofrimento começa a ocupar espaço demais"
            title="Nem sempre é fácil perceber quando “estou dando conta” virou “estou apenas tentando aguentar”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Talvez seja difícil desacelerar. A preocupação esteja sempre presente.
              O corpo permaneça em alerta. Ou você perceba irritabilidade, cansaço,
              desânimo ou uma sensação constante de sobrecarga.
            </p>
            <p>
              Em outros momentos, o sofrimento aparece em forma de crises de
              ansiedade ou começa a interferir na rotina, no trabalho e nas relações.
            </p>
            <p>
              Você não precisa conseguir nomear exatamente o que está acontecendo
              para procurar ajuda.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Mas será que o que eu sinto é ansiedade?”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Antes de procurar um rótulo, é importante compreender o que você está
              vivendo.
            </p>
            <p>
              Ansiedade faz parte da experiência humana. O que merece atenção é como
              ela aparece, sua intensidade, frequência e o impacto que provoca na
              vida de cada pessoa.
            </p>
            <p>
              Da mesma forma, estresse, alterações de humor e sofrimento emocional
              podem ter contextos e significados diferentes.
            </p>
            <p>
              Na psicoterapia, o ponto de partida não precisa ser uma conclusão. Pode
              ser justamente a necessidade de entender melhor o que está acontecendo.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode levar alguém a procurar psicoterapia?"
            title="Às vezes, o corpo e a rotina começam a mostrar que alguma coisa precisa de atenção"
          />
          <p className="mt-8 text-base text-ink">A busca pode acontecer diante de:</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {motivos.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Essas experiências não têm o mesmo significado para todas as pessoas. Por
            isso, precisam ser compreendidas dentro de cada história.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como a psicoterapia pode ajudar?"
            title="O objetivo não é simplesmente aprender a “controlar a ansiedade”"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Meu trabalho clínico é orientado principalmente pela Terapia
              Cognitivo-Comportamental (TCC) e pela Terapia do Esquema.
            </p>
            <p>
              Ao longo do processo, podemos compreender pensamentos, emoções,
              comportamentos, formas de enfrentamento e padrões relacionados ao
              sofrimento atual.
            </p>
            <p>
              Isso permite olhar não apenas para o que você sente, mas também para o
              contexto em que essas experiências aparecem e para as formas como você
              aprendeu a lidar com elas.
            </p>
            <p>Atendimento presencial e online.</p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir seu processo?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Quando o sofrimento tem muitas camadas, experiência clínica ajuda a não
            olhar apenas para o que aparece primeiro.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação profissional e clínica desde 2009.
            </p>
            <p>
              Tenho formação em Neuropsicologia e Psicopatologia no IPq-USP, em TCC
              e Terapia do Esquema pelo CETCC, e em Reabilitação Cognitiva pelo
              INESP. A ACT integra meus estudos e conhecimentos clínicos.
            </p>

            <p>
              Essa trajetória orienta uma prática que busca compreender sintomas e
              dificuldades sem separá-los da história, do contexto e das
              particularidades de cada pessoa.
            </p>
          </div>
          <p className="mt-6 text-sm tracking-wide text-peach">
            {site.credentialLines.therapy}
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
        title="Você não precisa esperar ficar insustentável para começar a cuidar do que está acontecendo"
        description="Se ansiedade, estresse, sobrecarga ou outras dificuldades emocionais estão ocupando espaço demais na sua vida, entre em contato para saber mais sobre a psicoterapia."
      />
    </>
  );
}
