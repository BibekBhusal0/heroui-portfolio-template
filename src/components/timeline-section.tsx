import { motion } from "framer-motion";
import { Card, CardBody, cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TimelineItem } from "../types";
import SectionContainer from "./section-container";

interface TimelineSectionProps {
  data: TimelineItem[];
}

export default function TimelineSection({ data }: TimelineSectionProps) {
  return (
    <SectionContainer title="Timeline">
      <div className="relative mx-auto max-w-5xl">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-4 top-0 w-0.5 transform bg-default-300 md:left-1/2 md:-translate-x-1/2" />

        {data.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative mb-12",
              index % 2 === 0 ? "md:mr-1/2 md:ml-auto md:pr-8 md:text-right" : "md:ml-1/2 md:pl-8",
              "md:w-1/2"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              key={`circle-${index}`}
              className={cn(
                "absolute mt-2 h-3 w-3 transform rounded-full bg-primary-500",
                index % 2 === 0 ? "" : "md:right-0"
              )}
            />
            <Card className="m-2">
              <CardBody className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.subtitle && <p className="text-foreground-600">{item.subtitle}</p>}

                  <div className="mt-1 flex items-center gap-2 text-sm text-foreground-500">
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:map-pin" width={14} />
                        <span>{item.location}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:calendar" width={14} />
                      <span>
                        {item.startDate} - {item.endDate || "Present"}
                      </span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="mt-3 text-foreground-700">{item.description}</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
