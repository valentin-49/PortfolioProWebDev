"use client";
import { motion } from "framer-motion";

export default function AnimatedImage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 max-w-md mx-auto md:mx-0"
    >
      {children}
    </motion.div>
  );
}
