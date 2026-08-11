import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteChrome } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-ink">
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main className="flex-1">{children}</main>
        <SiteChrome>
          <Footer />
          <WhatsAppFloat />
        </SiteChrome>
      </body>
    </html>
  );
}
