import React from "react";
import { motion } from "framer-motion";
import { AboutSectation } from "../types";
import SectionContainer from "./section-container";
import { Icon } from "@iconify/react";

interface AboutSectionProps {
  data: AboutSectation;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <SectionContainer title="About Me">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-content1 rounded-xl p-8 shadow-sm relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full">
            <Icon icon="lucide:user" width={24} height={24} />
          </div>
          
          <motion.p 
            className="text-lg leading-relaxed mt-6 text-foreground-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {data.text}
          </motion.p>
          
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a 
              href="#contact" 
              className="flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <span>Let's connect</span>
              <Icon icon="lucide:arrow-right" width={18} height={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}