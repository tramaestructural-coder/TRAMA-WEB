import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Biblioteca",
  description:
    "Artículos y contenido técnico de Trama Estructural. Próximamente.",
};

const placeholders = Array.from({ length: 6 });

export default function BibliotecaPage() {
  return (
    <section className="bg-trama bg-paper pb-24 pt-40 lg:pb-32 lg:pt-48">
      <Container>
        <Reveal>
          <SectionLabel index="00" title="Biblioteca" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Contenido técnico, en construcción.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Esta es la plantilla de nuestro bulletin board: aquí iremos
            publicando artículos, notas técnicas y aprendizajes de obra.
            Vuelve pronto.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((_, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="flex aspect-[4/3] flex-col justify-between border border-dashed border-stone-300 bg-stone-50 p-6"
            >
              <span className="text-xs uppercase tracking-widest text-ink/30">
                Próximamente
              </span>
              <span className="font-display text-lg text-ink/25">
                Artículo técnico
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <a
            href={whatsappHref(
              "Hola Trama Estructural, tengo una consulta técnica."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block rounded-full bg-espresso-500 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-walnut-500"
          >
            Escribir por WhatsApp
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
