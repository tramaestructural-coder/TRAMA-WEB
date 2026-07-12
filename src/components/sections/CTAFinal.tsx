import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappHref } from "@/lib/config";

export function CTAFinal() {
  return (
    <section className="bg-trama relative overflow-hidden bg-celeste py-28 text-ink lg:py-36">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">
            Conversemos sobre tu proyecto.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Cuéntanos qué quieres transformar. La primera conversación es una
            evaluación real, no una venta.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full border border-ink/30 bg-celeste px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Solicitar evaluación por WhatsApp
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
