import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArticuloCard } from "@/components/ui/ArticuloCard";
import { articulos } from "@/data/articulos";

const recientes = [...articulos]
  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
  .slice(0, 3);

export function BibliotecaPreview() {
  return (
    <section className="bg-trama bg-paper py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index="06" title="Biblioteca" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              Contenido técnico para tu proyecto.
            </h2>
            <Link
              href="/biblioteca"
              className="text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
            >
              Ir a la biblioteca →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-3">
            {recientes.map((articulo) => (
              <ArticuloCard key={articulo.slug} articulo={articulo} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
