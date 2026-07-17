import type { SVGProps } from "react";

// Isotipos propios para los servicios: misma grilla 24x24 y mismo lenguaje
// gráfico que los íconos de Metodología y Categorías de Proyectos.

export function ArquitecturaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 13h7M11 13v7" />
      <path d="M14.5 8v3.5a3 3 0 0 0 3 3H19" />
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
      <circle cx="7" cy="17" r="4" />
      <path d="M10 14L20 4" />
      <path d="M16 8l3 3M13 11l2 2" />
    </svg>
  );
}

export function ModelacionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12v9M4 7.5l8 4.5 8-4.5" />
    </svg>
  );
}

export function TramitacionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M8 8h8M8 12h4" />
      <circle cx="15" cy="16" r="3" />
      <path d="M13.5 16l1 1 2-2" />
    </svg>
  );
}

export function CalculoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}
