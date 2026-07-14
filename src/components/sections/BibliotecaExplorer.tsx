"use client";

import { useMemo, useState } from "react";
import { ArticuloCard } from "@/components/ui/ArticuloCard";
import { categorias, type Articulo, type Categoria } from "@/data/articulos";

export function BibliotecaExplorer({ articulos }: { articulos: Articulo[] }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return articulos.filter((a) => {
      const coincideCategoria = !categoria || a.categoria === categoria;
      const coincideTexto =
        !q ||
        a.titulo.toLowerCase().includes(q) ||
        a.resumen.toLowerCase().includes(q) ||
        a.categoria.toLowerCase().includes(q);
      return coincideCategoria && coincideTexto;
    });
  }, [articulos, busqueda, categoria]);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar artículos…"
          aria-label="Buscar artículos"
          className="w-full max-w-sm border-b border-stone-300 bg-transparent py-2 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-walnut-500"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategoria(null)}
            className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
              categoria === null
                ? "border-espresso-500 bg-espresso-500 text-paper"
                : "border-stone-300 text-ink/60 hover:border-walnut-500 hover:text-walnut-500"
            }`}
          >
            Todas
          </button>
          {categorias.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoria(c)}
              className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                categoria === c
                  ? "border-espresso-500 bg-espresso-500 text-paper"
                  : "border-stone-300 text-ink/60 hover:border-walnut-500 hover:text-walnut-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtrados.length > 0 ? (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((articulo) => (
            <ArticuloCard key={articulo.slug} articulo={articulo} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4 border border-dashed border-stone-300 py-16 text-center">
          <p className="text-sm text-ink/60">
            No encontramos artículos con esos filtros.
          </p>
          <button
            type="button"
            onClick={() => {
              setBusqueda("");
              setCategoria(null);
            }}
            className="text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
