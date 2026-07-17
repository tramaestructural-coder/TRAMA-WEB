import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  ComercialesIcon,
  ExterioresIcon,
  RemodelacionesIcon,
  CasasIcon,
  ConceptualesIcon,
} from "@/components/icons/CategoriaIcons";
import { proyectos, categoriaSlugs, type Categoria } from "@/data/proyectos";

const categoriaIcons: Record<Categoria, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "Proyectos comerciales": ComercialesIcon,
  Exteriores: ExterioresIcon,
  Remodelaciones: RemodelacionesIcon,
  Casas: CasasIcon,
  Proyectos: ConceptualesIcon,
};

function categoriaFromSlug(slug: string): Categoria | undefined {
  return (Object.keys(categoriaSlugs) as Categoria[]).find(
    (c) => categoriaSlugs[c] === slug
  );
}

export function generateStaticParams() {
  return Object.values(categoriaSlugs).map((categoria) => ({ categoria }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria: slug } = await params;
  const categoria = categoriaFromSlug(slug);
  if (!categoria) return {};
  return {
    title: categoria,
    description: `Proyectos de Trama Estructural en la categoría ${categoria.toLowerCase()}.`,
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria: slug } = await params;
  const categoria = categoriaFromSlug(slug);
  if (!categoria) notFound();

  const Icon = categoriaIcons[categoria];
  const filtrados = proyectos
    .filter((p) => p.categoria === categoria)
    .sort((a, b) => a.orden - b.orden);

  return (
    <section className="bg-trama bg-paper pb-16 pt-28 lg:pb-24 lg:pt-32">
      <Container>
        <Reveal>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            ← Volver a Proyectos
          </Link>
          <div className="mt-8">
            <SectionLabel index="00" title="Proyectos" />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-walnut-500 text-walnut-500">
              <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            </span>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              {categoria}
            </h1>
          </div>
          <p className="mt-6 max-w-xl text-base italic leading-relaxed text-ink/50">
            Descripción de la categoría — próximamente.
          </p>
        </Reveal>

        {filtrados.length > 0 ? (
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {filtrados.map((proyecto, i) => (
              <Reveal key={proyecto.slug} delay={i * 0.05}>
                <ProjectCard proyecto={proyecto} aspect="square" />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-14 text-sm text-ink/50">
            Todavía no hay proyectos publicados en esta categoría.
          </p>
        )}
      </Container>
    </section>
  );
}
