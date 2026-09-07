import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: site.fullName,
    url: site.url,
    image: `${site.url}/photos/retrato-sobre-v2.jpg`,
    description: site.tagline,
    jobTitle: site.role,
    telephone: `+${site.whatsapp.number}`,
    email: site.email,
    identifier: site.crp,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: "BR",
    },
    areaServed: "BR",
    sameAs: [site.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
