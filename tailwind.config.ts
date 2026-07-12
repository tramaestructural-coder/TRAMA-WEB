import type { Config } from "tailwindcss";

// Paleta extraída literalmente de MANUAL DE MARCA.pdf (Sección 2.0 Color).
// "paper" e "ink" son neutros derivados (no están en el manual): el manual
// solo define 5 tonos medios, y la web necesita un fondo casi-blanco y un
// texto casi-negro para cumplir contraste AA. Se construyeron dentro de la
// misma familia cálida para no introducir un color ajeno a la marca.
const colors = {
  paper: "#F7F5F1",
  ink: "#1C1712",
  stone: {
    DEFAULT: "#C4C1BD",
    50: "#F7F5F1",
    100: "#EDEBE7",
    200: "#DAD7D2",
    300: "#C4C1BD",
    400: "#A9A5A0",
  },
  sage: {
    DEFAULT: "#8E977F",
    100: "#E4E7DF",
    300: "#B4BBA8",
    500: "#8E977F",
    700: "#6B7360",
  },
  olive: {
    DEFAULT: "#5F6457",
    500: "#5F6457",
    700: "#454A3F",
  },
  walnut: {
    DEFAULT: "#694D35",
    500: "#694D35",
    700: "#4E3A28",
  },
  espresso: {
    DEFAULT: "#412E20",
    500: "#412E20",
    700: "#2C1F16",
  },
  // Celeste: color puntual pedido por el cliente para el CTA principal,
  // fuera de la paleta cálida del manual — se usa solo en 2-3 lugares.
  celeste: {
    DEFAULT: "#BABFC2",
    500: "#BABFC2",
  },
};

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-archivo)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1400px",
      },
      transitionTimingFunction: {
        trama: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
