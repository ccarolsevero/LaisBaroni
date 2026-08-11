"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);
    if (!res.ok) {
      setError("Senha incorreta.");
      return;
    }

    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-5 py-16 sm:px-8">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 sm:p-10"
      >
        <p className="text-[11px] font-medium tracking-[0.2em] text-mid uppercase">
          Área interna
        </p>
        <h1 className="font-display mt-3 text-3xl text-ink">Entrar no admin</h1>
        <p className="mt-2 text-mid">
          Use a senha definida em <code className="text-sm">ADMIN_PASSWORD</code>.
        </p>

        <label className="mt-8 block">
          <span className="text-sm text-mid">Senha</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-mist bg-base px-4 py-3 outline-none focus:border-soft"
          />
        </label>

        {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-[0.04em] text-white transition hover:bg-mid disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}
