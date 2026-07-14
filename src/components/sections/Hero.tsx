"use client";

import { motion } from "framer-motion";
import { easeTrama } from "@/lib/motion";
import { evaluacionHref } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-espresso-500">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/proyectos/depto-kennedy/cover.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-700 via-espresso-700/40 to-espresso-700/10" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeTrama }}
          className="text-xs uppercase tracking-[0.25em] text-paper/70"
        >
          Arquitectura · Ingeniería · Construcción
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeTrama, delay: 0.1 }}
          className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-paper sm:text-5xl lg:text-6xl"
        >
          Diseñamos, proyectamos y construimos espacios pensados para durar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeTrama, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg"
        >
          Arquitectura, ingeniería, presupuesto, construcción y supervisión
          bajo un mismo equipo — de principio a fin, sin sorpresas en el
          camino.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeTrama, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button href={evaluacionHref()} variant="light">
            Solicitar evaluación
          </Button>
          <Button href="/proyectos" variant="secondary" className="text-paper">
            Ver proyectos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
