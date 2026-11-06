export interface Capability {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
  icon: "python" | "brain" | "message" | "chart" | "database" | "server";
}

export const CAPABILITIES: Capability[] = [
  {
    id: "python-dev",
    title: "Python Development",
    description:
      "Writing clean, modular and efficient Python code for automation, scientific computing, data pipelines, and backend application logic.",
    focusAreas: ["OOP Architecture", "Data Structures", "Algorithmic Logic", "Modular Scripting"],
    icon: "python",
  },
  {
    id: "ml-apps",
    title: "Machine Learning Applications",
    description:
      "Developing end-to-end predictive models with Scikit-learn, from feature engineering and hyperparameter tuning to evaluation and rapid prototyping in Streamlit.",
    focusAreas: ["Supervised Classifiers", "Gradient Boosting & Ensembles", "Cross-Validation", "Model Evaluation"],
    icon: "brain",
  },
  {
    id: "nlp-solutions",
    title: "NLP-Based Solutions",
    description:
      "Exploring natural language processing pipelines, tokenization, semantic embeddings, sentence transformers, and multilingual/code-mixed language analysis.",
    focusAreas: ["Sentence Transformers", "TF-IDF Vectorization", "Cosine Similarity", "Code-Mixed Sentiment"],
    icon: "message",
  },
  {
    id: "data-analysis-viz",
    title: "Data Analysis & Visualization",
    description:
      "Transforming raw datasets into interpretable stories through exploratory data analysis, statistical breakdowns, Power BI dashboards, and interactive charts.",
    focusAreas: ["Exploratory Data Analysis", "Data Cleaning & Imputation", "Plotly / Matplotlib", "Dashboarding"],
    icon: "chart",
  },
  {
    id: "database-apps",
    title: "Database-Driven Applications",
    description:
      "Designing normalized relational schemas in PostgreSQL, writing complex queries, and developing RESTful full-stack backends with Flask.",
    focusAreas: ["Relational Schema Design", "Complex SQL Queries", "Flask REST Endpoints", "Data Persistence"],
    icon: "database",
  },
  {
    id: "bigdata-ai",
    title: "Big Data & AI-Powered Systems",
    description:
      "Applying distributed storage and processing paradigms using Hadoop, HDFS, Hive, and Pig to process high-volume structured and unstructured telemetry.",
    focusAreas: ["Hadoop & HDFS", "Hive SQL Warehousing", "Pig Latin ETL", "Sqoop Relational Migration"],
    icon: "server",
  },
];

