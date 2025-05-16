import { Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import {
  heroSection,
  aboutSectation,
  projects,
  testimonials,
  timeline,
  skills,
  contact,
} from "./data";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import TimelineSection from "./components/timeline-section";
import TestimonialsSection from "./components/testimonials-section";
import ContactSection from "./components/contact-section";
import { useActiveSection } from "./hooks/use-active-section";
import { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface SectionConfig<T> {
  id: string;
  label: string;
  component: FunctionComponent<{ data: T }>;
  data: T;
  icon: string;
}

const sectionsConfig: SectionConfig<any>[] = [
  {
    id: "hero",
    label: "Home",
    component: HeroSection,
    data: heroSection,
    icon: "lucide:home",
  },
  {
    id: "about",
    label: "About",
    component: AboutSection,
    data: aboutSectation,
    icon: "lucide:user",
  },
  {
    id: "skills",
    label: "Skills",
    component: SkillsSection,
    data: skills,
    icon: "lucide:star",
  },
  {
    id: "projects",
    label: "Projects",
    component: ProjectsSection,
    data: projects,
    icon: "lucide:code",
  },
  {
    id: "timeline",
    label: "Timeline",
    component: TimelineSection,
    data: timeline,
    icon: "lucide:clock",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    component: TestimonialsSection,
    data: testimonials,
    icon: "lucide:message-square",
  },
  {
    id: "contact",
    label: "Contact",
    component: ContactSection,
    data: contact,
    icon: "lucide:mail",
  },
];

function App() {
  const { activeSection, sectionRefs } = useActiveSection(sectionsConfig.map((s) => s.id));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <motion.div
        className="fixed bottom-8 left-1/2 z-50"
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Tabs
          aria-label="Navigation"
          selectedKey={activeSection}
          onSelectionChange={(key) => scrollToSection(key as string)}
          radius="full"
          classNames={{
            base: "min-w-[300px] sm:min-w-[500px]",
          }}
        >
          {sectionsConfig.map((section) => (
            <Tab
              key={section.id}
              title={
                <div className="flex items-center gap-2">
                  <Icon icon={section.icon} width={18} className="sm:hidden md:block" />
                  <span className="hidden sm:block">{section.label}</span>
                </div>
              }
            />
          ))}
        </Tabs>
      </motion.div>

      <main>
        {sectionsConfig.map((section) => {
          const SectionComponent = section.component;
          return (
            <section
              id={section.id}
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
            >
              <SectionComponent data={section.data} />
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
