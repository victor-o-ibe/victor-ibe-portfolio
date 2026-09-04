export type NavItem = {
  label: string;
  href: string;
};

export type ExpertiseItem = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  title: string;
  organization?: string;
  description: string;
};

export type EducationItem = {
  credential: string;
  field: string;
  institution: string;
  href?: string;
};

export type ContactLinks = {
  linkedinUrl: string;
  githubUrl: string;
  email: string;
};

const githubUser = "victor-o-ibe";
const repoName = "victor-ibe-portfolio";

export const site = {
  name: "Victor Ibe",
  title: "Victor Ibe | Cloud Architecture, AI/ML Systems and MLOps",
  description:
    "Advisory Solutions Architect and Technical Lead working at the intersection of AWS, data platforms, machine learning and production AI systems.",
  githubUser,
  repoName,
  origin: `https://${githubUser}.github.io`,
  path: `/${repoName}/`,
};

export const contact: ContactLinks = {
  linkedinUrl: "https://www.linkedin.com/in/victor-ibe-cloud",
  githubUrl: "https://github.com/victor-o-ibe",
  email: "victoribe.tech@gmail.com",
};

export const profile = {
  // Place a public photo in public/images/profile/ and set e.g. "images/profile/victor-ibe.jpg"
  image: "",
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Selected Work", href: "#selected-work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "AWS | AI/ML Systems | Cloud Architecture",
  name: "Victor Ibe",
  headline: "Cloud Architecture. AI/ML Systems. Production Engineering.",
  body: [
    "Advisory Solutions Architect and Technical Lead working at the intersection of AWS, data platforms, machine learning and production AI systems.",
    "I design scalable, governable and cost-conscious systems that connect technical architecture to measurable business outcomes.",
  ],
  primaryCta: {
    label: "View Selected Work",
    href: "#selected-work",
  },
  credibility:
    "AWS Solutions Architecture | MEng Machine Intelligence & Data Science | IBM Alumni",
};

export const about = {
  heading: "Engineering cloud and intelligent systems for production.",
  paragraphs: [
    "I am an Advisory Solutions Architect and Technical Lead with a background spanning cloud architecture, enterprise solution design, technical leadership and AI-enabled systems.",
    "During four years at IBM, my work included cloud and AI-integrated environments and exposure to the Watson ecosystem, including speech, text and neural-network technologies.",
    "My work later developed more deeply around AWS architecture, cloud modernization, infrastructure automation, Kubernetes, data platforms and production reliability.",
    "I recently completed a Master of Engineering in Machine Intelligence and Data Science at Arcada University of Applied Sciences in Finland, extending that engineering foundation into machine learning, data science and intelligent systems.",
    "I am particularly interested in what happens between an ML prediction and a production outcome, including deployment, governance, observability, verification and operational safety.",
  ],
};

export const expertise: ExpertiseItem[] = [
  {
    title: "AWS & Cloud Architecture",
    description:
      "Design of scalable AWS and hybrid-cloud systems, including compute, storage, networking, security and enterprise integration.",
  },
  {
    title: "AI/ML Systems",
    description:
      "Engineering around machine-learning workloads, model-driven decision systems and production AI integration.",
  },
  {
    title: "MLOps",
    description:
      "Model lifecycle, deployment, monitoring, reproducibility, controlled releases and ML operationalization.",
  },
  {
    title: "Cloud-Native Engineering",
    description:
      "Containers, Kubernetes, serverless architectures and distributed cloud workloads.",
  },
  {
    title: "DevOps & Infrastructure as Code",
    description:
      "CI/CD, automation, AWS CDK, CloudFormation and repeatable infrastructure delivery.",
  },
  {
    title: "Data Platforms",
    description:
      "Cloud data architecture, analytics platforms and data pipelines supporting operational and ML workloads.",
  },
  {
    title: "FinOps & Cost Optimization",
    description:
      "Cloud cost intelligence, optimization architecture and measurement of realized versus predicted outcomes.",
  },
  {
    title: "Technical Leadership",
    description:
      "Architecture decisions, engineering coordination, stakeholder communication, mentoring and customer-facing technical delivery.",
  },
];

export const architectureFlow = {
  caption:
    "High-level closed-loop workflow for ML-supported cloud optimization. Implementation details are intentionally omitted.",
  stages: [
    "AWS Recommendation",
    "Evidence & Qualification",
    "Governance",
    "Controlled Action",
    "Outcome Verification",
    "Learning",
  ],
};

export const experience: ExperienceItem[] = [
  {
    title: "Advisory Solutions Architect / Technical Lead",
    organization: "Current",
    description:
      "Cloud, data and AI/ML systems architecture, with a focus on systems that are scalable, reliable and useful in production.",
  },
  {
    title: "IBM",
    organization: "IBM | 4 Years",
    description:
      "Worked across cloud and AI-integrated environments, including the Watson ecosystem, while supporting technical solutions connecting engineering requirements with business objectives.",
  },
  {
    title: "Engineering & Consulting",
    description:
      "AWS architecture, cloud modernization, infrastructure, technical leadership and engineering enablement.",
  },
];

export const education: EducationItem[] = [
  {
    credential: "Master of Engineering",
    field: "Machine Intelligence and Data Science",
    institution: "Arcada University of Applied Sciences, Finland",
    href: "https://www.theseus.fi/handle/10024/929540",
  },
  {
    credential: "Master of Science",
    field: "Quality & Engineering Management",
    institution: "Tarleton State University",
  },
];

export const technologies = [
  "AWS",
  "Python",
  "Machine Learning",
  "MLOps",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "AWS CDK",
  "CloudFormation",
  "S3",
  "EC2",
  "Lambda",
  "EKS",
  "ECS",
  "DynamoDB",
  "RDS",
  "CloudWatch",
  "IAM",
  "Data Platforms",
];

export const certification = "AWS Certified Solutions Architect";

export const contactSection = {
  heading: "Let's build useful systems.",
  body: "I am interested in conversations around ML Systems Engineering, AI/Cloud Architecture, MLOps, advanced Solutions Architecture and production AI platforms.",
};

export const footer = {
  copyright: "© 2026 Victor Ibe",
};

export function hasValue(value: string | undefined): boolean {
  return Boolean(value && value.trim().length > 0);
}

export function mailtoHref(email: string): string {
  return `mailto:${email.trim()}`;
}
