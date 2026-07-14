import type { ComponentType, SVGProps } from "react";
import {
  LevantamientoIcon,
  DisenoIcon,
  PlanimetriaIcon,
  CotizacionIcon,
  ConstruccionIcon,
} from "@/components/icons/MetodologiaIcons";

export type PasoMetodologia = {
  nombre: string;
  resumen: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// Proceso de trabajo definido por el cliente, en orden.
export const metodologia: PasoMetodologia[] = [
  {
    nombre: "Levantamiento info",
    resumen: "Visitamos el lugar y recopilamos toda la información necesaria para partir con el pie derecho.",
    icon: LevantamientoIcon,
  },
  {
    nombre: "Diseño / Anteproyecto",
    resumen: "Traducimos tus ideas y necesidades en una propuesta de diseño concreta.",
    icon: DisenoIcon,
  },
  {
    nombre: "Planimetría y permisos",
    resumen: "Desarrollamos los planos definitivos y tramitamos los permisos municipales correspondientes.",
    icon: PlanimetriaIcon,
  },
  {
    nombre: "Cotización",
    resumen: "Presupuestamos el proyecto completo para que el número inicial sea el número final.",
    icon: CotizacionIcon,
  },
  {
    nombre: "Construcción y seguimiento",
    resumen: "Ejecutamos la obra con supervisión directa de los socios hasta la entrega.",
    icon: ConstruccionIcon,
  },
];
