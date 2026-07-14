import Image from "next/image";
import Link from "next/link";
import type { Articulo } from "@/data/articulos";

const fechaFormatter = new Intl.DateTimeFormat("es-CL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatFecha(fecha: string) {
  return fechaFormatter.format(new Date(fecha));
}

export function ArticuloCard({ articulo }: { articulo: Articulo }) {
  return (
    <Link
      href={`/biblioteca/${articulo.slug}`}
      className="group block"
      aria-label={`Leer artículo ${articulo.titulo}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
        <Image
          src={articulo.imagenDestacada}
          alt={articulo.titulo}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-trama group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-walnut-500">
          <span>{articulo.categoria}</span>
          <span className="h-px w-4 bg-walnut-500/50" />
          <span className="text-ink/40">{formatFecha(articulo.fecha)}</span>
        </div>
        <h3 className="mt-3 font-display text-xl text-ink transition-colors group-hover:text-walnut-500">
          {articulo.titulo}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/65">
          {articulo.resumen}
        </p>
        <span className="mt-3 block text-xs text-ink/40">
          {articulo.tiempoLectura} min de lectura
        </span>
      </div>
    </Link>
  );
}
