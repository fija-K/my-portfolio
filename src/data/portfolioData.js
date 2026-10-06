/**
 * PORTFOLIO DATA SOURCE OF TRUTH
 * User: Fija Khan
 * Identity: AI/ML STUDENT • DEVELOPER • PROBLEM SOLVER
 * 
 * IMPORTANT:
 * All personal content, projects, skills, DSA topics, achievements, and resume metadata
 * are centralized here. Do not hardcode personal claims inside UI components.
 * Unconfirmed information uses null or empty arrays [].
 */

export const personalInfo = {
  name: "Fija Khan",
  execName: "FIJA.EXE",
  title: "AI/ML STUDENT • DEVELOPER • PROBLEM SOLVER",
  subTitle: "Building intelligent systems, refining algorithms, and engineering practical software.",
  location: null, // Unconfirmed public location
  email: "000fijakhan123@gmail.com",
  github: "https://github.com/fija-K",
  linkedin: "https://www.linkedin.com/in/fija-khan-69515b3a9/",
  leetcode: null, // Will be provided later
  version: "v2.04-CYBER",
  bioShort: "AI/ML student and software developer focused on machine learning algorithms, computer science foundations, and building practical software.",
  aboutRaw: [
    "I am a B.Tech AI/ML student at GL Bajaj Institute of Technology & Management, Greater Noida (AKTU).",
    "I view technology as a creative medium—if I want something to exist, I can build it. I enjoy engineering solutions that solve real problems for myself and others, making life easier, happier, or more productive.",
    "Engineering appeals to me because it gives me the ability to transform ideas into tangible software. Iron Man is a key inspiration for me in terms of continuously learning, inventing, and building.",
    "My interests span technology, software engineering, and creative fields such as fashion and makeup."
  ],
  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "GL Bajaj Institute of Technology & Management, Greater Noida (AKTU)",
      duration: "2nd Year • Expected Graduation 2029",
      details: "Pursuing undergraduate degree in AI/ML engineering."
    },
    {
      degree: "Schooling / Higher Secondary Education",
      institution: "Army Public School, Bangalore & Army Public School, Agra",
      duration: "Completed",
      details: "Completed secondary and senior secondary schooling."
    }
  ],
  interests: [
    "Machine Learning & Artificial Intelligence",
    "Full-Stack Web Development & Software Engineering",
    "Algorithmic Problem Solving & DSA",
    "Continuous Learning & Creative Building",
    "Fashion, Makeup & Creative Aesthetics"
  ]
};

export const currentlyInfo = {
  status: "ONLINE // BUILDING & LEARNING",
  currentFocus: "Urban Heat AI & Full-Stack Web Architecture",
  learning: "DSA (Dynamic Programming), Web Development, Firebase & WebRTC",
  listening: "Lo-fi Cyber Beats & Ambient Instrumental",
  latestUpdate: "Refactored portfolio project structure and data architecture",
  visitorCount: "008492"
};

export const recentUpdatesData = [
  { date: "2026-08-08", note: "Integrated dual visual theme engine (Cyber Y2K & Pastel Web 1.0)." },
  { date: "2026-08-05", note: "Optimized model evaluation routines for satellite thermal predictions." },
  { date: "2026-08-01", note: "Completed Graph Traversal & BFS/DFS algorithm study modules." }
];

export const musicPlayerInfo = {
  title: "Ambient Cyber Lo-fi Beats",
  artist: "Retro Audio Stream",
  album: "Y2K Workspace Session",
  duration: "03:42",
  status: "PAUSED (Click Play to preview)",
  audioUrl: ""
};

