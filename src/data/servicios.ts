import type { ComponentType, SVGProps } from "react";
import {
  ArquitecturaIcon,
  ConstruccionIcon,
  ModelacionIcon,
  TramitacionIcon,
  CalculoIcon,
} from "@/components/icons/ServicioIcons";

export type Servicio = {
  slug: string;
  nombre: string;
  resumen: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  imagen: string;
};

// Los 5 servicios que ofrece Trama Estructural, definidos por el cliente.
export const servicios: Servicio[] = [
  {
    slug: "arquitectura",
    nombre: "Arquitectura",
    resumen:
      "Se integra un equipo multidisciplinario para diseñar a medida cada aspecto de tu proyecto. Se entregan documentos que permiten entender desde la base de la idea, hasta los aspectos formales de cada propuesta. Se desarrolla cada proyecto de manera que se entienda lo que se proyecta y no existan sorpresas.",
    icon: ArquitecturaIcon,
    imagen: "/images/servicios/arquitectura.png",
  },
  {
    slug: "construccion-llave-en-mano",
    nombre: "Construcción llave en mano",
    resumen:
      "El equipo funciona desde la primera idea hasta la entrega del proyecto. Todo lo ve un mismo equipo, evitando problemas de ejecución y coordinación entre especialidades. Los proyectos los entregamos listos para ser habitados, llave en mano.",
    icon: ConstruccionIcon,
    imagen: "/images/servicios/construccion-llave-en-mano.png",
  },
  {
    slug: "modelacion-3d",
    nombre: "Modelación 3D",
    resumen:
      "Entregamos servicios de modelado en 3D, integrando programas de modelación y representación gráfica. Entregamos proyectos con el nivel de detalle que quiera cada cliente. Los modelos son entregados en archivos editables y las imágenes retocadas por nuestro equipo.",
    icon: ModelacionIcon,
    imagen: "/images/servicios/modelacion-3d.png",
  },
  {
    slug: "tramitacion-municipal",
    nombre: "Tramitación municipal",
    resumen:
      "Para nuestro equipo es importante la responsabilidad legal. Nos encargamos de que nuestros proyectos cuenten con sus permisos al día y en norma. Trabajamos de la mano con arquitectos con experiencia en tramitación municipal, alineados con los artículos y decretos que ordena O.G.U.C.",
    icon: TramitacionIcon,
    imagen: "/images/servicios/tramitacion-municipal.png",
  },
  {
    slug: "calculo-estructural",
    nombre: "Cálculo estructural",
    resumen:
      "Nuestro equipo cuenta con experiencia en cálculo de estructuras con software especializados en modelación y cálculo de estructuras de diferentes materiales y dimensiones. Entregamos al cliente memorias de cálculo y archivos editables.",
    icon: CalculoIcon,
    imagen: "/images/servicios/calculo-estructural.png",
  },
];
