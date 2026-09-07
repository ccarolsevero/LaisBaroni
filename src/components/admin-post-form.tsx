"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  categories,
  getCategory,
  getTextType,
  type CategorySlug,
} from "@/lib/blog";
import type { Post } from "@/lib/posts";

type Props = {
  mode: "create" | "edit";
  initial?: Post;
  initialCategory?: CategorySlug;
};

const fieldClass =
  "mt-1 w-full rounded-2xl border border-mist bg-white px-4 py-3 outline-none focus:border-soft";

function MarkdownPreview({ markdown }: { markdown: string }) {
  const html = useMemo(() => {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const blocks: string[] = [];
    let paragraph: string[] = [];
    let list: string[] = [];

    const flushParagraph = () => {
      if (!paragraph.length) return;
      blocks.push(`<p>${inline(paragraph.join(" "))}</p>`);
      paragraph = [];
    };
    const flushList = () => {
      if (!list.length) return;
      blocks.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      list = [];
    };

    for (const line of lines) {
      const heading = /^(#{2,3})\s+(.+)$/.exec(line);
      const listItem = /^[-*]\s+(.+)$/.exec(line);
      if (heading) {
        flushParagraph();
        flushList();
        const tag = heading[1].length === 2 ? "h2" : "h3";
        blocks.push(`<${tag}>${inline(heading[2])}</${tag}>`);
        continue;
      }
      if (listItem) {
        flushParagraph();
        list.push(listItem[1]);
        continue;
      }
      if (!line.trim()) {
        flushParagraph();
        flushList();
        continue;
      }
      flushList();
      paragraph.push(line.trim());
    }
    flushParagraph();
    flushList();
    return blocks.join("");
  }, [markdown]);

  if (!markdown.trim()) {
    return <p className="text-sm text-mid">O texto aparece aqui conforme você escreve.</p>;
  }

  return (
    <div className="prose-article text-[15px]" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function inline(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export function AdminPostForm({ mode, initial, initialCategory }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [image, setImage] = useState(initial?.image ?? "");
  const [category, setCategory] = useState<CategorySlug>(
    initial?.category ?? initialCategory ?? categories[0].slug,
  );
  const [textTypeId, setTextTypeId] = useState("");
  const [appliedTemplate, setAppliedTemplate] = useState("");
  const [published, setPublished] = useState(initial?.published ?? false);
  const [content, setContent] = useState(initial?.content ?? "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedCategory = getCategory(category);
  const selectedType = textTypeId ? getTextType(category, textTypeId) : undefined;

  function selectCategory(next: CategorySlug) {
    setCategory(next);
    setTextTypeId("");
    setAppliedTemplate("");
  }

  function applyTextType(typeId: string) {
    const type = getTextType(category, typeId);
    if (!type) return;
    setTextTypeId(typeId);
    if (!title.trim()) setTitle(type.titlePlaceholder);
    if (!excerpt.trim()) setExcerpt(type.excerptPlaceholder);
    if (!content.trim() || content === appliedTemplate) {
      setContent(type.template.trim());
      setAppliedTemplate(type.template.trim());
    }
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const payload = { title, slug, date, excerpt, image, category, published, content };
    const url =
      mode === "create" ? "/api/admin/posts" : `/api/admin/posts/${initial!.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Não foi possível salvar.");
      return;
    }

    router.push("/admin/blog");
    router.refresh();
  }

  async function onDelete() {
    if (!initial || !confirm("Excluir este artigo permanentemente?")) return;
    setLoading(true);
    const res = await fetch(`/api/admin/posts/${initial.slug}`, { method: "DELETE" });
    setLoading(false);
    if (!res.ok) {
      setError("Não foi possível excluir.");
      return;
    }
    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <fieldset>
        <legend className="text-sm text-mid">Em qual conjunto este texto entra?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {categories.map((item) => {
            const active = item.slug === category;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => selectCategory(item.slug)}
                className={`rounded-2xl p-5 text-left transition ${item.tone} ${
                  active ? "ring-2 ring-ink ring-offset-2" : "opacity-80 hover:opacity-100"
                }`}
              >
                <p className="font-display text-xl leading-snug">{item.label}</p>
                <p className="mt-2 text-[13px] leading-relaxed opacity-85">{item.description}</p>
              </button>
            );
          })}
        </div>
      </fieldset>

      {selectedCategory ? (
        <fieldset>
          <legend className="text-sm text-mid">
            Tipo de texto para {selectedCategory.label}
          </legend>
          <p className="mt-1 text-[13px] text-mid">
            Escolha o formato. O modelo preenche título, resumo e a estrutura do artigo,
            no tom dos conteúdos que já existem. Você pode editar tudo depois.
          </p>
          <div className="mt-3 grid gap-3">
            {selectedCategory.textTypes.map((type) => {
              const active = type.id === textTypeId;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => applyTextType(type.id)}
                  className={`rounded-2xl border px-5 py-4 text-left transition ${
                    active
                      ? "border-ink bg-paper"
                      : "border-mist bg-white hover:border-soft"
                  }`}
                >
                  <p className="font-medium text-ink">{type.label}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-mid">{type.hint}</p>
                </button>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <label className="block">
        <span className="text-sm text-mid">Título</span>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={selectedType?.titlePlaceholder}
          className={fieldClass}
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-mid">Slug (opcional)</span>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="gerado-automaticamente"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm text-mid">Data</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-mid">Chamada do card</span>
        <textarea
          required
          rows={3}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder={selectedType?.excerptPlaceholder}
          className={fieldClass}
        />
        <span className="mt-1 block text-[12px] text-mid">
          Aparece na listagem do blog, junto com a categoria e o título.
        </span>
      </label>

      <label className="block">
        <span className="text-sm text-mid">URL da imagem (opcional)</span>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
          className={fieldClass}
        />
        <span className="mt-1 block text-[12px] text-mid">
          Se ficar em branco, o card usa o bloco de cor da categoria, como nos artigos atuais.
        </span>
      </label>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="size-4 accent-ink"
        />
        <span className="text-sm text-ink">Publicado no site</span>
      </label>

      <div className="grid gap-6 lg:grid-cols-2">
        <label className="block">
          <span className="text-sm text-mid">Texto do artigo</span>
          <textarea
            required
            rows={18}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={`${fieldClass} min-h-[22rem] font-mono text-sm leading-relaxed`}
          />
          <span className="mt-1 block text-[12px] text-mid">
            Linha em branco abre um parágrafo novo. Use ## para título de seção e **negrito**
            para ênfase. Os trechos entre [colchetes] são guias para apagar depois.
          </span>
        </label>
        <div>
          <p className="text-sm text-mid">Como entra no site</p>
          <div className="mt-1 rounded-2xl bg-white p-5">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-ink uppercase">
              {selectedCategory?.label}
            </p>
            <p className="font-display mt-3 text-[1.45rem] leading-snug text-ink">
              {title || "Título do artigo"}
            </p>
            <p className="mt-3 text-sm leading-relaxed hero-copy">
              {excerpt || "A chamada do card aparece aqui."}
            </p>
            <div className="mt-8 border-t border-mist pt-6">
              <MarkdownPreview markdown={content} />
            </div>
          </div>
        </div>
      </div>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-white transition hover:bg-mid disabled:opacity-60"
        >
          {loading ? "Salvando..." : "Salvar artigo"}
        </button>
        {mode === "edit" ? (
          <button
            type="button"
            disabled={loading}
            onClick={onDelete}
            className="rounded-full px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-red-700 ring-1 ring-red-300 transition hover:bg-red-50 disabled:opacity-60"
          >
            Excluir
          </button>
        ) : null}
      </div>
    </form>
  );
}
