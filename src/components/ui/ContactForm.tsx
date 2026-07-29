"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { pushToDataLayer } from "@/lib/dataLayer";

type Estado = "idle" | "loading" | "success" | "error";

const ES_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ES_TELEFONO = /^[+]?[\d\s\-()]{7,20}$/;

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const mensajePrecargado = useSearchParams().get("mensaje") ?? "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const contacto = String(data.get("contacto") ?? "").trim();

    if (!ES_EMAIL.test(contacto) && !ES_TELEFONO.test(contacto)) {
      setEstado("error");
      setErrorMsg("Ingresa un correo electrónico o un número de teléfono válido.");
      return;
    }

    setEstado("loading");

    const payload = {
      nombre: data.get("nombre"),
      contacto,
      mensaje: data.get("mensaje"),
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "No se pudo enviar el mensaje.");
      }

      // Evento de conversión — solo tras confirmar éxito real de la API,
      // para no contar envíos fallidos. El formulario no tiene campo de
      // servicio de interés todavía, así que no se envía ese parámetro.
      pushToDataLayer({ event: "contact_form_submit" });

      setEstado("success");
      form.reset();
    } catch (err) {
      setEstado("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  };

  if (estado === "success") {
    return (
      <div className="rounded-lg border border-sage-300 bg-sage-100 p-6 text-sm text-ink/80">
        Gracias — recibimos tu mensaje. Te responderemos a la brevedad.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="text-xs uppercase tracking-wide text-ink/50">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-walnut-500"
        />
      </div>

      <div>
        <label htmlFor="contacto" className="text-xs uppercase tracking-wide text-ink/50">
          Correo o teléfono
        </label>
        <input
          id="contacto"
          name="contacto"
          type="text"
          required
          placeholder="tu@correo.com o +56 9 1234 5678"
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-walnut-500"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="text-xs uppercase tracking-wide text-ink/50">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={3}
          defaultValue={mensajePrecargado}
          className="mt-2 w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-walnut-500"
        />
      </div>

      {estado === "error" && errorMsg && (
        <p className="text-sm text-walnut-700">{errorMsg}</p>
      )}

      <Button type="submit" disabled={estado === "loading"}>
        {estado === "loading" ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
