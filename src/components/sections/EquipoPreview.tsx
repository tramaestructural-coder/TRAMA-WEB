import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/ui/TeamCard";
import { equipo } from "@/data/equipo";

export function EquipoPreview() {
  return (
    <section className="bg-trama bg-stone-50 py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="05" title="Equipo" />
          <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
            Los socios acompañan cada proyecto en persona.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
            Visitas, diseño, presupuesto, coordinación, supervisión y
            entrega: quienes deciden son quienes están presentes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((miembro, i) => (
            <Reveal key={miembro.nombre} delay={i * 0.1}>
              <TeamCard miembro={miembro} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/nosotros"
            className="mt-12 inline-block text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            Conocer al equipo →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
