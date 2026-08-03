import { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Julia Natasha Jemuin",
  title: "Software Engineering Graduate | Full-Stack Developer",
  tagline:
    "Final-year Software Engineering student passionate about building reliable, user-focused web and mobile applications — from offline-first PWAs to multilingual government portals.",
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
