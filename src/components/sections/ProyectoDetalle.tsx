"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import type { Proyecto } from "@/data/proyectos";
import { evaluacionHref } from "@/lib/config";

export function ProyectoDetalle({ proyecto }: { proyecto: Proyecto }) {
  const imagenes = proyecto.imagenes.length > 0 ? proyecto.imagenes : [proyecto.cover];
  const [index, setIndex] = useState(0);
  const total = imagenes.length;

  const anterior = () => setIndex((i) => (i - 1 + total) % total);
  const siguiente = () => setIndex((i) => (i + 1) % total);

  return (
    <article className="bg-trama bg-paper pb-16 pt-28 lg:pb-24 lg:pt-32">
      {proyecto.heroVideo && (
        <div className="relative h-[50vh] min-h-[360px] w-full bg-espresso-500">
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
        </div>
      )}

      <Container className={proyecto.heroVideo ? "mt-14" : "mt-6"}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-stone-300 pb-6">
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

        <Reveal delay={0.1} className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-200">
            <Image
              src={imagenes[index] ?? proyecto.cover}
              alt={`${proyecto.titulo} — imagen ${index + 1}`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={anterior}
                  aria-label="Imagen anterior"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink transition-colors hover:bg-paper"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={siguiente}
                  aria-label="Imagen siguiente"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink transition-colors hover:bg-paper"
                >
                  →
                </button>
              </>
            )}
          </div>

          <div className="flex flex-col lg:min-h-full">
            {proyecto.descripcion && (
              <div>
                <h2 className="text-xs uppercase tracking-widest text-ink/40">
                  Descripción
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  {proyecto.descripcion}
                </p>
              </div>
            )}

            {total > 1 && (
              <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:mt-auto lg:pt-8">
                {imagenes.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                    aria-current={i === index}
                    className={`relative aspect-square overflow-hidden rounded-lg transition-opacity ${
                      i === index ? "ring-2 ring-walnut-500" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal
          delay={0.25}
          className="mt-16 flex flex-wrap items-center gap-6 border-t border-stone-300 pt-10"
        >
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
