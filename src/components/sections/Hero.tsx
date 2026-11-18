"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200/40 dark:bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent-200/40 dark:bg-accent-500/10 blur-3xl" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl font-bold tracking-tight text-primary-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 text-lg font-medium text-primary-700 dark:text-primary-300 sm:text-xl"
          >
            {siteConfig.title}
          </motion.h2>

          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-primary-900/10 transition-colors hover:bg-primary-700 sm:text-base"
            >
              View My Work
              <FiArrowDown className="h-4 w-4" />
            </Link>
            <a
              href="/resume/julia-natasha-jemuin-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary-300 dark:border-primary-700 px-6 py-3 text-sm font-medium text-primary-700 dark:text-primary-200 transition-colors hover:bg-primary-50 dark:hover:bg-white/5 sm:text-base"
            >
              <FiDownload className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 dark:bg-white/5 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-white/10 transition-colors"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 dark:bg-white/5 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-white/10 transition-colors"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex justify-center"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 blur-2xl opacity-30" />
            <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white dark:ring-primary-900 shadow-xl">
              {/* TODO: replace with your own photo at /public/images/profile.jpg */}
              <Image
                src="/images/pfp.jpeg"
                alt={siteConfig.name}
                fill
                preload
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
