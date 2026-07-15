import Link from "next/link";
import Image from "next/image";
import { nav, site, whatsappHref } from "@/lib/config";
import { equipo } from "@/data/equipo";

export function Footer() {
  return (
    <footer className="bg-trama relative overflow-hidden border-t border-stone-200 bg-espresso-500 text-paper">
      {/* Motivo "trama": grilla estructural sutil, referencia directa al
          isotipo T+E del manual de marca (patrones repetitivos). */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 25}
            y1="0"
            x2={i * 25}
            y2="200"
            stroke="currentColor"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 25}
            x2="200"
            y2={i * 25}
            stroke="currentColor"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-content px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/brand/logo-negro.png"
              alt="Trama Estructural"
              width={180}
              height={45}
              className="h-7 w-auto invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
              Arquitectura, ingeniería, construcción.
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm text-paper transition-colors hover:text-paper/70"
            >
              ¿Tienes un proyecto en mente? Conversemos →
            </a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-paper/50">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-paper/50">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="transition-colors hover:text-paper"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  Instagram — {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-paper/50">
              Equipo
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              {equipo.map((m) => (
                <li key={m.nombre}>
                  {m.nombre}
                  <span className="block text-xs text-paper/50">{m.rol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            aria-label="Volver arriba"
            className="order-first flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            ↑
          </a>
          <p>© {new Date().getFullYear()} Trama Estructural SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
