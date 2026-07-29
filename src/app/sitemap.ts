import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { proyectos, categoriaSlugs } from "@/data/proyectos";
import { articulos } from "@/data/articulos";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas: MetadataRoute.Sitemap = [
    "",
    "/servicios",
    "/proyectos",
    "/nosotros",
    "/biblioteca",
    "/contacto",
    "/politica-de-privacidad",
  ].map((ruta) => ({
    url: `${site.url}${ruta}`,
    lastModified: new Date(),
  }));

  const categoriaUrls: MetadataRoute.Sitemap = Object.values(categoriaSlugs).map((slug) => ({
    url: `${site.url}/proyectos/categoria/${slug}`,
    lastModified: new Date(),
  }));

  const proyectosUrls: MetadataRoute.Sitemap = proyectos.map((p) => ({
    url: `${site.url}/proyectos/${p.slug}`,
    lastModified: new Date(),
  }));

  const articulosUrls: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${site.url}/biblioteca/${a.slug}`,
    lastModified: new Date(a.fecha),
  }));

  return [...estaticas, ...categoriaUrls, ...proyectosUrls, ...articulosUrls];
}
