import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Presentacion() {
  return (
    <section className="bg-trama bg-paper py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index="01" title="Quiénes somos" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-200 sm:aspect-[16/9]">
            <Image
              src="/images/general/axo-1.png"
              alt="Axonometría de proyecto Trama Estructural"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 max-w-sm bg-celeste p-6 sm:max-w-md sm:p-8">
              <p className="font-display text-lg leading-snug text-ink sm:text-xl">
                Somos un equipo multidisciplinario, integramos arquitectura e
                ingeniería y nos encargamos de todas las etapas de tu
                proyecto.
              </p>
              <p className="mt-3 font-display text-lg leading-snug text-ink sm:text-xl">
                Diseñamos, Proyectamos y construimos.
              </p>
              <p className="mt-3 font-display text-lg leading-snug text-ink sm:text-xl">
                Somos Trama Estructural.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/nosotros"
            className="mt-8 inline-block text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            Conocer más sobre nosotros →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
