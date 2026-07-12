"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { proyectos } from "@/data/proyectos";

const ordenados = [...proyectos].sort((a, b) => a.orden - b.orden);

export function ProyectosDestacados() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section id="proyectos" className="bg-trama bg-paper py-24 lg:py-32">
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
          <div className="relative mt-14">
            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {ordenados.map((proyecto) => (
                <div
                  key={proyecto.slug}
                  className="w-[62vw] flex-none snap-start sm:w-[34vw] lg:w-[21vw]"
                >
                  <ProjectCard proyecto={proyecto} />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scroll(-1)}
              className="absolute left-2 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-lg shadow-ink/15 transition-colors hover:bg-sage-100 sm:left-4"
              aria-label="Proyecto anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="absolute right-2 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-lg shadow-ink/15 transition-colors hover:bg-sage-100 sm:right-4"
              aria-label="Siguiente proyecto"
            >
              →
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
