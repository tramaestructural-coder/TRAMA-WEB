import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { servicios } from "@/data/servicios";

export function ServiciosPreview({
  index = "02",
  showCta = true,
}: {
  index?: string;
  showCta?: boolean;
}) {
  return (
    <section className="bg-trama bg-stone-50 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index={index} title="Servicios" />
          <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
            Lo que realmente ofrecemos.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {servicios.map((servicio) => {
              const Icon = servicio.icon;
              return (
                <Link
                  key={servicio.slug}
                  href={`/servicios#${servicio.slug}`}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-stone-300 text-walnut-500 transition-colors group-hover:border-walnut-500 group-hover:bg-walnut-500 group-hover:text-paper">
                    <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="text-xs uppercase leading-snug tracking-wide text-ink/70">
                    {servicio.nombre}
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>

        {showCta && (
          <Reveal delay={0.2}>
            <Link
              href="/servicios"
              className="mt-10 inline-block text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
            >
              Ver todos los servicios →
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
