export interface HeroSection {
  name: string;
  tagline: string;
  description?: string;
  image: string;
  cta: {
    label: string;
    link: string;
  }[];
}

export interface AboutSectation {
  text: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Testimonial {
  name: string;
  image: string;
  text: string;
  title?: string;
}

export interface TimelineItem {
  title: string;
  subtitle?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface ContactSection {
  email: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    label: string;
    url: string;
    icon?: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    image: string;
  }[];
}
