import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiciosPreview } from "@/components/sections/ServiciosPreview";
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
      <section className="bg-trama bg-paper pb-24 pt-40 lg:pb-32 lg:pt-48">
        <Container>
          <Reveal>
            <SectionLabel index="00" title="Servicios" />
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Todo lo que hacemos, bajo un mismo equipo.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              No coordinamos a distintos proveedores para tu proyecto: los
              somos. El mismo equipo diseña, presupuesta, construye y
              supervisa, de principio a fin.
            </p>
          </Reveal>
        </Container>
      </section>

      <ServiciosPreview index="01" showCta={false} />

      <section className="bg-trama bg-paper py-28 lg:py-40">
        <Container>
          <Reveal>
            <SectionLabel index="02" title="En detalle" />
            <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              Cada servicio, a fondo.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20 lg:space-y-28">
            {servicios.map((servicio, i) => (
              <Reveal
                key={servicio.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.nombre}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {servicio.nombre}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                    {servicio.resumen}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Button
              href={whatsappHref(
                "Hola Trama Estructural, quiero conversar sobre los servicios que ofrecen."
              )}
              className="mt-20"
            >
              Conversar por WhatsApp
            </Button>
          </Reveal>
        </Container>
      </section>

      <Metodologia />
      <CTAFinal />
    </>
  );
}
