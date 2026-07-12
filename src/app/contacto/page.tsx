import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { site, whatsappHref } from "@/lib/config";
import { equipo } from "@/data/equipo";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita una evaluación para tu proyecto con Trama Estructural.",
};

export default function ContactoPage() {
  return (
    <section className="bg-trama bg-paper pb-24 pt-40 lg:pb-32 lg:pt-48">
      <Container>
        <Reveal>
          <SectionLabel index="00" title="Contacto" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Cuéntanos qué quieres transformar.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Escríbenos por WhatsApp para lo más directo, o completa el
            formulario y te respondemos por correo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-sage-500 px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-sage-300"
            >
              Solicitar evaluación por WhatsApp
            </a>

            <ul className="mt-10 space-y-4 text-sm text-ink/70">
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
              <li>
                <span className="block text-xs uppercase tracking-wide text-ink/40">
                  Sitio
                </span>
                {site.domain}
              </li>
            </ul>

            <div className="mt-10">
              <span className="text-xs uppercase tracking-widest text-ink/40">
                Socios
              </span>
              <ul className="mt-4 space-y-3">
                {equipo.map((m) => (
                  <li key={m.nombre} className="text-ink/80">
                    <span className="font-display text-lg text-ink">{m.nombre}</span>
                    <span className="ml-2 text-sm text-ink/50">{m.rol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-ink/40">
              Escríbenos
            </span>
            <div className="mt-4">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
