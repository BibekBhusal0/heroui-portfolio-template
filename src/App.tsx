import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { 
  heroSection, 
  aboutSectation, 
  projects, 
  testimonials, 
  timeline, 
  skills, 
  contact 
} from "./data";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import TimelineSection from "./components/timeline-section";
import TestimonialsSection from "./components/testimonials-section";
import ContactSection from "./components/contact-section";
import { useActiveSection } from "./hooks/use-active-section";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" }
];

function App() {
  const { activeSection, sectionRefs } = useActiveSection(sections.map(s => s.id));
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-content1 rounded-full shadow-lg px-2 py-1"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Tabs 
          aria-label="Navigation" 
          selectedKey={activeSection} 
          onSelectionChange={(key) => scrollToSection(key as string)}
          classNames={{
            base: "w-auto min-w-[300px] sm:min-w-[500px]",
            tabList: "gap-2 w-full rounded-full p-1",
            cursor: "rounded-full",
            tab: "rounded-full px-3 py-1 data-[selected=true]:text-primary-foreground"
          }}
        >
          {sections.map((section) => (
            <Tab key={section.id} title={section.label} />
          ))}
        </Tabs>
      </motion.div>

      <main>
        <section id="hero" ref={el => sectionRefs.current.hero = el}>
          <HeroSection data={heroSection} />
        </section>
        
        <section id="about" ref={el => sectionRefs.current.about = el}>
          <AboutSection data={aboutSectation} />
        </section>
        
        <section id="skills" ref={el => sectionRefs.current.skills = el}>
          <SkillsSection data={skills} />
        </section>
        
        <section id="projects" ref={el => sectionRefs.current.projects = el}>
          <ProjectsSection data={projects} />
        </section>
        
        <section id="timeline" ref={el => sectionRefs.current.timeline = el}>
          <TimelineSection data={timeline} />
        </section>
        
        <section id="testimonials" ref={el => sectionRefs.current.testimonials = el}>
          <TestimonialsSection data={testimonials} />
        </section>
        
        <section id="contact" ref={el => sectionRefs.current.contact = el}>
          <ContactSection data={contact} />
        </section>
      </main>
    </div>
  );
}

export default App;