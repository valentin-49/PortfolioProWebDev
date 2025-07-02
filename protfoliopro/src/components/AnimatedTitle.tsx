"use client";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedTitle({ children, className = "", delay = 0.3 }: AnimatedTitleProps) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, }
      }}
      className={`relative text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-24 pb-6 ${className}`}
    >
      {children}
      <span className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 h-1.5 w-24 sm:w-36 md:w-48 rounded-full bg-pink-500 shadow-pink-500/70 animate-pulse"></span>
    </motion.h2>
  );
}