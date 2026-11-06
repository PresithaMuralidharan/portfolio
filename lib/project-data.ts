export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI / ML" | "NLP" | "Big Data" | "Data Analytics" | "Software Development";
  categoryLabel: string;
  techStack: string[];
  description: string;
  problemStatement: string;
  solutionArchitecture: string;
  keyFeatures: string[];
  metrics?: string;
  isFeatured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  mockupType: "nlp" | "screening" | "vision" | "threat" | "traffic" | "finance" | "portal";
  accentColor: string;
}

export const PROJECT_CATEGORIES = [
  "All Projects",
  "AI / ML",
  "NLP",
  "Big Data",
  "Data Analytics",
  "Software Development",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    id: "netpulse-outage-detection",
    title: "NetPulse: Large-Scale Internet Outage Detection & Early Warning System",
    tagline: "Big Data Telemetry Outage Detection & Spatial-Temporal Anomaly Platform",
    category: "Big Data",
    categoryLabel: "Big Data / Machine Learning",
    techStack: ["HDFS", "Apache Pig", "Apache Hive", "Python", "Scikit-learn", "MongoDB", "Isolation Forest"],
    description:
      "Built a big data system that analyzes 100K+ network telemetry records to spot internet outages, unusual network behavior, and how disruptions spread across geographic regions.",
    problemStatement:
      "Traditional single-node network monitoring fails when streaming massive network telemetry, missing subtle cascading latency anomalies and localized ISP disruptions until widespread outages occur.",
    solutionArchitecture:
      "Engineered an end-to-end distributed Big Data pipeline. Ingested 100K+ telemetry records into HDFS, executed parallel ETL transformations via Apache Pig, structured queries with Hive schemas, trained an Isolation Forest model to detect multivariate network anomalies (latency, packet loss, throughput, DNS), and served real-time health scores via MongoDB.",
    keyFeatures: [
      "Analyzes 100K+ network telemetry records to spot outages and disruption spread",
      "Distributed batch processing using HDFS, Apache Pig, and Apache Hive",
      "Machine learning anomaly detection using Isolation Forest on latency, throughput & DNS",
      "Network health scoring and dynamic outage severity index calculation",
      "Spatial-temporal spread analysis for localized early disruption warnings",
      "MongoDB document store integration for rapid telemetry serving and dashboarding",
    ],
    metrics: "100K+ Telemetry Records • Isolation Forest ML Anomaly Detection",
    isFeatured: true,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "threat",
    accentColor: "from-cyan-500/20 to-indigo-500/20",
  },
  {
    id: "resume-screening-ai",
    title: "Resume Screening AI",
    tagline: "Semantic Resume-to-Job Matching & Candidate Ranking System",
    category: "AI / ML",
    categoryLabel: "AI / Natural Language Processing",
    techStack: ["Python", "NLP", "Scikit-learn", "Sentence Transformers", "Streamlit", "TF-IDF"],
    description:
      "Built an AI tool that compares resumes with job descriptions and surfaces the best-matching candidates using NLP and dense semantic similarity embeddings.",
    problemStatement:
      "Recruiters spend excessive manual hours screening hundreds of resumes per role. Keyword-only matching frequently misses qualified candidates who phrase experience differently or rewards resumes with stuffed keywords.",
    solutionArchitecture:
      "Engineered an automated parsing and evaluation pipeline utilizing text preprocessing, TF-IDF vectorization, cosine similarity, and Sentence Transformer embeddings. The system computes both lexical and semantic match scores to generate an objective candidate ranking and skill gap report.",
    keyFeatures: [
      "Automated extraction of skills, education, experience, projects, and certifications from resumes",
      "Job description requirement alignment and semantic candidate matching",
      "Dual TF-IDF & Cosine Similarity lexical evaluation",
      "Sentence Transformer dense contextual embeddings for semantic understanding",
      "Candidate ranking and automated skill gap breakdown (matching vs missing skills)",
      "Interactive Streamlit web application for real-time recruiter review",
    ],
    metrics: "Dense Semantic Embeddings & Automated Skill Gap Analysis",
    isFeatured: true,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "screening",
    accentColor: "from-indigo-500/20 to-cyan-500/20",
  },
  {
    id: "mixsense-nlp",
    title: "MixSense: Multilingual Code-Mixed Text Analysis",
    tagline: "Code-Mixed Tamil-English, Hindi-English & Malayalam-English NLP Engine",
    category: "NLP",
    categoryLabel: "Natural Language Processing",
    techStack: ["Python", "PyTorch", "Hugging Face", "Streamlit", "PostgreSQL", "Transformers"],
    description:
      "Built an NLP system that analyzes Tamil-English, Hindi-English, and Malayalam-English conversations, including Romanized text, to understand sentiment, intent, and emotions.",
    problemStatement:
      "Standard monolingual NLP models fail on colloquial multilingual code-mixed communication (such as Tanglish or Manglish) common in Indian digital spaces due to non-standard phonetic transliteration, slang, and emojis.",
    solutionArchitecture:
      "Fine-tuned transformer architectures capable of multilingual representation learning. Designed tokenization pipelines parsing Romanized phonetic transliterations, contextual code-switching boundaries, emotional undertones, and conversational intent.",
    keyFeatures: [
      "Analyzes Tamil-English, Hindi-English, and Malayalam-English conversational inputs",
      "Supports Romanized phonetic transliterations and mixed-script dialects",
      "Multilingual models for language identification and code-switching detection",
      "Fine-grained classification of sentiment, emotional undertones, and user intent",
      "Robust handling of conversational slang, emojis, context, and sarcasm",
      "Interactive Streamlit dashboard exploring language patterns and switching behaviors",
    ],
    metrics: "Trilingual Code-Mixed Representation & Emotion Detection",
    isFeatured: true,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "nlp",
    accentColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "netpulse-air-pollution",
    title: "Image-Based Air Pollution Detection",
    tagline: "Computer Vision Environmental Air Quality Classification",
    category: "AI / ML",
    categoryLabel: "AI / Computer Vision",
    techStack: ["Python", "OpenCV", "Scikit-learn", "Gradient Boosting", "Random Forest", "Streamlit"],
    description:
      "Built a machine learning application that analyzes outdoor images and classifies environmental conditions into different air-quality categories without requiring physical hardware sensors.",
    problemStatement:
      "Traditional hardware air monitoring stations require expensive sensors, constant calibration, and provide sparse geographic coverage. Visual sensorless estimation offers an accessible alternative.",
    solutionArchitecture:
      "Implemented an image processing pipeline utilizing OpenCV for contrast, haze index, and color histogram feature extraction. Trained and evaluated Random Forest and Gradient Boosting ensembles, achieving 72.41% test accuracy across 4 categorical air quality levels.",
    keyFeatures: [
      "Image preprocessing, color space conversion & haze extraction via OpenCV",
      "Random Forest and Gradient Boosting classifier ensemble",
      "Classification into four distinct air-quality categories",
      "Sensorless image-based environmental condition analysis",
      "Interactive Streamlit interface with upload & instant prediction",
      "Achieved 72.41% test accuracy on outdoor environmental dataset",
    ],
    metrics: "72.41% Test Accuracy across 4 AQ categories",
    isFeatured: false,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "vision",
    accentColor: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence & Security Log Analytics",
    tagline: "Distributed Big Data Cybersecurity Telemetry & Anomaly Detection",
    category: "Big Data",
    categoryLabel: "Big Data / Cybersecurity",
    techStack: ["Java", "Hadoop", "HDFS", "Hive", "Pig", "MongoDB", "SQL"],
    description:
      "Developed a Big Data analytics platform for processing and analyzing structured and semi-structured cybersecurity data to identify suspicious activities and explore potential security threats.",
    problemStatement:
      "Enterprise cybersecurity operations generate massive gigabytes of firewall, authentication, and endpoint connection logs every hour. Single-instance databases crash under ingestion pressure and fail to discover distributed attack signatures.",
    solutionArchitecture:
      "Constructed a distributed data pipeline on the Apache Hadoop ecosystem. Ingested raw heterogeneous log streams into HDFS, executed parallel MapReduce transformations with Apache Pig, structured queries with Apache Hive schemas, and surfaced threat intelligence patterns into MongoDB.",
    keyFeatures: [
      "Large-scale distributed security log parsing & ingestion",
      "Structured and semi-structured security telemetry analysis",
      "Fault-tolerant distributed storage leveraging HDFS",
      "High-throughput data querying and SQL analysis using Hive",
      "Batch data ETL pipeline transformations using Pig Latin",
      "Document aggregation & threat intelligence query layer via MongoDB",
    ],
    metrics: "Distributed batch processing across multi-format log files",
    isFeatured: false,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "threat",
    accentColor: "from-red-500/20 to-indigo-500/20",
  },
  {
    id: "urban-mobility-intelligence",
    title: "Urban Mobility Intelligence & Congestion Analytics",
    tagline: "Distributed Transportation Telemetry & Bottleneck Analytics",
    category: "Big Data",
    categoryLabel: "Big Data / Data Analytics",
    techStack: ["Java", "Hadoop", "HDFS", "Hive", "Pig", "Sqoop", "PostgreSQL"],
    description:
      "Developed a Big Data platform for analyzing urban mobility information and identifying traffic patterns and congestion trends using distributed data processing technologies.",
    problemStatement:
      "Municipal transport authorities collect vast streams of vehicular GPS and toll telemetry, but struggle to reconcile disparate historical SQL databases with unstructured high-volume commuter records to diagnose recurring congestion hotspots.",
    solutionArchitecture:
      "Implemented a hybrid Big Data warehouse. Utilized Apache Sqoop to orchestrate bi-directional data flow between relational PostgreSQL records and HDFS distributed partitions. Executed Pig scripts for high-volume data cleaning, followed by Hive analytical views to discover spatial-temporal bottleneck patterns.",
    keyFeatures: [
      "Urban mobility data ingestion & distributed processing",
      "High-throughput unstructured sensor record transformations",
      "Distributed storage & partitioned dataset queries using HDFS & Hive",
      "Bi-directional relational database migration utilizing Sqoop",
      "Traffic pattern recognition & peak congestion trend detection",
      "Interactive analytical reporting dashboards for mobility insights",
    ],
    metrics: "Scalable distributed ETL & spatial congestion mapping",
    isFeatured: false,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "traffic",
    accentColor: "from-blue-500/20 to-teal-500/20",
  },
  {
    id: "smart-expense-management",
    title: "Smart Expense Management System",
    tagline: "Full-Stack Personal Finance & Budget Optimization Dashboard",
    category: "Software Development",
    categoryLabel: "Software Development",
    techStack: ["Python", "Flask", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
    description:
      "Developed a personal expense management application to track income, monitor spending, manage budgets and visualize financial activity.",
    problemStatement:
      "Individual budgeting is frequently neglected due to fragmented tools and lack of intuitive visual feedback on category-specific expenditure trends and budget overflow risk.",
    solutionArchitecture:
      "Built a secure MVC full-stack application with Python/Flask and PostgreSQL. Features relational schema design for transactions, category mapping, recurring budget rules, and interactive client-side visual reporting of spending distributions.",
    keyFeatures: [
      "Comprehensive income and expense logging with category indexing",
      "Dynamic budget allocation thresholds with warning indicators",
      "Responsive financial overview dashboard with real-time balance calculations",
      "Normalized PostgreSQL relational database with transactional integrity",
      "Visual spending pattern analysis & cash-flow distributions",
      "Clean, modern responsive UI built with vanilla JS and CSS3",
    ],
    metrics: "Complete transaction lifecycle & monthly budgeting analytics",
    isFeatured: false,
    githubUrl: "https://github.com/PresithaMuralidharan",
    demoUrl: "",
    mockupType: "finance",
    accentColor: "from-emerald-500/20 to-indigo-500/20",
  },
];
