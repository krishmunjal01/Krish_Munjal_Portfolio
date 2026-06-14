import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krish Munjal — AI systems that replace manual work" },
      { name: "description", content: "I build AI-powered systems that replace manual work with automation. Real-world SaaS, AI tools, and workflow products." },
      { property: "og:title", content: "Krish Munjal — AI Product Builder" },
      { property: "og:description", content: "AI-powered systems, SaaS products, and automation for real-world workflows." },
    ],
  }),
  component: Index,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const TYPING_WORDS = ["AI-powered systems", "Automation workflows", "SaaS products"];

function TypingRotator() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
      return;
    }
    const delay = deleting ? 40 : 75;
    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex]);

  return (
    <span className="relative inline-flex items-baseline">
      <span className="text-shimmer">{text}</span>
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-primary animate-caret" />
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : ""
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-bold text-primary transition-all group-hover:scale-110 group-hover:border-primary/60">
            KM
          </span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:block">krishmunjal.dev</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#build" className="transition-colors hover:text-foreground">Build</a>
          <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:scale-105 hover:border-primary/60 hover:bg-primary/10"
        >
          Let's talk →
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16"
      >
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Internships & Collaborations
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl md:text-8xl animate-name-glow"
          >
            <motion.span
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-block cursor-default"
            >
              Krish <span className="text-gradient">Munjal</span>
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-balance text-2xl font-semibold leading-tight text-foreground/95 sm:text-3xl md:text-4xl lg:mx-0"
          >
            I build <span className="text-primary"><TypingRotator /></span> that replace manual work with automation.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            Focused on building real-world SaaS products, AI tools, and automation systems used in practical environments.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              href="#work"
              className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:brightness-110"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              href="#contact"
              className="rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
            >
              Let's Build Something
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm lg:justify-start"
          >
            <span className="text-foreground/80">Oracle Certified</span>
            <span className="h-1 w-1 rounded-full bg-primary/70" />
            <span className="text-foreground/80">3 Real-world Products</span>
            <span className="h-1 w-1 rounded-full bg-primary/70" />
            <span className="text-foreground/80">IEEE CIS Core Team</span>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="group relative order-1 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:order-2 lg:max-w-none"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
            style={{ background: "var(--gradient-primary)", opacity: 0.18 }}
          />
          {/* Decorative offset frame */}
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[1.5rem] border border-primary/30"
          />
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-shadow duration-500 group-hover:shadow-[0_30px_90px_-20px_oklch(0.62_0.19_256/0.45)]"
          >
            <img
              src="/krish-converted.jpg"
              alt="Krish Munjal"
              loading="eager"
              className="aspect-[4/5] w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Subtle dark overlay to match theme */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

type Project = {
  tag: string;
  title: string;
  pitch: string;
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  accent: string;
};

const projects: Project[] = [
  {
    tag: "Automation",
    title: "EduAuto",
    pitch: "Full-stack SaaS that delivers personalized student reports at scale.",
    problem: "Manual student result communication wastes hours of repetitive effort.",
    solution: "A full-stack SaaS with role-based access and WhatsApp automation to deliver personalized student reports at scale.",
    impact: [
      "**Reduces manual effort by up to 90%**",
      "Automates delivery via structured data pipelines",
      "Scalable, real-world deployable architecture",
    ],
    tech: ["Python", "Node.js", "React", "Prisma", "WhatsApp API", "OCR"],
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    tag: "AI",
    title: "CertifyAI",
    pitch: "AI that generates, verifies, and classifies certificates at scale.",
    problem: "Certificate fraud and manual verification reduce trust in digital documents.",
    solution: "An AI-powered system to generate, verify, and classify certificates at scale.",
    impact: [
      "**Used in live IEEE events** for certificate automation",
      "Identifies document inconsistencies using ML",
      "Cuts manual verification workload significantly",
    ],
    tech: ["Python", "Machine Learning", "OpenAI API"],
    accent: "from-cyan-500/20 to-blue-500/5",
  },
  {
    tag: "SaaS",
    title: "Dukaan Dost",
    pitch: "WhatsApp chatbot that automates small-business customer workflows.",
    problem: "Small businesses struggle with managing repetitive customer queries.",
    solution: "A WhatsApp-based chatbot to automate customer interaction and business workflows.",
    impact: [
      "**Automates customer responses** for business owners",
      "Improves response efficiency and engagement",
      "Designed for scalable small-business use cases",
    ],
    tech: ["Node.js", "WhatsApp API"],
    accent: "from-sky-500/20 to-blue-500/5",
  },
];

function renderImpact(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={idx} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    ) : (
      <span key={idx}>{part}</span>
    ),
  );
}

