import {
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Prompt Engineering",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Generative AI",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/sayanyt007",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Sayan73901383",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/sayan-mondal-01500942a",
  },
] as const;

export type SkillItem = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const FRONTEND_SKILL: SkillItem[] = [];

export const BACKEND_SKILL: SkillItem[] = [];

export const FULLSTACK_SKILL: SkillItem[] = [];

export const OTHER_SKILL: SkillItem[] = [];

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/sayanyt007",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/Sayan73901383",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sayan-mondal-01500942a",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Experience",
        icon: null,
        link: "#experience",
      },
      {
        name: "Education",
        icon: null,
        link: "#education",
      },
      {
        name: "Write to me",
        icon: null,
        link: "mailto:sayanmondal0305@gmail.com",
      },
    ],
  },
] as const;

export type ExperienceItem = {
  role: string;
  sub?: string;
  years: string;
  points: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI Content Strategist & Prompt Engineer",
    years: "2022 — Current",
    points: [
      "Designed and deployed streamlined generative AI workflows, driving an approximate 40% increase in overall content production velocity.",
      "Engineered high-precision prompts and iteratively tuned model parameters to ensure strict adherence to brand voice, contextual accuracy, and strategic messaging goals.",
      "Evaluated and implemented emerging LLM technologies and autonomous agent frameworks to elevate operational efficiency across content teams.",
    ],
  },
  {
    role: "Editorial & Content Strategist",
    sub: "formerly Data & Editorial Analyst",
    years: "2022 — 2024",
    points: [
      "Applied rigorous analytical frameworks to evaluate textual quality, narrative consistency, and structural integrity across published assets.",
      "Synthesized qualitative user feedback and trends to refine thematic positioning and content delivery strategy.",
    ],
  },
  {
    role: "Literary & Academic Educator",
    years: "2021 — 2024",
    points: [
      "Developed and executed comprehensive, structured lesson plans emphasizing critical textual analysis, rhetoric, and effective written expression.",
      "Guided students through the deconstruction of complex literary works, cultivating advanced critical thinking and thematic evaluation skills.",
      "Mentored individuals in refining verbal articulation, clear argument formulation, and structured essay writing.",
    ],
  },
];

export type EducationItem = {
  title: string;
  institution: string;
  years: string;
  desc: string;
};

export const EDUCATION: EducationItem[] = [
  {
    title: "Bachelor of English Literature",
    institution: "Dr. B.R. Ambedkar College · Kalyani University",
    years: "2021 — 2024",
    desc: "Advanced textual analysis and critical evaluation — close reading, rhetoric, and the mechanics of narrative structure.",
  },
  {
    title: "Diploma in Electrical Engineering",
    institution: "Nibedita Polytechnic · WBSCTE",
    years: "2022 — 2025",
    desc: "Circuit design and power systems fundamentals — precision thinking applied to systems that must not fail.",
  },
  {
    title: "Foundations of Prompt Engineering",
    institution: "Google for Student (2025) · AWS Training & Certification (2026)",
    years: "2025 — 2026",
    desc: "Zero-shot and few-shot learning, chain-of-thought reasoning, and retrieval-augmented generation.",
  },
  {
    title: "Introduction to Generative AI & Agents",
    institution: "Microsoft (2025) · AWS (2026)",
    years: "2025 — 2026",
    desc: "LLM architecture evaluation and autonomous agent design — when to automate, and how to keep an agent accountable.",
  },
  {
    title: "Data Science 101",
    institution: "IBM",
    years: "2025",
    desc: "Core data analysis and business-metric translation — turning raw numbers into decisions people can defend.",
  },
];

export const NAV_LINKS = [
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Skills",
    link: "#skills",
  },
] as const;
