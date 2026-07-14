import Image from "next/image";
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
    <section className="bg-trama bg-stone-50 py-28 lg:py-40">
      <Container>
        <Reveal>
          <SectionLabel index={index} title="Servicios" />
          <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
            Lo que realmente ofrecemos.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {servicios.map((servicio) => (
              <Link
                key={servicio.slug}
                href="/servicios"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-200"
              >
                <Image
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-trama group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso-500/95 px-4 py-3 transition-transform duration-500 ease-trama group-hover:translate-y-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium leading-tight text-paper">
                      {servicio.nombre}
                    </span>
                    <span className="shrink-0 rounded-full border border-paper/40 px-3 py-1 text-xs uppercase tracking-wide text-paper transition-colors group-hover:bg-paper group-hover:text-espresso-500">
                      Ver más
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
