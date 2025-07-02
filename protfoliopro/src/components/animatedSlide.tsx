"use client";
import { motion } from "framer-motion";

interface AnimatedSlideProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedSlide({ 
  children,
  delay = 0.3,
} :AnimatedSlideProps ){
 return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
}
