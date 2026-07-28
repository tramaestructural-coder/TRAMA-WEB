import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trama Estructural — Arquitectura, ingeniería y construcción integral",
    template: "%s — Trama Estructural",
  },
  description:
    "Diseñamos, presupuestamos y construimos tu remodelación con un mismo equipo, de principio a fin. Arquitectura, ingeniería, presupuesto, construcción y supervisión integradas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trama Estructural",
    description:
      "Diseñamos, presupuestamos y construimos tu remodelación con un mismo equipo, de principio a fin.",
    url: site.url,
    siteName: "Trama Estructural",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#412E20",
};

// Datos estructurados (schema.org) para que Google entienda que este es un
// negocio local de arquitectura/construcción — habilita Rich Results y
// refuerza la señal de SEO local. Sin dirección física porque el negocio no
// tiene local público (ver SEO_GROWTH/10_Backlog, ítem SEO-013/014); se
// puede sumar `address`/`geo` apenas se defina con el cliente.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.contactEmail,
  telephone: `+${site.whatsappNumber}`,
  image: `${site.url}/images/general/axo-1.png`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Región Metropolitana, Chile",
  },
  sameAs: [site.instagram],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-espresso-500 focus:px-4 focus:py-2 focus:text-paper"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
