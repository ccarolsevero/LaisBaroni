import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
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

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.fullName,
  keywords: [
    "Laís Baroni",
    "Laís Beringhs Baroni",
    "psicóloga São Paulo",
    "neuropsicóloga",
    "avaliação neuropsicológica",
    "psicoterapia",
    "supervisão clínica",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.fullName,
    title,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-ink">
        <JsonLd />
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
