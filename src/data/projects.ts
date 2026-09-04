export type SelectedWorkItem = {
  title: string;
  description: string;
  tags: string[];
};

export type FeaturedProject = {
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  problem: string;
  approach: string;
  themes: string[];
  whyItMatters: string;
  ctaLabel: string;
  href: string;
};

export const featuredProject: FeaturedProject = {
  label: "Featured Work",
  title:
    "Transparent Closed-Loop Verification of ML-Predicted AWS Cloud Cost Savings",
  subtitle:
    "Master of Engineering Thesis | Machine Intelligence & Data Science | Arcada University of Applied Sciences",
  intro:
    "Cloud optimization systems can recommend an action and estimate its savings. The harder problem is whether that recommendation should be trusted for implementation, and whether the predicted benefit actually appeared afterward.",
  problem:
    "A predicted saving is not the same thing as a verified saving. Production optimization therefore requires evidence before an action, controls around the action, and measurement afterward.",
  approach:
    "The research explored an evidence-driven workflow that evaluates optimization recommendations, maintains traceability through the decision process, and verifies operational and financial outcomes after implementation.",
  themes: [
    "AWS",
    "Machine Learning",
    "Cloud Cost Optimization",
    "FinOps",
    "MLOps",
    "Governance",
    "Observability",
    "Auditability",
    "Rollback Safety",
  ],
  whyItMatters:
    "The work is about taking ML-supported recommendations past prediction and into production, where decisions have to be explainable, measurable and governable.",
  ctaLabel: "Read Published Thesis",
  href: "https://www.theseus.fi/handle/10024/929540",
};

export const selectedWork: SelectedWorkItem[] = [
  {
    title: "Cloud Architecture & Modernization",
    description:
      "AWS architecture, cloud migration, serverless systems, containers, security, infrastructure automation and production optimization.",
    tags: ["AWS", "Kubernetes", "Serverless", "IaC", "DevOps"],
  },
  {
    title: "AI/ML Systems Engineering",
    description:
      "Work and research focused on connecting machine-learning capabilities with scalable cloud infrastructure, operational controls and production workflows.",
    tags: ["Machine Learning", "MLOps", "AWS", "Python", "Data"],
  },
  {
    title: "Technical Enablement & Leadership",
    description:
      "Training, mentoring and technical leadership supporting engineers pursuing AWS capabilities and organizations adopting cloud technologies.",
    tags: ["Architecture", "Mentorship", "AWS", "Technical Leadership"],
  },
];
