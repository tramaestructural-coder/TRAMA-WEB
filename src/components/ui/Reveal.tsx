"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeTrama, fadeUp, viewportOnce } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
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
