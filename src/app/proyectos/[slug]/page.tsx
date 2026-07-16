import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProyectoDetalle } from "@/components/sections/ProyectoDetalle";
import { proyectos } from "@/data/proyectos";

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
    description:
      proyecto.descripcion ??
      `${proyecto.titulo} — proyecto de ${proyecto.tipologia.toLowerCase()} ejecutado por Trama Estructural.`,
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

  return <ProyectoDetalle proyecto={proyecto} />;
}
