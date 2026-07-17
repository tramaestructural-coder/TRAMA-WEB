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
          <div className="relative mt-10 lg:mt-6">
            <div className="ml-auto w-full sm:w-[75%] lg:w-[56%]">
              <Image
                src="/images/general/axo-1-sin-fondo.png"
                alt="Axonometría de proyecto Trama Estructural"
                width={1254}
                height={848}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="relative z-10 -mt-4 max-w-md rounded-xl bg-paper/95 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:max-w-xl lg:-translate-y-1/2">
              <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                Somos un equipo multidisciplinario, integramos arquitectura e
                ingeniería y nos encargamos de todas las etapas de tu
                proyecto.
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
                Diseñamos, Proyectamos y construimos.
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
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
