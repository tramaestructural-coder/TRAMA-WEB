import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { site, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita una evaluación para tu proyecto con Trama Estructural.",
};

export default function ContactoPage() {
  return (
    <section className="bg-trama bg-paper pb-28 pt-40 lg:pb-40 lg:pt-48">
      <Container>
        <Reveal>
          <SectionLabel index="00" title="Contacto" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Cuéntanos qué quieres transformar.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Completa el formulario y te respondemos por correo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4 text-sm text-ink/70">
              <li>
                <span className="block text-xs uppercase tracking-wide text-ink/40">
                  Correo
                </span>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-ink hover:text-walnut-500"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-ink/40">
                  Instagram
                </span>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-walnut-500"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm text-walnut-500 hover:text-walnut-700"
            >
              ¿Prefieres WhatsApp? Escríbenos →
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-ink/40">
              Escríbenos
            </span>
            <div className="mt-4">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
