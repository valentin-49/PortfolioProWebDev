"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center md:text-left"
    >
      {children}
    </motion.div>
  );
}