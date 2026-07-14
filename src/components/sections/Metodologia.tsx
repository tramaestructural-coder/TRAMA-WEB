import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { metodologia } from "@/data/metodologia";
import { evaluacionHref } from "@/lib/config";

export function Metodologia() {
  return (
    <section className="bg-trama bg-espresso-500 py-28 text-paper lg:py-40">
      <Container>
        <Reveal>
          <SectionLabel index="03" title="Metodología" onDark />
          <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight sm:text-4xl">
            Un mismo proyecto, de principio a fin.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/75">
            El proyecto avanza en línea recta: cada etapa la ejecuta el mismo
            equipo que definió la anterior, sin traspasos ni reinterpretaciones.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-paper/15 lg:block"
          />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {metodologia.map((paso, i) => {
              const Icon = paso.icon;
              return (
                <Reveal key={paso.nombre} delay={i * 0.08}>
                  <div className="relative">
                    <span className="font-display text-xs text-paper/45">0{i + 1}</span>
                    <div className="relative z-10 mt-3 flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 bg-espresso-500">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg">{paso.nombre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/70">
                      {paso.resumen}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2}>
          <Button
            href={evaluacionHref()}
            variant="secondary"
            size="sm"
            className="mt-16 text-paper uppercase tracking-wide"
          >
            ¿Listo para partir? Solicitar evaluación →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
