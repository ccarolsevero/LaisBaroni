import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminPostForm } from "@/components/admin-post-form";
import { isAuthenticated } from "@/lib/auth";
import { isCategorySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Novo artigo",
  robots: { index: false, follow: false },
};

export default async function NovoPostPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const { categoria } = await searchParams;
  const initialCategory = categoria && isCategorySlug(categoria) ? categoria : undefined;

  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-[11px] font-medium tracking-[0.2em] text-mid uppercase">Blog</p>
      <h1 className="font-display mt-2 text-4xl text-ink">Novo artigo</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mid">
        Escolha a categoria e escreva o texto.
      </p>
      <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8">
        <AdminPostForm mode="create" initialCategory={initialCategory} />
      </div>
    </section>
  );
}
