import React from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

export default function SectionContainer({
  id,
  className = "",
  children,
  title,
}: SectionContainerProps) {
  return (
    <div
      id={id}
      className={`min-h-screen w-full py-20 px-4 md:px-8 flex flex-col justify-center ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </div>
  );
}
