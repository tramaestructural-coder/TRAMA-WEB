import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Metodologia } from "@/components/sections/Metodologia";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { servicios } from "@/data/servicios";
import { whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Arquitectura, construcción llave en mano, modelación 3D, tramitación municipal y cálculo estructural, integrados en un mismo equipo.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-trama bg-paper pb-20 pt-40 lg:pb-28 lg:pt-48">
        <Container>
          <Reveal>
            <SectionLabel index="00" title="Servicios" />
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Lo que realmente ofrecemos.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              No coordinamos a distintos proveedores para tu proyecto: los
              somos. El mismo equipo diseña, presupuesta, construye y
              supervisa, de principio a fin.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden bg-stone-300 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio, i) => {
              const Icon = servicio.icon;
              return (
                <Reveal key={servicio.slug} delay={i * 0.06} className="bg-paper p-8">
                  <Icon className="h-7 w-7 text-walnut-500" strokeWidth={1.5} aria-hidden />
                  <h2 className="mt-4 font-display text-xl text-ink">
                    {servicio.nombre}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {servicio.resumen}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <a
              href={whatsappHref(
                "Hola Trama Estructural, quiero conversar sobre los servicios que ofrecen."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-14 inline-block rounded-full bg-espresso-500 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-walnut-500"
            >
              Conversar por WhatsApp
            </a>
          </Reveal>
        </Container>
      </section>

      <Metodologia />
      <CTAFinal />
    </>
  );
}
