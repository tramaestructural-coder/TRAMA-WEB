import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { proyectos } from "@/data/proyectos";
import { evaluacionHref } from "@/lib/config";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) return {};
  return {
    title: proyecto.titulo,
    description: `${proyecto.titulo} — proyecto de ${proyecto.tipologia.toLowerCase()} ejecutado por Trama Estructural.`,
  };
}

export default async function ProyectoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) notFound();

  return (
    <article className="bg-trama bg-paper pb-24 pt-32 lg:pb-32 lg:pt-36">
      <div className="relative h-[60vh] min-h-[420px] w-full bg-espresso-500">
        {proyecto.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={proyecto.cover}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={proyecto.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={proyecto.cover}
            alt={proyecto.titulo}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container className="mt-14">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-stone-300 pb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-walnut-500">
                {proyecto.tipologia}
              </span>
              <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                {proyecto.titulo}
              </h1>
            </div>

            {proyecto.fichaPendiente ? (
              <p className="text-sm italic text-ink/40">
                Ficha técnica (ubicación, m² y año) próximamente.
              </p>
            ) : (
              <dl className="flex gap-8 text-sm text-ink/70">
                {proyecto.ubicacion && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink/40">
                      Ubicación
                    </dt>
                    <dd>{proyecto.ubicacion}</dd>
                  </div>
                )}
                {proyecto.m2 && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink/40">m²</dt>
                    <dd>{proyecto.m2}</dd>
                  </div>
                )}
                {proyecto.anio && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink/40">Año</dt>
                    <dd>{proyecto.anio}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>
        </Reveal>

        {proyecto.imagenes.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {proyecto.imagenes.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`${proyecto.titulo} — imagen ${i + 2}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.15} className="mt-16 flex flex-wrap items-center gap-6 border-t border-stone-300 pt-10">
          <Button
            href={evaluacionHref(
              `Solicitud de evaluación de proyecto — vi "${proyecto.titulo}" y quiero más información.`
            )}
          >
            Solicitar evaluación
          </Button>
          <Link
            href="/proyectos"
            className="text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            ← Ver todos los proyectos
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
