import React from "react";
import { motion } from "framer-motion";
import { cn } from "@heroui/react";

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
      className={cn(
        "flex min-h-screen w-full flex-col justify-center px-4 py-20 md:px-8",
        className
      )}>
      <div className="mx-auto w-full">
        {title && (
          <motion.h2
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </div>
  );
}
