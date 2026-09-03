import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 md:gap-8 md:py-14">
        <div>
          <p className="font-display text-2xl font-medium">{site.fullName}</p>
          <p className="mt-2 text-peach">{site.role}</p>
          <p className="mt-1 text-sm tracking-[0.14em] text-soft uppercase">{site.crp}</p>
        </div>

        <div>
          <p className="text-sm leading-relaxed text-mist">{site.services.join(" • ")}</p>
          <p className="mt-3 text-soft">{site.modality}</p>
        </div>

        <div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-xs leading-relaxed text-mist hover:text-white"
          >
            {site.address}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-soft sm:px-8">
          © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
