import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { proyectos } from "@/data/proyectos";

const destacados = [...proyectos].sort((a, b) => a.orden - b.orden).slice(0, 8);

export function ProyectosDestacados() {
  return (
    <section id="proyectos" className="bg-trama bg-paper py-24 lg:py-36">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="04" title="Proyectos" />
              <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
                Algunos de nuestros proyectos.
              </h2>
            </div>

            <Button href="/proyectos" size="sm" className="uppercase tracking-wide">
              Ver todos los proyectos →
            </Button>
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
