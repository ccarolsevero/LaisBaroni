import { categories } from "./blog";

export const site = {
  name: "Laís Baroni",
  fullName: "Laís Beringhs Baroni",
  role: "Psicóloga e Neuropsicóloga",
  crp: "CRP 06/95581",
  /** Atuação profissional e clínica */
  since: 2009,
  graduatedYear: 2008,
  privatePracticeSince: "março de 2020",
  tagline:
    "Avaliação neuropsicológica e psicoterapia para compreender além do que aparece à primeira vista.",
  address: "Avenida Vereador José Diniz, 3651, cj. 74",
  city: "São Paulo",
  modality: "Atendimento presencial e online",
  email: "laispsico.baroni@gmail.com",
  services: [
    "Avaliação Neuropsicológica",
    "Psicoterapia Individual",
    "Supervisão Clínica",
  ] as const,
  credentials: [
    "Neuropsicologia e Psicopatologia — IPq-USP",
    "TCC e Terapia do Esquema — CETCC",
    "Reabilitação Cognitiva — INESP",
    "Pesquisa de Mestrado em Psicologia — IPq-USP",
  ] as const,
  pills: {
    neuro:
      "Laís Baroni | Psicóloga e Neuropsicóloga | Atuação clínica desde 2009",
    therapy:
      "Laís Baroni | Psicóloga e Neuropsicóloga | Atuação clínica desde 2009",
    supervision:
      "Laís Baroni | Psicóloga e Neuropsicóloga | Atuação clínica desde 2009",
    mestrado: "Pesquisa de Mestrado em Psicologia — IPq-USP",
  },
  credentialLines: {
    neuro:
      "Neuropsicologia e Psicopatologia — IPq-USP • TCC e Terapia do Esquema — CETCC • Reabilitação Cognitiva — INESP • Atuação clínica desde 2009",
    therapy:
      "Atuação clínica desde 2009 • Neuropsicologia e Psicopatologia — IPq-USP • TCC • Terapia do Esquema • ACT • Pesquisa de Mestrado em Psicologia — USP",
    supervision:
      "Atuação clínica desde 2009 • TCC • Terapia do Esquema • ACT • Psicopatologia • Neuropsicologia",
  },
  whatsapp: {
    number: "5511989678203",
    display: "(11) 98967-8203",
    defaultMessage:
      "Olá, Laís. Gostaria de saber mais sobre avaliação neuropsicológica, psicoterapia ou supervisão clínica.",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Vereador+Jos%C3%A9+Diniz+3651+S%C3%A3o+Paulo",
  mapsEmbed:
    "https://maps.google.com/maps?q=Avenida%20Vereador%20Jos%C3%A9%20Diniz%203651%20S%C3%A3o%20Paulo&z=16&output=embed",
};

export type NavChild = { href: string; label: string };
export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { href: "/", label: "Início" },
  {
    href: "/avaliacao-neuropsicologica",
    label: "Avaliação Neuropsicológica",
    children: [
      { href: "/avaliacao-neuropsicologica/infantil", label: "Infantil" },
      { href: "/avaliacao-neuropsicologica/adultos", label: "Adultos" },
      { href: "/avaliacao-neuropsicologica/idosos", label: "Idosos" },
      { href: "/avaliacao-neuropsicologica/tdah", label: "TDAH" },
      { href: "/avaliacao-neuropsicologica/autismo", label: "Autismo / TEA" },
    ],
  },
  {
    href: "/psicoterapia",
    label: "Psicoterapia",
    children: [
      { href: "/psicoterapia", label: "Individual" },
      { href: "/psicoterapia/autoconhecimento", label: "Autoconhecimento" },
      { href: "/psicoterapia/ansiedade", label: "Ansiedade" },
      { href: "/psicoterapia/relacionamentos", label: "Relacionamentos" },
      { href: "/psicoterapia/infantil", label: "Infantil" },
    ],
  },
  { href: "/supervisao-clinica", label: "Supervisão Clínica" },
  { href: "/sobre", label: "Sobre a Laís" },
  {
    href: "/blog",
    label: "Blog",
    children: [
      { href: "/blog", label: "Todos os conteúdos" },
      ...categories.map((category) => ({
        href: `/blog/categoria/${category.slug}`,
        label: category.label,
      })),
    ],
  },
  { href: "/contato", label: "Contato" },
];

export function whatsappUrl(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
