import Image from "next/image";
import Link from "next/link";
import type { Proyecto } from "@/data/proyectos";

export function ProjectCard({ proyecto, href }: { proyecto: Proyecto; href?: string }) {
  return (
    <Link
      href={href ?? `/proyectos/${proyecto.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200"
      aria-label={`Ver proyecto ${proyecto.titulo}`}
    >
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

      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso-500/95 px-4 py-3 transition-transform duration-500 ease-trama group-hover:translate-y-0">
        <div className="flex items-start justify-between gap-3">
          <span className="min-w-0 truncate text-sm font-medium leading-tight text-paper">
            {proyecto.titulo}
          </span>
          {proyecto.colaboracionDimod ? (
            <span className="flex shrink-0 flex-col items-end gap-1.5">
              <span className="text-[11px] uppercase tracking-wide text-paper/70">
                Colaboración
              </span>
              <Image
                src="/images/general/dimod-logo.png"
                alt="DIMOD"
                width={64}
                height={16}
                className="h-3 w-auto object-contain invert"
              />
            </span>
          ) : (
            <span className="shrink-0 text-[11px] uppercase tracking-wide text-paper/70">
              {proyecto.tipologia}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
