export type Categoria =
  | "Proyectos comerciales"
  | "Exteriores"
  | "Interiores"
  | "Casas"
  | "Proyectos";

// Segmento de URL para /proyectos/categoria/[slug]. Única fuente de verdad
// para el mapeo categoría → slug, usada tanto por la grilla de íconos como
// por generateStaticParams de la subpágina de categoría.
export const categoriaSlugs: Record<Categoria, string> = {
  "Proyectos comerciales": "comerciales",
  Exteriores: "exteriores",
  Interiores: "interiores",
  Casas: "casas",
  Proyectos: "conceptuales",
};

export type Proyecto = {
  slug: string;
  titulo: string;
  tipologia: string;
  orden: number;
  // Clasificación del proyecto: hoy se asigna a mano reflejando lo que se
  // escribió en el "DATOS PROYECTO.txt" de cada carpeta (el cliente no
  // tenía este campo antes) — si el cliente la cambia en su carpeta, se
  // debe pedir que la vuelvan a sincronizar aquí.
  categoria: Categoria;
  // Proyectos realizados junto a DIMOD: la tipología se muestra como
  // "Colaboración" y se despliega el logo de DIMOD junto a la portada.
  colaboracionDimod?: boolean;
  // Ficha técnica: ubicación, m² y año vienen de "DATOS PROYECTO.txt" en
  // la carpeta de cada proyecto. fichaPendiente=true solo si aún no hay
  // ese archivo.
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
    categoria: "Proyectos comerciales",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Vitacura, Santiago de Chile",
    m2: 270,
    anio: 2024,
    descripcion:
      "Oficina diseñada y construida junto al equipo de DIMOD, la oficina busca matices entre lo industrial y lo moderno. Se utilizan elementos visuales como paneles ranurados, corta vistas y mamparas vidriadas contrastando lo industrial de los equipos en cielo.",
    cover: "/images/proyectos/oficina-vitacura/cover.jpg",
    imagenes: ["/images/proyectos/oficina-vitacura/cover.jpg"],
  },
  {
    slug: "estacionamiento",
    titulo: "Estacionamiento",
    tipologia: "Obra",
    orden: 2,
    categoria: "Exteriores",
    fichaPendiente: false,
    ubicacion: "Piedra Roja, Chicureo",
    m2: 50,
    anio: 2025,
    descripcion:
      "Se techa estacionamiento con una luz de 8 metros entre pilares, se utiliza madera laminada, encajes metálicos y un aspecto rústico que sigue la línea de sus materiales.",
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
    categoria: "Interiores",
    fichaPendiente: false,
    ubicacion: "Vitacura, Santiago de Chile",
    m2: 48,
    anio: 2026,
    descripcion:
      "Se le da un nuevo look a departamento ubicado frente a Kennedy, se cambia piso y renueva baños para dar un aspecto moderno.",
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
    categoria: "Exteriores",
    fichaPendiente: false,
    ubicacion: "Piedra Roja, Chicureo",
    m2: 40,
    anio: 2024,
    descripcion:
      "Quincho de aspecto rústico que integra una parrilla existente con un espacio perdido. Se agrega un espacio común extenso que integra la familia y los amigos.",
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
    categoria: "Interiores",
    fichaPendiente: false,
    ubicacion: "Vitacura, Santiago de Chile",
    m2: 12,
    anio: 2025,
    descripcion:
      "Esta cocina necesitaba un nuevo aspecto, más moderno y con muebles nuevos y funcionales. Se entendió como una cocina multipropósito, por lo que cada detalle fue importante en su ejecución.",
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
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Santo Domingo, Chile",
    m2: 120,
    anio: 2022,
    descripcion:
      "Una casa modular moderna, compuesta por 4 módulos distribuidos en dos pisos. Esta casa se pensó con grandes espacios, amplias terrazas en 3 niveles y un look playero.",
    cover: "/images/proyectos/casa-jorge/cover.jpg",
    imagenes: ["/images/proyectos/casa-jorge/cover.jpg"],
  },
  {
    slug: "quincho-jorge",
    titulo: "Quincho Jorge",
    tipologia: "Colaboración",
    orden: 7,
    categoria: "Exteriores",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Santo Domingo, Chile",
    m2: 28,
    anio: 2024,
    descripcion:
      "Quincho modular de estructura metálica, con persianas metálicas y un baño integrado, cumple una función de núcleo para juntarse a disfrutar en familia.",
    cover: "/images/proyectos/quincho-jorge/cover.jpg",
    imagenes: ["/images/proyectos/quincho-jorge/cover.jpg"],
  },
  {
    slug: "ampliacion-macarena",
    titulo: "Ampliación Macarena",
    tipologia: "Colaboración",
    orden: 8,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Maitencillo, Puchuncaví",
    m2: 36,
    anio: 2024,
    cover: "/images/proyectos/ampliacion-macarena/cover.jpg",
    imagenes: ["/images/proyectos/ampliacion-macarena/cover.jpg"],
  },
  {
    slug: "pergola-romeral",
    titulo: "Pérgola Romeral",
    tipologia: "Ampliación",
    orden: 9,
    categoria: "Exteriores",
    fichaPendiente: false,
    ubicacion: "Vitacura, Santiago de Chile",
    m2: 30,
    anio: 2024,
    cover: "/images/proyectos/pergola-romeral/cover.jpg",
    imagenes: ["/images/proyectos/pergola-romeral/cover.jpg"],
  },
  {
    slug: "casa-algarrobo",
    titulo: "Casa Algarrobo",
    tipologia: "Colaboración",
    orden: 12,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Algarrobo, San Antonio",
    m2: 70,
    anio: 2023,
    cover: "/images/proyectos/casa-algarrobo/cover.jpg",
    imagenes: ["/images/proyectos/casa-algarrobo/cover.jpg"],
  },
  {
    slug: "mini-sala-de-ventas",
    titulo: "Mini Sala de Ventas",
    tipologia: "Colaboración",
    orden: 13,
    categoria: "Proyectos comerciales",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Cerrillos, Santiago de Chile",
    m2: 64,
    anio: 2022,
    cover: "/images/proyectos/mini-sala-de-ventas/cover.jpg",
    imagenes: ["/images/proyectos/mini-sala-de-ventas/cover.jpg"],
  },
  {
    slug: "pergola-maitencillo",
    titulo: "Pérgola Maitencillo",
    tipologia: "Ampliación",
    orden: 14,
    categoria: "Exteriores",
    fichaPendiente: false,
    ubicacion: "Maitencillo, Puchuncaví",
    m2: 10,
    anio: 2022,
    cover: "/images/proyectos/pergola-maitencillo/cover.jpg",
    imagenes: ["/images/proyectos/pergola-maitencillo/02.jpg", "/images/proyectos/pergola-maitencillo/03.jpg"],
  },
  {
    slug: "casa-lorena",
    titulo: "Casa Lorena",
    tipologia: "Colaboración",
    orden: 15,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Santo Domingo, San Antonio",
    m2: 78,
    anio: 2023,
    cover: "/images/proyectos/casa-lorena/cover.jpg",
    imagenes: ["/images/proyectos/casa-lorena/cover.jpg"],
  },
  {
    slug: "casa-ignacio",
    titulo: "Casa Ignacio",
    tipologia: "Colaboración",
    orden: 19,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Casablanca, Casablanca",
    m2: 115,
    anio: 2024,
    cover: "/images/proyectos/casa-ignacio/cover.jpg",
    imagenes: ["/images/proyectos/casa-ignacio/cover.jpg"],
  },
  {
    slug: "casa-andrea",
    titulo: "Casa Andrea",
    tipologia: "Colaboración",
    orden: 21,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Santo Domingo, San Antonio",
    m2: 68,
    anio: 2022,
    cover: "/images/proyectos/casa-andrea/cover.jpg",
    imagenes: ["/images/proyectos/casa-andrea/cover.jpg"],
  },
  {
    slug: "mini-oficina-modular",
    titulo: "Mini Oficina Modular",
    tipologia: "Colaboración",
    orden: 22,
    categoria: "Proyectos comerciales",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Talca, Talca",
    m2: 24,
    anio: 2024,
    cover: "/images/proyectos/mini-oficina-modular/cover.jpg",
    imagenes: ["/images/proyectos/mini-oficina-modular/cover.jpg"],
  },
  {
    slug: "casa-leonardo",
    titulo: "Casa Leonardo",
    tipologia: "Colaboración",
    orden: 25,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Puerto Varas, Puerto Varas",
    m2: 115,
    anio: 2022,
    cover: "/images/proyectos/casa-leonardo/cover.jpg",
    imagenes: ["/images/proyectos/casa-leonardo/cover.jpg"],
  },
  {
    slug: "cabana-pedro",
    titulo: "Cabaña Pedro",
    tipologia: "Colaboración",
    orden: 26,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Santo Domingo, San Antonio",
    m2: 35,
    anio: 2024,
    cover: "/images/proyectos/cabana-pedro/cover.jpg",
    imagenes: ["/images/proyectos/cabana-pedro/cover.jpg"],
  },
  {
    slug: "casa-pedro",
    titulo: "Casa Pedro",
    tipologia: "Colaboración",
    orden: 28,
    categoria: "Casas",
    colaboracionDimod: true,
    fichaPendiente: false,
    ubicacion: "Santo Domingo, San Antonio",
    m2: 65,
    anio: 2025,
    cover: "/images/proyectos/casa-pedro/cover.jpg",
    imagenes: ["/images/proyectos/casa-pedro/cover.jpg"],
  },
];
