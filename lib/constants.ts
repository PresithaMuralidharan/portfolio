export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  bio: string;
  aboutText: string;
  roles: string[];
  phone: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
    school: {
      name: string;
      year: string;
      class12: string;
      class10: string;
    };
    highlights: { label: string; score: string }[];
  };
  areasOfInterest: string[];
  socials: {
    linkedin: string;
    github: string;
    email: string;
    resumeUrl: string;
  };
  status: {
    text: string;
    badge: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Presitha M.",
  shortName: "Presitha",
  tagline: "Integrated MSc Data Science Student | AI, Machine Learning & NLP",
  phone: "+91 9363260017",
  bio: "I enjoy turning data into meaningful insights and building practical solutions using Python, machine learning and AI. I'm passionate about exploring new technologies, solving real-world problems and continuously improving my technical skills.",
  aboutText: "I'm an Integrated MSc Data Science student at Coimbatore Institute of Technology, interested in AI, machine learning, and data analytics. I've built several academic projects in Python using NLP and machine learning, and I enjoy turning raw data into something useful. I'm looking to apply what I've learned to real-world problems and keep growing in data science.",
  roles: [
    "Data Science Student",
    "AI/ML Enthusiast",
    "Python Developer",
    "NLP Explorer",
    "Problem Solver",
  ],
  education: {
    degree: "M.Sc. Data Science (Integrated)",
    institution: "Coimbatore Institute of Technology",
    period: "2024 – 2029",
    cgpa: "7.6 / 10",
    school: {
      name: "SBOA Matric Hr. Sec. School",
      year: "2024",
      class12: "88%",
      class10: "94%",
    },
    highlights: [
      { label: "Class 10 (Secondary)", score: "94%" },
      { label: "Class 12 (Higher Secondary)", score: "88%" },
      { label: "Integrated M.Sc. CGPA", score: "7.6 / 10" },
    ],
  },
  areasOfInterest: [
    "Machine Learning",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Data Visualization",
    "Time Series Analysis",
    "Big Data Technologies",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/presitha-muralidharan/",
    github: "https://github.com/PresithaMuralidharan",
    email: "presithamuralidharan@gmail.com",
    resumeUrl: "/resume.pdf",
  },
  status: {
    text: "Open to Data Science & AI Internships",
    badge: "Available for Internships",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
