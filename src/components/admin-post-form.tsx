"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminTextEditor } from "@/components/admin-text-editor";
import { categories, type CategorySlug } from "@/lib/blog";
import { contentToEditorHtml, htmlToPlainText } from "@/lib/content-html";
import { mediaUrl } from "@/lib/media";
import type { Post } from "@/lib/posts";

type Props = {
  mode: "create" | "edit";
  initial?: Post;
  initialCategory?: CategorySlug;
};

const fieldClass =
  "mt-1 w-full rounded-2xl border border-mist bg-white px-4 py-3 outline-none focus:border-soft";

export function AdminPostForm({ mode, initial, initialCategory }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [image, setImage] = useState(initial?.image ?? "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [category, setCategory] = useState<CategorySlug>(
    initial?.category ?? initialCategory ?? categories[0].slug,
  );
  const [content, setContent] = useState(() => contentToEditorHtml(initial?.content ?? ""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => {
    if (imageFile) return URL.createObjectURL(imageFile);
    return mediaUrl(image);
  }, [image, imageFile]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!htmlToPlainText(content)) {
      setError("Escreva o texto do artigo.");
      return;
    }

    setLoading(true);
    setError("");

    let imageUrl = image;
    if (imageFile) {
      const upload = new FormData();
      upload.append("file", imageFile);
      const uploaded = await fetch("/api/admin/upload", {
        method: "POST",
        body: upload,
      });
      const uploadedData = await uploaded.json().catch(() => ({}));
      if (!uploaded.ok) {
        setLoading(false);
        setError(uploadedData.error || "Não foi possível enviar a imagem.");
        return;
      }
      imageUrl = String(uploadedData.url || "");
    }

    const payload = { title, date, excerpt, image: imageUrl, category, published: true, content };
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

      <label className="block">
        <span className="text-sm text-mid">Data</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={fieldClass}
        />
      </label>

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

      <div>
        <p className="text-sm text-mid">Imagem (opcional)</p>
        <label className={`${fieldClass} flex cursor-pointer flex-col items-start gap-3`}>
          <span className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white">
            Escolher do computador
          </span>
          <span className="text-[13px] text-mid">
            {imageFile?.name || (image ? "Imagem selecionada" : "Nenhuma imagem escolhida")}
          </span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0] ?? null;
              setImageFile(file);
              if (file) setImage("");
            }}
          />
        </label>
        {preview ? (
          <div className="mt-3 overflow-hidden rounded-2xl bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="" className="h-48 w-full object-cover" />
            <button
              type="button"
              onClick={() => {
                setImage("");
                setImageFile(null);
              }}
              className="px-4 py-2 text-[13px] text-mid hover:text-ink"
            >
              Remover imagem
            </button>
          </div>
        ) : (
          <span className="mt-1 block text-[12px] text-mid">
            Se não escolher, o card usa a cor da categoria.
          </span>
        )}
      </div>

      <div>
        <p className="text-sm text-mid">Texto do artigo</p>
        <AdminTextEditor value={content} onChange={setContent} />
      </div>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-white transition hover:bg-mid disabled:opacity-60"
        >
          {loading ? "Publicando..." : "Confirmar texto"}
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
