"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { servicios } from "@/data/servicios";
import { easeTrama } from "@/lib/motion";

export function ServiciosPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-trama bg-stone-50 py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="02" title="Servicios" />
          <h2 className="mt-6 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
            Lo que realmente ofrecemos.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 divide-y divide-stone-300 border-y border-stone-300">
            {servicios.map((servicio, i) => {
              const isOpen = open === i;
              const Icon = servicio.icon;
              return (
                <div key={servicio.slug}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-5">
                      <Icon className="h-6 w-6 shrink-0 text-walnut-500" strokeWidth={1.5} aria-hidden />
                      <span className="font-display text-xl text-ink sm:text-2xl">
                        {servicio.nombre}
                      </span>
                    </span>
                    <span
                      className={`text-2xl text-ink/50 transition-transform duration-500 ease-trama ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easeTrama }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-[2.75rem] text-base leading-relaxed text-ink/65">
                          {servicio.resumen}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/servicios"
            className="mt-10 inline-block text-sm uppercase tracking-wide text-walnut-500 hover:text-walnut-700"
          >
            Ver todos los servicios →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
