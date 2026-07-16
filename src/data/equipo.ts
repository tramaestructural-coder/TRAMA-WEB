export type MiembroEquipo = {
  nombre: string;
  rol: string;
  foto: string | null;
  bio: string | null;
};

export const equipo: MiembroEquipo[] = [
  {
    nombre: "Juan Enrique Castro",
    rol: "Ingeniero Civil Estructural",
    foto: "/images/equipo/juan-enrique.png",
    bio: "Encargado de Ingeniería estructural, soluciones constructivas, desarrollo técnico, factibilidad de proyectos y optimización estructural.",
  },
  {
    nombre: "Martín Villalta",
    rol: "Arquitecto, Mención en Diseño Sustentable",
    foto: "/images/equipo/martin.png",
    bio: "Encargado del Diseño arquitectónico, desarrollo de proyectos, planimetría, visualización 3D y coordinación general.",
  },
  {
    nombre: "Josefa Araneda",
    rol: "Arquitecta, Mención en Diseño Generativo",
    foto: "/images/equipo/josefa.png",
    bio: "Encargada de Desarrollo arquitectónico, modelación y representación visual, presentaciones para clientes, diseño gráfico de proyectos, coordinación y seguimiento.",
  },
];
