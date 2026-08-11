import { whatsappUrl } from "@/lib/site";
import { IconWhatsApp } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-ink text-peach shadow-[0_12px_30px_rgba(73,101,123,0.35)] transition hover:scale-105 hover:bg-mid"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
