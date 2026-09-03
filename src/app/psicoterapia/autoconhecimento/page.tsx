import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psicoterapia para Autoconhecimento e Desenvolvimento Emocional",
  description:
    "Você não precisa estar em crise para querer se compreender melhor.",
};

const perguntas = [
  "Por que algumas situações mexem tanto comigo?",
  "O que eu realmente preciso e quero?",
  "Por que tenho tanta dificuldade para colocar limites?",
  "Por que faço determinadas escolhas repetidamente?",
  "Como tenho construído minhas relações?",
  "Que padrões da minha história ainda influenciam quem sou hoje?",
];

const faqs = [
  {
    question: "Posso fazer terapia mesmo sem ter um problema específico?",
    answer:
      "Sim. O desejo de se conhecer melhor, compreender escolhas, emoções ou padrões também pode motivar a busca por psicoterapia.",
  },
  {
    question: "Preciso ter um objetivo definido antes de começar?",
    answer:
      "Não. As questões e os objetivos do processo podem ser construídos e compreendidos ao longo dos encontros.",
  },
  {
    question: "Autoconhecimento é o mesmo que fazer terapia?",
    answer:
      "Não necessariamente. Na psicoterapia, o autoconhecimento acontece dentro de um processo clínico conduzido por uma profissional, considerando a história e as necessidades de cada pessoa.",
  },
  {
    question: "O atendimento pode ser online?",
    answer: "Sim. Há atendimento presencial e online.",
  },
];

export default function PsicoterapiaAutoconhecimentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Autoconhecimento e desenvolvimento emocional"
        title="Você não precisa estar em crise para querer se compreender melhor"
        description="Talvez não exista um grande problema para resolver. Mas existem escolhas que você gostaria de entender, emoções que nem sempre consegue nomear ou aspectos da sua história que deseja olhar com mais cuidado."
        extra="A psicoterapia também pode ser um espaço de autoconhecimento e desenvolvimento emocional."
        pills={[
          site.pills.therapy,
          "TCC • Terapia do Esquema • Psicopatologia",
          site.pills.mestrado,
        ]}
        image={photos.psicoterapia}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Terapia também é para quem quer se conhecer"
            title="“Minha vida está bem. Ainda assim, sinto que há coisas sobre mim que gostaria de entender melhor.”"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Nem toda busca por psicoterapia começa em um momento de sofrimento
              intenso.
            </p>
            <p>
              Às vezes, começa pela vontade de compreender melhor suas emoções,
              escolhas, necessidades, relações e a forma como você reage diante de
              determinadas situações.
            </p>
            <p>
              Autoconhecimento não significa encontrar uma explicação para tudo.
              Significa ampliar a compreensão sobre si.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser trabalhado na psicoterapia?"
            title="Algumas perguntas não surgem porque algo está errado. Surgem porque você começou a olhar para si com mais atenção"
          />
          <p className="mt-8 text-base text-ink">
            A psicoterapia pode abrir espaço para questões como:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {perguntas.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-mist px-6 py-5 font-display text-xl font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            As questões trabalhadas são construídas a partir da história e dos
            objetivos de cada pessoa.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Autoconhecimento"
            title="Autoconhecimento vai além de “saber como eu sou”"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>Perceber um padrão é diferente de compreender de onde ele vem.</p>
            <p>
              Ao longo da vida, construímos maneiras de interpretar situações, lidar
              com emoções, responder às nossas necessidades e nos relacionar.
            </p>
            <p>
              Na psicoterapia, podemos olhar para essas formas de funcionamento com
              mais profundidade, inclusive para aquilo que faz sentido manter e
              aquilo que já não funciona da mesma maneira.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como eu trabalho"
            title="Sua história não cabe em uma fórmula pronta"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Meu trabalho clínico é orientado principalmente pela Terapia
              Cognitivo-Comportamental (TCC) e pela Terapia do Esquema.
            </p>
            <p>
              Essas referências ajudam a compreender pensamentos, emoções,
              comportamentos, necessidades e padrões construídos ao longo da vida,
              sempre considerando a história e as particularidades de cada pessoa.
            </p>
            <p>
              O processo é construído a partir daquilo que faz sentido compreender e
              trabalhar para você.
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
            Experiência clínica também é saber que nem toda pessoa chega à terapia
            procurando a mesma coisa.
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
              Ao longo de quase duas décadas de clínica, construí um trabalho que
              busca compreender cada pessoa para além da dificuldade que a trouxe à
              terapia, considerando sua história, seus recursos, relações e
              necessidades.
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
        title="Talvez você não esteja procurando uma resposta. Talvez queira começar a fazer perguntas melhores sobre si"
        description="Se você deseja iniciar um processo de psicoterapia voltado também ao autoconhecimento e desenvolvimento emocional, entre em contato para receber mais informações."
      />
    </>
  );
}
