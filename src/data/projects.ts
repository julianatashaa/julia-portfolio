import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    title: "Ship Parts Tracking System @ LSE",
    description:
      "A tracking system built on Smartsheet to monitor ship parts across shipyard projects at Labuan Shipyard & Engineering. Currently in development.",
    image: "/images/projects/lse-parts-tracking.svg",
    techStack: ["Smartsheet"],
    status: "In Progress",
    note: "Internal company system — not publicly available.",
  },
  {
    title: "Project Cost Estimator @ LSE",
    description:
      "A Laravel web application to support project cost planning at Labuan Shipyard & Engineering. Currently in development.",
    image: "/images/projects/lse-cost-estimator.svg",
    techStack: ["Laravel", "PHP"],
    status: "In Progress",
    note: "Internal company system — not publicly available.",
  },
  {
    title: "FlexiEarn: Part-Time Job Finder for Tertiary Students",
    description:
      "Final year capstone project — a full-stack platform connecting students with part-time employers. Delivered 8 core modules (auth, RBAC, job posting, application tracking, profile management) across 3 user roles, backed by a normalized MySQL schema with 10+ tables.",
    image: "/images/projects/flexiearn.svg",
    techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    featured: true,
  },
  {
    title: "Employee Leave Management System",
    description:
      "An offline-first Android application for employee leave applications and approvals, with role-based access control, request workflows, approval tracking, and SQLite-based local storage for low-connectivity HR operations.",
    image: "/images/projects/leave-management.svg",
    techStack: ["Kotlin", "Android Studio", "SQLite"],
  },
  {
    title: "Kokol Mamahill: Campsite Management",
    description:
      "A web-based reservation and booking system automating campsite booking validation, user management, and database operations for site operators, with responsive interfaces spanning the full booking workflow.",
    image: "/images/projects/kokol-mamahill.svg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    sourceUrl: "https://github.com/julianatashaa/Kokol-Mamahill-Campsite-Management",
  },
  {
    title: "Client Projects @ Phi Software",
    description:
      "A selection of production features built during my internship: offline-first PWA support for Torrfire Addons, real-time dashboard widgets for EasySolar, and multilingual pages for Sabah Law Society. Codebases are client-owned and not publicly available.",
    image: "/images/projects/phi-software-work.svg",
    techStack: ["Next.js", "Vue.js", "IndexedDB", "REST APIs", "Flutter"],
  },
];
