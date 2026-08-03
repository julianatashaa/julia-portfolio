"use client";

import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-primary-100 dark:border-white/10 bg-white dark:bg-primary-950">
      <Container className="py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-primary-900 dark:text-white">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-700 dark:hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks
              .filter((link) => link.icon !== "phone")
              .map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 dark:bg-white/5 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              <FiArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
