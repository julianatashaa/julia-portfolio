"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/data/site";
import { emailjsConfig } from "@/lib/emailjs";
import { ContactFormData } from "@/types";
import { cn } from "@/lib/utils";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: siteConfig.email,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary-50/40 dark:bg-white/[0.02]">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Work Together"
            description="Have an opportunity or just want to say hi? My inbox is always open."
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  <FiMail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-medium text-primary-950 dark:text-white">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                className="flex items-center gap-4 rounded-xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  <FiPhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="font-medium text-primary-950 dark:text-white">{siteConfig.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-300">
                  <FiMapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-medium text-primary-950 dark:text-white">{siteConfig.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
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
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Please enter your name" })}
                    className={cn(
                      "w-full rounded-lg border bg-white dark:bg-white/[0.03] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500",
                      errors.name
                        ? "border-red-400"
                        : "border-primary-200 dark:border-white/10"
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    className={cn(
                      "w-full rounded-lg border bg-white dark:bg-white/[0.03] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500",
                      errors.email
                        ? "border-red-400"
                        : "border-primary-200 dark:border-white/10"
                    )}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Please enter a subject" })}
                  className={cn(
                    "w-full rounded-lg border bg-white dark:bg-white/[0.03] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500",
                    errors.subject
                      ? "border-red-400"
                      : "border-primary-200 dark:border-white/10"
                  )}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Please enter a message",
                    minLength: { value: 10, message: "Message should be at least 10 characters" },
                  })}
                  className={cn(
                    "w-full resize-none rounded-lg border bg-white dark:bg-white/[0.03] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500",
                    errors.message
                      ? "border-red-400"
                      : "border-primary-200 dark:border-white/10"
                  )}
                  placeholder="Tell me about the opportunity or project..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <FiSend className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-500">
                  Something went wrong. Please email me directly at {siteConfig.email}.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
