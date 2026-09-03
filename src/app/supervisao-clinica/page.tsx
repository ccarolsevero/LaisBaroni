import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supervisão Clínica",
  description:
    "Alguns casos não pedem uma resposta rápida. Pedem um olhar clínico mais aprofundado.",
};

const infoMessage = "Olá, Laís. Gostaria de informações sobre supervisão clínica.";

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
        title="Alguns casos não pedem uma resposta rápida. Pedem um olhar clínico mais aprofundado."
        description="A supervisão clínica é um espaço para pensar casos, ampliar hipóteses, discutir intervenções e compreender os impasses que surgem ao longo da prática profissional."
        extra="Um trabalho construído a partir da experiência clínica, do conhecimento teórico e das particularidades de cada caso — com o objetivo de desenvolver autonomia e raciocínio clínico do terapeuta, e não apenas escolher técnicas para uma sessão."
        pills={[
          site.pills.supervision,
          "TCC • Terapia do Esquema • ACT • Psicopatologia • Neuropsicologia",
          site.pills.mestrado,
        ]}
        image={photos.supervisao}
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre supervisão",
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
            eyebrow="Para quem é a supervisão?"
            title="Você não precisa estar “sem saber o que fazer” para levar um caso à supervisão."
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              A supervisão pode fazer sentido tanto diante de um caso que trouxe
              dúvidas ou impasses quanto para profissionais que desejam aprofundar o
              raciocínio clínico e desenvolver sua prática.
            </p>
            <p>
              É um espaço para sair do automático e olhar com mais cuidado para
              aquilo que está acontecendo no processo terapêutico.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode ser trabalhado na supervisão?"
            title="Às vezes, a dificuldade não está em conhecer a teoria. Está em saber o que fazer com ela diante daquela pessoa."
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
              A supervisão ajuda o profissional a ampliar sua compreensão dos casos,
              desenvolver raciocínio clínico e caminhar em direção à autonomia
              profissional. O trabalho envolve formular e revisar hipóteses,
              reconhecer fatores que mantêm as dificuldades, compreender impasses e
              escolher intervenções coerentes com o caso e o momento do processo
              terapêutico.
            </p>
            <p>
              Em algumas situações, o impasse não está na falta de uma técnica, mas
              na forma como o caso está sendo compreendido. Quando pertinente, a
              supervisão também pode considerar a relação terapêutica e as respostas
              do próprio terapeuta como informações preciosas à análise do caso.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Da teoria para o caso real"
            title="Porque nenhum paciente chega à sessão exatamente como aparece nos livros."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Conhecer conceitos e técnicas é fundamental. Mas a clínica exige
              integrar conhecimento, história, contexto, vínculo e aquilo que
              acontece ao longo do processo.
            </p>
            <p>
              Na supervisão, teoria e prática se encontram para ajudar o profissional
              a organizar o raciocínio clínico e compreender melhor as decisões
              envolvidas na condução do caso.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Qual é o olhar que orienta a supervisão?"
            title="Compreender o sintoma é importante. Compreender a pessoa que apresenta esse sintoma é ainda mais."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Minha trajetória clínica reúne referências da Terapia
              Cognitivo-Comportamental, Terapia do Esquema, ACT, Psicopatologia e
              Neuropsicologia — respeitando a natureza de cada formação.
            </p>
            <p>
              Esse repertório contribui para uma discussão que não olha apenas para
              sintomas ou técnicas isoladas, mas também para padrões, funcionamento,
              história e contexto do paciente.
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
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação profissional
              e clínica desde 2009.
            </p>
            <p>
              Atuo como professora e supervisora no curso de Neuropsicologia do
              CETCC; como supervisora clínica no INESP e no IPq-USP; e realizei
              supervisão de psicólogos clínicos angolanos em programa intensivo de
              formação na Beneficência Portuguesa.
            </p>
            <p>
              Minha formação inclui TCC, Terapia do Esquema, ACT, Psicopatologia e
              Neuropsicologia. Ao longo da trajetória, a experiência clínica e
              acadêmica foi construindo um olhar que busca integrar teoria,
              raciocínio clínico e singularidade de cada caso.
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
            title="Um espaço para levar casos reais e pensar a clínica com profundidade."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Os encontros são direcionados às questões apresentadas pelo
              profissional e aos casos que deseja discutir.
            </p>
            <p>
              A supervisão pode envolver compreensão do caso, dúvidas sobre condução,
              formulação de hipóteses e discussão de estratégias e intervenções — com
              foco no desenvolvimento do raciocínio clínico, e não apenas em
              respostas prontas sobre a próxima sessão.
            </p>
            <p>
              Entre em contato para informações sobre formato e disponibilidade.
            </p>
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
        title="Quando um caso faz você pensar mais, ele também pode fazer sua clínica crescer."
        description="Se você deseja discutir casos e aprofundar seu raciocínio clínico, entre em contato para receber informações sobre a supervisão."
        modality=""
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre supervisão",
          external: true,
        }}
      />
    </>
  );
}
