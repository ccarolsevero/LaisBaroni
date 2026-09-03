import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconArrow } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psicoterapia Infantil",
  description:
    "Quando seu filho ainda não consegue explicar o que está sentindo, algumas mudanças podem começar a falar por ele.",
};

const infoMessage =
  "Olá, Laís. Gostaria de informações sobre psicoterapia infantil.";

const motivos = [
  "Medos e inseguranças",
  "Ansiedade e preocupações",
  "Mudanças de comportamento",
  "Dificuldades emocionais",
  "Conflitos e dificuldades nos relacionamentos",
  "Mudanças importantes na família ou na rotina",
  "Dificuldade para lidar com determinadas situações ou emoções",
];

const faqs = [
  {
    question: "Meu filho precisa ter um diagnóstico para fazer psicoterapia?",
    answer:
      "Não. A psicoterapia pode ser procurada a partir de dificuldades emocionais, comportamentais ou relacionais, mesmo sem um diagnóstico.",
  },
  {
    question: "Os pais participam da psicoterapia?",
    answer:
      "Os responsáveis podem participar em diferentes momentos, de acordo com a idade da criança e as necessidades do processo.",
  },
  {
    question:
      "Como saber se meu filho precisa de psicoterapia ou avaliação neuropsicológica?",
    answer:
      "São processos com objetivos diferentes. A psicoterapia é um acompanhamento terapêutico; a avaliação neuropsicológica tem caráter investigativo. A demanda inicial ajuda a compreender qual caminho pode ser mais adequado.",
  },
  {
    question: "Psicoterapia infantil é igual à psicoterapia de adultos?",
    answer:
      "Não. O trabalho precisa considerar o desenvolvimento e as formas de comunicação próprias da infância.",
  },
];

export default function PsicoterapiaInfantilPage() {
  return (
    <>
      <PageHero
        eyebrow="Psicoterapia infantil"
        title="Quando seu filho ainda não consegue explicar o que está sentindo, algumas mudanças podem começar a falar por ele."
        description="Mudanças no comportamento, dificuldades emocionais, medos, conflitos ou situações que começam a afetar a rotina da criança podem gerar dúvidas nos responsáveis."
        extra="A psicoterapia infantil oferece um espaço adequado à idade e ao momento de desenvolvimento da criança para compreender e trabalhar aquilo que ela está vivendo."
        pills={[
          site.pills.therapy,
          "TCC • Terapia do Esquema • Psicopatologia",
          site.pills.mestrado,
        ]}
        image={photos.infantil}
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre psicoterapia infantil",
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
            eyebrow="Quando procurar"
            title="Nem toda mudança significa que existe um problema. Mas algumas mudanças merecem ser compreendidas."
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Às vezes, os responsáveis percebem que a criança está diferente, mas
              não conseguem entender exatamente o motivo.
            </p>
            <p>
              A busca por psicoterapia pode acontecer diante de mudanças emocionais
              ou comportamentais, medos, dificuldades nas relações, situações
              familiares importantes ou questões que começam a interferir no
              cotidiano da criança.
            </p>
            <p>
              O primeiro passo não é encontrar um rótulo. É compreender o que ela
              pode estar vivendo.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Meu filho não fala sobre o que está acontecendo.”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Crianças nem sempre expressam o que sentem da mesma maneira que os
              adultos.
            </p>
            <p>
              Dependendo da idade e do desenvolvimento, emoções e dificuldades podem
              aparecer por meio do comportamento, das brincadeiras, das relações e de
              mudanças percebidas na rotina.
            </p>
            <p>
              Por isso, a psicoterapia infantil precisa considerar a maneira
              particular como cada criança consegue se comunicar e compreender suas
              experiências.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que pode levar os responsáveis a buscar psicoterapia?"
            title="A procura pode acontecer diante de questões como:"
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {motivos.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Essas situações podem ter significados diferentes para cada criança e
            precisam ser compreendidas dentro de sua história e contexto.
          </p>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl bg-ink p-8 text-white sm:p-10">
            <p className="text-[11px] tracking-[0.16em] text-peach uppercase">
              Psicoterapia infantil
            </p>
            <h2 className="font-display mt-4 text-3xl font-medium">
              Acompanhamento terapêutico
            </h2>
            <p className="mt-5 leading-relaxed text-mist">
              A psicoterapia infantil acompanha questões emocionais, comportamentais
              e relacionais ao longo de um processo terapêutico.
            </p>
          </article>
          <article className="rounded-2xl bg-soft p-8 text-ink sm:p-10">
            <p className="text-[11px] tracking-[0.16em] uppercase opacity-70">
              Avaliação neuropsicológica
            </p>
            <h2 className="font-display mt-4 text-3xl font-medium">
              Processo de investigação
            </h2>
            <p className="mt-5 leading-relaxed opacity-85">
              Já a avaliação neuropsicológica é um processo de investigação indicado
              quando existem perguntas específicas sobre aspectos do funcionamento
              cognitivo, desenvolvimento, aprendizagem, atenção ou outras questões
              que precisam ser avaliadas.
            </p>
          </article>
        </Container>
        <Container className="mt-10">
          <SectionHeading title="Às vezes, a dúvida dos pais começa justamente aqui." />
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Se houver dúvida sobre qual caminho faz mais sentido, ela pode ser
            compreendida a partir da demanda apresentada.
          </p>
          <ButtonLink
            href="/avaliacao-neuropsicologica/infantil"
            variant="primary"
            className="mt-8"
          >
            Conheça a Avaliação Neuropsicológica Infantil
            <IconArrow />
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a psicoterapia infantil?"
            title="Para compreender uma criança, também é preciso conhecer o contexto em que ela vive."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo considera a idade, o desenvolvimento, a história e as
              necessidades da criança.
            </p>
            <p>
              Os responsáveis também fazem parte desse contexto e podem participar do
              processo conforme a necessidade do caso.
            </p>
            <p>
              O trabalho é construído de forma individualizada, respeitando a maneira
              como cada criança se comunica e se relaciona.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai acompanhar seu filho?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Experiência clínica também é saber que uma criança não pode ser
            compreendida apenas pelo comportamento que preocupa os adultos.
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
              Essa trajetória contribui para um olhar que considera não apenas a
              dificuldade apresentada, mas também o desenvolvimento, a história e o
              contexto de cada criança.
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
        title="Seu filho não precisa saber explicar perfeitamente o que está acontecendo para que vocês possam começar a compreender."
        description="Se você percebe mudanças ou dificuldades emocionais, comportamentais ou relacionais, entre em contato para saber mais sobre a psicoterapia infantil."
        modality="Atendimento presencial e online, conforme adequação ao atendimento."
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre psicoterapia infantil",
          external: true,
        }}
      />
    </>
  );
}
