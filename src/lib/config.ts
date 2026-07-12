// Datos de contacto reales del negocio. Todo lo marcado TODO falta por
// confirmar — no se inventó ningún dato de contacto.

export const site = {
  name: "Trama Estructural",
  domain: "tramaestructural.cl",
  url: "https://tramaestructural.cl",
  instagram: "https://www.instagram.com/tramaestructural",
  instagramHandle: "@tramaestructural",
  contactEmail: "contacto@tramaestructural.cl",
  whatsappNumber: "56961341036",
  whatsappDefaultMessage:
    "Hola! Me gustaría agendar una visita para mi proyecto...",
};

export function whatsappHref(message: string = site.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/contacto", label: "Contacto" },
];
