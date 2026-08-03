export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  detail: string;
  period: string;
}

export interface ExperienceEntry {
  company: string;
  logo?: string;
  role: string;
  duration: string;
  location?: string;
  technologies?: string[];
  achievements: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface LeadershipEntry {
  role: string;
  organization: string;
  period?: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
