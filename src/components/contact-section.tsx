import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ContactSection as ContactSectionType } from "../types";
import SectionContainer from "./section-container";
import { addToast } from "@heroui/react";

interface ContactSectionProps {
  data: ContactSectionType;
}

export default function ContactSection({ data }: ContactSectionProps) {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      addToast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        color: "success",
      });

      // Reset submitted state after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const getIconForSocial = (iconName: string) => {
    const iconMap: Record<string, string> = {
      github: "lucide:github",
      linkedin: "lucide:linkedin",
      twitter: "lucide:twitter",
      facebook: "lucide:facebook",
      instagram: "lucide:instagram",
    };

    return iconMap[iconName.toLowerCase()] || "lucide:link";
  };

  return (
    <SectionContainer title="Contact Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon
                      icon="lucide:mail"
                      className="text-primary"
                      width={24}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-500">Email</p>
                    <a
                      href={`mailto:${data.email}`}
                      className="font-medium hover:text-primary"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                {data.phone && (
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon
                        icon="lucide:phone"
                        className="text-primary"
                        width={24}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">Phone</p>
                      <a
                        href={`tel:${data.phone}`}
                        className="font-medium hover:text-primary"
                      >
                        {data.phone}
                      </a>
                    </div>
                  </div>
                )}

                {data.location && (
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon
                        icon="lucide:map-pin"
                        className="text-primary"
                        width={24}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">Location</p>
                      <p className="font-medium">{data.location}</p>
                    </div>
                  </div>
                )}

                {data.socialLinks && data.socialLinks.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-foreground-500 mb-3">
                      Connect with me
                    </p>
                    <div className="flex gap-3">
                      {data.socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-content2 hover:bg-content3 transition-colors p-3 rounded-full"
                          aria-label={link.label}
                        >
                          <Icon
                            icon={getIconForSocial(link.icon || link.label)}
                            width={20}
                            height={20}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    isRequired
                    isDisabled={isSubmitting || isSubmitted}
                    startContent={<Icon icon="lucide:user" width={14} />}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    isRequired
                    isDisabled={isSubmitting || isSubmitted}
                    startContent={<Icon icon="lucide:mail" width={14} />}
                  />
                </div>

                <Input
                  label="Subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  isRequired
                  isDisabled={isSubmitting || isSubmitted}
                  startContent={<Icon icon="lucide:book" width={14} />}
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  minRows={4}
                  isRequired
                  isDisabled={isSubmitting || isSubmitted}
                />

                <Button
                  type="submit"
                  color="primary"
                  className="mt-2"
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting || isSubmitted}
                  startContent={
                    !isSubmitting &&
                    !isSubmitted && <Icon icon="lucide:send" width={18} />
                  }
                  endContent={
                    isSubmitted && <Icon icon="lucide:check" width={18} />
                  }
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSubmitted
                      ? "Sent!"
                      : "Send Message"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
