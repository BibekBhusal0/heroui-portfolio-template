import React from "react";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { HeroSection as HeroSectionType } from "../types";

interface HeroSectionProps {
  data: HeroSectionType;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm <span className="text-primary">{data.name}</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-foreground-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {data.tagline}
          </motion.h2>
          
          {data.description && (
            <motion.p 
              className="text-lg text-foreground-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {data.description}
            </motion.p>
          )}
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {data.cta.map((item, index) => (
              <Button
                key={index}
                as="a"
                href={item.link}
                color={index === 0 ? "primary" : "default"}
                variant={index === 0 ? "solid" : "bordered"}
                size="lg"
                className="font-medium"
              >
                {item.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
            <Image
              src={data.image}
              alt={data.name}
              className="rounded-full object-cover z-10 relative border-4 border-content1"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}