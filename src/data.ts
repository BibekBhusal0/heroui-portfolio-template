import {
  HeroSection,
  Project,
  Testimonial,
  TimelineItem,
  ContactSection,
  SkillCategory,
  AboutSectation,
} from "./types";

export const heroSection: HeroSection = {
  name: "Mr. Placeholder",
  tagline: "Creating digital experiences that inspire.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut pulvinar lorem.",
  image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=john1",
  cta: [
    { label: "View Projects", link: "#projects" },
    { label: "Get in Touch", link: "#contact" },
  ],
};

export const aboutSectation: AboutSectation = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project1",
    tags: ["React", "Tailwind", "HeroUI"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Dashboard X",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project2",
    tags: ["Vue", "D3", "Admin"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "E-commerce UI Kit",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project3",
    tags: ["Next.js", "Shop", "Stripe"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Daily planner",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project4",
    tags: ["HeroUI", "Notion", "Stripe"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Dashboard y",
    description: "lorem ipsum ut elit dolor lorem amet sit dolore sit et",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=project5",
    tags: ["HeroUI", "Stripe"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Client One",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=client1",
    title: "CEO, ExampleCorp",
  },
  {
    name: "User Two",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=client2",
    title: "Product Designer",
  },
  {
    name: "Customer Three",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=client3",
    title: "Marketing Lead",
  },
  {
    name: "Client Four",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=client4",
    title: "Startup Founder",
  },
  {
    name: "User Five",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=client5",
    title: "UX Researcher",
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Frontend Developer",
    subtitle: "FictionalTech Inc.",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut pulvinar nunc.",
  },
  {
    title: "UI/UX Designer",
    subtitle: "Mockup Studio",
    location: "New York, NY",
    startDate: "Aug 2021",
    endDate: "Dec 2022",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  },
  {
    title: "Bachelor of Design",
    subtitle: "University of Placeholder",
    location: "Online",
    startDate: "2018",
    endDate: "2021",
    description: "Aliquam erat volutpat. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
  },
  {
    category: "Design & Tools",
    skills: [
      {
        name: "Figma",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Sketch",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
      },
      {
        name: "Adobe XD",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
      },
    ],
  },
  {
    category: "Other",
    skills: [
      {
        name: "Tailwind CSS",
        image: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
      },
      {
        name: "HeroUI",
        image:
          "https://raw.githubusercontent.com/heroui-inc/heroui/refs/heads/canary/apps/docs/public/favicon-96x96.png",
      },
      {
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "CI/CD",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
];

export const contact: ContactSection = {
  email: "hello@example.com",
  phone: "+1 234 567 8901",
  location: "City, Country",
  socialLinks: [
    { label: "GitHub", url: "#", icon: "github" },
    { label: "LinkedIn", url: "#", icon: "linkedin" },
    { label: "Twitter", url: "#", icon: "twitter" },
  ],
};
