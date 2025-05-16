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
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl bg-content1 p-8 shadow-sm">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-full bg-primary p-3 text-white">
            <Icon icon="lucide:user" width={24} height={24} />
          </div>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-foreground-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            {data.text}
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}>
            <a
              href="#contact"
              className="flex items-center gap-2 font-medium text-primary hover:underline">
              <span>Let's connect</span>
              <Icon icon="lucide:arrow-right" width={18} height={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
