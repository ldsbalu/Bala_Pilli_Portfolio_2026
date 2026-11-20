export const profile = {
  name: "Bala Pilli",
  fullName: "Bala Krishna Pilli",
  preferredName: "Balu",
  title: "AI Engineer · Machine Learning & Analytics",
  location: "Salt Lake City, Utah",
  email: "balulds@byu.edu",
  github: "https://github.com/ldsbalu",
  resume: "/Bala_Pilli_AI_Resume.pdf",
  intro:
    "I build practical AI-enabled workflows and learning tools, pairing machine learning foundations with clear analysis and communication.",
  about:
    "I’m a computer science graduate student focused on AI, machine learning, and data science. My work has included helping students debug AI agents, building digital math resources, and using web analytics to understand how people use online experiences.",
  interests:
    "I’m especially interested in useful AI tools, thoughtful evaluation, and making technical ideas easier to understand. I like to start by clarifying the problem, work in small steps, and explain decisions in plain language.",
  skills: [
    {
      category: "AI & machine learning",
      items: ["Supervised and unsupervised learning", "Feature engineering", "Data preprocessing", "Model evaluation", "NLP (exposure)"],
    },
    {
      category: "Programming & algorithms",
      items: ["Python", "Java", "Agent debugging and evaluation", "Search and heuristics"],
    },
    {
      category: "Data & measurement",
      items: ["SQL", "Google Analytics", "KPI tracking", "Campaign and conversion analysis"],
    },
    {
      category: "Tools & communication",
      items: ["pandas · NumPy · scikit-learn", "Jupyter · Google Colab", "Git · GitHub", "Matplotlib · Seaborn", "Dashboards and data storytelling"],
    },
  ],
  experience: [
    {
      role: "Assistant Instructional Designer",
      organization: "BYU Continuing Education",
      dates: "September 2024 – Present",
      details: [
        "Develop high school math lessons, assessments, and digital resources aligned with curriculum standards.",
        "Work with instructors to organize examples and visual aids that support student understanding.",
      ],
    },
    {
      role: "Computer Science Teaching Assistant",
      organization: "Brigham Young University",
      dates: "September 2024 – April 2025",
      details: [
        "Helped students debug Python and Java AI agents for Connect Four and Sudoku using search, heuristics, and evaluation.",
        "Guided project work from problem framing and data handling through modeling and evaluation.",
      ],
    },
    {
      role: "Web Analyst and Developer",
      organization: "Polynesian Cultural Center",
      dates: "June 2022 – June 2024",
      details: [
        "Analyzed campaign performance, channel traffic, and customer insights in Google Analytics.",
        "Tracked KPIs and reviewed website interactions and conversions to identify improvement opportunities.",
      ],
    },
    {
      role: "Assistant Manager",
      organization: "Polynesian Cultural Center",
      dates: "June 2021 – April 2022",
      details: [
        "Led and supervised staff, and created planning charts, training materials, and business communications.",
        "Conducted team meetings that improved customer service efficiency by 8%.",
      ],
    },
  ],
  education: [
    {
      program: "M.S. in Computer Science",
      focus: "AI/ML and Data Science emphasis",
      school: "Brigham Young University · Provo, Utah",
      dates: "Expected December 2026",
    },
    {
      program: "B.S. in Applied Mathematics and Computer Science",
      focus: "",
      school: "Brigham Young University–Hawaii · Laie, Hawaii",
      dates: "June 2022",
    },
  ],
  certifications: ["Applied Data Science with Python", "Microsoft AI Engineer"],
};

export type FeaturedProject = {
  id: "stock-allocation" | "ascii-cnn" | "codenames";
  name: string;
  eyebrow: string;
  description: string;
  focus: string;
  tools: string[];
  repository?: string;
  problem: string;
  approach: string;
  outcome: string;
  finding?: string;
  detailsPending?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "stock-allocation",
    name: "ML-Enhanced Stock Budget Allocation",
    eyebrow: "Featured project · AI / optimization",
    description:
      "A mobile learning app that connects historical market data, short-term forecasts, and linear programming to show how a budget can be divided under clear constraints.",
    focus: "Forecasting · portfolio LP · solver comparison",
    tools: ["Expo / React Native", "FastAPI", "Python", "scikit-learn", "PyTorch", "SciPy / HiGHS"],
    repository: "https://github.com/ldsbalu/ml-stock-budget-allocation",
    problem:
      "Help learners understand how an uncertain return forecast becomes an input to a constrained budget-allocation model, and what an optimization solver can—and cannot—guarantee.",
    approach:
      "Connect an Expo mobile app to a FastAPI backend for daily market data, Ridge forecasts, and an LP with a full-budget constraint and per-asset holding caps. Compare several LP methods on the same small problems.",
    outcome:
      "The report documents an end-to-end educational prototype. Multiple LP methods returned the same feasible allocation on controlled comparisons. The offline GRU had higher test error than a zero-return baseline at both tested horizons, so the project makes no claim of reliable returns.",
    finding: "An honest model comparison is useful even when the more complex model does not win.",
  },
  {
    id: "ascii-cnn",
    name: "Creative Convolutional Neural Network ASCII Art Generation",
    eyebrow: "Featured project · creative AI research",
    description:
      "A co-authored research project exploring how a convolutional neural network could turn object images into compact, expressive ASCII art.",
    focus: "Image encoding · CNN decoder · dataset curation",
    tools: ["Convolutional neural networks", "Curated image / ASCII data", "Human review"],
    problem:
      "Direct image-to-ASCII tools can produce large literal renderings. This project explores a more compact, creative representation, despite the shortage of suitable paired image and ASCII examples.",
    approach:
      "Combine manually created examples with curated smaller datasets. Encode an object image into a latent representation, then decode it into a novel ASCII text output; use human curation to judge its aesthetic quality.",
    outcome:
      "The write-up defines the research direction and proposed evaluation. It does not report measured generation results, so those are left for a future project update.",
    detailsPending: true,
  },
  {
    id: "codenames",
    name: "Codenames AI Client",
    eyebrow: "Featured project · AI agents",
    description:
      "A Codenames-focused AI client. The repository is linked here; a project summary will be added after its README and specific contribution are confirmed.",
    focus: "Project details to confirm",
    tools: ["Tools to confirm from repository"],
    repository: "https://github.com/ldsbalu/codenames-ai-client",
    problem: "Add the game or agent problem this client addresses.",
    approach: "Add the agent design, interaction flow, and evaluation approach.",
    outcome: "Add the demonstrated outcome or current project status.",
    detailsPending: true,
  },
];
