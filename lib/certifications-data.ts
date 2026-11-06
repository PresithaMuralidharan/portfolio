export interface Certification {
  id: string;
  title: string;
  courseName?: string;
  issuer: string;
  recipientName: string;
  issuedDate: string;
  credentialId?: string;
  serialNumber?: string;
  signerName?: string;
  signerTitle?: string;
  category: "Data Science & Analytics" | "Problem Solving" | "Hackathon & Innovation";
  credentialUrl: string;
  description: string;
  skillsVerified: string[];
  type: "hp-life" | "hackerrank" | "hackspora";
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "hp-life-data-science",
    title: "Data Science & Analytics",
    courseName: "HP LIFE Online Course: Data Science & Analytics",
    issuer: "HP Foundation (HP LIFE)",
    recipientName: "Presitha Muralidharan",
    issuedDate: "July 8, 2025",
    serialNumber: "8e916494-3b58-43ff-ad04-4f91c7d84b56",
    signerName: "Stephanie Bormann",
    signerTitle: "Deputy Director, HP Foundation",
    category: "Data Science & Analytics",
    credentialUrl: "https://www.life-global.org/",
    description:
      "By completing this course, Presitha learned about leading data science and analytics practices, methodologies, and tools, examined the benefits and challenges of a data-driven approach for businesses, and gained essential practical skills needed for a career in data science.",
    skillsVerified: [
      "Data Science Methodologies",
      "Analytics Practices & Tools",
      "Data-Driven Business Decisions",
      "Statistical Analysis Foundations",
    ],
    type: "hp-life",
  },
  {
    id: "hackerrank-problem-solving-basic",
    title: "Problem Solving (Basic)",
    courseName: "HackerRank Skill Certification: Problem Solving (Basic)",
    issuer: "HackerRank",
    recipientName: "Presitha Muralidharan",
    issuedDate: "02 Aug, 2025",
    credentialId: "3EB74ECBE781",
    signerName: "Harishankaran K",
    signerTitle: "CTO, HackerRank",
    category: "Problem Solving",
    credentialUrl: "https://www.hackerrank.com/certificates/3EB74ECBE781",
    description:
      "Certified in core algorithmic problem solving, data structures, logical thinking, time-complexity analysis, and basic algorithmic reasoning by successfully passing the HackerRank skills assessment.",
    skillsVerified: [
      "Core Problem Solving",
      "Logical Thinking",
      "Basic Algorithmic Reasoning",
      "Data Structures & Optimization",
    ],
    type: "hackerrank",
  },
  {
    id: "hackspora-25-finalist",
    title: "National Level 24-Hour Hackathon – HackSpora '25",
    courseName: "HackSpora '25 National Hackathon",
    issuer: "Dept. of AI & Data Science, Karpagam Academy of Higher Education",
    recipientName: "Presitha Muralidharan",
    issuedDate: "2025",
    credentialId: "HACKSPORA25-FIN",
    category: "Hackathon & Innovation",
    credentialUrl: "https://kahedu.edu.in/",
    description:
      "Selected as a Finalist at the prestigious national-level 24-hour hackathon HackSpora '25, competing with engineering teams across India to develop rapid AI and data-driven solutions under high-pressure sprint conditions.",
    skillsVerified: [
      "Rapid AI Prototyping",
      "24-Hour Hackathon Sprint",
      "Team Collaboration",
      "Practical Solution Design",
    ],
    type: "hackspora",
  },
];
