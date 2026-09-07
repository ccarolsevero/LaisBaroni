export type TextType = {
  id: string;
  label: string;
  hint: string;
  titlePlaceholder: string;
  excerptPlaceholder: string;
  template: string;
};

export const categories = [
  {
    slug: "neuropsicologia-e-avaliacao",
    label: "Neuropsicologia e Avaliação",
    description:
      "Avaliação neuropsicológica, atenção, memória, TDAH, Autismo e outras questões do funcionamento cognitivo.",
    tone: "bg-soft text-ink",
    textTypes: [
      {
        id: "mito-investigacao",
        label: "Mito e investigação",
        hint: "Parte de uma frase comum e mostra por que um sinal isolado não fecha um diagnóstico.",
        titlePlaceholder: "Você se distrai muito. Isso significa TDAH?",
        excerptPlaceholder:
          "Características isoladas não são suficientes para chegar a uma conclusão. Distração, esquecimentos e tarefas inacabadas podem ter explicações diferentes.",
        template: `## A pergunta que costuma chegar

[Escreva a frase ou a dúvida que as pessoas trazem.]

## Por que isso não basta

[Mostre que um sinal isolado pode ter explicações diferentes.]

## O que a avaliação considera

[Fale de história, contexto e o conjunto das informações — não de um teste sozinho.]
`,
      },
      {
        id: "como-funciona",
        label: "Como a avaliação funciona",
        hint: "Explica o processo: queixa, história, instrumentos e devolutiva.",
        titlePlaceholder:
          "Um teste mostra uma parte. Uma avaliação precisa compreender o conjunto",
        excerptPlaceholder:
          "Testes e instrumentos fazem parte do processo, mas não são interpretados de forma isolada. História e contexto também entram na compreensão.",
        template: `## Avaliar não é só aplicar testes

[Abra com a diferença entre um resultado isolado e uma avaliação.]

## Por onde o processo começa

[Queixa, história e a pergunta que motivou a busca.]

## O que acontece ao final

[Devolutiva, orientação e o que os resultados significam na vida da pessoa.]
`,
      },
      {
        id: "quando-investigar",
        label: "Quando vale investigar",
        hint: "Ajuda a família ou o adulto a reconhecer dúvidas que merecem um olhar mais atento.",
        titlePlaceholder: "Nem toda dificuldade significa um diagnóstico",
        excerptPlaceholder:
          "Algumas perguntas merecem ser investigadas. A avaliação não parte de um diagnóstico pronto: ela investiga o que pode estar por trás daquilo que está sendo observado.",
        template: `## Quando a dúvida começa a ocupar espaço

[Descreva sinais no cotidiano, na escola, no trabalho ou na autonomia.]

## O que isso não precisa significar

[Deixe claro que investigar não é o mesmo que rotular.]

## Para quem este caminho pode fazer sentido

[Infância, vida adulta ou envelhecimento — conforme o recorte do texto.]
`,
      },
    ],
  },
  {
    slug: "saude-emocional",
    label: "Saúde Emocional",
    description:
      "Ansiedade, estresse, emoções, autocobrança e questões que atravessam o cotidiano.",
    tone: "bg-ink text-white",
    textTypes: [
      {
        id: "ansiedade-sofrimento",
        label: "Ansiedade e sofrimento",
        hint: "Nomeia o que a pessoa sente sem reduzir tudo a um rótulo.",
        titlePlaceholder: "Ansiedade não é frescura e não é falta de força de vontade",
        excerptPlaceholder:
          "Nem toda dificuldade emocional se resolve com esforço. Compreender o que acontece no corpo e nas relações muda o caminho do cuidado.",
        template: `## Quando a mente não desliga

[Descreva preocupação, alerta, crises ou sobrecarga no cotidiano.]

## O que merece atenção

[Intensidade, frequência e impacto — não a busca por um nome pronto.]

## Como a psicoterapia pode ajudar

[Olhar o que se sente, o contexto e as formas de lidar que foram aprendidas.]
`,
      },
      {
        id: "mesma-queixa",
        label: "A mesma queixa, outras histórias",
        hint: "Mostra que a mesma queixa pode ter explicações diferentes.",
        titlePlaceholder: "A mesma queixa pode contar histórias completamente diferentes",
        excerptPlaceholder:
          "Dificuldade de concentração nem sempre tem a mesma explicação. O trabalho começa por compreender a pergunta, não por encaixar uma resposta pronta.",
        template: `## A queixa que parece a mesma

[Traga um exemplo: concentração, cansaço, irritação, desânimo.]

## O que pode estar por trás

[Diferentes histórias, contextos e necessidades.]

## Por que o caminho não começa pela resposta

[A clínica investiga a pergunta antes de fechar uma conclusão.]
`,
      },
      {
        id: "autoconhecimento",
        label: "Autoconhecimento",
        hint: "Para quem quer se compreender melhor, mesmo sem estar em crise.",
        titlePlaceholder: "Você não precisa estar em crise para querer se compreender melhor",
        excerptPlaceholder:
          "Às vezes a busca começa pela vontade de entender escolhas, emoções e a forma como você reage — não por um problema urgente.",
        template: `## Quando a busca não começa em uma crise

[Fale do desejo de se conhecer melhor.]

## Perceber um padrão é diferente de compreendê-lo

[O que se repete nas emoções, escolhas e relações.]

## O que a psicoterapia abre de espaço

[Olhar o que faz sentido manter e o que já não funciona da mesma maneira.]
`,
      },
    ],
  },
  {
    slug: "relacoes-e-padroes-emocionais",
    label: "Relações e Padrões Emocionais",
    description:
      "Relacionamentos, limites, necessidades emocionais e padrões que parecem se repetir.",
    tone: "bg-mid text-white",
    textTypes: [
      {
        id: "padroes-que-se-repetem",
        label: "Padrões que se repetem",
        hint: "Quando as pessoas mudam, mas a história parece terminar do mesmo jeito.",
        titlePlaceholder:
          "Por que a gente repete justamente aquilo que jurou que nunca faria?",
        excerptPlaceholder:
          "Padrões nas relações não aparecem por acaso. Olhar para esquemas, necessidades e vínculos ajuda a entender o que se repete.",
        template: `## Quando a história muda de personagem

[Descreva a repetição: ceder, se afastar, buscar aprovação, medo de perder.]

## O que o padrão pode estar tentando cuidar

[Necessidades, história e formas de enfrentamento.]

## Perceber não é o fim do trabalho

[Compreender por que o padrão ainda faz sentido emocionalmente.]
`,
      },
      {
        id: "limites",
        label: "Limites",
        hint: "Limites como cuidado, não como rejeição.",
        titlePlaceholder: "Limites também são uma forma de cuidado",
        excerptPlaceholder:
          "Cuidar de si e do outro também passa por reconhecer o que cabe e o que não cabe. Limites não são rejeição: são orientação.",
        template: `## Quando dizer não parece difícil demais

[A dificuldade de colocar limites e o que costuma aparecer no lugar.]

## O que limite não é

[Não é frieza nem abandono.]

## O que pode começar a ser construído

[Cuidado consigo, com o vínculo e com o que é possível oferecer.]
`,
      },
      {
        id: "dependencia-vinculos",
        label: "Vínculos e dependência emocional",
        hint: "Medo de abandono, necessidade de aprovação e a forma de se vincular.",
        titlePlaceholder: "Talvez não seja apenas sobre escolher a pessoa errada",
        excerptPlaceholder:
          "Quando uma situação se repete, pode valer olhar não só para quem está do outro lado, mas para o padrão que se constrói na relação.",
        template: `## O que se repete no vínculo

[Aprovação, medo de abandono, se afastar quando alguém se aproxima.]

## Olhar para o padrão, não só para o outro

[Como a história influencia a forma de se relacionar hoje.]

## O espaço da psicoterapia

[Compreender a experiência, as necessidades e as escolhas — sem uma resposta pronta sobre ficar ou sair.]
`,
      },
    ],
  },
  {
    slug: "infancia-e-desenvolvimento",
    label: "Infância e Desenvolvimento",
    description:
      "Comportamento, emoções, aprendizagem e questões do desenvolvimento infantil.",
    tone: "bg-peach text-ink",
    textTypes: [
      {
        id: "escola-duvidas",
        label: "Escola e dúvidas",
        hint: "Quando a escola começa a levantar perguntas sobre aprendizagem, atenção ou comportamento.",
        titlePlaceholder: "Quando a escola começa a levantar perguntas",
        excerptPlaceholder:
          "Dificuldades de aprendizagem, atenção ou comportamento na infância podem ter diferentes explicações. Investigar com cuidado faz diferença.",
        template: `## A dúvida que chega pela escola

[O que a família ouve: não acompanha, se distrai, o comportamento mudou.]

## Esses sinais, sozinhos, não definem um diagnóstico

[Comportamentos parecidos podem ter explicações diferentes.]

## O que ajuda a compreender melhor

[História de desenvolvimento, cotidiano e o funcionamento daquela criança.]
`,
      },
      {
        id: "emocoes-comportamento",
        label: "Emoções e comportamento",
        hint: "Quando a criança ainda não consegue explicar o que está sentindo.",
        titlePlaceholder:
          "Quando seu filho ainda não consegue explicar o que está sentindo",
        excerptPlaceholder:
          "Mudanças no comportamento, medos ou conflitos podem começar a falar por ele. O primeiro passo não é um rótulo: é compreender o que ela pode estar vivendo.",
        template: `## Quando a mudança começa a falar por ela

[Medos, irritação, retraimento, conflitos ou mudanças na rotina.]

## Crianças nem sempre expressam como os adultos

[Comportamento, brincadeira e relações também comunicam.]

## O que a psicoterapia infantil considera

[Idade, desenvolvimento, história e o contexto em que a criança vive.]
`,
      },
      {
        id: "avaliacao-ou-terapia",
        label: "Avaliação ou psicoterapia",
        hint: "Ajuda os responsáveis a distinguir investigação e acompanhamento terapêutico.",
        titlePlaceholder: "Às vezes, a dúvida dos pais começa justamente aqui",
        excerptPlaceholder:
          "Psicoterapia acompanha o que a criança está vivendo. Avaliação investiga perguntas específicas sobre funcionamento, aprendizagem ou atenção.",
        template: `## Dois caminhos, objetivos diferentes

[Psicoterapia como acompanhamento. Avaliação como investigação.]

## Quando cada um pode fazer sentido

[Mudanças emocionais e relacionais versus perguntas sobre atenção, aprendizagem ou desenvolvimento.]

## Se ainda houver dúvida

[A demanda inicial ajuda a compreender qual caminho começa primeiro.]
`,
      },
    ],
  },
] as const satisfies ReadonlyArray<{
  slug: string;
  label: string;
  description: string;
  tone: string;
  textTypes: readonly TextType[];
}>;

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

export function getTextType(categorySlug: string, typeId: string) {
  return getCategory(categorySlug)?.textTypes.find((item) => item.id === typeId);
}
