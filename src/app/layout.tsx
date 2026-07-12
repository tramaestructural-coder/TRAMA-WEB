import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trama Estructural — Arquitectura, ingeniería y construcción integral",
    template: "%s — Trama Estructural",
  },
  description:
    "Diseñamos, presupuestamos y construimos tu remodelación con un mismo equipo, de principio a fin. Arquitectura, ingeniería, presupuesto, construcción y supervisión integradas.",
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

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased">
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
