import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BibliotecaExplorer } from "@/components/sections/BibliotecaExplorer";
import { articulos } from "@/data/articulos";
import { whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Biblioteca",
  description:
    "Artículos y contenido técnico de Trama Estructural sobre diseño, construcción, permisos y presupuesto.",
};

export default function BibliotecaPage() {
  return (
    <section className="bg-trama bg-paper pb-28 pt-40 lg:pb-40 lg:pt-48">
      <Container>
        <Reveal>
          <SectionLabel index="00" title="Biblioteca" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Contenido técnico para tu proyecto.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Artículos y notas prácticas sobre diseño, construcción, permisos
            y presupuesto — pensados para que llegues a la primera reunión
            con las preguntas correctas.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <BibliotecaExplorer articulos={articulos} />
        </Reveal>

        <Reveal delay={0.15}>
          <Button
            href={whatsappHref("Hola Trama Estructural, tengo una consulta técnica.")}
            className="mt-20"
          >
            Escribir por WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
