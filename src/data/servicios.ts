import { Calculator, HardHat, PencilRuler, Stamp, Box, type LucideIcon } from "lucide-react";

export type Servicio = {
  slug: string;
  nombre: string;
  resumen: string;
  icon: LucideIcon;
  imagen: string;
};

// Los 5 servicios que ofrece Trama Estructural, definidos por el cliente.
export const servicios: Servicio[] = [
  {
    slug: "arquitectura",
    nombre: "Arquitectura",
    resumen: "Diseño arquitectónico completo, desde la idea hasta los planos listos para construir.",
    icon: PencilRuler,
    imagen: "/images/servicios/arquitectura.png",
  },
  {
    slug: "construccion-llave-en-mano",
    nombre: "Construcción llave en mano",
    resumen: "Ejecutamos la obra completa — coordinamos, construimos y entregamos el proyecto terminado.",
    icon: HardHat,
    imagen: "/images/servicios/construccion-llave-en-mano.png",
  },
  {
    slug: "modelacion-3d",
    nombre: "Modelación 3D",
    resumen: "Visualiza tu proyecto antes de construirlo con modelos tridimensionales realistas.",
    icon: Box,
    imagen: "/images/servicios/modelacion-3d.png",
  },
  {
    slug: "tramitacion-municipal",
    nombre: "Tramitación municipal",
    resumen: "Gestionamos permisos de edificación y recepción municipal para que tu proyecto quede en regla.",
    icon: Stamp,
    imagen: "/images/servicios/tramitacion-municipal.png",
  },
  {
    slug: "calculo-estructural",
    nombre: "Cálculo estructural",
    resumen: "Ingeniería estructural que garantiza la seguridad y el correcto comportamiento de tu proyecto.",
    icon: Calculator,
    imagen: "/images/servicios/calculo-estructural.png",
  },
];
