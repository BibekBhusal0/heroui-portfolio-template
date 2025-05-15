import { motion } from "framer-motion";
import { Card, CardBody, Image } from "@heroui/react";
import { SkillCategory } from "../types";
import SectionContainer from "./section-container";

interface SkillsSectionProps {
  data: SkillCategory[];
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <SectionContainer title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
