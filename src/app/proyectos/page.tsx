import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  ComercialesIcon,
  ExterioresIcon,
  RemodelacionesIcon,
  CasasIcon,
  ConceptualesIcon,
} from "@/components/icons/CategoriaIcons";
import { proyectos, categoriaSlugs, type Categoria } from "@/data/proyectos";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de remodelación y desarrollo integral ejecutados por Trama Estructural.",
};

const categoriaIcons: Record<Categoria, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "Proyectos comerciales": ComercialesIcon,
  Exteriores: ExterioresIcon,
  Remodelaciones: RemodelacionesIcon,
  Casas: CasasIcon,
  Proyectos: ConceptualesIcon,
};

const ordenados = [...proyectos].sort((a, b) => a.orden - b.orden);

export default function ProyectosPage() {
  return (
    <>
      <section className="bg-trama bg-paper pb-16 pt-28 lg:pb-24 lg:pt-32">
        <Container>
          <Reveal>
            <SectionLabel index="00" title="Proyectos" />
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Proyectos ejecutados por nuestro equipo.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Explora por tipo de proyecto o revisa la galería completa más
              abajo.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-5">
              {(Object.keys(categoriaSlugs) as Categoria[]).map((categoria) => {
                const Icon = categoriaIcons[categoria];
                return (
                  <Link
                    key={categoria}
                    href={`/proyectos/categoria/${categoriaSlugs[categoria]}`}
                    className="group flex flex-col items-center gap-3 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-stone-300 text-walnut-500 transition-colors group-hover:border-walnut-500 group-hover:bg-walnut-500 group-hover:text-paper">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="text-xs uppercase tracking-wide text-ink/70">
                      {categoria}
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-trama bg-stone-50 py-16 lg:py-24">
        <Container>
          <Reveal>
            <SectionLabel index="01" title="Galería" />
            <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              Todos los proyectos.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {ordenados.map((proyecto, i) => (
              <Reveal key={proyecto.slug} delay={i * 0.05}>
                <ProjectCard proyecto={proyecto} aspect="square" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
