import React from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = React.useState(sectionIds[0]);
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({});
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Adjust these values to control when a section is considered "active"
        threshold: 0.1,
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return { activeSection, sectionRefs };
}
