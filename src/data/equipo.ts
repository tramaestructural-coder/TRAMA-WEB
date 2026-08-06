export type MiembroEquipo = {
  nombre: string;
  cargo: string;
  rol: string;
  universidad: string;
  foto: string | null;
  bio: string | null;
};

export const equipo: MiembroEquipo[] = [
  {
    nombre: "Juan Enrique Castro",
    cargo: "Socio",
    rol: "Ingeniero Civil Estructural",
    universidad: "Universidad de los Andes",
    foto: "/images/equipo/juan-enrique.png",
    bio: "Encargado de Ingeniería estructural, soluciones constructivas, desarrollo técnico, factibilidad de proyectos y optimización estructural.",
  },
  {
    nombre: "Martín Villalta",
    cargo: "Socio",
    rol: "Arquitecto, Mención en Diseño Sustentable",
    universidad: "Universidad del Desarrollo",
    foto: "/images/equipo/martin.png",
    bio: "Encargado del Diseño arquitectónico, desarrollo de proyectos, planimetría, visualización 3D y coordinación general.",
  },
  {
    nombre: "Josefa Araneda",
    cargo: "Asociada",
    rol: "Arquitecta, Mención en Diseño Generativo",
    universidad: "Universidad del Desarrollo",
    foto: "/images/equipo/josefa.png",
    bio: "Encargada de Desarrollo arquitectónico, modelación y representación visual, presentaciones para clientes, diseño gráfico de proyectos, coordinación y seguimiento.",
  },
];
