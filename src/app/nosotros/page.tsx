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
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-trama bg-paper pb-16 pt-28 lg:pb-20 lg:pt-32">
        <Container>
          <Reveal>
            <SectionLabel index="00" title="Nosotros" />
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Un equipo de profesionales apasionados por el diseño y la
              construcción de espacios con carácter.
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-ink/70">
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
            </Reveal>

            <Reveal delay={0.15}>
              {/* Foto grupal del equipo — pendiente de que el cliente la envíe */}
              <div className="flex aspect-[4/3] items-center justify-center bg-stone-200 text-xs uppercase tracking-wide text-stone-400">
                Foto grupal próximamente
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <EquipoPreview index="01" showCta={false} />

      <CTAFinal />
    </>
  );
}
