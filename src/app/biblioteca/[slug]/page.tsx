import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArticuloCard, formatFecha } from "@/components/ui/ArticuloCard";
import { articulos, type BloqueContenido } from "@/data/articulos";
import { evaluacionHref, site } from "@/lib/config";

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articulo = articulos.find((a) => a.slug === slug);
  if (!articulo) return {};
  return {
    title: articulo.titulo,
    description: articulo.resumen,
    openGraph: {
      title: articulo.titulo,
      description: articulo.resumen,
      url: `${site.url}/biblioteca/${articulo.slug}`,
      images: [{ url: articulo.imagenDestacada }],
      type: "article",
      publishedTime: articulo.fecha,
    },
  };
}

function Bloque({ bloque }: { bloque: BloqueContenido }) {
  switch (bloque.tipo) {
    case "parrafo":
      return (
        <p className="text-base leading-relaxed text-ink/80">{bloque.texto}</p>
      );
    case "subtitulo":
      return (
        <h2 className="mt-2 font-display text-2xl text-ink">{bloque.texto}</h2>
      );
    case "imagen":
      return (
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-stone-200">
          <Image
            src={bloque.src}
            alt={bloque.alt}
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover"
          />
        </div>
      );
    case "cita":
      return (
        <blockquote className="border-l-2 border-celeste pl-6 font-display text-xl leading-snug text-ink">
          “{bloque.texto}”
          {bloque.autor && (
            <span className="mt-2 block text-sm font-sans text-ink/50">
              — {bloque.autor}
            </span>
          )}
        </blockquote>
      );
    case "lista":
      return (
        <ul className="space-y-2.5">
          {bloque.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/80">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-celeste" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function ArticuloDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articulo = articulos.find((a) => a.slug === slug);
  if (!articulo) notFound();

  const relacionados = articulos
    .filter((a) => a.slug !== articulo.slug && a.categoria === articulo.categoria)
    .slice(0, 3);

  return (
    <article className="bg-trama bg-paper pb-28 pt-32 lg:pb-40 lg:pt-36">
      <div className="relative h-[45vh] min-h-[320px] w-full bg-stone-200">
        <Image
          src={articulo.imagenDestacada}
          alt={articulo.titulo}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="mt-14 max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-walnut-500">
            <span>{articulo.categoria}</span>
            <span className="h-px w-4 bg-walnut-500/50" />
            <span className="text-ink/40">{formatFecha(articulo.fecha)}</span>
            <span className="text-ink/40">· {articulo.tiempoLectura} min de lectura</span>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            {articulo.titulo}
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-6 border-t border-stone-300 pt-12">
          {articulo.contenido.map((bloque, i) => (
            <Bloque key={i} bloque={bloque} />
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-16 flex flex-wrap items-center gap-6 border-t border-stone-300 pt-10">
          <Button href={evaluacionHref()}>Solicitar evaluación</Button>
          <Link
            href="/biblioteca"
            className="text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            ← Volver a la biblioteca
          </Link>
        </Reveal>
      </Container>

      {relacionados.length > 0 && (
        <Container className="mt-24 lg:mt-32">
          <h2 className="font-display text-2xl text-ink">Artículos relacionados</h2>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((a) => (
              <ArticuloCard key={a.slug} articulo={a} />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
