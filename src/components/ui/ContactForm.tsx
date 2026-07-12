"use client";

import { useState, type FormEvent } from "react";

type Estado = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nombre: data.get("nombre"),
      correo: data.get("correo"),
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nombre" className="text-xs uppercase tracking-wide text-ink/50">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="mt-2 w-full border-b border-stone-300 bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-walnut-500"
        />
      </div>

      <div>
        <label htmlFor="correo" className="text-xs uppercase tracking-wide text-ink/50">
          Correo
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          className="mt-2 w-full border-b border-stone-300 bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-walnut-500"
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
          rows={4}
          className="mt-2 w-full resize-none border-b border-stone-300 bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-walnut-500"
        />
      </div>

      {estado === "error" && errorMsg && (
        <p className="text-sm text-walnut-700">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={estado === "loading"}
        className="rounded-full bg-espresso-500 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-walnut-500 disabled:opacity-50"
      >
        {estado === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
