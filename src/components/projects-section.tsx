import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Image, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Project } from "../types";
import SectionContainer from "./section-container";

interface ProjectsSectionProps {
  data: Project[];
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <SectionContainer title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Chip key={tag} size="sm" variant="flat" color="primary">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="flex gap-3 justify-end">
                {project.links.github && (
                  <Button
                    as="a"
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="flat"
                    size="sm"
                    startContent={<Icon icon="lucide:github" width={18} />}
                  >
                    Code
                  </Button>
                )}
                {project.links.demo && (
                  <Button
                    as="a"
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    size="sm"
                    startContent={<Icon icon="lucide:external-link" width={18} />}
                  >
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}