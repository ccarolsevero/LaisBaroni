"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return null;

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-mist bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link href="/admin/blog" className="font-display text-xl text-ink">
            Admin
          </Link>
          <Link href="/admin/blog" className="text-sm text-mid hover:text-ink">
            Blog
          </Link>
          <Link href="/admin/posts/novo" className="text-sm text-mid hover:text-ink">
            Novo artigo
          </Link>
          <Link href="/" className="text-sm text-mid hover:text-ink">
            Ver site
          </Link>
        </div>
        <button
          type="button"
          onClick={logout}
          className="text-sm text-mid transition hover:text-ink"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
