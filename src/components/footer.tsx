import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-medium">{site.name}</p>
          <p className="mt-2 text-peach">{site.role}</p>
          <p className="mt-1 text-sm tracking-[0.14em] text-soft uppercase">{site.crp}</p>
          <p className="mt-4 text-sm text-mist">Mestre e Neuropsicóloga pela USP</p>
        </div>

        <div>
          <p className="text-sm tracking-[0.16em] text-peach uppercase">Atuação</p>
          <p className="mt-3 max-w-xs leading-relaxed text-mist">
            {site.services.join(" • ")}
          </p>
          <p className="mt-4 text-soft">{site.modality}</p>
        </div>

        <div>
          <p className="text-sm tracking-[0.16em] text-peach uppercase">Páginas</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-mist">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-1 ml-3 flex flex-col gap-1 text-soft">
                    {item.children
                      .filter((child) => child.href !== item.href)
                      .map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm tracking-[0.16em] text-peach uppercase">Consultório</p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block max-w-xs leading-relaxed text-mist hover:text-white"
          >
            {site.address}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-soft sm:px-8">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
