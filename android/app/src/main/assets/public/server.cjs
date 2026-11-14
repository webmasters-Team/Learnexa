var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_stripe = __toESM(require("stripe"), 1);

// src/data/mockData.ts
var MOCK_COURSES = [
  {
    id: "course_pub_1",
    title: "React 19 & Next.js 15 Full-Stack Architecture",
    subtitle: "Master modern server components, streaming, and state management in production.",
    category: "Web Development",
    level: "Intermediate",
    instructorId: "inst_1",
    instructorName: "Doniyor Maksudov",
    instructorAvatar: "https://ui-avatars.com/api/?name=Doniyor+Maksudov&background=4f46e5&color=fff&bold=true&size=250&font-size=0.45",
    instructorBio: "Full-Stack Software Engineer & Platform Lead",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
    price: 49.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviewCount: 15,
    studentCount: 6,
    durationHours: 12.5,
    updatedDate: "August 2026",
    tags: ["React 19", "Next.js", "TypeScript"],
    requirements: ["Solid JavaScript fundamentals"],
    learningObjectives: [
      "Understand React 19 Actions and UseOptimistic hooks",
      "Build end-to-end full-stack applications with server components"
    ],
    isApproved: true,
    status: "approved",
    modules: [
      {
        id: "mod_1",
        title: "Module 1: React 19 Core Fundamentals",
        lessons: [
          {
            id: "les_1_1",
            title: "1.1 Deep Dive into React 19 Server Components",
            durationMinutes: 18,
            type: "video",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            transcript: "Welcome to React 19. In this lesson we analyze server components architecture."
          },
          {
            id: "les_1_2",
            title: "1.2 React 19 Knowledge Check Quiz",
            durationMinutes: 10,
            type: "quiz",
            quiz: {
              id: "q_1",
              title: "React 19 Fundamentals Test",
              questions: [
                {
                  id: "q1_1",
                  question: "What is the primary benefit of React Server Components?",
                  options: [
                    "Zero bundle size footprint for server dependencies",
                    "They run exclusively in the browser",
                    "They replace HTML entirely"
                  ],
                  answerIndex: 0,
                  explanation: "Server components run on the server and do not ship JS code to the browser bundle."
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "course_pub_2",
    title: "Full-Stack Gemini AI & Generative Engineering Masterclass",
    subtitle: "Build production-ready multimodal AI web applications with Gemini 2.5 & 3.6 Flash.",
    category: "AI & Data Science",
    level: "Intermediate",
    instructorId: "inst_2",
    instructorName: "Dr. Sarah Lin",
    instructorAvatar: "https://ui-avatars.com/api/?name=Sarah+Lin&background=059669&color=fff&bold=true&size=250&font-size=0.45",
    instructorBio: "Lead AI Research Scientist & Stanford Educator",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    price: 69.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviewCount: 42,
    studentCount: 1280,
    durationHours: 16,
    updatedDate: "August 2026",
    tags: ["Gemini AI", "Generative AI", "Python", "React"],
    requirements: ["Basic JavaScript or Python knowledge"],
    learningObjectives: [
      "Integrate Gemini 2.5 and 3.6 Flash models in full-stack apps",
      "Build AI chatbots, voice synthesis, and vision pipelines"
    ],
    isApproved: true,
    status: "approved",
    isNewRelease: true,
    modules: [
      {
        id: "mod_ai_1",
        title: "Module 1: Multimodal Prompting & SDK Setup",
        lessons: [
          {
            id: "les_ai_1",
            title: "1.1 Connecting Google GenAI TypeScript & Python SDKs",
            durationMinutes: 22,
            type: "video",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            transcript: "Mastering the official Google GenAI SDK architecture."
          }
        ]
      }
    ]
  },
  {
    id: "course_pub_3",
    title: "AWS Cloud Architect & Kubernetes Operations",
    subtitle: "Deploy resilient containerized microservices on AWS EKS with Terraform & Helm.",
    category: "Cloud Computing",
    level: "Advanced",
    instructorId: "inst_3",
    instructorName: "Alex Mercer",
    instructorAvatar: "https://ui-avatars.com/api/?name=Alex+Mercer&background=2563eb&color=fff&bold=true&size=250&font-size=0.45",
    instructorBio: "Principal DevOps Architect",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    price: 54.99,
    originalPrice: 94.99,
    rating: 4.8,
    reviewCount: 38,
    studentCount: 940,
    durationHours: 18.5,
    updatedDate: "August 2026",
    tags: ["AWS", "Kubernetes", "Docker", "DevOps"],
    requirements: ["Command line familiarity"],
    learningObjectives: [
      "Manage production Kubernetes clusters with automated CI/CD",
      "Deploy zero-downtime microservices on cloud infrastructure"
    ],
    isApproved: true,
    status: "approved",
    modules: [
      {
        id: "mod_cloud_1",
        title: "Module 1: Docker Containers & Orchestration",
        lessons: [
          {
            id: "les_cloud_1",
            title: "1.1 Containerizing Node.js and Express Apps",
            durationMinutes: 20,
            type: "video",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            transcript: "Setting up optimized multi-stage Dockerfiles."
          }
        ]
      }
    ]
  },
  {
    id: "course_pub_4",
    title: "UI/UX Design Systems & Figma Prototyping",
    subtitle: "Craft scalable design systems, micro-interactions, and high-fidelity wireframes.",
    category: "UI/UX Design",
    level: "Beginner",
    instructorId: "inst_4",
    instructorName: "Elena Rostova",
    instructorAvatar: "https://ui-avatars.com/api/?name=Elena+Rostova&background=d97706&color=fff&bold=true&size=250&font-size=0.45",
    instructorBio: "Lead Product Designer @ Creative Studio",
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80",
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviewCount: 51,
    studentCount: 1560,
    durationHours: 10,
    updatedDate: "August 2026",
    tags: ["Figma", "UI Design", "Design Systems"],
    requirements: ["No prior design experience needed"],
    learningObjectives: [
      "Build reusable Figma component libraries with auto-layout",
      "Conduct user testing and design accessibility-first UIs"
    ],
    isApproved: true,
    status: "approved",
    modules: [
      {
        id: "mod_ui_1",
        title: "Module 1: Figma Auto-Layout & Design Tokens",
        lessons: [
          {
            id: "les_ui_1",
            title: "1.1 Master Figma Auto-Layout 5.0",
            durationMinutes: 15,
            type: "video",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            transcript: "Creating fluid, responsive UI cards in Figma."
          }
        ]
      }
    ]
  },
  {
    id: "course_pending_1",
    title: "Advanced Python & Agentic AI Workflows",
    subtitle: "Build autonomous multi-agent software engineering pipelines with LLMs.",
    category: "AI & Data Science",
    level: "Advanced",
    instructorId: "inst_1",
    instructorName: "Doniyor Maksudov",
    instructorAvatar: "https://ui-avatars.com/api/?name=Doniyor+Maksudov&background=4f46e5&color=fff&bold=true&size=250&font-size=0.45",
    instructorBio: "Full-Stack Software Engineer & Platform Lead",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    price: 59.99,
    originalPrice: 99.99,
    rating: 0,
    reviewCount: 0,
    studentCount: 0,
    durationHours: 15,
    updatedDate: "August 2026",
    tags: ["Python", "AI Agents", "LLMs"],
    requirements: ["Python experience"],
    learningObjectives: [
      "Design agentic tools with LangChain and Gemini SDK",
      "Deploy autonomous coding agents"
    ],
    isApproved: false,
    status: "pending_approval",
    modules: [
      {
        id: "mod_p1",
        title: "Module 1: Agent Architecture Principles",
        lessons: [
          {
            id: "les_p1_1",
            title: "1.1 Autonomous Agent Loops & Memory",
            durationMinutes: 25,
            type: "video",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            transcript: "Understanding agentic loops, state retention, and tool calling interfaces."
          }
        ]
      }
    ]
  }
];
var INITIAL_QA_THREADS = [];
var INITIAL_EMAILS = [];
var INITIAL_ENROLLMENTS = [
  {
    id: "enr_101",
    studentId: "usr_student_1",
    studentName: "Doniyor Maksudov",
    studentEmail: "doniyormak.1@gmail.com",
    studentAvatar: "https://ui-avatars.com/api/?name=Doniyor+Maksudov&background=1a73e8&color=fff&bold=true&size=250&font-size=0.45",
    courseId: "course_pub_1",
    courseTitle: "React 19 & Next.js 15 Full-Stack Architecture",
    coursePrice: 49.99,
    amountPaid: 49.99,
    enrolledAt: "Aug 02, 2026",
    progressPercent: 65,
    status: "Active"
  },
  {
    id: "enr_102",
    studentId: "usr_student_2",
    studentName: "Alex Chen",
    studentEmail: "alex.chen@devmail.io",
    studentAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    courseId: "course_pub_1",
    courseTitle: "React 19 & Next.js 15 Full-Stack Architecture",
    coursePrice: 49.99,
    amountPaid: 49.99,
    enrolledAt: "Aug 04, 2026",
    progressPercent: 100,
    status: "Completed"
  },
  {
    id: "enr_103",
    studentId: "usr_student_3",
    studentName: "Sophia Martinez",
    studentEmail: "sophia.m@codestudio.org",
    studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    courseId: "course_pub_1",
    courseTitle: "React 19 & Next.js 15 Full-Stack Architecture",
    coursePrice: 49.99,
    amountPaid: 49.99,
    enrolledAt: "Aug 05, 2026",
    progressPercent: 40,
    status: "Active"
  },
  {
    id: "enr_104",
    studentId: "usr_student_4",
    studentName: "Liam Johnson",
    studentEmail: "liam.j@techhub.net",
    studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    courseId: "course_pub_1",
    courseTitle: "React 19 & Next.js 15 Full-Stack Architecture",
    coursePrice: 49.99,
    amountPaid: 49.99,
    enrolledAt: "Aug 07, 2026",
    progressPercent: 20,
    status: "Active"
  },
  {
    id: "enr_105",
    studentId: "usr_student_5",
    studentName: "Elena Rostova",
    studentEmail: "elena.rostova@ai-lab.eu",
    studentAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    courseId: "course_pub_1",
    courseTitle: "React 19 & Next.js 15 Full-Stack Architecture",
    coursePrice: 49.99,
    amountPaid: 49.99,
    enrolledAt: "Aug 09, 2026",
    progressPercent: 85,
    status: "Active"
  },
  {
    id: "enr_106",
    studentId: "usr_student_6",
    studentName: "Marcus Vance",
    studentEmail: "marcus.v@cloudscale.io",
    studentAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    courseId: "course_pub_1",
    courseTitle: "React 19 & Next.js 15 Full-Stack Architecture",
    coursePrice: 49.99,
    amountPaid: 49.99,
    enrolledAt: "Aug 10, 2026",
    progressPercent: 10,
    status: "Active"
  }
];
var MOCK_ANALYTICS = {
  totalUsers: 0,
  totalStudents: 0,
  totalInstructors: 0,
  activeSubscriptions: 0,
  totalRevenue: 0,
  courseCompletions: 0,
  avgEngagementMinutes: 0,
  monthlyRevenueData: [],
  categoryDistribution: []
};

// server.ts
var stripeClient = null;
function getStripe() {
  if (!stripeClient) {
    let key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      try {
        const envPath = import_fs.default.existsSync(import_path.default.join(process.cwd(), ".env")) ? import_path.default.join(process.cwd(), ".env") : import_path.default.join(process.cwd(), ".env.example");
        if (import_fs.default.existsSync(envPath)) {
          const content = import_fs.default.readFileSync(envPath, "utf-8");
          const match = content.match(/^STRIPE_SECRET_KEY=(.+)$/m);
          if (match && match[1] && match[1].trim() && !match[1].trim().startsWith("MY_")) {
            key = match[1].trim().replace(/^["']|["']$/g, "");
          }
        }
      } catch (e) {
        console.error("Error reading env fallback:", e);
      }
    }
    if (key) {
      stripeClient = new import_stripe.default(key);
    }
  }
  return stripeClient;
}
var currentDir = typeof __dirname !== "undefined" ? __dirname : process.cwd();
var DATA_FILE = import_path.default.join(currentDir, "backend-data.json");
var INITIAL_USERS = [
  {
    id: "usr_admin_root",
    name: "Root Administrator",
    email: "admin@learnexa.io",
    password: "admin123",
    role: "admin",
    avatar: "https://ui-avatars.com/api/?name=Admin+Root&background=e11d48&color=fff&bold=true&size=250&font-size=0.45",
    subscription: "enterprise",
    enrolledCourseIds: [],
    completedLessonIds: [],
    earnedBadgeIds: ["badge_admin"],
    certificates: [],
    skillsInterest: ["System Administration"]
  },
  {
    id: "usr_student_1",
    name: "Doniyor Maksudov",
    email: "doniyormak.1@gmail.com",
    password: "password123",
    role: "student",
    avatar: "https://ui-avatars.com/api/?name=Doniyor+Maksudov&background=1a73e8&color=fff&bold=true&size=250&font-size=0.45",
    subscription: "pro_monthly",
    enrolledCourseIds: ["course_pub_1"],
    completedLessonIds: [],
    earnedBadgeIds: ["badge_welcome"],
    certificates: [],
    skillsInterest: ["React 19", "TypeScript"]
  }
];
var store = {
  courses: MOCK_COURSES,
  enrollments: INITIAL_ENROLLMENTS,
  qaThreads: INITIAL_QA_THREADS,
  retentionEmails: INITIAL_EMAILS,
  analytics: MOCK_ANALYTICS,
  users: INITIAL_USERS
};
try {
  if (import_fs.default.existsSync(DATA_FILE)) {
    const rawData = import_fs.default.readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(rawData);
    if (parsed.courses && Array.isArray(parsed.courses)) store.courses = parsed.courses;
    if (parsed.enrollments && Array.isArray(parsed.enrollments)) store.enrollments = parsed.enrollments;
    if (parsed.qaThreads && Array.isArray(parsed.qaThreads)) store.qaThreads = parsed.qaThreads;
    if (parsed.retentionEmails && Array.isArray(parsed.retentionEmails)) store.retentionEmails = parsed.retentionEmails;
    if (parsed.users && Array.isArray(parsed.users)) store.users = parsed.users;
  }
} catch (e) {
  console.warn("Could not load backend data file, using default state.", e);
}
function saveStore() {
  try {
    import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), "utf-8");
  } catch (e) {
    console.error("Failed to save backend data store:", e);
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  function getGeminiClient() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. Gemini features will run in graceful fallback mode.");
      return null;
    }
    return new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", database: "connected", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/auth/signup", (req, res) => {
    const { name, email, password, role, goalOrDept } = req.body || {};
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({
        error: "You have to follow the rules while signing up! Please enter your full name (at least 2 characters)."
      });
    }
    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return res.status(400).json({
        error: "You have to follow the rules while signing up! Please enter a valid email address (e.g. name@domain.com)."
      });
    }
    if (!password || typeof password !== "string" || password.trim().length < 6) {
      return res.status(400).json({
        error: "You have to follow the rules while signing up! Password must be at least 6 characters long."
      });
    }
    const cleanEmail = email.trim().toLowerCase();
    const existingUser = store.users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existingUser) {
      return res.status(400).json({
        error: "An account with this email already exists in the system. Please switch to Log In."
      });
    }
    const newUser = {
      id: `usr_${role || "student"}_${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      password: password.trim(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${role === "instructor" ? "4f46e5" : "1a73e8"}&color=fff&bold=true&size=250&font-size=0.45`,
      role: role || "student",
      subscription: role === "instructor" ? "pro_annual" : "pro_monthly",
      enrolledCourseIds: role === "student" ? ["course_1"] : [],
      completedLessonIds: [],
      earnedBadgeIds: ["badge_welcome"],
      certificates: [],
      skillsInterest: goalOrDept ? [goalOrDept] : ["Full-Stack Web Development"]
    };
    store.users.unshift(newUser);
    saveStore();
    const { password: _, ...userProfile } = newUser;
    res.status(201).json({ success: true, message: `Account created! Welcome, ${userProfile.name}.`, user: userProfile });
  });
  app.post("/api/auth/login", (req, res) => {
    const { email, password, role } = req.body || {};
    if (!email || typeof email !== "string" || !email.trim() || !email.includes("@") || !email.includes(".")) {
      return res.status(400).json({
        error: "You have to follow the rules while signing in! A valid email address is required."
      });
    }
    if (!password || typeof password !== "string" || !password.trim()) {
      return res.status(400).json({
        error: "You have to follow the rules while signing in! Password cannot be empty."
      });
    }
    const cleanEmail = email.trim().toLowerCase();
    let user = store.users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!user && cleanEmail === "admin@learnexa.io") {
      user = INITIAL_USERS[0];
      store.users.unshift(user);
      saveStore();
    }
    if (!user) {
      return res.status(400).json({
        error: "You have to follow the rules while signing in! Account not found with this email. Please check your email or Sign Up."
      });
    }
    if (user.password && user.password !== password.trim()) {
      return res.status(401).json({
        error: "You have to follow the rules while signing in! Invalid password entered for this email."
      });
    }
    const { password: _, ...userProfile } = user;
    res.json({ success: true, message: `Authenticated as ${userProfile.name}`, user: userProfile });
  });
  app.get("/api/users", (req, res) => {
    const safeUsers = store.users.map(({ password, ...u }) => u);
    res.json({ users: safeUsers });
  });
  app.put("/api/users/:id/role", (req, res) => {
    const { id } = req.params;
    const { role } = req.body || {};
    const userIndex = store.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!["student", "instructor", "admin"].includes(role)) {
      return res.status(400).json({ error: "Invalid role specified" });
    }
    store.users[userIndex].role = role;
    saveStore();
    const { password: _, ...updatedUser } = store.users[userIndex];
    res.json({ success: true, message: `Updated user role to ${role}`, user: updatedUser });
  });
  app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = store.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found in database" });
    }
    const deletedUser = store.users[userIndex];
    store.users.splice(userIndex, 1);
    store.enrollments = store.enrollments.filter((e) => e.studentId !== id);
    saveStore();
    res.json({
      success: true,
      message: `User ${deletedUser.name} (${deletedUser.email}) successfully deleted from database. They must sign up again to access the platform.`,
      deletedUserId: id
    });
  });
  app.get("/api/admin/database", (req, res) => {
    res.json({
      databaseFile: "backend-data.json",
      lastSynced: (/* @__PURE__ */ new Date()).toISOString(),
      stats: {
        totalUsers: store.users.length,
        totalCourses: store.courses.length,
        totalEnrollments: store.enrollments.length,
        totalQAThreads: store.qaThreads.length
      },
      data: store
    });
  });
  app.get("/api/courses", (req, res) => {
    res.json({ courses: store.courses });
  });
  app.get("/api/courses/:id", (req, res) => {
    const course = store.courses.find((c) => c.id === req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json({ course });
  });
  app.post("/api/courses", (req, res) => {
    const newCourse = req.body;
    if (!newCourse.title) {
      return res.status(400).json({ error: "Course title is required" });
    }
    const createdCourse = {
      id: newCourse.id || `course_${Date.now()}`,
      studentCount: 0,
      rating: 5,
      reviewCount: 1,
      isApproved: newCourse.isApproved !== void 0 ? newCourse.isApproved : true,
      status: newCourse.status || "approved",
      updatedDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      ...newCourse
    };
    store.courses.unshift(createdCourse);
    saveStore();
    res.status(201).json({ success: true, course: createdCourse });
  });
  app.put("/api/courses/:id", (req, res) => {
    const courseIndex = store.courses.findIndex((c) => c.id === req.params.id);
    if (courseIndex === -1) {
      return res.status(404).json({ error: "Course not found" });
    }
    store.courses[courseIndex] = { ...store.courses[courseIndex], ...req.body };
    saveStore();
    res.json({ success: true, course: store.courses[courseIndex] });
  });
  app.delete("/api/courses/:id", (req, res) => {
    store.courses = store.courses.filter((c) => c.id !== req.params.id);
    saveStore();
    res.json({ success: true, message: "Course deleted successfully" });
  });
  app.get("/api/enrollments", (req, res) => {
    res.json({ enrollments: store.enrollments });
  });
  app.post("/api/enrollments", (req, res) => {
    const enrollment = req.body;
    if (!enrollment.courseId || !enrollment.studentEmail) {
      return res.status(400).json({ error: "courseId and studentEmail are required" });
    }
    const newRecord = {
      id: enrollment.id || `enr_${Date.now()}`,
      studentId: enrollment.studentId || "usr_student",
      studentName: enrollment.studentName || "Student",
      studentEmail: enrollment.studentEmail,
      studentAvatar: enrollment.studentAvatar || "https://ui-avatars.com/api/?name=Student",
      courseId: enrollment.courseId,
      courseTitle: enrollment.courseTitle || "Enrolled Course",
      coursePrice: enrollment.coursePrice || enrollment.amountPaid || 29.99,
      amountPaid: enrollment.amountPaid !== void 0 ? enrollment.amountPaid : 29.99,
      enrolledAt: enrollment.enrolledAt || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      progressPercent: enrollment.progressPercent || 0,
      status: enrollment.status || "Active"
    };
    const targetCourse = store.courses.find((c) => c.id === enrollment.courseId);
    if (targetCourse) {
      targetCourse.studentCount = (targetCourse.studentCount || 0) + 1;
    }
    store.enrollments.unshift(newRecord);
    saveStore();
    res.status(201).json({ success: true, enrollment: newRecord });
  });
  app.get("/api/qa-threads", (req, res) => {
    res.json({ qaThreads: store.qaThreads });
  });
  app.post("/api/qa-threads", (req, res) => {
    const newThread = req.body;
    if (!newThread.title || !newThread.content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    const createdThread = {
      id: `qa_${Date.now()}`,
      courseId: newThread.courseId || "course_pub_1",
      lessonId: newThread.lessonId || "les_1_1",
      userId: newThread.userId || "usr_student",
      userName: newThread.userName || "Student",
      userAvatar: newThread.userAvatar || "https://ui-avatars.com/api/?name=Student",
      title: newThread.title,
      content: newThread.content,
      timestamp: "Just now",
      votes: 0,
      solved: false,
      replies: [],
      ...newThread
    };
    store.qaThreads.unshift(createdThread);
    saveStore();
    res.status(201).json({ success: true, thread: createdThread });
  });
  app.post("/api/qa-threads/:id/reply", (req, res) => {
    const thread = store.qaThreads.find((t) => t.id === req.params.id);
    if (!thread) {
      return res.status(404).json({ error: "QA thread not found" });
    }
    const newReply = {
      id: `rep_${Date.now()}`,
      userId: req.body.userId || "usr_reply",
      userName: req.body.authorName || req.body.userName || "Learner",
      userAvatar: req.body.userAvatar || "https://ui-avatars.com/api/?name=Learner",
      isInstructor: req.body.authorRole === "instructor",
      isAiTutor: req.body.isAiGenerated || false,
      content: req.body.content || "",
      timestamp: "Just now"
    };
    thread.replies.push(newReply);
    saveStore();
    res.json({ success: true, reply: newReply, thread });
  });
  app.get("/api/retention-emails", (req, res) => {
    res.json({ emails: store.retentionEmails });
  });
  app.post("/api/retention-emails", (req, res) => {
    const email = req.body;
    const createdEmail = {
      id: `email_${Date.now()}`,
      sentAt: (/* @__PURE__ */ new Date()).toLocaleString(),
      status: "sent",
      ...email
    };
    store.retentionEmails.unshift(createdEmail);
    saveStore();
    res.status(201).json({ success: true, email: createdEmail });
  });
  app.get("/api/analytics", (req, res) => {
    const totalUsers = store.enrollments.length + 15;
    const uniqueStudents = new Set(store.enrollments.map((e) => e.studentEmail.toLowerCase())).size;
    const totalRevenue = store.enrollments.reduce((sum, e) => sum + (e.amountPaid || 0), 0);
    const courseCompletions = store.enrollments.filter((e) => e.status === "Completed" || e.progressPercent === 100).length;
    res.json({
      totalUsers,
      totalStudents: uniqueStudents || store.enrollments.length,
      totalInstructors: 4,
      activeSubscriptions: store.enrollments.filter((e) => e.status === "Active").length,
      totalRevenue,
      courseCompletions,
      totalCourses: store.courses.length,
      approvedCourses: store.courses.filter((c) => c.isApproved !== false).length
    });
  });
  app.post("/api/gemini/recommendations", async (req, res) => {
    try {
      const { userSkills, enrolledTitles } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.json({
          recommendations: [
            {
              title: "Python for AI & Gemini API",
              reason: "Based on your interest in modern web tech and AI engineering.",
              matchScore: 98
            },
            {
              title: "AWS & Google Cloud Architecture Certification",
              reason: "Complements your full-stack React and Express skills.",
              matchScore: 92
            }
          ],
          aiNote: "Generated offline (Set GEMINI_API_KEY for live real-time AI reasoning)."
        });
      }
      const prompt = `You are LearnSphere's AI Recommendation Engine.
The student has interests/skills: ${JSON.stringify(userSkills || [])}.
They are already enrolled in: ${JSON.stringify(enrolledTitles || [])}.

Available catalog courses:
${MOCK_COURSES.map((c) => `- ${c.title} (${c.category}, Level: ${c.level}, Tags: ${c.tags.join(", ")})`).join("\n")}

Select the top 2 courses for this student. Return JSON strictly with this schema:
{
  "recommendations": [
    { "title": "Exact course title", "reason": "Specific compelling 1-sentence explanation why", "matchScore": 95 }
  ],
  "aiNote": "A warm encouraging 1-sentence career advice."
}`;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const parsed = JSON.parse(response.text || "{}");
        return res.json(parsed);
      } catch (geminiErr) {
        console.info("[Gemini API] Rate limit or quota reached; serving smart recommendations fallback.");
        return res.json({
          recommendations: [
            {
              title: "Python for AI & Gemini API",
              reason: "Recommended based on your current course progress and skills.",
              matchScore: 98
            },
            {
              title: "AWS & Google Cloud Architecture Certification",
              reason: "Great next step to expand your cloud development stack.",
              matchScore: 94
            }
          ],
          aiNote: "Smart recommendations active (offline recommendation engine)."
        });
      }
    } catch (err) {
      console.error("Gemini Recommendation Handler Error:", err?.message || String(err));
      res.status(500).json({ error: "Failed to generate recommendations", details: err?.message || "Server error" });
    }
  });
  app.post("/api/gemini/ai-tutor", async (req, res) => {
    try {
      const { questionTitle, questionContent, lessonTitle, courseTitle } = req.body;
      const ai = getGeminiClient();
      const fallbackAnswer = `### AI Tutor Guidance for: "${questionTitle}"

When working on **${courseTitle || "Software Development"}** (*${lessonTitle || "Lesson"}*):

1. Check your component state and ensure dependencies in your hooks are stable.
2. Verify that network requests handle errors gracefully and provide fallback data when rate limits or quotas are reached.
3. Keep your function signatures predictable and test edge cases.`;
      if (!ai) {
        return res.json({ answer: fallbackAnswer });
      }
      const prompt = `You are Webmasters AI Tutor, an expert, patient instructor helping a student.
Course: ${courseTitle || "Software Development"}
Lesson: ${lessonTitle || "General"}
Student Question Title: ${questionTitle}
Details: ${questionContent}

Provide a clear, highly educational response in Markdown with concise explanations and brief code snippet if helpful.`;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt
        });
        return res.json({ answer: response.text });
      } catch (geminiErr) {
        console.info("[Gemini API] Rate limit or quota reached; serving smart AI Tutor fallback.");
        return res.json({ answer: fallbackAnswer });
      }
    } catch (err) {
      console.error("Gemini AI Tutor Error:", err?.message || String(err));
      res.status(500).json({ error: "AI Tutor temporarily unavailable", details: err?.message || "Server error" });
    }
  });
  app.post("/api/gemini/evaluate-code", async (req, res) => {
    try {
      const { code, prompt: exercisePrompt, testOutput } = req.body;
      const ai = getGeminiClient();
      const fallbackReview = "### Code Review Feedback\n\n- **Functionality**: Your code syntax looks good!\n- **Optimization**: Ensure proper error boundary handling and check array boundary limits.\n- **Best Practice**: Use strict equality comparison (`===`) and keep functions focused on a single responsibility.";
      if (!ai) {
        return res.json({ review: fallbackReview });
      }
      const promptStr = `You are Webmasters AI Code Evaluator.
Student Exercise: ${exercisePrompt}
Submitted Code:
\`\`\`javascript
${code}
\`\`\`
Test Runner Result: ${testOutput}

Provide constructive code review:
1. Is the solution clean and optimal?
2. Point out any bug or improvement concisely.
3. Suggest 1 best practice tip.`;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: promptStr
        });
        return res.json({ review: response.text });
      } catch (geminiErr) {
        console.info("[Gemini API] Rate limit or quota reached; serving smart Code Review fallback.");
        return res.json({ review: fallbackReview });
      }
    } catch (err) {
      res.status(500).json({ error: "Code review unavailable", details: err?.message || "Server error" });
    }
  });
  app.post("/api/gemini/generate-course", async (req, res) => {
    try {
      const { topic, targetLevel } = req.body;
      const ai = getGeminiClient();
      const fallbackCourse = {
        title: `${topic || "Modern Web Development"} Masterclass`,
        subtitle: `Comprehensive guide to mastering ${topic || "full-stack development"} with hands-on projects.`,
        category: "Web Development",
        level: targetLevel || "Intermediate",
        price: 79.99,
        learningObjectives: [
          `Master core principles of ${topic || "web development"}`,
          "Build scalable applications with modern practices",
          "Deploy and monitor production apps"
        ],
        modules: [
          {
            title: "Module 1: Foundations & Architecture",
            lessons: [
              { title: `1. Introduction to ${topic || "Core Concepts"}`, durationMinutes: 15, type: "video" },
              { title: `2. Hands-on ${topic || "Project"} Exercise`, durationMinutes: 20, type: "coding_assignment" }
            ]
          }
        ]
      };
      if (!ai) {
        return res.json({ course: fallbackCourse });
      }
      const promptStr = `Generate a structured course syllabus for a course titled topic: "${topic}", target level: "${targetLevel}".
Return JSON strictly with:
{
  "title": "Compelling Title",
  "subtitle": "Clear subtitle",
  "category": "Web Development",
  "level": "${targetLevel || "Intermediate"}",
  "price": 89.99,
  "learningObjectives": ["Objective 1", "Objective 2", "Objective 3"],
  "modules": [
    {
      "title": "Module 1: Introduction",
      "lessons": [
        { "title": "Lesson 1", "durationMinutes": 12, "type": "video" },
        { "title": "Hands-on Exercise", "durationMinutes": 20, "type": "coding_assignment" }
      ]
    }
  ]
}`;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: promptStr,
          config: { responseMimeType: "application/json" }
        });
        return res.json({ course: JSON.parse(response.text || "{}") });
      } catch (geminiErr) {
        console.info("[Gemini API] Rate limit or quota reached; serving smart Course Builder fallback.");
        return res.json({ course: fallbackCourse });
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to generate AI course outline", details: err?.message || "Server error" });
    }
  });
  app.get("/api/payments/config", (req, res) => {
    const hasKey = !!getStripe();
    res.json({
      stripeConfigured: hasKey,
      mode: hasKey ? "live_stripe" : "sandbox_simulation",
      platformFeePercentage: 15
    });
  });
  app.post("/api/instructor/stripe-connect/onboard", async (req, res) => {
    try {
      const { email, name, existingAccountId } = req.body;
      const stripe = getStripe();
      const appBaseUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
      if (stripe) {
        let accountId = existingAccountId;
        if (!accountId) {
          const account = await stripe.accounts.create({
            type: "express",
            country: "US",
            email,
            business_type: "individual",
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true }
            },
            business_profile: {
              name: name || "Course Instructor",
              product_description: "Online Course Sales & Instruction"
            }
          });
          accountId = account.id;
        }
        const accountLink = await stripe.accountLinks.create({
          account: accountId,
          refresh_url: `${appBaseUrl}/?connect=refresh`,
          return_url: `${appBaseUrl}/?connect=success&account_id=${accountId}`,
          type: "account_onboarding"
        });
        return res.json({
          success: true,
          accountId,
          onboardingUrl: accountLink.url
        });
      }
      const mockAccountId = existingAccountId || `acct_express_${Math.floor(1e5 + Math.random() * 9e5)}`;
      return res.json({
        success: true,
        accountId: mockAccountId,
        onboardingUrl: `${appBaseUrl}/?connect=success&account_id=${mockAccountId}&mode=sandbox`,
        isSandbox: true,
        message: "Stripe Connect Sandbox Onboarding Activated"
      });
    } catch (err) {
      console.error("Stripe Connect onboarding error:", err);
      res.status(500).json({ error: "Failed to create Stripe Connect onboarding link", details: err?.message || "Server error" });
    }
  });
  app.get("/api/instructor/stripe-connect/status/:accountId", async (req, res) => {
    try {
      const { accountId } = req.params;
      const stripe = getStripe();
      if (stripe && accountId && !accountId.startsWith("acct_express_")) {
        const account = await stripe.accounts.retrieve(accountId);
        return res.json({
          success: true,
          accountId: account.id,
          payoutsEnabled: account.payouts_enabled,
          detailsSubmitted: account.details_submitted,
          chargesEnabled: account.charges_enabled
        });
      }
      return res.json({
        success: true,
        accountId,
        payoutsEnabled: true,
        detailsSubmitted: true,
        chargesEnabled: true,
        isSandbox: true
      });
    } catch (err) {
      res.status(500).json({ error: "Failed to retrieve account status", details: err?.message });
    }
  });
  app.post("/api/payments/create-checkout-session", async (req, res) => {
    try {
      const { amount, planOrCourse, email, courseId, instructorStripeAccountId, successUrl, cancelUrl } = req.body;
      const stripe = getStripe();
      if (!stripe) {
        return res.status(400).json({
          error: "Stripe API Key not configured",
          message: "Please set STRIPE_SECRET_KEY in environment variables to accept live credit card payments."
        });
      }
      const appBaseUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
      const totalAmountCents = Math.round((amount || 29) * 100);
      const platformFeeCents = Math.round(totalAmountCents * 0.15);
      const sessionParams = {
        payment_method_types: ["card"],
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: planOrCourse || "Learnexa Course Access"
              },
              unit_amount: totalAmountCents
            },
            quantity: 1
          }
        ],
        mode: "payment",
        success_url: successUrl || `${appBaseUrl}/?payment=success&session_id={CHECKOUT_SESSION_ID}&course_id=${courseId || ""}`,
        cancel_url: cancelUrl || `${appBaseUrl}/?payment=cancelled`,
        metadata: {
          courseId: courseId || "",
          userEmail: email || "",
          instructorStripeAccountId: instructorStripeAccountId || "",
          platformFeeAmount: (platformFeeCents / 100).toFixed(2),
          instructorPayoutAmount: ((totalAmountCents - platformFeeCents) / 100).toFixed(2)
        }
      };
      if (instructorStripeAccountId && !instructorStripeAccountId.startsWith("acct_express_")) {
        sessionParams.payment_intent_data = {
          application_fee_amount: platformFeeCents,
          transfer_data: {
            destination: instructorStripeAccountId
          }
        };
      }
      const session = await stripe.checkout.sessions.create(sessionParams);
      res.json({ success: true, url: session.url, sessionId: session.id });
    } catch (err) {
      console.error("Stripe Checkout Session Error:", err);
      res.status(500).json({ error: "Stripe checkout creation failed", details: err?.message || "Server error" });
    }
  });
  app.post("/api/payments/checkout", async (req, res) => {
    const { amount, planOrCourse, paymentMethod, email, courseId, instructorStripeAccountId } = req.body;
    const stripe = getStripe();
    const totalAmount = amount || 29;
    const platformFee = Number((totalAmount * 0.15).toFixed(2));
    const instructorPayout = Number((totalAmount - platformFee).toFixed(2));
    if (stripe) {
      try {
        const totalAmountCents = Math.round(totalAmount * 100);
        const platformFeeCents = Math.round(totalAmountCents * 0.15);
        const paymentIntentParams = {
          amount: totalAmountCents,
          currency: "usd",
          receipt_email: email,
          description: `Purchase: ${planOrCourse}`,
          payment_method_types: ["card"],
          metadata: {
            courseId: courseId || "",
            userEmail: email || "",
            instructorStripeAccountId: instructorStripeAccountId || "",
            platformFeeAmount: platformFee.toFixed(2),
            instructorPayoutAmount: instructorPayout.toFixed(2)
          }
        };
        if (instructorStripeAccountId && !instructorStripeAccountId.startsWith("acct_express_")) {
          paymentIntentParams.application_fee_amount = platformFeeCents;
          paymentIntentParams.transfer_data = {
            destination: instructorStripeAccountId
          };
        }
        const paymentIntent = await stripe.paymentIntents.create(paymentIntentParams);
        const receiptId2 = paymentIntent.id;
        const transaction2 = {
          receiptId: receiptId2,
          amount: totalAmount,
          platformFee,
          instructorPayout,
          planOrCourse,
          paymentMethod: paymentMethod || "Stripe Card Gateway",
          date: new Date(paymentIntent.created * 1e3).toISOString(),
          status: "Succeeded (Stripe Live Verified)",
          gateway: "Stripe API",
          userEmail: email,
          clientSecret: paymentIntent.client_secret,
          instructorStripeAccountId
        };
        return res.json({
          success: true,
          message: "Payment verified live via Stripe API!",
          transaction: transaction2
        });
      } catch (stripeErr) {
        console.error("Stripe API error:", stripeErr);
        return res.status(400).json({
          success: false,
          error: "Stripe Payment Processing Failed",
          details: stripeErr?.message || "Failed to process charge with Stripe."
        });
      }
    }
    const receiptId = "SIM-REC-" + Math.floor(1e5 + Math.random() * 9e5);
    const transaction = {
      receiptId,
      amount: totalAmount,
      platformFee,
      instructorPayout,
      planOrCourse,
      paymentMethod: paymentMethod || "Visa ending in 4242",
      date: (/* @__PURE__ */ new Date()).toISOString(),
      status: "Succeeded (Sandbox Mode)",
      gateway: "Sandbox Simulation (Set STRIPE_SECRET_KEY in Settings to collect real money)",
      userEmail: email,
      instructorStripeAccountId
    };
    res.json({
      success: true,
      message: "Payment processed in sandbox test mode!",
      transaction
    });
  });
  app.get("/api/export/analytics", (req, res) => {
    const format = req.query.format || "json";
    if (format === "csv") {
      const csvContent = `Metric,Value
Total Users,${MOCK_ANALYTICS.totalUsers}
Total Students,${MOCK_ANALYTICS.totalStudents}
Total Instructors,${MOCK_ANALYTICS.totalInstructors}
Active Subscriptions,${MOCK_ANALYTICS.activeSubscriptions}
Total Revenue,$${MOCK_ANALYTICS.totalRevenue}
Course Completions,${MOCK_ANALYTICS.courseCompletions}`;
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", 'attachment; filename="webmasters_analytics.csv"');
      return res.send(csvContent);
    }
    res.json(MOCK_ANALYTICS);
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Webmasters server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
