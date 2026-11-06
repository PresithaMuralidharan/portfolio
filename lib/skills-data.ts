export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  level: "Core & Proficient" | "Hands-on Applied" | "Familiar & Exploring";
  skills: { name: string; tag?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    subtitle: "Core syntax, data structures & algorithms",
    level: "Core & Proficient",
    skills: [
      { name: "Python", tag: "Primary" },
      { name: "SQL", tag: "Database" },
      { name: "JavaScript", tag: "Web" },
      { name: "Java", tag: "OOP / Big Data" },
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
    ],
  },
  {
    id: "python-libraries",
    title: "Python Libraries",
    subtitle: "Data manipulation, scientific computing & vision",
    level: "Core & Proficient",
    skills: [
      { name: "NumPy", tag: "Numerical" },
      { name: "Pandas", tag: "DataFrames" },
      { name: "Matplotlib", tag: "Plotting" },
      { name: "Scikit-learn", tag: "ML" },
      { name: "OpenCV", tag: "Computer Vision" },
    ],
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    subtitle: "Core statistical models, NLP & evaluation techniques",
    level: "Hands-on Applied",
    skills: [
      { name: "Supervised Learning" },
      { name: "Classification" },
      { name: "Regression" },
      { name: "Natural Language Processing", tag: "Focus" },
      { name: "TF-IDF" },
      { name: "Cosine Similarity" },
      { name: "Semantic Embeddings" },
      { name: "Sentence Transformers", tag: "Modern NLP" },
      { name: "Deep Learning Fundamentals" },
    ],
  },
  {
    id: "data-science-viz",
    title: "Data Science & Visualization",
    subtitle: "Data cleaning, storytelling & analytical reporting",
    level: "Hands-on Applied",
    skills: [
      { name: "Data Cleaning" },
      { name: "Exploratory Data Analysis (EDA)" },
      { name: "Data Visualization" },
      { name: "Power BI", tag: "BI" },
      { name: "Plotly", tag: "Interactive" },
      { name: "Statistical Analysis" },
    ],
  },
  {
    id: "development-tools",
    title: "Development & Tools",
    subtitle: "Web frameworks, relational storage & dev environment",
    level: "Core & Proficient",
    skills: [
      { name: "Streamlit", tag: "Rapid AI Apps" },
      { name: "Flask", tag: "Backend REST" },
      { name: "PostgreSQL", tag: "RDBMS" },
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "VS Code", tag: "IDE" },
      { name: "Jupyter Notebook", tag: "Analysis" },
    ],
  },
  {
    id: "big-data-tech",
    title: "Big Data Technologies",
    subtitle: "Distributed file systems, data warehouses & batch processing",
    level: "Hands-on Applied",
    skills: [
      { name: "Apache Hadoop", tag: "Distributed" },
      { name: "HDFS", tag: "Storage" },
      { name: "Apache Hive", tag: "Data Warehouse" },
      { name: "Apache Pig", tag: "ETL / Scripting" },
      { name: "Apache Sqoop", tag: "Data Ingestion" },
      { name: "MongoDB", tag: "NoSQL" },
    ],
  },
  {
    id: "ai-technologies",
    title: "AI Technologies & Frameworks",
    subtitle: "Deep learning frameworks, foundation models & GenAI workflows",
    level: "Familiar & Exploring",
    skills: [
      { name: "PyTorch", tag: "DL Framework" },
      { name: "Hugging Face", tag: "Transformers" },
      { name: "Generative AI", tag: "LLMs" },
      { name: "AI-assisted Development" },
    ],
  },
];

