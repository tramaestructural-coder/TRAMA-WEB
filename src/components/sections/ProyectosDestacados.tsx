import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { proyectos } from "@/data/proyectos";

const destacados = [...proyectos].sort((a, b) => a.orden - b.orden).slice(0, 8);

export function ProyectosDestacados() {
  return (
    <section id="proyectos" className="bg-trama bg-paper py-28 lg:py-40">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="04" title="Proyectos" />
              <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
                Proyectos recientes.
              </h2>
            </div>

            <Link
              href="/proyectos"
              className="rounded-full border border-walnut-500 px-5 py-2.5 text-xs uppercase tracking-wide text-walnut-500 transition-colors hover:bg-walnut-500 hover:text-paper"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {destacados.map((proyecto) => (
              <ProjectCard key={proyecto.slug} proyecto={proyecto} href="/proyectos" />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
