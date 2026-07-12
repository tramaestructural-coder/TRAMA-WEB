import Image from "next/image";
import Link from "next/link";
import type { Proyecto } from "@/data/proyectos";

export function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/proyectos/${proyecto.slug}`}
      className="group block"
      aria-label={`Ver proyecto ${proyecto.titulo}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
        <Image
          src={proyecto.cover}
          alt={proyecto.titulo}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 38vw, 70vw"
          className="object-cover transition-transform duration-700 ease-trama group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/55">
          <span className="translate-y-2 rounded-full border border-paper/70 px-5 py-2 text-xs uppercase tracking-wide text-paper opacity-0 transition-all duration-400 ease-trama group-hover:translate-y-0 group-hover:opacity-100">
            Ver más
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-sm text-ink sm:text-base">{proyecto.titulo}</h3>
        <span className="shrink-0 text-[10px] uppercase tracking-wide text-ink/50">
          {proyecto.tipologia}
        </span>
      </div>
    </Link>
  );
}
