export type Categoria =
  | "Proyectos comerciales"
  | "Exteriores"
  | "Remodelaciones"
  | "Casas"
  | "Proyectos";

// Segmento de URL para /proyectos/categoria/[slug]. Única fuente de verdad
// para el mapeo categoría → slug, usada tanto por la grilla de íconos como
// por generateStaticParams de la subpágina de categoría.
export const categoriaSlugs: Record<Categoria, string> = {
  "Proyectos comerciales": "comerciales",
  Exteriores: "exteriores",
  Remodelaciones: "remodelaciones",
  Casas: "casas",
  Proyectos: "conceptuales",
};

// Descripciones de categoría (texto real del cliente, PROYECTOS/TEXTOS PROYECTOS.txt).
export const categoriaDescripciones: Record<Categoria, string> = {
  "Proyectos comerciales":
    "Espacios pensados para potenciar la experiencia de quienes trabajan y de quienes los visitan. Diseñamos y construimos oficinas, locales comerciales, cafeterías, restaurantes, clínicas y espacios de atención que combinan identidad, funcionalidad y eficiencia para responder a las necesidades de cada negocio.",
  Exteriores:
    "Los espacios exteriores también forman parte de la forma de habitar una vivienda. Diseñamos y construimos pérgolas, quinchos, terrazas, decks, techumbres, accesos y otras intervenciones que amplían la vida hacia el exterior, integrando arquitectura, paisaje y materialidad en un solo proyecto.",
  Remodelaciones:
    "Cada remodelación es una oportunidad para darle una nueva vida a un espacio existente. Renovamos viviendas, departamentos, oficinas y locales comerciales mejorando su funcionamiento, estética y calidad espacial, adaptándolos a nuevas formas de vivir y trabajar.",
  Casas:
    "Diseñamos y construimos viviendas pensadas para crecer junto a quienes las habitan. Desde casas tradicionales hasta soluciones modulares, desarrollamos proyectos que equilibran diseño, eficiencia constructiva y una arquitectura preparada para evolucionar con el tiempo.",
  Proyectos:
    "Reunimos todos los servicios necesarios para desarrollar una obra de principio a fin. Arquitectura, construcción, modelación 3D, cálculo estructural y gestión de permisos forman parte de un proceso integrado donde un mismo equipo acompaña cada etapa del proyecto.",
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
      "Colaboración desarrollada junto a DIMOD. La propuesta buscó transformar una planta prácticamente libre en una oficina que equilibrara dos conceptos aparentemente opuestos: el carácter industrial de los cielos descubiertos y una imagen moderna, limpia y ordenada. Cada elemento fue pensado para generar ese contraste, dando como resultado un espacio contemporáneo que combina personalidad, eficiencia y confort para quienes trabajan diariamente en él.",
    cover: "/images/proyectos/oficina-vitacura/cover.jpg",
    imagenes: [
      "/images/proyectos/oficina-vitacura/cover.jpg",
      "/images/proyectos/oficina-vitacura/02.jpg",
      "/images/proyectos/oficina-vitacura/03.jpg",
      "/images/proyectos/oficina-vitacura/04.jpg",
      "/images/proyectos/oficina-vitacura/05.jpg",
      "/images/proyectos/oficina-vitacura/06.jpg",
      "/images/proyectos/oficina-vitacura/07.jpg",
      "/images/proyectos/oficina-vitacura/08.jpg",
      "/images/proyectos/oficina-vitacura/09.jpg",
      "/images/proyectos/oficina-vitacura/10.jpg",
      "/images/proyectos/oficina-vitacura/11.jpg",
      "/images/proyectos/oficina-vitacura/12.jpg",
      "/images/proyectos/oficina-vitacura/13.jpg",
      "/images/proyectos/oficina-vitacura/14.jpg",
      "/images/proyectos/oficina-vitacura/15.jpg",
      "/images/proyectos/oficina-vitacura/16.jpg",
      "/images/proyectos/oficina-vitacura/17.jpg",
    ],
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
      "Más que un estacionamiento, este proyecto representó un desafío estructural que terminó definiendo su identidad arquitectónica. La necesidad de cubrir una luz de ocho metros llevó al diseño de una gran viga de madera laminada que, además de resolver técnicamente la estructura, se convirtió en el elemento protagonista del proyecto, aportando carácter y calidez al espacio.",
    cover: "/images/proyectos/estacionamiento/cover.jpg",
    imagenes: [
      "/images/proyectos/estacionamiento/cover.jpg",
      "/images/proyectos/estacionamiento/02.jpg",
      "/images/proyectos/estacionamiento/03.jpg",
    ],
  },
  {
    slug: "depto-kennedy",
    titulo: "Remodelación Depto. Kennedy",
    tipologia: "Vivienda",
    orden: 3,
    categoria: "Remodelaciones",
    fichaPendiente: false,
    ubicacion: "Vitacura, Santiago de Chile",
    m2: 48,
    anio: 2026,
    descripcion:
      "Este proyecto nació con un objetivo claro: devolverle vida a un departamento que había perdido vigencia. A través de una remodelación integral orientada al sistema Fix & Flip, renovamos materiales, colores y terminaciones para generar espacios más luminosos, modernos y agradables de habitar. Una intervención sencilla en su concepto, pero con un impacto significativo en la percepción y valor del inmueble.",
    cover: "/images/proyectos/depto-kennedy/cover.jpg",
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
      "Diseñado junto a la familia, este proyecto convirtió un espacio poco utilizado en un verdadero punto de encuentro. La madera fue el hilo conductor de toda la propuesta, presente tanto en la estructura como en el mobiliario, generando un ambiente cálido, funcional y pensado para compartir durante muchos años.",
    cover: "/images/proyectos/quincho/cover.jpg",
    imagenes: [
      "/images/proyectos/quincho/cover.jpg",
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
    categoria: "Remodelaciones",
    fichaPendiente: false,
    ubicacion: "Vitacura, Santiago de Chile",
    m2: 12,
    anio: 2025,
    descripcion:
      "Como parte de una estrategia Fix & Flip, esta cocina fue completamente replanteada para transformar el espacio más utilizado de la vivienda. A través de un diseño simple, funcional y desarrollado junto al cliente, logramos una cocina más luminosa, moderna y preparada para una nueva forma de habitar la casa.",
    cover: "/images/proyectos/cocina-lo-matta/cover.jpg",
    imagenes: [
      "/images/proyectos/cocina-lo-matta/cover.jpg",
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
      "Colaboración desarrollada junto a DIMOD. Desde su origen, esta vivienda fue concebida para crecer. Su diseño modular permitió generar amplios espacios comunes, dormitorios eficientes y una arquitectura flexible capaz de incorporar nuevas etapas con el tiempo. Una casa pensada para evolucionar junto a las necesidades de la familia.",
    cover: "/images/proyectos/casa-jorge/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-jorge/cover.jpg",
      "/images/proyectos/casa-jorge/02.jpg",
      "/images/proyectos/casa-jorge/03.jpg",
      "/images/proyectos/casa-jorge/04.jpg",
      "/images/proyectos/casa-jorge/05.jpg",
      "/images/proyectos/casa-jorge/06.jpg",
      "/images/proyectos/casa-jorge/07.jpg",
      "/images/proyectos/casa-jorge/08.jpg",
      "/images/proyectos/casa-jorge/09.jpg",
      "/images/proyectos/casa-jorge/10.jpg",
      "/images/proyectos/casa-jorge/11.jpg",
      "/images/proyectos/casa-jorge/12.jpg",
      "/images/proyectos/casa-jorge/13.jpg",
      "/images/proyectos/casa-jorge/14.jpg",
      "/images/proyectos/casa-jorge/15.jpg",
      "/images/proyectos/casa-jorge/16.jpg",
      "/images/proyectos/casa-jorge/17.jpg",
      "/images/proyectos/casa-jorge/18.jpg",
      "/images/proyectos/casa-jorge/19.jpg",
    ],
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
      "Colaboración desarrollada junto a DIMOD. Este quincho modular demuestra cómo un proyecto puede combinar rapidez de instalación, funcionalidad y diseño. Integra cocina, parrilla, baño y espacios de reunión en un solo volumen, adaptable incluso a terrenos con pendiente gracias a un sistema constructivo que facilita su implementación.",
    cover: "/images/proyectos/quincho-jorge/cover.jpg",
    imagenes: [
      "/images/proyectos/quincho-jorge/cover.jpg",
      "/images/proyectos/quincho-jorge/02.jpg",
      "/images/proyectos/quincho-jorge/03.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. El desafío consistió en ampliar la vivienda manteniendo el lenguaje arquitectónico original. Mediante dos módulos transportados desde fábrica fue posible incorporar nuevos dormitorios, baño, walk-in closet y bodega, resolviendo una compleja logística sin afectar la armonía del conjunto.",
    cover: "/images/proyectos/ampliacion-macarena/cover.jpg",
    imagenes: [
      "/images/proyectos/ampliacion-macarena/cover.jpg",
      "/images/proyectos/ampliacion-macarena/02.jpg",
      "/images/proyectos/ampliacion-macarena/03.jpg",
      "/images/proyectos/ampliacion-macarena/04.jpg",
      "/images/proyectos/ampliacion-macarena/05.jpg",
      "/images/proyectos/ampliacion-macarena/06.jpg",
    ],
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
    descripcion:
      "La intención principal fue extender naturalmente el living hacia el jardín y fortalecer la relación con la cocina. El resultado es un espacio intermedio que mejora la manera de habitar la vivienda, ofreciendo protección, comodidad y una nueva forma de disfrutar el exterior durante todo el año.",
    cover: "/images/proyectos/pergola-romeral/cover.jpg",
    imagenes: [
      "/images/proyectos/pergola-romeral/cover.jpg",
      "/images/proyectos/pergola-romeral/02.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Diseñada para crecer desde el primer día, esta vivienda incorpora un sistema modular que anticipa futuras ampliaciones sin alterar el funcionamiento de la casa. El principal desafío estuvo en las condiciones del terreno, resueltas mediante un cuidadoso trabajo previo que permitió una ejecución eficiente.",
    cover: "/images/proyectos/casa-algarrobo/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-algarrobo/cover.jpg",
      "/images/proyectos/casa-algarrobo/02.jpg",
      "/images/proyectos/casa-algarrobo/03.jpg",
      "/images/proyectos/casa-algarrobo/04.jpg",
      "/images/proyectos/casa-algarrobo/05.jpg",
      "/images/proyectos/casa-algarrobo/06.jpg",
      "/images/proyectos/casa-algarrobo/07.jpg",
      "/images/proyectos/casa-algarrobo/08.jpg",
      "/images/proyectos/casa-algarrobo/09.jpg",
      "/images/proyectos/casa-algarrobo/10.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Un espacio compacto capaz de responder a todas las necesidades de atención comercial. La distribución integra recepción, áreas de reunión, kitchenette y baño, demostrando cómo el sistema modular permite desarrollar soluciones rápidas, eficientes y completamente adaptadas a cada cliente.",
    cover: "/images/proyectos/mini-sala-de-ventas/cover.jpg",
    imagenes: [
      "/images/proyectos/mini-sala-de-ventas/cover.jpg",
      "/images/proyectos/mini-sala-de-ventas/02.jpg",
      "/images/proyectos/mini-sala-de-ventas/03.jpg",
      "/images/proyectos/mini-sala-de-ventas/04.jpg",
    ],
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
    descripcion:
      "Esta pérgola representa el primer paso de un proyecto de mayor escala. Su incorporación comenzó a transformar un área poco utilizada en el futuro corazón de la vivienda, donde más adelante se integrarán piscina, deck, mobiliario y jardines para construir un nuevo espacio de encuentro familiar.",
    cover: "/images/proyectos/pergola-maitencillo/cover.jpg",
    imagenes: [
      "/images/proyectos/pergola-maitencillo/cover.jpg",
      "/images/proyectos/pergola-maitencillo/02.jpg",
      "/images/proyectos/pergola-maitencillo/03.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Lo que comenzó como una vivienda compacta fue creciendo junto a la familia. Gracias al sistema modular fue posible incorporar nuevos dormitorios y un segundo baño sin perder coherencia arquitectónica, dejando además preparada la vivienda para futuras ampliaciones, incluyendo un segundo nivel.",
    cover: "/images/proyectos/casa-lorena/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-lorena/cover.jpg",
      "/images/proyectos/casa-lorena/02.jpg",
      "/images/proyectos/casa-lorena/03.jpg",
      "/images/proyectos/casa-lorena/04.jpg",
      "/images/proyectos/casa-lorena/05.jpg",
      "/images/proyectos/casa-lorena/06.jpg",
      "/images/proyectos/casa-lorena/07.jpg",
      "/images/proyectos/casa-lorena/08.jpg",
      "/images/proyectos/casa-lorena/09.jpg",
      "/images/proyectos/casa-lorena/10.jpg",
      "/images/proyectos/casa-lorena/11.jpg",
      "/images/proyectos/casa-lorena/12.jpg",
      "/images/proyectos/casa-lorena/13.jpg",
      "/images/proyectos/casa-lorena/14.jpg",
      "/images/proyectos/casa-lorena/15.jpg",
      "/images/proyectos/casa-lorena/16.jpg",
      "/images/proyectos/casa-lorena/17.jpg",
      "/images/proyectos/casa-lorena/18.jpg",
      "/images/proyectos/casa-lorena/19.jpg",
      "/images/proyectos/casa-lorena/20.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Cada decisión fue tomada pensando en la experiencia cotidiana de quienes habitarían la casa. La separación entre espacios públicos y privados, una cocina integrada, una terraza en el segundo piso y una escalera diseñada especialmente para el proyecto dieron forma a una vivienda funcional, cálida y pensada para disfrutar.",
    cover: "/images/proyectos/casa-ignacio/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-ignacio/cover.jpg",
      "/images/proyectos/casa-ignacio/02.jpg",
      "/images/proyectos/casa-ignacio/03.jpg",
      "/images/proyectos/casa-ignacio/04.jpg",
      "/images/proyectos/casa-ignacio/05.jpg",
      "/images/proyectos/casa-ignacio/06.jpg",
      "/images/proyectos/casa-ignacio/07.jpg",
      "/images/proyectos/casa-ignacio/08.jpg",
      "/images/proyectos/casa-ignacio/09.jpg",
      "/images/proyectos/casa-ignacio/10.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Concebida para la vida familiar, esta vivienda integra jardines, terrazas y espacios de recreación que acompañan el crecimiento de sus habitantes. Amplias áreas comunes, dormitorios cómodos y un diseño preparado para futuras ampliaciones hacen de este proyecto una casa pensada para evolucionar con el tiempo.",
    cover: "/images/proyectos/casa-andrea/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-andrea/cover.jpg",
      "/images/proyectos/casa-andrea/02.jpg",
      "/images/proyectos/casa-andrea/03.jpg",
      "/images/proyectos/casa-andrea/04.jpg",
      "/images/proyectos/casa-andrea/05.jpg",
      "/images/proyectos/casa-andrea/06.jpg",
      "/images/proyectos/casa-andrea/07.jpg",
      "/images/proyectos/casa-andrea/08.jpg",
      "/images/proyectos/casa-andrea/09.jpg",
      "/images/proyectos/casa-andrea/10.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Diseñada para responder a las necesidades de empresas del sector agrícola, esta oficina reúne áreas de trabajo, recepción, kitchenette y servicios en una solución compacta y eficiente. Su flexibilidad permite adaptarse a distintos rubros sin renunciar a una imagen profesional y funcional.",
    cover: "/images/proyectos/mini-oficina-modular/cover.jpg",
    imagenes: [
      "/images/proyectos/mini-oficina-modular/cover.jpg",
      "/images/proyectos/mini-oficina-modular/02.jpg",
      "/images/proyectos/mini-oficina-modular/03.jpg",
      "/images/proyectos/mini-oficina-modular/04.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. El clima y la distancia marcaron el desarrollo de este proyecto. Diseñada para ser transportada desde fábrica hasta Puerto Varas, la vivienda aprovecha las ventajas del sistema modular para reducir tiempos de instalación sin sacrificar calidad, diseño ni confort.",
    cover: "/images/proyectos/casa-leonardo/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-leonardo/cover.jpg",
      "/images/proyectos/casa-leonardo/02.jpg",
      "/images/proyectos/casa-leonardo/03.jpg",
      "/images/proyectos/casa-leonardo/04.jpg",
      "/images/proyectos/casa-leonardo/05.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Pensada como un espacio independiente para recibir a hijos y visitas, esta cabaña reúne todo lo necesario para una estadía cómoda en un formato compacto. Dormitorios, baño y una pequeña cocina permiten disfrutar del entorno con autonomía y privacidad.",
    cover: "/images/proyectos/cabana-pedro/cover.jpg",
    imagenes: [
      "/images/proyectos/cabana-pedro/cover.jpg",
      "/images/proyectos/cabana-pedro/02.jpg",
      "/images/proyectos/cabana-pedro/03.jpg",
      "/images/proyectos/cabana-pedro/04.jpg",
      "/images/proyectos/cabana-pedro/05.jpg",
    ],
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
    descripcion:
      "Colaboración desarrollada junto a DIMOD. Esta vivienda demuestra el verdadero potencial del sistema modular. Lo que comenzó como una casa sencilla ha ido creciendo con el tiempo mediante la incorporación de terrazas, jacuzzi, nuevos espacios comunes y futuras ampliaciones, adaptándose de manera natural a las nuevas necesidades de la familia.",
    cover: "/images/proyectos/casa-pedro/cover.jpg",
    imagenes: [
      "/images/proyectos/casa-pedro/cover.jpg",
      "/images/proyectos/casa-pedro/02.jpg",
      "/images/proyectos/casa-pedro/03.jpg",
      "/images/proyectos/casa-pedro/04.jpg",
      "/images/proyectos/casa-pedro/05.jpg",
      "/images/proyectos/casa-pedro/06.jpg",
    ],
  },
];
