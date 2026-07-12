import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { equipo } from "@/data/equipo";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de Trama Estructural: los socios que acompañan personalmente cada proyecto, de principio a fin.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-trama bg-paper pb-20 pt-40 lg:pb-28 lg:pt-48">
        <Container>
          <Reveal>
            <SectionLabel index="00" title="Nosotros" />
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Un equipo de profesionales apasionados por el diseño y la
              construcción de espacios con carácter.
            </h1>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink/70">
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
        </Container>
      </section>

      <section className="bg-trama bg-stone-50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionLabel index="01" title="Socios" />
            <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              Quienes deciden son quienes están presentes.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
              Los socios realizan personalmente las visitas, el diseño, el
              presupuesto, la coordinación, la supervisión y la entrega de
              cada proyecto.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.map((miembro, i) => (
              <Reveal key={miembro.nombre} delay={i * 0.1}>
                <TeamCard miembro={miembro} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
