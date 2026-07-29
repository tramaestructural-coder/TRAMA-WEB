import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/config";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
  const contacto = typeof body?.contacto === "string" ? body.contacto.trim() : "";
  const mensaje = typeof body?.mensaje === "string" ? body.mensaje.trim() : "";

  if (!nombre || !contacto || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  // El campo de contacto acepta indistintamente correo o teléfono.
  const esEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto);
  const esTelefono = /^[+]?[\d\s\-()]{7,20}$/.test(contacto);
  if (!esEmail && !esTelefono) {
    return NextResponse.json(
      { error: "Ingresa un correo electrónico o un teléfono válido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY no está configurada — no se puede enviar el correo."
    );
    return NextResponse.json(
      { error: "El envío de correos no está configurado todavía." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    // Requiere que el dominio tramaestructural.cl esté verificado en Resend.
    // Mientras no lo esté, Resend no permite enviar desde esa dirección.
    from: `Formulario web <formulario@${site.domain}>`,
    to: site.contactEmail,
    // replyTo solo puede ser una dirección de correo válida — si la persona
    // dejó un teléfono, se omite y el equipo lo ve en el cuerpo del mensaje.
    ...(esEmail ? { replyTo: contacto } : {}),
    subject: `Nuevo contacto desde la web — ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo o teléfono: ${contacto}\n\nMensaje:\n${mensaje}`,
  });

  if (error) {
    console.error("Error enviando correo vía Resend:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
