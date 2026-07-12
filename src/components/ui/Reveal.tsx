"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeTrama, fadeUp, viewportOnce } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: easeTrama, delay }}
    >
      {children}
    </motion.div>
  );
}
