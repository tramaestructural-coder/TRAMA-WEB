import type { SVGProps } from "react";

// Isotipos propios para las categorías de Proyectos: misma grilla 24x24 y
// mismo lenguaje gráfico que los íconos de Metodología.

export function ComercialesIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

export function ExterioresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 8h16M4 8v13M20 8v13" />
      <path d="M4 8l2-4h12l2 4" />
      <path d="M8 21v-9M12 21v-9M16 21v-9" />
    </svg>
  );
}

export function InterioresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <path d="M4 12h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M4 15h16" />
    </svg>
  );
}

export function CasasIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function ConceptualesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2.5 2.5"
      {...props}
    >
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12v9M4 7.5l8 4.5 8-4.5" />
    </svg>
  );
}
