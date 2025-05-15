import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Testimonial } from "../types";
import SectionContainer from "./section-container";

interface TestimonialsSectionProps {
  data: Testimonial[];
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Split testimonials into rows if there are more than 3
  const rows = React.useMemo(() => {
    if (data.length <= 3) {
      return [data];
    } else {
      const midpoint = Math.ceil(data.length / 2);
      return [data.slice(0, midpoint), data.slice(midpoint)];
    }
  }, [data]);

  return (
    <SectionContainer title="Testimonials">
      <div 
        className="flex flex-col gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex overflow-hidden gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: isHovered ? 0 : `-${row.length * 100}px`,
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {/* Double the testimonials to create an infinite loop effect */}
              {[...row, ...row].map((testimonial, index) => (
                <Card 
                  key={`${testimonial.name}-${index}`}
                  className="min-w-[300px] md:min-w-[350px] max-w-[350px] flex-shrink-0"
                >
                  <CardBody className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="text-primary">
                        <Icon icon="lucide:quote" width={24} height={24} />
                      </div>
                      
                      <p className="text-foreground-700">{testimonial.text}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <Avatar
                          src={testimonial.image}
                          alt={testimonial.name}
                          size="md"
                        />
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          {testimonial.title && (
                            <p className="text-sm text-foreground-500">{testimonial.title}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}