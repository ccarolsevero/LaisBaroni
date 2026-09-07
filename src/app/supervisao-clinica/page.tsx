import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supervisão Clínica",
  description:
    "Alguns casos não pedem uma resposta rápida. Pedem um olhar clínico mais aprofundado.",
};

const temas = [
  "Formulação de caso e raciocínio clínico",
  "Raciocínio transdiagnóstico e psicopatologia",
  "Relação terapêutica e respostas do terapeuta",
  "Manejo de impasses e tomada de decisão clínica",
  "Articulação entre teoria e prática",
  "Desenvolvimento de autonomia profissional",
];

const faqs = [
  {
    question: "Preciso ter muita experiência clínica para fazer supervisão?",
    answer:
      "Não necessariamente. Profissionais em diferentes momentos da trajetória podem buscar supervisão para desenvolver o raciocínio clínico e discutir casos.",
  },
  {
    question: "Posso levar um caso específico?",
    answer:
      "Sim. A discussão de casos e dos impasses que aparecem na prática faz parte da proposta da supervisão.",
  },
];

export default function SupervisaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Supervisão clínica"
        title="Alguns casos não pedem uma resposta rápida. Pedem um olhar clínico mais aprofundado"
        description="A supervisão clínica é um espaço para pensar casos, ampliar hipóteses, discutir intervenções e compreender os impasses que surgem ao longo da prática profissional."
        extra="Um espaço construído a partir da experiência clínica e das particularidades de cada caso, com o objetivo de desenvolver autonomia e raciocínio clínico, não apenas escolher técnicas para uma sessão."
        pills={[
          site.pills.supervision,
          "TCC • Terapia do Esquema • ACT • Psicopatologia • Neuropsicologia",
          site.pills.mestrado,
        ]}
        image={photos.supervisao}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Para quem é a supervisão?"
            title="Você não precisa estar “sem saber o que fazer” para levar um caso à supervisão"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A supervisão pode fazer sentido diante de um caso com dúvidas ou
              impasses, e também para quem deseja aprofundar o raciocínio clínico.
              É um espaço para sair do automático e olhar com mais cuidado o
              processo terapêutico.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser trabalhado na supervisão?"
            title="Às vezes, a dificuldade não está em conhecer a teoria. Está em saber o que fazer com ela diante daquela pessoa"
          />
          <p className="mt-8 text-base text-ink">A supervisão pode envolver:</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {temas.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A supervisão amplia a compreensão dos casos, desenvolve o raciocínio
              clínico e caminha em direção à autonomia. Envolve formular hipóteses,
              reconhecer o que mantém as dificuldades e escolher intervenções
              coerentes com o momento do processo.
            </p>
            <p>
              Em algumas situações, o impasse não está na falta de uma técnica, mas
              na forma como o caso está sendo compreendido. Quando pertinente,
              também olhamos a relação terapêutica e as respostas do terapeuta.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Da teoria para o caso real"
            title="Porque nenhum paciente chega à sessão exatamente como aparece nos livros"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Conhecer conceitos e técnicas é fundamental. A clínica, porém, exige
              integrar conhecimento, história, vínculo e o que acontece ao longo do
              processo. Na supervisão, teoria e prática se encontram para
              organizar o raciocínio e as decisões do caso.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Qual é o olhar que orienta a supervisão?"
            title="Compreender o sintoma é importante. Compreender a pessoa que apresenta esse sintoma é ainda mais"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Minha trajetória reúne TCC, Terapia do Esquema, ACT, Psicopatologia
              e Neuropsicologia, respeitando a natureza de cada formação. Esse
              repertório contribui para uma discussão que não olha só sintomas ou
              técnicas isoladas, mas também padrões, história e contexto.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir a supervisão?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica não elimina as perguntas. Ela muda a qualidade das
            perguntas que fazemos diante de um caso.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Atuo como professora e supervisora no curso de
              Neuropsicologia do CETCC; como supervisora clínica no INESP e no
              IPq-USP; e realizei supervisão de psicólogos clínicos angolanos em
              programa intensivo na Beneficência Portuguesa.
            </p>
            <p>
              A formação inclui TCC, Terapia do Esquema, ACT, Psicopatologia e
              Neuropsicologia. A experiência clínica e acadêmica foi construindo um
              olhar que integra teoria, raciocínio clínico e a singularidade de
              cada caso.
            </p>
          </div>
          <p className="mt-6 text-sm tracking-wide text-peach">
            {site.credentialLines.supervision}
          </p>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona?"
            title="Um espaço para levar casos reais e pensar a clínica com profundidade"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Os encontros partem das questões e dos casos que o profissional
              deseja discutir: compreensão do caso, condução, hipóteses e
              intervenções, com foco no raciocínio clínico, não em respostas
              prontas sobre a próxima sessão.
            </p>
            <p>Entre em contato para informações sobre formato e disponibilidade.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading title="Dúvidas frequentes" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <ContactBand
        title="Quando um caso faz você pensar mais, ele também pode fazer sua clínica crescer"
        description="Se você deseja discutir casos e aprofundar seu raciocínio clínico, entre em contato para receber informações sobre a supervisão."
        modality=""
      />
    </>
  );
}
