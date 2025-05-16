import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { HeroSection as HeroSectionType } from "../types";

interface HeroSectionProps {
  data: HeroSectionType;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-20 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6">
          <motion.h1
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Hi, I'm <span className="text-primary">{data.name}</span>
          </motion.h1>

          <motion.h2
            className="text-2xl font-medium text-foreground-700 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}>
            {data.tagline}
          </motion.h2>

          {data.description && (
            <motion.p
              className="max-w-lg text-lg text-foreground-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}>
              {data.description}
            </motion.p>
          )}

          <motion.div
            className="mt-4 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}>
            {data.cta.map((item, index) => (
              <Button
                key={index}
                as="a"
                href={item.link}
                color={index === 0 ? "primary" : "default"}
                variant={index === 0 ? "solid" : "bordered"}
                size="lg"
                className="font-medium">
                {item.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 opacity-30 blur-3xl"></div>
            <Image
              src={data.image}
              alt={data.name}
              className="relative z-10 rounded-full border-4 border-content1 object-cover"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