// Project Order: 1. SKULK, 2. LITTLE PAGES, 3. SETU, 4. JUDICIAL BACKLOG TRIAGE (SIH), 5. CDC INTEL PLATFORM, 6. URBAN HEAT AI, 7. DEADLINECLOCK, 8. EXPENSE TRACKER
export const projectsData = [
  {
    id: "skulk",
    order: 1,
    name: "Skulk",
    title: "Skulk",
    category: "Full-Stack Web / Collaboration Engine",
    status: "COMPLETED",
    featured: true,
    prominenceRank: 1,
    shortDescription: "Unified collaborative environment combining learning, study groups, community channels, synchronized media, and AI mentor bots.",
    fullDescription: "Skulk was created from the observation that the people and environment around us strongly influence how we learn and grow. Inspired by group study sessions where separate tools (Google Meet, YouTube, Spotify) had to be juggled, Skulk unifies learning, collaboration, and community into one environment.",
    motivation: "The people around you shape who you become. Group study sessions were fragmented across multiple disconnected apps.",
    problem: "Existing tools like Google Meet, YouTube, and Spotify had to be used separately during collaborative study sessions.",
    solution: "A unified platform where learning, synchronized media, whiteboards, focus timers, and AI study bots exist in one shared workspace.",
    features: [
      "Study groups & communities",
      "Different room types & focus modes",
      "Synchronized YouTube learning",
      "Shared content & Spotify/Vimeo integration",
      "AI Mentor Bots (different personalities & teaching styles)",
      "Study Buddy Bots & Reflection/progress tracking",
      "Pomodoro timers & interactive whiteboards",
      "Screen sharing & video meetings",
      "Post-study social / hangout functionality"
    ],
    techStack: ["React", "JavaScript", "Node.js", "WebRTC", "WebSockets", "CSS3"],
    architecture: null,
    myRole: "Creator & Developer",
    myContribution: null, // Will be supplied later
    team: null,
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [],
    currentProgress: null,
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/skulk",
    liveDemo: "https://skulk.vercel.app/",
    additionalNotes: [],
    thumbnailTag: "PLATFORM_SYSTEM"
  },
  {
    id: "little-pages",
    order: 2,
    name: "Little Pages",
    title: "Little Pages",
    category: "Personal App / Productivity",
    status: "COMPLETED",
    featured: true,
    prominenceRank: 2,
    shortDescription: "A private, encrypted digital journal with mood tracking, goal setting, pet companions, sticker customization, and Firebase cross-device sync.",
    fullDescription: "Little Pages is a deeply personal journaling app built for privacy-first writing. All journal entries and goals are encrypted client-side using AES-GCM (PBKDF2 at 600,000 iterations) before ever touching storage. It features mood tracking, a calendar view, an interactive pet companion that reacts to your writing habits, drag-and-drop sticker layers, multiple aesthetic themes, a streak system, and optional Firebase cloud sync across devices.",
    motivation: "Wanted a journaling app that felt personal, beautiful, and genuinely private — where no server ever sees plaintext entries.",
    problem: "Most journaling apps store data in plaintext on servers, compromising privacy. Existing apps lacked personality and customization.",
    solution: "Client-side AES-GCM encryption, a cozy pet companion UI, aesthetic themes, sticker layers, and optional Firebase sync for cross-device use.",
    features: [
      "AES-GCM client-side encryption with PBKDF2 (600,000 iterations)",
      "Mood tracking & mood-filtered entry views",
      "Calendar view for journal entries",
      "Interactive pet companion (reacts to typing & saving)",
      "Drag-and-drop sticker canvas layer",
      "Multiple aesthetic themes (Strawberry, etc.)",
      "Streak tracking & streak badges",
      "Goals panel (daily, weekly, long-term) — also encrypted",
      "Firebase auth & Firestore cross-device encrypted sync",
      "JSON backup & restore (import/export)",
      "Auto-lock on idle (15 min timeout)",
      "Font picker with 13 handwriting & aesthetic fonts"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Web Crypto API (AES-GCM)", "PBKDF2"],
    architecture: "Client-side encryption vault with optional Firebase Firestore cloud sync. All data encrypted before storage.",
    myRole: "Creator & Developer",
    myContribution: "Designed and built the entire app — encryption vault, pet companion AI, UI system, and Firebase integration.",
    team: null,
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [
      "Implementing atomic PBKDF2 iteration upgrade (250k → 600k) with full rollback on failure",
      "Encrypted metadata migration across schema versions without data loss",
      "Pet companion pathfinding and idle behavior logic"
    ],
    currentProgress: null,
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/little-pages",
    liveDemo: "https://little-pages.vercel.app/",
    additionalNotes: [],
    thumbnailTag: "JOURNAL_APP"
  },
  {
    id: "setu",
    order: 3,
    name: "Setu",
    title: "Setu — Civic Challenge Platform",
    category: "Full-Stack Web / Civic Tech / Hackathon",
    status: "PROTOTYPE",
    featured: true,
    prominenceRank: 3,
    shortDescription: "A civic bridge platform connecting Citizens, Government, Universities, and Industry to crowdsource, fund, and solve real urban infrastructure challenges.",
    fullDescription: "Setu (meaning 'bridge' in Hindi) is a multi-stakeholder civic technology platform built as a hackathon prototype. Citizens can submit civic challenges (waterlogging, unsafe drinking water, road conditions, etc.), government bodies review and approve them, universities pick up challenges as research projects, and industry partners can fund or collaborate. The platform features role-specific dashboards, AI recommendation banners, solution memory, impact assessment, and a project lifecycle timeline.",
    motivation: "India faces thousands of unresolved civic problems. Setu bridges the gap between the people who face problems and those who can solve them.",
    problem: "Civic issues remain unsolved because citizens, government, academia, and industry operate in silos with no unified collaboration layer.",
    solution: "A four-role platform: Citizens report → Government approves → Universities research → Industry funds/collaborates. Full project lifecycle with impact tracking.",
    features: [
      "Four-role system: Citizen, Government, University, Industry",
      "Citizen dashboard: submit & track civic challenges",
      "Government dashboard: review, approve & analytics",
      "University dashboard: pick challenges, manage projects & research collaborations",
      "Industry dashboard: discover opportunities & active collaborations",
      "AI Recommendation Banner for challenge-solution matching",
      "Solution Memory — persistent repository of past solutions",
      "Project Lifecycle Timeline & Impact Assessment",
      "Firebase authentication & multi-language support",
      "Recharts analytics dashboards"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "React Router", "Recharts"],
    architecture: "Multi-role SPA with Firebase auth, context-based state management, and role-gated routing.",
    myRole: "Creator & Developer",
    myContribution: "Built the full platform — all four dashboards, role routing, Firebase auth, and data architecture.",
    team: null,
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [],
    currentProgress: "Hackathon prototype — functional demo",
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/setu",  // confirmed repo
    liveDemo: null,
    additionalNotes: ["Built as a hackathon prototype"],
    thumbnailTag: "CIVIC_PLATFORM"
  },
  {
    id: "judicial-backlog-triage",
    order: 4,
    name: "Judicial Backlog Triage Engine",
    title: "Judicial Backlog Triage Engine",
    category: "AI / Machine Learning / Hackathon (SIH)",
    status: "PROTOTYPE",
    featured: true,
    prominenceRank: 4,
    shortDescription: "Smart India Hackathon (SIH) prototype: AI-assisted decision-support system for judicial case prioritization using a 7-step ML triage pipeline.",
    fullDescription: "Built for Smart India Hackathon (SIH), this is an AI-assisted judicial decision-support system designed to help Indian courts manage their massive case backlogs. The system runs cases through a 7-step triage pipeline — legal rule checks (undertrial custody > 180 days, senior citizens), ageing analysis, stagnation detection, ML delay risk prediction, fast-track/ADR eligibility screening, hybrid priority scoring, and natural language explainability — then outputs a prioritized docket with plain-English AI narratives for judges to review. All recommendations are advisory only; the final decision always stays with the judge.",
    motivation: "Indian courts have over 40 million pending cases. AI-assisted triage can help prioritize the most urgent matters without replacing judicial authority.",
    problem: "Manual case scheduling in overloaded courts leads to undertrial prisoners waiting years, critical cases deprioritized, and no systematic urgency detection.",
    solution: "A 7-step ML triage engine with explainable AI narratives, a judge feedback/override loop, audit trail, and ADR opportunity detection (Lok Adalat, mediation).",
    features: [
      "7-step triage pipeline: Legal Rules → Ageing → Stagnation → Delay Risk → ADR Eligibility → Priority Score → Explainability",
      "Hybrid priority scoring: 30% Legal + 25% Age + 20% Stagnation + 20% Delay Risk + 5% Special Urgency",
      "ML-based delay risk prediction with confidence scores",
      "Fast-track & ADR eligibility detection (Lok Adalat, Court Mediation, Special Bench)",
      "Natural language AI narrative explaining each prioritization decision",
      "Judge review & feedback loop: Accept / Modify / Defer / Override with full audit trail",
      "Executive dashboard with priority donut chart & delay risk bar chart",
      "Case search by CNR ID, litigant name, case type, priority tier",
      "CSV prioritized docket export",
      "150 realistic Indian court cases (Civil, Criminal, NI Act, MACT, Matrimonial, Land Acquisition, Bail)",
      "FastAPI backend + React frontend + SQLite persistence"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "FastAPI", "SQLAlchemy", "SQLite", "Scikit-learn", "Pydantic v2", "Recharts"],
    architecture: "Decoupled React frontend + FastAPI REST backend with 7-step deterministic + ML triage engine, SQLite persistence and audit trail.",
    myRole: "Creator & Developer",
    myContribution: "Designed and implemented the full-stack prototype — triage engine logic, ML pipeline, FastAPI API, React dashboard, and explainability layer.",
    team: "SIH Hackathon Team",
    datasets: ["150 realistic Indian court cases across 7 case types"],
    mlModels: ["Deterministic scoring engine", "Scikit-learn delay risk predictor"],
    mlPipeline: "Case ingestion → Legal rule checks → Ageing/stagnation analysis → ML delay prediction → ADR eligibility → Hybrid scoring → NL explainability",
    technicalChallenges: [
      "Designing a legally sound advisory system (non-decisional AI)",
      "Hybrid scoring balancing legal mandates with ML-estimated risk",
      "Natural language explainability generation for non-technical judges"
    ],
    currentProgress: "Functional hackathon prototype",
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/backlog_triage",
    liveDemo: null,
    additionalNotes: ["Smart India Hackathon (SIH) prototype", "Advisory only — all judicial decisions remain with the judge"],
    thumbnailTag: "AI_LEGAL_SYSTEM"
  },
  {
    id: "cdc-intel-platform",
    order: 5,
    name: "CDC Intel Platform",
    title: "CDC Intelligence Platform",
    category: "Full-Stack Web / EdTech / Hackathon",
    status: "PROTOTYPE",
    featured: false,
    prominenceRank: 5,
    shortDescription: "Career Development Center intelligence platform for colleges — talent pool analytics, skill tracking, group intelligence, mentor management, and student interventions.",
    fullDescription: "CDC Intel Platform is a comprehensive intelligence dashboard for college Career Development Centers. Built as a hackathon prototype, it provides CDC administrators with a unified view of student talent pools, skill intelligence, peer groups, placement opportunities, and targeted interventions. Features include explainable AI skill gap cards, mentor management, student-facing dashboards, and group intelligence analytics powered by Recharts.",
    motivation: "College CDCs manage thousands of students manually. A unified intelligence platform improves placement outcomes through data-driven insights.",
    problem: "CDCs lack real-time visibility into student skills, group dynamics, intervention effectiveness, and mentor utilization.",
    solution: "A role-based platform for CDC admins, mentors, and students with skill analytics, opportunity matching, and intervention tracking.",
    features: [
      "CDC Overview dashboard with key placement metrics",
      "Talent Pool — searchable, filterable student roster",
      "Student profiles with skill badges & explainable AI skill gap cards",
      "Peer Groups with group intelligence analytics",
      "Skills Intelligence — institution-wide skill distribution analytics",
      "Opportunities board — placement & internship listings",
      "Interventions tracker — flag students for targeted support",
      "Mentor Management & Mentor Dashboard",
      "Student-facing dashboard, group view & mentor connect",
      "Recharts analytics throughout"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    architecture: "Single-page React app with context-based state management and multi-role screen routing.",
    myRole: "Creator & Developer",
    myContribution: "Built the full platform — all CDC admin, mentor, and student dashboards, data architecture, and analytics.",
    team: null,
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [],
    currentProgress: "Hackathon prototype — functional demo",
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/prototypecdc",
    liveDemo: null,
    additionalNotes: ["Built as a hackathon prototype"],
    thumbnailTag: "EDTECH_DASHBOARD"
  },
  {
    id: "urban-heat-ai",
    order: 6,
    name: "Urban Heat AI",
    title: "Urban Heat AI",
    category: "AI / Machine Learning",
    status: "IN PROGRESS",
    featured: true,
    prominenceRank: 2,
    shortDescription: "AI/ML project addressing urban heat and urban heat island problems, developed for an ISRO problem statement hackathon.",
    fullDescription: "Developed for an ISRO problem statement hackathon, Urban Heat AI leverages artificial intelligence and machine learning models to analyze and mitigate urban heat island phenomena.",
    motivation: "Addressing localized urban heat island effects using satellite metrics and AI modeling.",
    problem: "Urban heat island effects create thermal stress without real-time predictive granularity.",
    solution: "Applying machine learning models to spatial data streams for thermal analysis and recommendation.",
    features: [
      "AI/ML urban heat island analysis",
      "Satellite spatial data ingestion",
      "Thermal risk mapping & recommendation framework"
    ],
    techStack: ["Python", "AI/ML", "PyTorch", "Scikit-Learn", "GIS Data"],
    architecture: null,
    myRole: "TEAM LEADER",
    myContribution: "Team Leader — primary focus on AI/ML pipeline and model training.",
    team: "Hackathon Team Leader",
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [],
    currentProgress: "In active development sprint",
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/urban-heat-ai",
    liveDemo: null,
    additionalNotes: [],
    thumbnailTag: "AI_ML_SATELLITE"
  },
  {
    id: "deadlineclock",
    order: 7,
    name: "DeadlineClock",
    title: "DeadlineClock",
    category: "Developer Tools / Productivity",
    status: "COMPLETED",
    featured: false,
    prominenceRank: 7,
    shortDescription: "DSA practice and productivity tool designed around structured time pressure and problem-solving workflows.",
    fullDescription: "DeadlineClock is a specialized practice tool built to guide programmers through structured problem-solving stages under timed workflows, featuring cloud sync and customizable stages.",
    motivation: "Structured time management during intense algorithmic problem-solving practice.",
    problem: "Standard timers lack workflow stages tailored for DSA practice (reading, brute-force, optimization).",
    solution: "A step-by-step workflow timer supporting customizable stages, notes, and progress analytics.",
    features: [
      "Structured & difficulty-based problem-solving workflows",
      "Customizable workflow steps (reading, brute-force, optimization)",
      "Optimal solution comparison, analysis & notes",
      "Automatic saving & question history",
      "Firebase authentication & Firestore cloud sync",
      "Picture-in-Picture / mini mode & break reminders"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore", "Browser APIs"],
    architecture: null,
    myRole: "Creator & Developer",
    myContribution: null,
    team: null,
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [],
    currentProgress: null,
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/Deadline-Clock",
    liveDemo: "https://deadline-clock.vercel.app/",
    additionalNotes: [],
    thumbnailTag: "WORKFLOW_TIMER"
  },
  {
    id: "expense-tracker",
    order: 8,
    name: "Expense Tracker",
    title: "Expense Tracker",
    category: "Desktop GUI / Python",
    status: "COMPLETED",
    featured: false,
    prominenceRank: 8,
    shortDescription: "Desktop GUI application for expense management created as a Class 12 Computer Science project.",
    fullDescription: "A desktop-based Expense Tracker application created as a Class 12 Computer Science project. Allows local tracking, editing, and SQLite storage of personal expenses.",
    motivation: "Class 12 Computer Science practical project exploring desktop GUI design and database operations.",
    problem: "Managing personal expenses locally with simple desktop interaction.",
    solution: "Tkinter desktop interface with SQLite local storage and expense summary formatting.",
    features: [
      "Add, view, edit, and delete expense entries",
      "Delete all expense records",
      "Review expense logs",
      "Local data persistence using SQLite",
      "Converts expense details into a readable summary sentence"
    ],
    techStack: ["Python", "Tkinter", "SQLite", "tkcalendar"],
    architecture: null,
    myRole: "Developer (Class 12 CS Project)",
    myContribution: "Built complete Tkinter GUI and SQLite database backend.",
    team: null,
    datasets: [],
    mlModels: [],
    mlPipeline: null,
    technicalChallenges: [],
    currentProgress: null,
    results: null,
    futurePlans: [],
    screenshots: [],
    github: "https://github.com/fija-K/Expense-tracker-python",
    liveDemo: null,
    additionalNotes: [],
    thumbnailTag: "DESKTOP_TKINTER"
  }
];

export const skillsData = [
  {
    category: "PROGRAMMING LANGUAGES",
    items: [
      { name: "Python", level: "CONFIRMED", desc: "Core language for AI/ML, automation, and desktop apps" },
      { name: "Java", level: "CONFIRMED", desc: "Object-oriented programming and software fundamentals" },
      { name: "JavaScript", level: "CONFIRMED", desc: "Frontend web applications, async logic, DOM engineering" },
      { name: "HTML & CSS", level: "CONFIRMED", desc: "Semantic markup, custom styling systems, web layouts" },
      { name: "SQL", level: "CONFIRMED", desc: "Relational database queries, schema management" },
      { name: "C", level: "CONFIRMED", desc: "Low-level concepts and computer science fundamentals" }
    ]
  },
  {
    category: "DEVELOPMENT & AI",
    items: [
      { name: "Full-Stack Web Development", level: "CONFIRMED", desc: "Building frontend and backend web applications" },
      { name: "AI / Machine Learning", level: "CONFIRMED", desc: "AI models, data ingestion, and predictive pipelines" },
      { name: "Web Deployment", level: "CONFIRMED", desc: "Deploying web applications to cloud hosts (Vercel)" },
      { name: "JSON & Data Format", level: "CONFIRMED", desc: "Structured data interchange formats" }
    ]
  },
  {
    category: "IN PROGRESS & LEARNING",
    items: [
      { name: "Firebase & Firestore", level: "LEARNING", desc: "Authentication and cloud database synchronization" },
      { name: "WebRTC", level: "LEARNING", desc: "Real-time peer-to-peer audio/video communication" },
      { name: "Dynamic Programming (DSA)", level: "LEARNING", desc: "Algorithmic optimization techniques and problem-solving" }
    ]
  }
];

export const dsaData = {
  overview: {
    platform: "LeetCode",
    solvedCount: null, // Profile link/stats supplied later
    currentFocusTopic: "Dynamic Programming",
    primaryLanguage: "C++ / Python"
  },
  topics: [
    { name: "Arrays & Hashing", status: "COMPLETED", desc: "Two pointers, sliding window, prefix sums" },
    { name: "Strings", status: "COMPLETED", desc: "Pattern matching, string manipulation, sliding window" },
    { name: "Recursion & Backtracking", status: "COMPLETED", desc: "Subsets, permutations, N-Queens logic" },
    { name: "Linked Lists", status: "COMPLETED", desc: "Fast & slow pointers, reversals, merging" },
    { name: "Stacks & Queues", status: "COMPLETED", desc: "Monotonic stacks, BFS queues, evaluation" },
    { name: "Trees & Binary Search Trees", status: "IN_PROGRESS", desc: "Traversals, LCA, height balanced trees" },
    { name: "Graphs", status: "IN_PROGRESS", desc: "BFS, DFS, Topological Sort, Dijkstra" },
    { name: "Dynamic Programming", status: "IN_PROGRESS", desc: "Current primary focus topic" },
    { name: "Greedy Algorithms", status: "IN_PROGRESS", desc: "Interval scheduling, min cost algorithms" },
    { name: "Bit Manipulation", status: "EXPLORING", desc: "Bitwise operators, masks, single number" }
  ]
};

export const achievementsData = [
  {
    id: "ach-1",
    title: "ISRO Problem Statement Hackathon — Team Leader",
    category: "HACKATHON",
    date: "2024",
    organization: "Urban Heat AI Team",
    description: "Led team building Urban Heat AI model for ISRO problem statement hackathon. Focused on AI/ML pipeline for urban heat island analysis using satellite spatial data.",
    badge: "HACKATHON"
  },
  {
    id: "ach-3",
    title: "Smart India Hackathon (SIH) — Judicial Backlog Triage Engine",
    category: "HACKATHON",
    date: "2025",
    organization: "SIH Hackathon Team",
    description: "Built a full-stack AI-assisted judicial decision-support system for Indian courts — 7-step ML triage pipeline, explainable AI narratives, judge feedback loop, FastAPI backend, React frontend, and SQLite persistence.",
    badge: "HACKATHON"
  },
  {
    id: "ach-4",
    title: "Hackathon Prototype — Setu Civic Platform",
    category: "HACKATHON",
    date: "2025",
    organization: "Hackathon Team",
    description: "Built Setu, a multi-stakeholder civic technology platform connecting Citizens, Government, Universities, and Industry to crowdsource and solve urban infrastructure challenges. Featured Firebase auth, four-role dashboards, AI recommendations, and solution memory.",
    badge: "HACKATHON"
  },
  {
    id: "ach-5",
    title: "Hackathon Prototype — CDC Intelligence Platform",
    category: "HACKATHON",
    date: "2025",
    organization: "Hackathon Team",
    description: "Built CDC Intel Platform, a college Career Development Center intelligence dashboard with talent pool analytics, skill intelligence, peer group analysis, mentor management, and student interventions.",
    badge: "HACKATHON"
  },
  {
    id: "ach-2",
    title: "Class 12 Practical Computer Science Project",
    category: "ACADEMIC",
    date: "Class 12",
    organization: "School Academic Project",
    description: "Developed desktop Expense Tracker GUI application using Python, Tkinter, and SQLite.",
    badge: "PROJECT"
  }
];

export const resumeData = {
  lastUpdated: "Pending Upload",
  fileName: "FIJA_KHAN_RESUME.pdf",
  downloadUrl: "#",
  status: "PLACEHOLDER STATE — Pending official PDF attachment",
  highlights: [
    "B.Tech AI/ML student at GL Bajaj Institute of Technology & Management (2nd Year)",
    "Creator of Skulk, Little Pages, Setu, Judicial Backlog Triage Engine (SIH), CDC Intel Platform & Urban Heat AI (Team Leader)",
    "Strong foundation in Python, Java, C, JavaScript, TypeScript, SQL, and Web Engineering",
    "Active learner focusing on Data Structures & Dynamic Programming",
    "Multiple hackathon prototypes: ISRO, SIH, and civic tech challenges"
  ]
};
