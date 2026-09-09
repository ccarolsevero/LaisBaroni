import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import {
  IconArrow,
  IconBrain,
  IconChat,
  IconChild,
  IconSearch,
} from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Psicoterapia Individual",
  description:
    "Psicoterapia para compreender o que você está vivendo e o que talvez continue se repetindo.",
};

const caminhos = [
  {
    href: "/psicoterapia/autoconhecimento",
    icon: IconSearch,
    tone: "bg-peach text-ink",
    title: "Autoconhecimento e Desenvolvimento Emocional",
    text: "Para quem deseja conhecer melhor emoções, escolhas, necessidades e formas de se relacionar.",
    cta: "Quero me conhecer melhor",
    button: "secondary" as const,
  },
  {
    href: "/psicoterapia/ansiedade",
    icon: IconBrain,
    tone: "bg-mid text-white",
    title: "Ansiedade, Estresse e Sofrimento Emocional",
    text: "Ansiedade, crises, estresse e sobrecarga podem afetar a rotina, as relações e a forma como você se sente.",
    cta: "Entenda como a psicoterapia pode ajudar",
    button: "ghost" as const,
  },
  {
    href: "/psicoterapia/relacionamentos",
    icon: IconChat,
    tone: "bg-ink text-white",
    title: "Relacionamentos e Padrões Emocionais",
    text: "Limites, dependência emocional, medo de abandono ou relações que repetem o mesmo roteiro podem revelar padrões importantes.",
    cta: "Quero entender meus padrões",
    button: "ghost" as const,
  },
  {
    href: "/psicoterapia/infantil",
    icon: IconChild,
    tone: "bg-soft text-ink",
    title: "Psicoterapia Infantil",
    text: "Mudanças de comportamento, dificuldades emocionais ou relacionais podem levar os responsáveis a buscar acompanhamento.",
    cta: "Conheça a Psicoterapia Infantil",
    button: "secondary" as const,
  },
];

const faqs = [
  {
    question: "Preciso ter um diagnóstico para fazer psicoterapia?",
    answer:
      "Não. A psicoterapia também pode ser procurada para autoconhecimento, dificuldades emocionais ou relacionais, momentos de mudança e outras questões da vida.",
  },
  {
    question: "Preciso estar passando por uma crise para começar?",
    answer:
      "Não. Algumas pessoas chegam em momentos de sofrimento intenso; outras querem compreender melhor questões que vêm percebendo ao longo da vida.",
  },
  {
    question: "A Laís atende crianças?",
    answer:
      "Sim. A Laís também realiza psicoterapia infantil, com um trabalho adequado às necessidades e ao momento de desenvolvimento da criança.",
  },
  {
    question: "Qual abordagem é utilizada?",
    answer:
      "A TCC e a Terapia do Esquema estão entre as principais referências do trabalho clínico. A ACT também integra os estudos, e a Psicopatologia é parte importante da formação.",
  },
  {
    question: "A psicoterapia pode ser online?",
    answer:
      "Sim. Há atendimento presencial e online, considerando a adequação da modalidade ao atendimento.",
  },
];

export default function PsicoterapiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Psicoterapia individual"
        title="Psicoterapia para compreender o que você está vivendo e o que talvez continue se repetindo"
        description="Ansiedade, sobrecarga, dificuldades nos relacionamentos ou o desejo de se conhecer melhor podem levar alguém à psicoterapia. O processo ajuda a compreender essas experiências e desenvolver novas formas de lidar com elas."
        image={photos.psicoterapia}
      />

      <section className="bg-base py-12 sm:py-16">
        <Container>
          <SectionHeading title="O que trouxe você até a psicoterapia?" />
          <div className="mt-12 grid gap-3 lg:grid-cols-2">
            {caminhos.map((item) => (
              <article
                key={item.href}
                className={`flex flex-col rounded-2xl p-8 ${item.tone}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
                  <item.icon className="h-6 w-6" />
                </span>
                <h2 className="font-display mt-6 text-[1.85rem] leading-snug font-medium">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-85">
                  {item.text}
                </p>
                <ButtonLink
                  href={item.href}
                  variant={item.button}
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
            eyebrow="Como eu trabalho"
            title="Entender o que acontece é importante. Entender por que continua acontecendo pode mudar o caminho da terapia"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Meu trabalho é orientado principalmente pela TCC e pela Terapia do
              Esquema, considerando a história, os padrões emocionais, as
              necessidades e as particularidades de cada pessoa.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a psicoterapia?"
            title="A terapia começa pela sua história, não por uma resposta pronta"
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Nos primeiros encontros, compreendemos o que levou você à
              psicoterapia, sua história e o que faz sentido trabalhar naquele
              momento. O processo é individualizado. Atendimento presencial e
              online.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir seu processo?
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.2] font-medium sm:text-4xl">
            Quase duas décadas de clínica ensinam que a primeira explicação nem
            sempre é a melhor.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist sm:text-base">
            <p>
              Sou Laís Baroni, psicóloga e neuropsicóloga, com atuação clínica
              desde 2009. Formação em Neuropsicologia e Psicopatologia no IPq-USP,
              TCC e Terapia do Esquema no CETCC, e Reabilitação Cognitiva no INESP.
              A ACT integra meus estudos clínicos.
            </p>
          </div>
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
        title="Você não precisa saber exatamente o que está acontecendo para começar a falar sobre isso"
        description=""
      />
    </>
  );
}
