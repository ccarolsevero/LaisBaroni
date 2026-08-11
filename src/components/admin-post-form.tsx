"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { categories } from "@/lib/blog";
import type { Post } from "@/lib/posts";

type Props = {
  mode: "create" | "edit";
  initial?: Post;
};

const fieldClass =
  "mt-1 w-full rounded-2xl border border-mist bg-white px-4 py-3 outline-none focus:border-soft";

export function AdminPostForm({ mode, initial }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [image, setImage] = useState(initial?.image ?? "");
  const [category, setCategory] = useState(initial?.category ?? categories[0].slug);
  const [published, setPublished] = useState(initial?.published ?? false);
  const [content, setContent] = useState(initial?.content ?? "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    <form onSubmit={onSubmit} className="space-y-5">
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
        <span className="text-sm text-mid">Categoria</span>
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value as typeof category)}
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
        <span className="text-sm text-mid">Resumo</span>
        <textarea
          required
          rows={3}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="text-sm text-mid">URL da imagem (opcional)</span>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
          className={fieldClass}
        />
      </label>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="size-4 accent-ink"
        />
        <span className="text-sm text-ink">Publicado</span>
      </label>

      <label className="block">
        <span className="text-sm text-mid">Conteúdo (Markdown)</span>
        <textarea
          required
          rows={16}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${fieldClass} font-mono text-sm leading-relaxed`}
        />
      </label>

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
