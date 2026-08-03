import { Certification, EducationEntry, SkillCategory } from "@/types";

export const bio = `Software Engineering undergraduate at Universiti Malaysia Sabah (CGPA: 3.54) with hands-on
industry experience through a 6-month software development internship at Phi Software Sdn. Bhd.,
contributing to 160+ development tasks across eight internal and client web applications — including
feature enhancements, API integrations, offline-first functionality, and dashboard development.
Proficient in JavaScript, Vue.js, Next.js, PHP, SQL, Git, and Docker. Expected to complete industrial
training on 28 August 2026 and graduate in November 2026. Open to relocation within Malaysia and
seeking a Software Developer role to contribute to scalable software solutions while continuing to
grow as a software engineer.`;

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
  { category: "Backend", skills: ["Node.js", "REST APIs", "Authentication", "API Integration"] },
  { category: "Database", skills: ["MySQL", "PostgreSQL", "SQLite", "IndexedDB"] },
  { category: "Tools", skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "Power BI"] },
];

export const certifications: Certification[] = [
  { name: "HCIA-AI V3.5 Course", issuer: "Huawei ICT Academy", date: "July 2024" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "September 2023" },
];
