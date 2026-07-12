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
    foto: null,
    bio: null,
  },
  {
    nombre: "Martín Villalta",
    rol: "Arquitecto",
    foto: null,
    bio: null,
  },
  {
    nombre: "Josefa Araneda",
    rol: "Arquitecta",
    foto: null,
    bio: null,
  },
];
