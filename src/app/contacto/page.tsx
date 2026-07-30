import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { FaqAccordion, type FaqItem } from "@/components/ui/FaqAccordion";
import { site, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita una evaluación para tu proyecto con Trama Estructural.",
  alternates: { canonical: "/contacto" },
};

const faqs: FaqItem[] = [
  {
    pregunta: "¿Cuánto tiempo toma una remodelación completa?",
    respuesta:
      "Depende del alcance del proyecto. Una remodelación acotada, como una cocina o un baño, puede tomar algunas semanas; una remodelación integral de una casa completa puede extenderse varios meses. En la evaluación inicial te damos un plazo estimado real para tu proyecto, no una cifra genérica.",
  },
  {
    pregunta: "¿Trama Estructural se encarga de los permisos municipales?",
    respuesta:
      "Sí. La tramitación municipal es uno de nuestros cinco servicios: gestionamos permisos de edificación, regularizaciones y recepciones finales como parte del proceso.",
  },
  {
    pregunta: "¿Hacen evaluaciones gratuitas?",
    respuesta:
      "Sí, la primera evaluación de tu proyecto no tiene costo. Puedes solicitarla desde el formulario de contacto o por WhatsApp.",
  },
  {
    pregunta: "¿Trabajan en toda la Región Metropolitana?",
    respuesta:
      "Trabajamos principalmente en el sector oriente de Santiago (Vitacura, Las Condes, Providencia y Lo Barnechea), además de San Antonio, Algarrobo y el sector de Chicureo. Si tu proyecto está en otra comuna, escríbenos igual: lo evaluamos caso a caso.",
  },
  {
    pregunta: "¿Qué diferencia a una constructora llave en mano de una tradicional?",
    respuesta:
      "En una construcción llave en mano, un mismo equipo diseña, presupuesta, construye y supervisa tu proyecto de principio a fin. No necesitas coordinar arquitecto, calculista y constructora por separado: hay un solo responsable durante todo el proceso.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.respuesta,
    },
  })),
};

export default function ContactoPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
    <section className="bg-trama bg-paper flex min-h-screen items-center pb-16 pt-24">
      <Container className="w-full">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel index="00" title="Contacto" />
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Cuéntanos qué quieres transformar.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Completa el formulario y te respondemos por correo.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-ink/70">
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
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </Container>
    </section>

    <section className="bg-trama bg-paper pb-16 pt-4 lg:pb-20">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionLabel index="01" title="Preguntas frecuentes" />
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Antes de escribirnos.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FaqAccordion items={faqs} />
        </Reveal>
      </Container>
    </section>
    </>
  );
}
