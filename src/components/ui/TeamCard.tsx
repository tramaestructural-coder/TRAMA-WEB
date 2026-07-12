import Image from "next/image";
import type { MiembroEquipo } from "@/data/equipo";

function iniciales(nombre: string) {
  return nombre
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function TeamCard({ miembro }: { miembro: MiembroEquipo }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
        {miembro.foto ? (
          <Image
            src={miembro.foto}
            alt={miembro.nombre}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-stone-400 bg-stone-100 text-stone-400">
            <span className="font-display text-4xl">{iniciales(miembro.nombre)}</span>
            <span className="text-xs uppercase tracking-wide">Foto próximamente</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-ink">{miembro.nombre}</h3>
        <p className="text-sm text-ink/60">{miembro.rol}</p>
        <p className="mt-2 text-sm italic text-ink/40">
          {miembro.bio ?? "Biografía próximamente."}
        </p>
      </div>
    </div>
  );
}
