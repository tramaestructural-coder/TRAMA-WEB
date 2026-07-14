import type { SVGProps } from "react";

// Isotipos propios para la sección de Metodología: misma grilla 24x24,
// mismo grosor de trazo y el mismo lenguaje geométrico (rect/circle/line),
// en vez de iconos genéricos de una librería. Un glifo por etapa.

export function LevantamientoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="14" height="14" rx="1" />
      <circle cx="9" cy="10" r="2" />
      <path d="M17 7h4M21 7v4M21 11l-4-4" />
    </svg>
  );
}

export function DisenoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="6" r="1.5" />
      <path d="M12 7.5v1.5M9 21l3-12 3 12" />
      <path d="M7 21h10" />
    </svg>
  );
}

export function PlanimetriaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h9M9 9v12" />
      <circle cx="16" cy="15" r="3" />
      <path d="M16 13.5v3M14.5 15h3" />
    </svg>
  );
}

export function CotizacionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3" />
      <path d="M9 12h6M9 15h6M9 9h3" />
    </svg>
  );
}

export function ConstruccionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M4 21h16" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}
