import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { proyectos } from "@/data/proyectos";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de remodelación y desarrollo integral ejecutados por Trama Estructural.",
};

export default function ProyectosPage() {
  return (
    <section className="bg-trama bg-paper pb-24 pt-40 lg:pb-32 lg:pt-48">
      <Container>
        <Reveal>
          <SectionLabel index="00" title="Proyectos" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Proyectos ejecutados por nuestro equipo.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Primera selección de proyectos publicados. Iremos incorporando
            más a medida que estén documentados.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[...proyectos]
            .sort((a, b) => a.orden - b.orden)
            .map((proyecto, i) => (
            <Reveal key={proyecto.slug} delay={i * 0.1}>
              <ProjectCard proyecto={proyecto} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
