"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, whatsappUrl, type NavItem } from "@/lib/site";
import { IconWhatsApp } from "./icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={`whitespace-nowrap text-[13px] transition-colors ${
          active ? "text-ink" : "text-mid hover:text-ink"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`inline-flex items-center gap-1 whitespace-nowrap text-[13px] transition-colors ${
          active ? "text-ink" : "text-mid hover:text-ink"
        }`}
      >
        {item.label}
        <span className="text-[10px] opacity-60">▾</span>
      </Link>
      <div className="invisible absolute top-full left-0 z-50 min-w-[240px] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(73,101,123,0.16)] ring-1 ring-ink/8">
          {item.children.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              className={`block rounded-xl px-4 py-2.5 text-[13px] ${
                pathname === child.href
                  ? "bg-mist text-ink"
                  : "text-mid hover:bg-mist hover:text-ink"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-base/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[11px] font-medium tracking-[0.14em] text-peach">
            LB
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[1.2rem] font-medium text-ink">
              {site.name}
            </span>
            <span className="hidden text-[10px] tracking-[0.14em] text-mid uppercase xl:block">
              {site.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-x-5 xl:flex">
          {nav.map((item) => (
            <DesktopItem key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full ring-1 ring-ink/15 xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/8 bg-base px-5 py-5 xl:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.href}>
                {item.children?.length ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-ink hover:bg-mist"
                      onClick={() =>
                        setExpanded((current) => (current === item.href ? null : item.href))
                      }
                    >
                      {item.label}
                      <span className="text-mid">
                        {expanded === item.href ? "−" : "+"}
                      </span>
                    </button>
                    {expanded === item.href ? (
                      <div className="mb-2 ml-3 flex flex-col border-l border-ink/10 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-xl px-3 py-2.5 text-sm text-mid hover:bg-mist hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-ink hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-white"
            >
              <IconWhatsApp />
              Fale comigo pelo WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
