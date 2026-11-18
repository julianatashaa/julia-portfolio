import { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Julia Natasha Jemuin",
  title: "Software Engineering Graduate (Nov 2026) | Software Developer",
  tagline:
    "Graduating Software Engineering student with industry experience in software development and IT support. Open to full-time Software Developer / Software Engineer roles.",
  email: "julianatashajemuin@gmail.com",
  phone: "012-823 9337",
  location: "Sabah, Malaysia",
  github: "https://github.com/julianatashaa",
  linkedin: "https://www.linkedin.com/in/julia-natasha-binti-jemuin/",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "email" },
];
