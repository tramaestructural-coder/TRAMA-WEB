"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sage-500 text-paper shadow-lg shadow-ink/20"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.34.65 4.53 1.78 6.4L4 29l7.75-1.75a11.95 11.95 0 0 0 4.27.78c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.64 3 16.02 3Zm0 21.86c-1.5 0-2.94-.4-4.2-1.15l-.3-.18-4.6 1.04 1.02-4.48-.2-.32a9.83 9.83 0 0 1-1.5-5.25c0-5.44 4.43-9.87 9.88-9.87 5.44 0 9.87 4.43 9.87 9.87 0 5.45-4.43 9.34-10 9.34Zm5.4-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.47-.87-.78-1.46-1.73-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.48.71.3 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
