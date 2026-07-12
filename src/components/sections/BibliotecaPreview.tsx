import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function BibliotecaPreview() {
  return (
    <section className="bg-trama bg-paper py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="06" title="Biblioteca" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              Contenido técnico, en construcción.
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
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-[4/3] flex-col justify-between border border-dashed border-stone-300 bg-stone-50 p-6"
              >
                <span className="text-xs uppercase tracking-widest text-ink/30">
                  Próximamente
                </span>
                <span className="font-display text-lg text-ink/25">
                  Artículo técnico
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
