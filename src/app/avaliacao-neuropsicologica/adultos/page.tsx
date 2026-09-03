import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { FaqList } from "@/components/faq-list";
import { IconArrow } from "@/components/icons";
import { LineMarks } from "@/components/illustrations";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliação Neuropsicológica em Adultos",
  description:
    "Algumas dificuldades acompanham você há anos. Outras começaram agora. Entender essa diferença importa.",
};

const infoMessage =
  "Olá, Laís. Gostaria de informações sobre a avaliação neuropsicológica em adultos.";

const aspectos = [
  "Atenção",
  "Memória",
  "Linguagem",
  "Funções executivas",
  "Raciocínio",
  "Aprendizagem e outras funções cognitivas",
];

const faqs = [
  {
    question: "Preciso ter uma suspeita de diagnóstico para procurar uma avaliação?",
    answer:
      "Não. A busca pode começar justamente porque existem dificuldades ou mudanças que você deseja compreender melhor.",
  },
  {
    question: "A avaliação pode investigar TDAH em adultos?",
    answer:
      "Quando houver indicação, o TDAH pode estar entre as hipóteses consideradas no processo de investigação. A avaliação não parte, porém, da obrigação de confirmar essa hipótese.",
  },
  {
    question: "E Autismo em adultos?",
    answer:
      "Dúvidas relacionadas ao funcionamento e à história de desenvolvimento também podem levar adultos a buscar uma avaliação. A investigação considera o conjunto das informações, não características isoladas.",
  },
  {
    question: "Fazer testes online é a mesma coisa?",
    answer:
      "Não. Testes isolados não equivalem a uma avaliação neuropsicológica, que envolve um processo clínico mais amplo de investigação e interpretação.",
  },
  {
    question: "Nunca fui avaliado quando criança. Ainda posso fazer uma avaliação?",
    answer:
      "Sim. Muitos adultos procuram avaliação justamente para compreender questões que não foram investigadas anteriormente.",
  },
];

export default function AvaliacaoAdultosPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação neuropsicológica em adultos"
        title="Algumas dificuldades acompanham você há anos. Outras começaram agora. Entender essa diferença importa."
        description="Dificuldades de atenção, memória, organização ou funcionamento no dia a dia podem ter diferentes explicações."
        extra="A avaliação neuropsicológica em adultos ajuda a investigar essas questões de forma cuidadosa, considerando seu funcionamento cognitivo, sua história e o contexto em que essas dificuldades aparecem."
        pills={[
          ...site.credentials,
        ]}
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
            eyebrow="O que leva um adulto a procurar uma avaliação?"
            title="“Eu sempre fui assim ou alguma coisa mudou?”"
          />
          <div className="space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              Talvez você tenha dificuldade para se concentrar, esqueça compromissos,
              perca objetos, comece tarefas e não consiga terminá-las ou sinta que se
              organizar exige um esforço muito maior do que deveria.
            </p>
            <p>
              Em outros casos, a dúvida aparece quando a pessoa percebe mudanças na
              memória, atenção ou em outras habilidades que antes não chamavam
              atenção.
            </p>
            <p>
              A questão não é reconhecer um sintoma isolado. É entender como essas
              dificuldades aparecem na sua história e o que pode estar relacionado a
              elas.
            </p>
            <p>
              A avaliação também pode ser útil quando há descompasso entre o potencial
              cognitivo e o impacto que suas dificuldades têm na funcionalidade, nos
              estudos, no trabalho, na organização da rotina e/ou na autonomia. A
              investigação ajuda a compreender quais processos podem estar
              contribuindo para essa diferença e como eles repercutem na vida
              cotidiana.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="O que a avaliação pode investigar?"
            title="A pergunta não é apenas “o que está difícil?”, mas “como você funciona?”."
          />
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            De acordo com a necessidade de cada caso, podem ser investigados aspectos
            como:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aspectos.map((item) => (
              <li key={item} className="rounded-2xl bg-mist px-6 py-5 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed hero-copy sm:text-base">
            Essas informações são interpretadas considerando também a história, o
            contexto e a questão que motivou a avaliação.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="“Será que eu tenho TDAH? Autismo? Ou existe outra explicação?”" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>Chegar com uma hipótese é diferente de chegar com uma conclusão.</p>
            <p>
              Muitos adultos procuram avaliação depois de se reconhecerem em
              conteúdos sobre TDAH ou Autismo, receberem uma sugestão de outro
              profissional ou começarem a olhar de outra maneira para dificuldades
              que os acompanham há anos.
            </p>
            <p>
              Essas hipóteses podem ser investigadas, mas características isoladas
              não são suficientes para chegar a uma conclusão.
            </p>
            <p>A avaliação existe justamente para ampliar esse olhar.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/avaliacao-neuropsicologica/tdah" variant="primary">
              Avaliação e TDAH
              <IconArrow />
            </ButtonLink>
            <ButtonLink href="/avaliacao-neuropsicologica/autismo" variant="secondary">
              Avaliação e Autismo
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Como funciona a avaliação em adultos?"
            title="Você não chega para provar que tem ou não tem um diagnóstico."
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed hero-copy sm:text-base">
            <p>
              O processo começa pela compreensão da sua história, das dificuldades
              percebidas e da pergunta que motivou a avaliação.
            </p>
            <p>
              A partir disso, são selecionados procedimentos e instrumentos adequados
              à investigação. Depois, os dados obtidos são analisados em conjunto.
            </p>
            <p>
              Ao final, acontece a devolutiva, com a apresentação dos resultados,
              conclusões e possíveis orientações.
            </p>
          </div>
          <blockquote className="mt-12">
            <LineMarks className="mb-4 h-10 w-14 text-ink/35" />
            <p className="font-display text-3xl leading-snug font-medium text-ink">
              A avaliação não procura apenas um nome. Procura compreender o que os
              dados significam na sua história.
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
            Um resultado pode trazer números. A experiência clínica ajuda a
            compreender o que eles significam.
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
              Minha experiência clínica e acadêmica orienta uma avaliação que
              integra os resultados dos instrumentos à história, ao contexto e às
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
        title="Você não precisa chegar com a resposta. Pode chegar com a dúvida."
        description="Se existem dificuldades no seu dia a dia que você gostaria de compreender melhor, entre em contato para receber informações sobre a avaliação neuropsicológica em adultos."
        primary={{
          href: whatsappUrl(infoMessage),
          label: "Quero informações sobre a avaliação",
          external: true,
        }}
      />
    </>
  );
}
