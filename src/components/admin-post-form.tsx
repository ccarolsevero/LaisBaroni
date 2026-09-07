"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { categories, getCategory, type CategorySlug } from "@/lib/blog";
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
  const [published, setPublished] = useState(initial?.published ?? true);
  const [content, setContent] = useState(initial?.content ?? "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedCategory = getCategory(category);

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
      <label className="block">
        <span className="text-sm text-mid">Categoria</span>
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value as CategorySlug)}
          className={fieldClass}
        >
          {categories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm text-mid">Título</span>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        <span className="text-sm text-ink">Mostrar este texto no blog</span>
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
