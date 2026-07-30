import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { EquipoPreview } from "@/components/sections/EquipoPreview";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de Trama Estructural: los socios que acompañan personalmente cada proyecto, de principio a fin.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-trama bg-paper flex min-h-screen items-center pb-16 pt-24">
        <Container className="w-full">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
            <Reveal>
              <SectionLabel index="00" title="Nosotros" />
              <h1 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
                Un equipo de profesionales apasionados por el diseño y la
                construcción de espacios con carácter.
              </h1>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-ink/70">
                <p>
                  Trama Estructural nace de la observación de los patrones,
                  repeticiones y estructuras que emergen tanto en la
                  construcción como en la naturaleza: secuencias que, al
                  entrelazarse, dan origen a formas estructurales sólidas y
                  coherentes.
                </p>
                <p>
                  Lo que nos distingue es nuestro enfoque colaborativo:
                  trabajamos junto a nuestros clientes para entender sus
                  ideas, necesidades y estilo de vida, y así convertir sus
                  sueños en realidades habitables.
                </p>
              </div>
            </Reveal>

            {/* Foto grupal del equipo — pendiente de que el cliente la envíe.
                Se deja la columna vacía (sin recuadro) manteniendo la grilla
                50/50 lista para cuando se agregue la imagen. */}
            <div className="hidden lg:block" aria-hidden />
          </div>
        </Container>
      </section>

      <EquipoPreview index="01" showCta={false} />

      <CTAFinal />
    </>
  );
}
