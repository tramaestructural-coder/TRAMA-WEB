export type MiembroEquipo = {
  nombre: string;
  rol: string;
  foto: string | null;
  bio: string | null;
};

// Roles confirmados por el cliente. Foto y biografía se agregan después:
// se deja el espacio reservado en el diseño en vez de inventar contenido.
export const equipo: MiembroEquipo[] = [
  {
    nombre: "Juan Enrique Castro",
    rol: "Ingeniero Civil Estructural",
    foto: "/images/equipo/juan-enrique.png",
    bio: null,
  },
  {
    nombre: "Martín Villalta",
    rol: "Arquitecto",
    foto: "/images/equipo/martin.png",
    bio: null,
  },
  {
    nombre: "Josefa Araneda",
    rol: "Arquitecta",
    foto: "/images/equipo/josefa.png",
    bio: null,
  },
];
