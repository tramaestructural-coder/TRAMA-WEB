"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, whatsappHref } from "@/lib/config";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // El Hero de Inicio es un video oscuro de fondo bajo el navbar
  // transparente: ahí el texto debe ser claro. En el resto de las páginas,
  // lo que hay bajo el navbar transparente es contenido claro (bg-paper),
  // así que el texto debe ser oscuro como siempre.
  const overHero = pathname === "/" && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-b border-stone-200 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="relative z-10 flex items-center" aria-label="Trama Estructural — Inicio">
          <Image
            src="/images/brand/logo-negro.png"
            alt="Trama Estructural"
            width={200}
            height={50}
            className="h-8 w-auto lg:h-10"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-wide transition-colors ${
                    overHero
                      ? active
                        ? "text-paper"
                        : "text-paper/80 hover:text-paper"
                      : active
                        ? "text-walnut-500"
                        : "text-ink/80 hover:text-walnut-500"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-celeste px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-celeste/80 lg:inline-block"
            >
              Solicitar evaluación
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <span
                className={`h-px w-6 transition-transform ${overHero ? "bg-paper" : "bg-ink"} ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 transition-transform ${overHero ? "bg-paper" : "bg-ink"} ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-stone-200 bg-paper lg:hidden"
            aria-label="Navegación móvil"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2.5 text-base ${
                      pathname === item.href ? "text-walnut-500" : "text-ink/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-celeste px-5 py-2.5 text-sm font-medium text-ink"
                >
                  Solicitar evaluación
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
