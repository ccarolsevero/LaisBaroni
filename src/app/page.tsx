import { ButtonLink } from "@/components/button-link";
import { ContactBand } from "@/components/contact-band";
import { EditorialGrid } from "@/components/editorial-grid";
import {
  IconArrow,
  IconBrain,
  IconChat,
  IconGraduate,
  IconWhatsApp,
} from "@/components/icons";
import { LineMarks } from "@/components/illustrations";
import { Container, Pill, SectionHeading } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

const areas = [
  {
    href: "/avaliacao-neuropsicologica",
    icon: IconBrain,
    tone: "bg-soft text-ink",
    pill: "Avaliação",
    title: "Avaliação Neuropsicológica",
    lead: "Quando existem dúvidas, investigar com cuidado faz diferença.",
    text: "A avaliação neuropsicológica busca compreender diferentes aspectos do funcionamento cognitivo, emocional e comportamental, considerando a história de cada pessoa e diferentes fontes de informação — não apenas o resultado de testes isolados.",
    cta: "Conheça a Avaliação Neuropsicológica",
  },
  {
    href: "/psicoterapia",
    icon: IconChat,
    tone: "bg-ink text-white",
    pill: "Psicoterapia",
    title: "Psicoterapia Individual",
    lead: "Entender o que acontece nem sempre é suficiente para deixar de repetir.",
    text: "Na psicoterapia, olhamos para emoções, relações, necessidades e padrões que foram sendo construídos ao longo da vida e que podem continuar influenciando escolhas, comportamentos e vínculos no presente.",
    cta: "Conheça a Psicoterapia",
  },
  {
    href: "/supervisao-clinica",
    icon: IconGraduate,
    tone: "bg-mid text-white",
    pill: "Supervisão",
    title: "Supervisão Clínica",
    lead: "A prática clínica também se constrói quando aprendemos a olhar melhor para cada caso.",
    text: "A supervisão é um espaço de discussão e reflexão para profissionais que desejam aprofundar o raciocínio clínico, ampliar possibilidades de compreensão e pensar com mais cuidado sobre a condução de seus casos.",
    cta: "Conheça a Supervisão Clínica",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <div className="pointer-events-none absolute -top-28 right-[-5rem] h-80 w-80 rounded-full bg-soft/55" />
        <div className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-72 w-72 rounded-full bg-peach/70" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.25fr_0.95fr] lg:items-end lg:py-24">
          <div>
            <Pill>Laís Barone</Pill>
            <h1 className="font-display mt-6 max-w-3xl text-[2.45rem] leading-[1.12] font-medium text-balance sm:text-6xl">
              Avaliação neuropsicológica e psicoterapia para compreender além do
              que aparece à primeira vista.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-mid sm:text-lg">
              Sou Laís Barone, psicóloga e neuropsicóloga, com atuação desde 2008.
              Meu trabalho une experiência clínica, conhecimento técnico e um olhar
              individualizado para compreender cada pessoa em sua história e
              contexto.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/80 px-3.5 py-1.5 text-[11px] tracking-[0.08em] text-ink uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-mid">{site.services.join(" • ")}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#atuacao" variant="primary">
                Conheça meu trabalho
              </ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="secondary" external>
                <IconWhatsApp />
                Fale comigo pelo WhatsApp
              </ButtonLink>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-ink p-8 text-white sm:p-10">
            <LineMarks className="mb-6 h-12 w-16 text-peach" />
            <p className="font-display text-[1.85rem] leading-snug font-medium">
              A experiência clínica não é sobre saber tudo. É sobre fazer melhores
              perguntas.
            </p>
            <div className="mt-10 space-y-1 text-sm text-mist">
              <p className="tracking-[0.16em] text-peach uppercase">{site.crp}</p>
              <p>{site.modality}</p>
              <p>{site.address}</p>
            </div>
          </aside>
        </Container>
      </section>

      <section id="atuacao" className="bg-base py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Áreas de atuação"
            title="Diferentes caminhos para diferentes necessidades."
            description="Meu trabalho acontece em três frentes, cada uma com objetivos e processos próprios."
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.href}
                className={`flex flex-col rounded-2xl p-8 ${area.tone}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
                  <area.icon className="h-6 w-6" />
                </span>
                <p className="mt-8 text-[10px] font-medium tracking-[0.16em] uppercase opacity-70">
                  {area.pill}
                </p>
                <h3 className="font-display mt-3 text-[1.85rem] leading-snug font-medium">
                  {area.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed opacity-85">{area.lead}</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed opacity-80">{area.text}</p>
                <ButtonLink
                  href={area.href}
                  variant={area.href === "/psicoterapia" || area.href === "/supervisao-clinica" ? "ghost" : "secondary"}
                  className="mt-8 self-start bg-white/15"
                >
                  {area.cta}
                  <IconArrow />
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <div className="rounded-2xl bg-soft p-10 text-ink">
            <p className="text-[10px] tracking-[0.18em] uppercase opacity-70">Desde 2008</p>
            <p className="font-display mt-4 text-5xl leading-none font-medium">
              Quase duas décadas
            </p>
            <p className="mt-5 text-base leading-relaxed opacity-85">
              de atuação clínica, unindo ciência e um olhar que não se limita ao
              sintoma.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Sobre Laís Barone"
              title="Uma trajetória construída entre ciência, experiência clínica e um olhar que não se limita ao sintoma."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-mid">
              <p>
                Sou psicóloga desde 2008, Mestre pela Universidade de São Paulo
                (USP) e tenho formação em Neuropsicologia pela USP, além de formação
                em Terapia Cognitivo-Comportamental (TCC), Terapia do Esquema e
                Psicopatologia.
              </p>
              <p>
                Ao longo de quase duas décadas de atuação, fui construindo uma forma
                de trabalhar que une conhecimento técnico e experiência clínica sem
                perder de vista algo essencial: uma mesma dificuldade pode ter
                significados e explicações muito diferentes de uma pessoa para outra.
              </p>
              <p>
                Por isso, meu trabalho considera não apenas aquilo que aparece como
                queixa ou sintoma, mas também a história, o contexto e as
                particularidades de quem está diante de mim.
              </p>
            </div>
            <ButtonLink href="/sobre" variant="primary" className="mt-8">
              Conheça minha trajetória
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-peach py-20 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            align="center"
            eyebrow="Um pouco sobre a forma como trabalho"
            title="A mesma queixa pode contar histórias completamente diferentes."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-ink/80">
            Dificuldade de concentração nem sempre tem a mesma explicação.
            Esquecimentos podem acontecer por diferentes motivos. Um comportamento
            isolado não define uma pessoa. E compreender racionalmente um padrão nem
            sempre é suficiente para conseguir mudá-lo.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-ink/80">
            Por isso, meu trabalho não começa pela tentativa de encaixar alguém em
            uma resposta pronta. Começa por uma pergunta:
          </p>
          <blockquote className="mt-10 text-center">
            <LineMarks className="mx-auto mb-4 h-10 w-14 text-ink/40" />
            <p className="font-display text-4xl leading-snug font-medium text-ink sm:text-5xl">
              O que precisamos compreender melhor aqui?
            </p>
          </blockquote>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-ink/80">
            É a partir dessa compreensão que conduzo meu trabalho em avaliação
            neuropsicológica, psicoterapia e supervisão clínica.
          </p>
        </Container>
      </section>

      <section className="bg-base py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Psicologia para quem quer compreender além das respostas rápidas."
            description="No blog, compartilho reflexões e conteúdos sobre Neuropsicologia, avaliação neuropsicológica, relações, padrões emocionais, psicopatologia e prática clínica, traduzindo assuntos complexos para uma linguagem mais próxima da vida real."
          />
          <div className="mt-12">
            <EditorialGrid />
          </div>
          <div className="mt-10">
            <ButtonLink href="/blog" variant="primary">
              Acesse o blog
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
