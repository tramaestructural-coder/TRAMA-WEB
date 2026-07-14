export type Categoria =
  | "Diseño"
  | "Construcción"
  | "Permisos y Normativa"
  | "Presupuesto y Costos";

export const categorias: Categoria[] = [
  "Diseño",
  "Construcción",
  "Permisos y Normativa",
  "Presupuesto y Costos",
];

export type BloqueContenido =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "imagen"; src: string; alt: string }
  | { tipo: "cita"; texto: string; autor?: string }
  | { tipo: "lista"; items: string[] };

export type Articulo = {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: Categoria;
  fecha: string; // ISO, ej. "2026-05-10"
  tiempoLectura: number; // minutos
  imagenDestacada: string;
  contenido: BloqueContenido[];
};

// Artículos de ejemplo para probar el sistema de punta a punta. Contenido
// educativo genérico del rubro — no se inventan datos de la empresa.
export const articulos: Articulo[] = [
  {
    slug: "como-leer-los-planos-de-tu-proyecto",
    titulo: "Cómo leer los planos de tu proyecto antes de construir",
    resumen:
      "Una guía simple para entender qué estás aprobando cuando firmas un juego de planos, aunque no tengas formación técnica.",
    categoria: "Diseño",
    fecha: "2026-05-12",
    tiempoLectura: 6,
    imagenDestacada: "/images/servicios/arquitectura.png",
    contenido: [
      {
        tipo: "parrafo",
        texto:
          "Cuando un proyecto pasa de la idea al papel, aparece un conjunto de documentos que puede resultar intimidante si nunca los has visto: plantas, cortes, elevaciones, planos de instalaciones. No hace falta ser arquitecto para entenderlos — solo saber qué buscar en cada uno.",
      },
      {
        tipo: "subtitulo",
        texto: "La planta: el mapa desde arriba",
      },
      {
        tipo: "parrafo",
        texto:
          "La planta es una vista aérea del proyecto, como si le sacaras el techo y miraras desde arriba. Ahí se ven los muros, las puertas, las ventanas y cómo se conectan los espacios entre sí. Es el plano más fácil de leer: si te imaginas caminando por los espacios dibujados, ya lo estás interpretando correctamente.",
      },
      {
        tipo: "subtitulo",
        texto: "Los cortes: la altura que la planta no muestra",
      },
      {
        tipo: "parrafo",
        texto:
          "Un corte es como si cortaras el edificio con un cuchillo vertical y miraras el interior desde el lado. Ahí se entienden las alturas de cielo, los niveles (por ejemplo, si hay un desnivel entre el living y la terraza) y cómo se relaciona un piso con otro en proyectos de dos niveles.",
      },
      {
        tipo: "subtitulo",
        texto: "Qué preguntar antes de aprobar un juego de planos",
      },
      {
        tipo: "lista",
        items: [
          "¿Las medidas de cada recinto corresponden a lo que necesito (una cama, un living, un auto)?",
          "¿Dónde quedan los enchufes, interruptores y puntos de agua?",
          "¿Cuál es la orientación del proyecto — hacia dónde da el sol en la mañana y en la tarde?",
          "¿Qué materiales están especificados en cada superficie?",
        ],
      },
      {
        tipo: "cita",
        texto:
          "Un buen equipo de arquitectura no espera que entiendas los planos solo — te los explica hasta que los entiendas.",
      },
      {
        tipo: "parrafo",
        texto:
          "Si algo del plano no te hace sentido, esa es información valiosa: o falta explicarlo mejor, o falta ajustarlo. Preguntar antes de construir siempre sale más barato que corregir durante la obra.",
      },
    ],
  },
  {
    slug: "permisos-municipales-antes-de-partir-la-obra",
    titulo: "Permisos municipales: qué necesitas antes de partir la obra",
    resumen:
      "Qué tipo de permiso corresponde a cada proyecto y por qué tramitarlo bien desde el inicio evita problemas al momento de recibir la obra.",
    categoria: "Permisos y Normativa",
    fecha: "2026-04-28",
    tiempoLectura: 5,
    imagenDestacada: "/images/servicios/tramitacion-municipal.png",
    contenido: [
      {
        tipo: "parrafo",
        texto:
          "En Chile, la mayoría de las obras de construcción o remodelación requieren algún tipo de permiso municipal antes de partir. Cuál corresponde depende del alcance del proyecto — no es lo mismo cambiar un piso que ampliar la casa.",
      },
      {
        tipo: "subtitulo",
        texto: "Los tipos de trámite más comunes",
      },
      {
        tipo: "lista",
        items: [
          "Permiso de edificación: para obra nueva o ampliaciones que suman metros cuadrados construidos.",
          "Regularización: cuando ya existe una construcción sin permiso y se necesita ponerla al día.",
          "Permiso de obra menor: para intervenciones que no cambian la estructura ni suman superficie, según lo defina cada municipalidad.",
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Por qué importa tramitarlo antes, no después",
      },
      {
        tipo: "parrafo",
        texto:
          "Construir sin el permiso correspondiente puede derivar en multas, en la obligación de demoler lo construido, o en problemas al momento de vender la propiedad — un banco no otorga hipoteca sobre metros cuadrados que no están regularizados. Además, la recepción municipal final (el trámite que certifica que la obra terminada cumple lo aprobado) solo se puede tramitar si el permiso de inicio estaba en regla.",
      },
      {
        tipo: "subtitulo",
        texto: "Qué se necesita para partir el trámite",
      },
      {
        tipo: "lista",
        items: [
          "Planos de arquitectura firmados por un arquitecto habilitado.",
          "Cálculo estructural, cuando el proyecto lo requiere.",
          "Certificado de informaciones previas (CIP) de la propiedad.",
          "Especificaciones técnicas del proyecto.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Cada Dirección de Obras Municipales tiene sus propios tiempos y criterios de revisión, por lo que conviene partir este trámite en paralelo al diseño, no después de tenerlo cerrado — así se evitan sorpresas de última hora que retrasan el inicio de la obra.",
      },
    ],
  },
];
