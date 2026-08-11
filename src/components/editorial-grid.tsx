import Link from "next/link";
import {
  LineBrain,
  LineCat,
  LineDesk,
  LineLeaves,
  LineMarks,
  LineSofa,
  LineSun,
} from "./illustrations";
import { IconArrow } from "./icons";

function Pill({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase ${
        light ? "bg-white/18 text-white" : "bg-white/75 text-ink"
      }`}
    >
      {children}
    </span>
  );
}

export function EditorialGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Link
        href="/avaliacao-neuropsicologica/tdah"
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-soft p-7 text-ink sm:min-h-[320px]"
      >
        <LineSun className="pointer-events-none absolute top-6 right-6 h-16 w-16 text-ink/25" />
        <Pill>Vale investigar?</Pill>
        <div>
          <p className="font-display text-[1.85rem] leading-[1.2] font-medium">
            Você se distrai muito. Isso significa TDAH?
          </p>
          <span className="mt-5 inline-flex text-ink/70 transition group-hover:translate-x-1">
            <IconArrow />
          </span>
        </div>
      </Link>

      <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-peach p-7 sm:min-h-[320px]">
        <LineDesk className="pointer-events-none absolute top-8 right-4 h-36 w-36 text-ink/15" />
        <LineLeaves className="pointer-events-none absolute -bottom-4 -left-2 h-28 w-28 text-ink/20" />
        <p className="font-display text-2xl font-medium text-ink">Laís Barone</p>
        <p className="mt-1 text-sm tracking-[0.12em] text-ink/70 uppercase">
          Psicóloga e neuropsicóloga
        </p>
      </div>

      <Link
        href="/psicoterapia/relacionamentos"
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-ink p-7 text-white sm:min-h-[320px]"
      >
        <LineSofa className="pointer-events-none absolute right-4 bottom-16 h-24 w-36 text-white/15" />
        <Pill light>Esquemas nas relações</Pill>
        <div>
          <p className="font-display text-[1.7rem] leading-[1.2] font-medium">
            Por que a gente repete justamente aquilo que jurou que nunca faria?
          </p>
          <span className="mt-5 inline-flex text-peach transition group-hover:translate-x-1">
            <IconArrow />
          </span>
        </div>
      </Link>

      <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-mid p-7 text-white sm:min-h-[320px]">
        <LineMarks className="h-12 w-16 text-peach/90" />
        <p className="font-display text-[1.75rem] leading-[1.25] font-medium">
          A experiência clínica não é sobre saber tudo. É sobre fazer melhores
          perguntas.
        </p>
      </div>

      <Link
        href="/psicoterapia/ansiedade"
        className="group flex min-h-[280px] flex-col justify-between rounded-2xl bg-white p-7 text-ink sm:min-h-[320px]"
      >
        <Pill>Não é tão simples assim</Pill>
        <div>
          <p className="font-display text-[1.75rem] leading-[1.2] font-medium">
            Ansiedade não é frescura e não é falta de força de vontade.
          </p>
          <span className="mt-5 inline-flex text-ink/60 transition group-hover:translate-x-1">
            <IconArrow />
          </span>
        </div>
      </Link>

      <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-mist p-7 sm:min-h-[320px]">
        <LineLeaves className="pointer-events-none absolute top-6 right-6 h-32 w-32 text-mid/30" />
        <p className="font-display text-2xl font-medium text-ink">Olhar clínico</p>
        <p className="mt-1 text-sm tracking-[0.12em] text-mid uppercase">
          Ciência e escuta
        </p>
      </div>

      <Link
        href="/blog"
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-7 text-ink sm:min-h-[320px]"
      >
        <LineCat className="absolute top-6 right-6 h-16 w-16 text-mid/50" />
        <Pill>O que os gatos me ajudam a explicar</Pill>
        <div>
          <p className="font-display text-[1.65rem] leading-[1.2] font-medium">
            Os gatos nos ensinam que limites também são uma forma de cuidado.
          </p>
          <span className="mt-5 inline-flex text-ink/60 transition group-hover:translate-x-1">
            <IconArrow />
          </span>
        </div>
      </Link>

      <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-peach/80 p-7 sm:min-h-[320px]">
        <LineSun className="pointer-events-none absolute top-8 left-8 h-24 w-24 text-ink/20" />
        <p className="font-display text-2xl font-medium text-ink">Presença</p>
        <p className="mt-1 text-sm tracking-[0.12em] text-ink/70 uppercase">
          Atendimento presencial e online
        </p>
      </div>

      <Link
        href="/avaliacao-neuropsicologica"
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-soft p-7 text-ink sm:min-h-[320px]"
      >
        <LineBrain className="pointer-events-none absolute -right-4 -bottom-2 h-36 w-36 text-ink/15" />
        <LineMarks className="h-10 w-14 text-ink/35" />
        <div>
          <p className="font-display text-[1.55rem] leading-[1.25] font-medium">
            Avaliar é mais do que aplicar testes. É integrar história,
            comportamento e funcionamento cognitivo.
          </p>
          <span className="mt-5 inline-flex text-ink/70 transition group-hover:translate-x-1">
            <IconArrow />
          </span>
        </div>
      </Link>
    </div>
  );
}
