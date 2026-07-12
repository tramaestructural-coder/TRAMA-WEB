export type Proyecto = {
  slug: string;
  titulo: string;
  tipologia: string;
  orden: number;
  // Ficha técnica: ubicación, m² y año son datos reales pendientes de
  // confirmación por el cliente. No se inventan — se muestran como
  // "próximamente" hasta recibirlos. Igual que la descripción larga, que
  // llegará en un .txt por proyecto más adelante.
  fichaPendiente: boolean;
  ubicacion?: string;
  m2?: number;
  anio?: number;
  descripcion?: string;
  cover: string;
  imagenes: string[];
  // Video de introducción del proyecto: reemplaza la portada estática como
  // banner principal de la página de detalle. Cuando existe, "cover" pasa
  // a mostrarse como la primera foto de la galería en vez de perderse.
  heroVideo?: string;
};

// Orden de exhibición definido por el cliente (numeración de sus carpetas
// en Drive). Los 6 proyectos organizados se publican en el lanzamiento.
export const proyectos: Proyecto[] = [
  {
    slug: "depto-kennedy",
    titulo: "Remodelación Depto. Kennedy",
    tipologia: "Vivienda",
    orden: 1,
    fichaPendiente: true,
    cover: "/images/proyectos/depto-kennedy/cover.jpg",
    heroVideo: "/images/proyectos/depto-kennedy/hero.mp4",
    imagenes: [
      "/images/proyectos/depto-kennedy/cover.jpg",
      "/images/proyectos/depto-kennedy/02.jpg",
      "/images/proyectos/depto-kennedy/03.jpg",
      "/images/proyectos/depto-kennedy/04.jpg",
      "/images/proyectos/depto-kennedy/05.jpg",
      "/images/proyectos/depto-kennedy/06.jpg",
      "/images/proyectos/depto-kennedy/07.jpg",
      "/images/proyectos/depto-kennedy/08.jpg",
    ],
  },
  {
    slug: "quincho",
    titulo: "Quincho",
    tipologia: "Ampliación",
    orden: 2,
    fichaPendiente: true,
    cover: "/images/proyectos/quincho/cover.jpg",
    imagenes: [
      "/images/proyectos/quincho/02.jpg",
      "/images/proyectos/quincho/03.jpg",
      "/images/proyectos/quincho/04.jpg",
      "/images/proyectos/quincho/05.jpg",
    ],
  },
  {
    slug: "estacionamiento",
    titulo: "Estacionamiento",
    tipologia: "Obra",
    orden: 3,
    fichaPendiente: true,
    cover: "/images/proyectos/estacionamiento/cover.jpg",
    imagenes: [
      "/images/proyectos/estacionamiento/02.jpg",
      "/images/proyectos/estacionamiento/03.jpg",
    ],
  },
  {
    slug: "cocina-lo-matta",
    titulo: "Cocina Nueva — Lo Matta",
    tipologia: "Remodelación",
    orden: 4,
    fichaPendiente: true,
    cover: "/images/proyectos/cocina-lo-matta/cover.jpg",
    imagenes: [
      "/images/proyectos/cocina-lo-matta/02.jpg",
      "/images/proyectos/cocina-lo-matta/03.jpg",
      "/images/proyectos/cocina-lo-matta/04.jpg",
      "/images/proyectos/cocina-lo-matta/05.jpg",
      "/images/proyectos/cocina-lo-matta/06.jpg",
      "/images/proyectos/cocina-lo-matta/07.jpg",
    ],
  },
  {
    slug: "pergola-maitencillo",
    titulo: "Pérgola Maitencillo",
    tipologia: "Ampliación",
    orden: 5,
    fichaPendiente: true,
    cover: "/images/proyectos/pergola-maitencillo/cover.jpg",
    imagenes: ["/images/proyectos/pergola-maitencillo/02.jpg", "/images/proyectos/pergola-maitencillo/03.jpg"],
  },
  {
    slug: "pergola-lo-matta",
    titulo: "Pérgola Lo Matta",
    tipologia: "Ampliación",
    orden: 6,
    fichaPendiente: true,
    cover: "/images/proyectos/pergola-lo-matta/cover.jpg",
    imagenes: ["/images/proyectos/pergola-lo-matta/02.jpg"],
  },
];
