import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Presentacion() {
  return (
    <section className="bg-trama bg-paper py-28 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel index="01" title="Quiénes somos" />
            <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              No somos una oficina de arquitectura. Tampoco una constructora
              tradicional.
            </h2>
            <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                Trama Estructural integra arquitectura, ingeniería, diseño,
                presupuesto, construcción y supervisión en un mismo equipo.
                El mismo grupo de personas que diseña tu proyecto es el que
                lo presupuesta y el que lo construye.
              </p>
              <p>
                Esa continuidad es lo que reduce la incertidumbre que
                normalmente existe al remodelar una propiedad: diseñamos
                pensando en construir, presupuestamos pensando en evitar
                imprevistos y construimos respetando exactamente lo
                acordado.
              </p>
              <p className="font-sans text-lg font-medium text-ink">
                No vendemos solo construcción. Vendemos tranquilidad,
                confianza y certeza.
              </p>
            </div>
            <Link
              href="/nosotros"
              className="mt-8 inline-block text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
            >
              Conocer más sobre nosotros →
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/general/quienes-somos.jpg"
                alt="Espacio residencial remodelado por Trama Estructural"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
