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

// Exact Project Order: 1. SKULK, 2. URBAN HEAT AI, 3. DEADLINECLOCK, 4. EXPENSE TRACKER
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
    id: "urban-heat-ai",
    order: 2,
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
    order: 3,
    name: "DeadlineClock",
    title: "DeadlineClock",
    category: "Developer Tools / Productivity",
    status: "COMPLETED",
    featured: false,
    prominenceRank: 3,
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
    order: 4,
    name: "Expense Tracker",
    title: "Expense Tracker",
    category: "Desktop GUI / Python",
    status: "COMPLETED",
    featured: false,
    prominenceRank: 4,
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
    title: "ISRO Problem Statement Hackathon Participant & Team Leader",
    category: "HACKATHON",
    date: "2024",
    organization: "Urban Heat AI Team",
    description: "Led team building Urban Heat AI model for ISRO problem statement hackathon.",
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
    "Creator of Skulk (Unified Collaborative Study Platform) & Urban Heat AI (Team Leader)",
    "Strong foundation in Python, Java, C, JavaScript, SQL, and Web Engineering",
    "Active learner focusing on Data Structures & Dynamic Programming"
  ]
};
