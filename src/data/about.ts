import { Certification, EducationEntry, SkillCategory } from "@/types";

export const bio = `Graduating Software Engineering student at Universiti Malaysia Sabah (CGPA: 3.54, graduating
November 2026) with industry experience in software development and IT support. I completed a
6-month software development internship at Phi Software Sdn. Bhd., contributing to 160+ development
tasks across eight internal and client web applications — including feature enhancements, API
integrations, offline-first functionality, and dashboard development. I'm currently an IT Protégé at
Labuan Shipyard & Engineering, building internal systems with Laravel and Smartsheet alongside
day-to-day IT support. Proficient in JavaScript, Vue.js, Next.js, PHP, Laravel, SQL, Git, and Docker.
Open to relocation within Malaysia and to full-time Software Developer / Software Engineer roles.`;

export const education: EducationEntry[] = [
  {
    institution: "Universiti Malaysia Sabah (UMS)",
    qualification: "Bachelor of Computer Science with (Hons.) — Software Engineering",
    detail: "CGPA: 3.54 · Dean's List Award (Semesters 4, 5, 7)",
    period: "March 2022 – November 2026 (Expected)",
  },
  {
    institution: "Labuan Matriculation College",
    qualification: "Physical Science",
    detail: "CGPA: 3.50",
    period: "July 2021 – July 2022",
  },
];

export const skillCategories: SkillCategory[] = [
  { category: "Languages", skills: ["JavaScript", "PHP", "Python", "Kotlin", "C++", "SQL"] },
  { category: "Frontend", skills: ["HTML5", "CSS3", "Vue.js", "Quasar Framework", "Next.js", "Bootstrap"] },
  { category: "Backend", skills: ["Laravel", "Node.js", "REST APIs", "Authentication", "API Integration"] },
  { category: "Database", skills: ["MySQL", "PostgreSQL", "SQLite", "IndexedDB"] },
  { category: "Tools", skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "Power BI"] },
  { category: "Business Platforms", skills: ["Oracle Fusion Applications (OFA)", "Smartsheet"] },
];

export const certifications: Certification[] = [
  { name: "HCIA-AI V3.5 Course", issuer: "Huawei ICT Academy", date: "July 2024" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "September 2023" },
];