function ProjectMockup({ accent, label }: { accent: string; label: string }) {
  return (
    <div className={`relative mb-6 h-32 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
      </div>
      <div className="absolute inset-x-4 bottom-4 space-y-1.5">
        <div className="h-2 w-2/3 rounded-full bg-foreground/30" />
        <div className="h-2 w-1/2 rounded-full bg-foreground/20" />
        <div className="h-2 w-3/4 rounded-full bg-foreground/15" />
      </div>
      <div className="absolute right-3 top-3 rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-7 shadow-[var(--shadow-card)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.19_256/0.55)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <ProjectMockup accent={p.accent} label={`${p.title.toLowerCase()}.app`} />
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            {p.tag}
          </span>
          <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.pitch}</p>

        <div className="mt-5 space-y-3 text-sm">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Problem</div>
            <p className="mt-1 text-muted-foreground">{p.problem}</p>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Solution</div>
            <p className="mt-1 text-muted-foreground">{p.solution}</p>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Impact</div>
            <ul className="mt-2 space-y-1.5">
              {p.impact.map((it) => (
                <li key={it} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{renderImpact(it)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-5 flex flex-wrap gap-1.5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
        >
          {p.tech.map((t) => (
            <motion.span
              key={t}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/30"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-6 flex gap-2.5">
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
          >
            View Project
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 rounded-full border border-border bg-transparent py-2.5 text-center text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
          >
            View Code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Featured Work</div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Products, not just projects.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Three things I've built end-to-end — from problem to deployed system.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </motion.div>
    </section>
  );
}

function WhatIBuild() {
  const items = [
    { title: "AI Automation Systems", desc: "Pipelines that replace repetitive human workflows.", icon: "✦" },
    { title: "SaaS Products", desc: "Full-stack tools shipped for real users.", icon: "◆" },
    { title: "Workflow Optimization", desc: "Internal tools that make teams move faster.", icon: "▲" },
  ];
  return (
    <section id="build" className="relative border-y border-border bg-card/30 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">What I Build</div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Focused on building systems that create real impact.</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-xl transition-all hover:border-primary/40"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
                className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-xl text-primary transition-transform group-hover:scale-110 group-hover:rotate-6"
              >
                {it.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  const groups = [
    { label: "Languages", items: ["Python", "JavaScript", "C / C++"] },
    { label: "Frameworks", items: ["React", "Node.js"] },
    { label: "Tools", items: ["OpenAI API", "Firebase", "Git"] },
  ];
  return (
    <section id="skills" className="relative px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Toolkit</div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Built with sharp tools.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tools I use to design, build, and ship products.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-xl transition-all hover:border-primary/40"
            >
              <div className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">{g.label}</div>
              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              >
                {g.items.map((s) => (
                  <motion.li
                    key={s}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="group/item flex items-center justify-between border-b border-border/60 pb-3 text-foreground transition-colors last:border-0 hover:text-primary"
                  >
                    <span className="font-medium">{s}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-dot-pulse transition-transform group-hover/item:scale-150" />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Achievements() {
  const items = [
    { title: "Oracle Generative AI Professional", detail: "Advanced certification in AI systems" },
    { title: "Oracle AI Foundations", detail: "Foundational AI & ML certification" },
    { title: "OpenAI Buildathon", detail: "State Level Qualifier" },
    { title: "Smart India Hackathon", detail: "Internal Round Selection" },
    { title: "EY Techathon", detail: "Advanced to Round 2" },
    { title: "IEEE CIS Chandigarh University", detail: "Core Team Member building tech initiatives" },
  ];
  return (
    <section className="relative border-t border-border bg-card/30 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Recognition</div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Achievements & experience.</h2>
        </motion.div>
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, x: i % 2 === 0 ? 4 : -4 }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-xl transition-[border-color,background] hover:border-primary/50 hover:bg-card/80"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60 font-mono text-xs text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-medium text-foreground">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return ContactImpl();
}

function OtherWork() {
  const others = [
    {
      tag: "Web",
      title: "Minoti Memorials NGO Website",
      problem: "NGOs often lack a strong online presence to reach wider audiences.",
      solution: "Designed and developed a responsive website to improve accessibility and outreach.",
      impact: [
        "Improved digital presence for the NGO",
        "Enhanced accessibility and user experience",
        "Enabled better communication with supporters",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];
  return (
    <section id="other" className="relative px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeUp} className="mb-10 max-w-2xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Other Work</div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl">
            Additional things I've shipped.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {others.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-xl transition-all hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {p.tag}
                </span>
                <span className="text-[11px] text-muted-foreground/70">Side project</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-foreground/80">{p.solution}</span> {p.problem}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                {p.impact.map((it) => (
                  <li key={it} className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <motion.a
                  href={p.link}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
                >
                  View Website
                </motion.a>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ContactImpl() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeUp} className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Contact
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-5xl font-bold tracking-tight sm:text-6xl"
        >
          Let's build something <span className="text-gradient">impactful</span> together.
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Have an idea, internship, or problem worth solving? Let's talk.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="mailto:your@email.com"
            className="group relative rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground animate-pulse-glow transition-all duration-300 hover:brightness-110"
          >
            Send Me an Email
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">GitHub ↗</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="#" className="transition-colors hover:text-foreground">LinkedIn ↗</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="mailto:your@email.com" className="transition-colors hover:text-foreground">Email ↗</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-xs font-bold text-primary">KM</span>
          <span>© {new Date().getFullYear()} Krish Munjal</span>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">GitHub</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <OtherWork />
      <WhatIBuild />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
