export const categories = [
  {
    slug: "neuropsicologia-e-avaliacao",
    label: "Neuropsicologia e Avaliação",
    description:
      "Avaliação neuropsicológica, atenção, memória, desenvolvimento, TDAH, Autismo e outras questões relacionadas ao funcionamento cognitivo.",
    tone: "bg-soft text-ink",
  },
  {
    slug: "saude-emocional",
    label: "Saúde Emocional",
    description:
      "Ansiedade, estresse, emoções, autocobrança, autoconhecimento e questões que atravessam a vida cotidiana.",
    tone: "bg-ink text-white",
  },
  {
    slug: "relacoes-e-padroes-emocionais",
    label: "Relações e Padrões Emocionais",
    description:
      "Relacionamentos, limites, necessidades emocionais, dependência emocional e padrões que parecem se repetir.",
    tone: "bg-mid text-white",
  },
  {
    slug: "infancia-e-desenvolvimento",
    label: "Infância e Desenvolvimento",
    description:
      "Comportamento, emoções, aprendizagem e questões que podem surgir ao longo do desenvolvimento infantil.",
    tone: "bg-peach text-ink",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function isCategorySlug(value: string): value is CategorySlug {
  return categories.some((category) => category.slug === value);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryLabel(slug: string) {
  return getCategory(slug)?.label ?? slug;
}
