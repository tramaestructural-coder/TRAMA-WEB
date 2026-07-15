// Datos de contacto reales del negocio. Todo lo marcado TODO falta por
// confirmar — no se inventó ningún dato de contacto.

export const site = {
  name: "Trama Estructural",
  domain: "tramaestructural.cl",
  url: "https://tramaestructural.cl",
  instagram: "https://www.instagram.com/trama_estructural",
  instagramHandle: "@trama_estructural",
  contactEmail: "contacto@tramaestructural.cl",
  whatsappNumber: "56961341036",
  whatsappDefaultMessage:
    "Hola, mi nombre es [nombre].\nEstoy en [comuna/ciudad] y me interesa un proyecto de [tipo de proyecto].\n¿Podrían darme más información?",
};

export function whatsappHref(message: string = site.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

// "Solicitar evaluación" ya no abre WhatsApp: lleva al formulario de
// contacto con el mensaje precargado (sigue siendo editable ahí).
export function evaluacionHref(mensaje = "Solicitud de evaluación de proyecto") {
  return `/contacto?mensaje=${encodeURIComponent(mensaje)}`;
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/contacto", label: "Contacto" },
];
