import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminPostForm } from "@/components/admin-post-form";
import { isAuthenticated } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Novo artigo",
  robots: { index: false, follow: false },
};

export default async function NovoPostPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-[11px] font-medium tracking-[0.2em] text-mid uppercase">Blog</p>
      <h1 className="font-display mt-2 text-4xl text-ink">Novo artigo</h1>
      <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8">
        <AdminPostForm mode="create" />
      </div>
    </section>
  );
}
