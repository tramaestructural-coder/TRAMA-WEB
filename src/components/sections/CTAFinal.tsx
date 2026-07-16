import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { evaluacionHref } from "@/lib/config";

export function CTAFinal() {
  return (
    <section className="bg-trama relative overflow-hidden bg-stone-50 py-16 text-ink lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Conversemos sobre tu proyecto.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Cuéntanos qué quieres transformar. La primera conversación es una
            evaluación real, no una venta.
          </p>
          <Button href={evaluacionHref()} variant="accent" className="mt-9">
            Solicitar evaluación
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
