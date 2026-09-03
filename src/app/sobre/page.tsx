import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import {
  IconArrow,
  IconBrain,
  IconChat,
  IconGraduate,
} from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Laís",
  description:
    "Quase duas décadas de clínica ensinam que compreender uma pessoa exige mais do que encontrar um nome para o que ela sente.",
};

const formacao = [
  "Graduação em Psicologia concluída em dezembro de 2008",
  "Atuação profissional e clínica desde 2009",
  `Consultório particular desde ${site.privatePracticeSince}`,
  "Especializações em Neuropsicologia e Psicopatologia — IPq-USP",
  "Formações em TCC e Terapia do Esquema — CETCC",
  "Formação em Reabilitação Cognitiva — INESP",
  "Pesquisa de Mestrado em Psicologia — IP-USP (ingresso em 2019)",
  site.crp,
];

const praticas = [
  {
    href: "/avaliacao-neuropsicologica",
    icon: IconBrain,
    tone: "bg-soft text-ink",
    title: "Avaliação Neuropsicológica",
    text: "Investigar com cuidado para compreender o funcionamento cognitivo, emocional e comportamental para além de resultados isolados.",
    cta: "Conheça a Avaliação Neuropsicológica",
  },
  {
    href: "/psicoterapia",
    icon: IconChat,
    tone: "bg-ink text-white",
    title: "Psicoterapia",
    text: "Compreender emoções, experiências e padrões que influenciam a maneira como cada pessoa se relaciona consigo, com os outros e com aquilo que vive.",
    cta: "Conheça a Psicoterapia",
  },
  {
    href: "/supervisao-clinica",
    icon: IconGraduate,
    tone: "bg-mid text-white",
    title: "Supervisão Clínica",
    text: "Compartilhar experiência e conhecimento para ampliar o raciocínio clínico e a compreensão de casos.",
    cta: "Conheça a Supervisão",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Laís Baroni"
        title="Quase duas décadas de clínica ensinam que compreender uma pessoa exige mais do que encontrar um nome para o que ela sente"
        description="Sou Laís Beringhs Baroni, psicóloga e neuropsicóloga, com atuação profissional e clínica desde 2009."
        extra="Minha trajetória foi construída entre clínica, estudo e diferentes formas de compreender o funcionamento humano, sempre com o compromisso de olhar para cada pessoa dentro da sua história e do seu contexto."
        pills={[...site.credentials]}
        image={photos.sobre}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-soft lg:mx-0 lg:max-w-none">
            <Image
              src={photos.trajetoria.src}
              alt={photos.trajetoria.alt}
              fill
              className="object-contain object-center sm:object-cover sm:object-top"
              sizes="(max-width: 1024px) 80vw, 35vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Minha trajetória"
              title="A experiência não trouxe respostas prontas. Trouxe perguntas melhores"
            />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
              <p>
                Concluí a graduação em Psicologia em dezembro de 2008 e atuo
                profissional e clinicamente desde 2009. Em março de 2020, iniciei o
                consultório particular.
              </p>
              <p>
                Ao longo de aproximadamente seis anos no Instituto de Psiquiatria da
                USP (IPq-USP), reuni as especializações em Neuropsicologia e
                Psicopatologia, atuei como monitora e colaboradora, tive experiência
                em supervisão clínica e realizei a coleta de dados da pesquisa de
                mestrado.
              </p>
              <p>
                Cada uma dessas vivências ampliou meu olhar sobre aquilo que encontro
                na prática: aspectos cognitivos, emocionais, comportamentais e
                relacionais que não podem ser compreendidos de forma isolada.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Formação e experiência"
            title={
              <>
                Conhecimento técnico importa. Saber{" "}
                <span className="whitespace-nowrap">integrá-lo</span> à
                realidade de cada pessoa também
              </>
            }
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {formacao.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Pesquisa de mestrado"
            title="Avaliação Neuropsicológica da Impulsividade em Pacientes com Epilepsia"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Em 2019, ingressei na Pesquisa de Mestrado em Psicologia no Instituto
              de Psicologia da USP (IP-USP), no Programa de Pós-Graduação em
              Psicologia Escolar e do Desenvolvimento Humano, Departamento de
              Psicologia da Aprendizagem, do Desenvolvimento e da Personalidade
              (PSA), sob orientação do Prof. Dr. Daniel Fuentes.
            </p>
            <p>
              A pesquisa investigou impulsividade e funcionamento executivo em
              pacientes com epilepsia, incluindo tomada de decisão, controle
              inibitório, planejamento e flexibilidade cognitiva, na área temática
              de Neuropsicologia, Epilepsia, Impulsividade e Funções Executivas.
            </p>
            <p>
              Apresento essa trajetória como pesquisa de mestrado, sem atribuição do
              título de Mestre.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Docência e supervisão"
            title="Ensinar e supervisionar também fazem parte da minha prática"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Sou professora e supervisora do curso de Neuropsicologia do CETCC, com
              docência também em módulos de Terapia Focada nos Esquemas. Atuo como
              supervisora clínica no INESP e no IPq-USP.
            </p>
            <p>
              Também realizei supervisão de psicólogos clínicos angolanos em programa
              intensivo de formação na Beneficência Portuguesa, em curso coordenado
              pelo Prof. Dr. Daniel Fuentes.
            </p>
            <p>
              A ACT (Terapia de Aceitação e Compromisso) integra meus estudos e
              conhecimentos clínicos, sem se configurar como pós-graduação ou
              especialização formal.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-peach py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="A forma de trabalhar"
            title="Uma mesma dificuldade pode contar histórias completamente diferentes"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Ao longo dos anos, fui aprendendo a não olhar para uma queixa de forma
              isolada.
            </p>
            <p>
              Uma dificuldade de atenção não conta toda a história. Um diagnóstico
              não resume uma pessoa. E um padrão emocional não existe separado das
              experiências que ajudaram a construí-lo.
            </p>
            <p>
              Por isso, meu trabalho busca integrar conhecimento técnico, história,
              contexto e individualidade, seja em uma avaliação neuropsicológica, na
              psicoterapia ou na discussão de um caso em supervisão.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Na prática"
            title="Três formas de colocar esse olhar em prática"
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {praticas.map((item) => (
              <article
                key={item.href}
                className={`flex flex-col rounded-2xl p-8 ${item.tone}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-8 text-[1.85rem] leading-snug font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-85">
                  {item.text}
                </p>
                <ButtonLink
                  href={item.href}
                  variant={item.href === "/avaliacao-neuropsicologica" ? "secondary" : "ghost"}
                  className="mt-8 self-start"
                >
                  {item.cta}
                  <IconArrow />
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="O que orienta meu trabalho"
            title="Técnica para investigar. Experiência para interpretar. Escuta para compreender quem está por trás da queixa"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>Não acredito em uma forma única de compreender pessoas diferentes.</p>
            <p>
              Meu trabalho é construído a partir das particularidades de cada caso,
              integrando minha experiência clínica às referências teóricas que
              fizeram parte da minha formação.
            </p>
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              Antes de procurar uma resposta, é preciso compreender bem a pergunta.
            </p>
          </div>
        </Container>
      </section>

      <ContactBand
        title="Se você chegou até aqui para conhecer quem estará do outro lado, agora conhece um pouco da trajetória que sustenta meu trabalho"
        description="Entre em contato para saber mais sobre avaliação neuropsicológica, psicoterapia individual ou supervisão clínica."
      />
    </>
  );
}
