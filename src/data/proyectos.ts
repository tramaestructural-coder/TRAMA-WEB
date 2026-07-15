export type Proyecto = {
  slug: string;
  titulo: string;
  tipologia: string;
  orden: number;
  // Proyectos realizados junto a DIMOD: la tipología se muestra como
  // "Colaboración" y se despliega el logo de DIMOD junto a la portada.
  colaboracionDimod?: boolean;
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

// "orden" replica el número de carpeta del cliente en Drive (H:\...\FOTOS).
// La página de inicio muestra los primeros 8; /proyectos los muestra todos.
export const proyectos: Proyecto[] = [
  {
    slug: "oficina-vitacura",
    titulo: "Oficina Vitacura",
    tipologia: "Colaboración",
    orden: 1,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/oficina-vitacura/cover.jpg",
    imagenes: ["/images/proyectos/oficina-vitacura/cover.jpg"],
  },
  {
    slug: "estacionamiento",
    titulo: "Estacionamiento",
    tipologia: "Obra",
    orden: 2,
    fichaPendiente: true,
    cover: "/images/proyectos/estacionamiento/cover.jpg",
    imagenes: [
      "/images/proyectos/estacionamiento/02.jpg",
      "/images/proyectos/estacionamiento/03.jpg",
    ],
  },
  {
    slug: "depto-kennedy",
    titulo: "Remodelación Depto. Kennedy",
    tipologia: "Vivienda",
    orden: 3,
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
    orden: 4,
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
    slug: "cocina-lo-matta",
    titulo: "Cocina Nueva — Lo Matta",
    tipologia: "Remodelación",
    orden: 5,
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
    slug: "casa-jorge",
    titulo: "Casa Jorge",
    tipologia: "Colaboración",
    orden: 6,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-jorge/cover.jpg",
    imagenes: ["/images/proyectos/casa-jorge/cover.jpg"],
  },
  {
    slug: "quincho-jorge",
    titulo: "Quincho Jorge",
    tipologia: "Colaboración",
    orden: 7,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/quincho-jorge/cover.jpg",
    imagenes: ["/images/proyectos/quincho-jorge/cover.jpg"],
  },
  {
    slug: "ampliacion-macarena",
    titulo: "Ampliación Macarena",
    tipologia: "Colaboración",
    orden: 8,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/ampliacion-macarena/cover.jpg",
    imagenes: ["/images/proyectos/ampliacion-macarena/cover.jpg"],
  },
  {
    slug: "pergola-romeral",
    titulo: "Pérgola Romeral",
    tipologia: "Ampliación",
    orden: 9,
    fichaPendiente: true,
    cover: "/images/proyectos/pergola-romeral/cover.jpg",
    imagenes: ["/images/proyectos/pergola-romeral/cover.jpg"],
  },
  {
    slug: "casa-algarrobo",
    titulo: "Casa Algarrobo",
    tipologia: "Colaboración",
    orden: 12,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-algarrobo/cover.jpg",
    imagenes: ["/images/proyectos/casa-algarrobo/cover.jpg"],
  },
  {
    slug: "mini-sala-de-ventas",
    titulo: "Mini Sala de Ventas",
    tipologia: "Colaboración",
    orden: 13,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/mini-sala-de-ventas/cover.jpg",
    imagenes: ["/images/proyectos/mini-sala-de-ventas/cover.jpg"],
  },
  {
    slug: "pergola-maitencillo",
    titulo: "Pérgola Maitencillo",
    tipologia: "Ampliación",
    orden: 14,
    fichaPendiente: true,
    cover: "/images/proyectos/pergola-maitencillo/cover.jpg",
    imagenes: ["/images/proyectos/pergola-maitencillo/02.jpg", "/images/proyectos/pergola-maitencillo/03.jpg"],
  },
  {
    slug: "casa-lorena",
    titulo: "Casa Lorena",
    tipologia: "Colaboración",
    orden: 15,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-lorena/cover.jpg",
    imagenes: ["/images/proyectos/casa-lorena/cover.jpg"],
  },
  {
    slug: "casa-ignacio",
    titulo: "Casa Ignacio",
    tipologia: "Colaboración",
    orden: 19,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-ignacio/cover.jpg",
    imagenes: ["/images/proyectos/casa-ignacio/cover.jpg"],
  },
  {
    slug: "casa-andrea",
    titulo: "Casa Andrea",
    tipologia: "Colaboración",
    orden: 21,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-andrea/cover.jpg",
    imagenes: ["/images/proyectos/casa-andrea/cover.jpg"],
  },
  {
    slug: "mini-oficina-modular",
    titulo: "Mini Oficina Modular",
    tipologia: "Colaboración",
    orden: 22,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/mini-oficina-modular/cover.jpg",
    imagenes: ["/images/proyectos/mini-oficina-modular/cover.jpg"],
  },
  {
    slug: "casa-leonardo",
    titulo: "Casa Leonardo",
    tipologia: "Colaboración",
    orden: 25,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-leonardo/cover.jpg",
    imagenes: ["/images/proyectos/casa-leonardo/cover.jpg"],
  },
  {
    slug: "cabana-pedro",
    titulo: "Cabaña Pedro",
    tipologia: "Colaboración",
    orden: 26,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/cabana-pedro/cover.jpg",
    imagenes: ["/images/proyectos/cabana-pedro/cover.jpg"],
  },
  {
    slug: "casa-pedro",
    titulo: "Casa Pedro",
    tipologia: "Colaboración",
    orden: 28,
    colaboracionDimod: true,
    fichaPendiente: true,
    cover: "/images/proyectos/casa-pedro/cover.jpg",
    imagenes: ["/images/proyectos/casa-pedro/cover.jpg"],
  },
];
