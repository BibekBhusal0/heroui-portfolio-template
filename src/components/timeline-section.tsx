import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TimelineItem } from "../types";
import SectionContainer from "./section-container";

interface TimelineSectionProps {
  data: TimelineItem[];
}

export default function TimelineSection({ data }: TimelineSectionProps) {
  return (
    <SectionContainer title="Timeline">
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-default-200"></div>

        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 ${index % 2 === 0
                ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2"
                : "md:pl-8 md:ml-1/2"
              } md:w-1/2`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-0 md:right-0 top-6 w-4 h-4 rounded-full bg-primary z-10 md:mx-auto"></div>

            <Card className="ml-10 md:ml-0 md:mr-0">
              <CardBody className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-foreground-600">{item.subtitle}</p>
                  )}

                  <div className="flex items-center gap-2 text-sm text-foreground-500 mt-1">
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
                    <p className="mt-3 text-foreground-700">
                      {item.description}
                    </p>
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
