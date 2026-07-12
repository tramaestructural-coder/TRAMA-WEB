import type { Variants } from "framer-motion";

// Curva y timings compartidos para que el ritmo de animación sea
// consistente en todo el sitio (una sola "voz" de movimiento).
export const easeTrama = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeTrama },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeTrama } },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: { delayChildren, staggerChildren },
  },
});

export const viewportOnce = { once: true, margin: "-80px" };
