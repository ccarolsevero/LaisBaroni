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
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psicoterapia Individual",
  description:
    "Psicoterapia para compreender o que você está vivendo — e o que talvez continue se repetindo.",
};

const infoMessage = "Olá, Laís. Gostaria de informações sobre psicoterapia.";

const caminhos = [
  {
    href: "/psicoterapia/autoconhecimento",
    icon: IconSearch,
    tone: "bg-peach text-ink",
    title: "Autoconhecimento e Desenvolvimento Emocional",
    lead: "Nem sempre é preciso estar mal para querer se compreender melhor.",
    text: "Para quem deseja conhecer melhor suas emoções, escolhas, necessidades, comportamentos e formas de se relacionar.",
    cta: "Quero me conhecer melhor",
    button: "secondary" as const,
  },
  {
    href: "/psicoterapia/ansiedade",
    icon: IconBrain,
    tone: "bg-mid text-white",
    title: "Ansiedade, Estresse e Sofrimento Emocional",
    lead: "Quando aquilo que você sente começa a ocupar espaço demais na sua vida.",
    text: "Ansiedade, crises, estresse, sobrecarga, alterações de humor e outros momentos de sofrimento emocional podem afetar a rotina, as relações e a forma como você se sente consigo.",
    cta: "Entenda como a psicoterapia pode ajudar",
    button: "ghost" as const,
  },
  {
    href: "/psicoterapia/relacionamentos",
    icon: IconChat,
    tone: "bg-ink text-white",
    title: "Relacionamentos e Padrões Emocionais",
    lead: "Quando as pessoas mudam, mas algumas histórias parecem se repetir.",
    text: "Dificuldade para colocar limites, dependência emocional, medo de abandono, conflitos ou relações que parecem seguir sempre o mesmo roteiro podem revelar padrões importantes da nossa história.",
    cta: "Quero entender meus padrões",
    button: "ghost" as const,
  },
  {
    href: "/psicoterapia/infantil",
    icon: IconChild,
    tone: "bg-soft text-ink",
    title: "Psicoterapia Infantil",
    lead: "Quando a criança ainda não consegue explicar em palavras tudo o que está vivendo.",
    text: "Mudanças de comportamento, dificuldades emocionais ou relacionais e situações vividas pela criança podem levar os responsáveis a buscar acompanhamento psicológico.",
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
      "A Terapia Cognitivo-Comportamental (TCC) e a Terapia do Esquema estão entre as principais referências que orientam o trabalho clínico da Laís.",
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
        title="Psicoterapia para compreender o que você está vivendo — e o que talvez continue se repetindo."
        description="Nem sempre quem procura terapia consegue dar um nome exato ao que está sentindo. Pode ser ansiedade, sobrecarga, dificuldades nos relacionamentos, um momento de mudança ou simplesmente o desejo de se conhecer melhor."
        extra="A psicoterapia é um espaço para compreender essas experiências dentro da sua história e construir novas formas de lidar com elas."
        pills={[
          "Laís Barone | Psicóloga desde 2008 | Mestre pela USP",
          "TCC • Terapia do Esquema • Psicopatologia",
        ]}
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre psicoterapia",
          external: true,
        }}
        secondary={{
          href: whatsappUrl(),
          label: "Fale comigo pelo WhatsApp",
          external: true,
        }}
      />

      <section className="bg-base py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="O que trouxe você até a psicoterapia?"
            title="Pessoas chegam à terapia por motivos diferentes. E nem sempre é preciso estar em crise para começar."
          />
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
                <p className="mt-4 font-medium leading-relaxed opacity-90">
                  {item.lead}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed opacity-85">
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

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como eu trabalho"
            title="Entender o que acontece é importante. Entender por que continua acontecendo pode mudar o caminho da terapia."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mid sm:text-lg">
            <p>
              Meu trabalho clínico é orientado principalmente pela Terapia
              Cognitivo-Comportamental (TCC) e pela Terapia do Esquema,
              considerando a história e as necessidades de cada pessoa.
            </p>
            <p>
              Mais do que olhar para uma dificuldade isolada, buscamos compreender
              emoções, pensamentos, comportamentos, relações e padrões que podem
              estar relacionados ao que você vive hoje.
            </p>
            <p>Não existe uma fórmula pronta para pessoas diferentes.</p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Terapia do Esquema"
            title="Algumas histórias mudam de personagem, mas parecem repetir o mesmo roteiro."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mid sm:text-lg">
            <p>
              Alguns padrões emocionais e relacionais são construídos ao longo da
              nossa história e podem continuar aparecendo mesmo quando já
              reconhecemos que nos fazem mal.
            </p>
            <p>
              A Terapia do Esquema ajuda a compreender essas repetições, as
              necessidades emocionais envolvidas e as formas que aprendemos a
              utilizar para lidar com elas.
            </p>
            <p>
              O objetivo não é apenas perceber o padrão, mas compreender por que
              ele existe e o que pode começar a ser construído de outra maneira.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a psicoterapia?"
            title="A terapia começa pela sua história, não por uma resposta pronta."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mid sm:text-lg">
            <p>
              Nos primeiros encontros, buscamos compreender o que levou você à
              psicoterapia, sua história e as dificuldades ou questões que fazem
              sentido trabalhar naquele momento.
            </p>
            <p>
              A partir disso, o processo é construído de maneira individualizada,
              respeitando as necessidades e o momento de cada pessoa.
            </p>
            <p>Atendimento presencial e online.</p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <Container className="max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-peach uppercase">
            Quem vai conduzir seu processo?
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[1.15] font-medium sm:text-5xl">
            Quase duas décadas de clínica ensinam que a primeira explicação nem
            sempre é a melhor.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
            <p>
              Sou Laís Barone, psicóloga desde 2008 e Mestre pela Universidade de
              São Paulo (USP).
            </p>
            <p>
              Minha formação inclui Terapia Cognitivo-Comportamental (TCC), Terapia
              do Esquema, Psicopatologia e Neuropsicologia pela USP.
            </p>
            <p>
              Essa trajetória me permite olhar para cada pessoa considerando o que
              ela vive hoje, mas também sua história, seus padrões emocionais e a
              maneira particular como aprendeu a lidar com suas experiências.
            </p>
          </div>
          <p className="mt-6 text-sm tracking-wide text-peach">
            Psicóloga desde 2008 • Mestre pela USP • TCC • Terapia do Esquema •
            Psicopatologia
          </p>
          <ButtonLink href="/sobre" variant="peach" className="mt-8">
            Conheça minha trajetória
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-base py-20 sm:py-24">
        <Container>
          <SectionHeading title="Dúvidas frequentes" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <ContactBand
        title="Você não precisa saber exatamente o que está acontecendo para começar a falar sobre isso."
        description="Se você está considerando iniciar psicoterapia para você ou buscando atendimento para seu filho, entre em contato para receber mais informações."
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre psicoterapia",
          external: true,
        }}
      />
    </>
  );
}
