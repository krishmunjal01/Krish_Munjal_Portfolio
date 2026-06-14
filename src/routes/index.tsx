import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, Fragment } from "react";
import Magnetic from "../components/Magnetic";
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
    <span className="relative inline-flex items-baseline font-medium text-primary">
      <span className="opacity-90">{text}</span>
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
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 150]);
  const yImage = useTransform(scrollY, [0, 800], [0, -100]);
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-background" />
      <motion.div style={{ y: yBg }} className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16"
      >
        <motion.div style={{ y: yText }} className="order-2 text-center lg:order-1 lg:text-left">


          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl md:text-8xl text-foreground"
          >
            <motion.span
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-block cursor-default"
            >
              Krish <span className="text-primary italic font-serif tracking-normal">Munjal</span>
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
            <Magnetic>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                href="#work"
                className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground premium-shadow transition-all duration-300 hover:brightness-110"
              >
                View My Work
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                href="#contact"
                className="rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
              >
                Let's Build Something
              </motion.a>
            </Magnetic>
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

        </motion.div>
        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="group relative order-1 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:order-2 lg:max-w-none"
        >
          <motion.div
            initial={{ rotate: -2 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-border/40 bg-card shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-500 hover:shadow-[0_32px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_32px_60px_-15px_rgba(0,0,0,0.7)]"
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
  thumbnail?: string;
  buttonLabel: string;
  helperText: string;
  modalContent: React.ReactNode;
};

function EduAutoModal() {
  return (
    <div className="space-y-12">
      {/* Problem Context */}
      <section>
        <div className="mb-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-destructive">Problem Context (Real-World Gap)</h4>
          <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">
            Most schools still operate on disconnected systems:
          </p>
          <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Marks stored in Excel or calculated manually</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Attendance maintained in registers</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Timetables managed manually</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Parent communication done via WhatsApp or paper</li>
          </ul>
          <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">This creates:</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />High administrative overhead</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Frequent human errors</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Zero real-time visibility for parents</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />No centralized data intelligence</li>
          </ul>
        </div>
      </section>

      {/* System Approach */}
      <section>
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">System Approach</h4>
        <p className="mb-6 text-base text-muted-foreground leading-relaxed">
          EduAuto is built as a <strong>complete academic operating system</strong>, not just a feature-based application. Instead of isolated modules, it implements <strong>connected workflows</strong>, where:
        </p>
        <blockquote className="border-l-4 border-primary pl-6 py-2 text-lg font-medium text-foreground italic">
          "A single action triggers a full automated pipeline across the system"
        </blockquote>
      </section>

      {/* Core Architecture */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">Core Architecture</h4>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <h5 className="mb-3 font-semibold text-foreground">Multi-Tenant SaaS Design</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Each school operates as an independent tenant</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />All data is isolated using <code>school_id</code></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Supports scaling across multiple institutions from a single deployment</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <h5 className="mb-3 font-semibold text-foreground">Role-Based System</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><strong>Admin</strong> → Full system control</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><strong>Teacher</strong> → Section-level operations</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><strong>Parent</strong> → Child-linked read access</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Access is enforced using JWT-based authentication and RBAC.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <h5 className="mb-3 font-semibold text-foreground">API-Driven Backend</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Node.js + Express backend</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Prisma ORM for structured data access</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />REST APIs for all operations</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />React frontend with React Query for real-time sync</li>
            </ul>
          </div>
        </div>
      </section>

      {/* End-to-End Workflow Thinking */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">End-to-End Workflow Thinking</h4>
        <p className="mb-6 text-sm text-muted-foreground">EduAuto is designed around connected workflows, not isolated features.</p>
        
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h5 className="mb-6 font-semibold text-primary">Example: Result Processing Pipeline</h5>
          <div className="relative space-y-6 border-l-2 border-primary/20 pl-6 ml-4">
            {[
              "Teacher uploads test sheet image",
              "OCR engine extracts roll numbers and marks",
              "Data is parsed and structured",
              "Teacher verifies extracted results",
              "Results stored in database",
              "Notification automatically triggered",
              "Parents receive real-time updates"
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
                <p className="text-sm font-medium text-foreground/80">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-background/50 p-4 border border-border/50 text-sm font-medium text-foreground">
            👉 A 45-minute manual process → <span className="text-primary">reduced to minutes</span>
          </div>
        </div>
      </section>

      {/* OCR-Based Result Automation */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">OCR-Based Result Automation (Core Innovation)</h4>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="rounded-xl border border-border p-5 bg-card/40">
            <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Problem</h5>
            <p className="text-sm text-foreground/80">Manual result entry is time-consuming and error-prone.</p>
          </div>
          <div className="rounded-xl border border-border p-5 bg-card/40">
            <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</h5>
            <p className="text-sm text-foreground/80">An OCR-powered pipeline with a human verification layer.</p>
          </div>
          <div className="rounded-xl border border-border p-5 bg-card/40">
            <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Safety Design</h5>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              <li>• No automatic sending without teacher verification</li>
              <li>• Roll number validation</li>
              <li>• Manual correction interface</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 bg-card/40">
            <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Impact</h5>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              <li>• ~80% reduction in manual effort</li>
              <li>• Eliminates transcription errors</li>
              <li>• Faster result delivery</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6 md:p-8">
          <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-foreground">Pipeline Breakdown</h5>
          <div className="flex flex-wrap gap-2">
            {["Image preprocessing (noise reduction, contrast tuning)", "OCR extraction of roll numbers + marks", "Mapping to student database", "Editable verification UI", "Final approval before persistence"].map((step, idx) => (
              <span key={idx} className="rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {idx + 1}. {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Other Systems */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">🧾</span> Global Student Identity System
          </h5>
          <p className="mb-3 text-sm text-muted-foreground">Each student is assigned a unique ID (Format: <code>SCHOOLCODE_0001</code>).</p>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Why this matters:</div>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li>• Prevents duplication</li>
            <li>• Enables parent-student linking</li>
            <li>• Maintains identity across academic years</li>
          </ul>
        </div>
        
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">📅</span> Smart Timetable Engine
          </h5>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Auto-generated timetables based on subjects & teacher availability</li>
            <li>• Built-in conflict detection</li>
            <li>• Date-scoped substitution system (no permanent schedule corruption)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">📍</span> Attendance System
          </h5>
          <p className="mb-3 text-xs text-muted-foreground">Designed based on actual school operations.</p>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li>• Daily attendance (single entry per day)</li>
            <li>• “Mark All Present” optimization</li>
            <li>• Admin-controlled correction system</li>
            <li>• Real-time parent notifications</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">✏️</span> Structured Leave Management
          </h5>
          <ul className="space-y-1 mb-3 text-sm text-foreground/80">
            <li>• Parents apply for student leave</li>
            <li>• Teachers apply for personal leave</li>
            <li>• Admin approves/rejects</li>
          </ul>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">All requests follow:</div>
          <p className="text-xs text-muted-foreground">Defined workflow • Status tracking • Notification triggers</p>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">🔔</span> Unified Notification Engine
          </h5>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Role-based notification system:</div>
          <ul className="space-y-1.5 text-sm text-foreground/80">
            <li><strong>Parents</strong> → results, attendance alerts</li>
            <li><strong>Teachers</strong> → approvals, schedule updates</li>
            <li><strong>Admin</strong> → system-level alerts</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">📊</span> Audit Logging System
          </h5>
          <p className="mb-3 text-xs text-muted-foreground">Every action is tracked (Result uploads, Attendance changes, etc.).</p>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Purpose:</div>
          <p className="text-xs text-foreground/80">Full transparency • Accountability • Debugging support</p>
        </div>
      </section>

      {/* Data Model & Backend Design */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <h4 className="mb-6 text-xl font-bold tracking-tight">⚙️ Data Model & Backend Design</h4>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h5 className="mb-3 text-sm font-semibold text-primary">Core Entities</h5>
            <div className="flex flex-wrap gap-2">
              {["Schools (tenant root)", "Users (role-based)", "Students (global identity)", "Sections", "Results", "Attendance", "Leaves", "Audit Logs"].map((entity, idx) => (
                <span key={idx} className="rounded-md border border-primary/30 bg-background/50 px-2.5 py-1 text-xs font-mono text-primary-foreground">
                  {entity}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h5 className="mb-3 text-sm font-semibold text-primary">⚡ Real-Time Data Handling</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />React Query used for caching and synchronization</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Background refetching ensures UI consistency</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Optimistic updates for fast interactions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why This System Stands Out */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">🎯 Why This System Stands Out</h4>
        <p className="mb-6 text-base text-muted-foreground leading-relaxed">
          EduAuto is not a CRUD-based project. It is a <strong>workflow-driven SaaS platform</strong> where features are interconnected, data flows automatically between modules, and the system reflects real-world school operations.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {["OCR-based workflow automation", "Multi-tenant SaaS architecture", "Role-based secure system", "Real-time parent engagement", "End-to-end process design"].map((diff, idx) => (
            <div key={idx} className="rounded-xl border border-border p-4 bg-card/40 flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">✓</span>
              <span className="text-sm font-medium text-foreground/80">{diff}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Future Scope */}
      <section>
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">🚀 Future Scope</h4>
        <div className="flex flex-wrap gap-3">
          {["WhatsApp API integration", "AI-based performance analytics", "Mobile applications", "Advanced dashboards"].map((scope, idx) => (
            <span key={idx} className="rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm font-medium text-muted-foreground">
              {scope}
            </span>
          ))}
        </div>
      </section>

      {/* Final Take */}
      <section className="mt-12 text-center pb-8">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">🧠 Final Take</h4>
        <p className="mb-6 text-sm text-muted-foreground max-w-2xl mx-auto">
          EduAuto is a production-oriented system built to solve real institutional problems, not a prototype. It demonstrates system design thinking, real-world problem understanding, and scalable architecture decisions.
        </p>
        <div className="inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold tracking-wide text-primary-foreground premium-shadow">
          “Not built as a project. Built as a product.”
        </div>
      </section>
    </div>
  );
}

function CertifyAIModal() {
  return (
    <div className="space-y-12">
      {/* Problem Context */}
      <section>
        <div className="mb-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-destructive">Problem Context (Operational Gap)</h4>
          <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">
            In most academic and professional events:
          </p>
          <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Certificates are created manually using design tools</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" /><span>Names are edited individually <span className="text-destructive/70">(or bulk-generated into a single massive PDF, forcing participants to "search for their own")</span></span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Distribution is handled one-by-one via email</li>
          </ul>
          <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">This leads to:</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />High manual effort</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Frequent formatting and data errors</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Delays in certificate delivery</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Lack of scalability for large datasets</li>
          </ul>
        </div>
      </section>

      {/* System Approach & Architecture */}
      <section>
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">System Approach & Architecture</h4>
        <p className="mb-6 text-base text-muted-foreground leading-relaxed">
          CertifyAI replaces this fragmented workflow with a <strong>structured automation pipeline</strong>, where bulk data input triggers automated certificate generation and distribution. It is designed as a modular pipeline with clearly defined stages:
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          {["1. Input Layer", "2. Validation Layer", "3. Generation Engine", "4. Distribution System"].map((stage, idx) => (
             <div key={idx} className="rounded-xl border border-border bg-card/40 p-4 text-center text-sm font-semibold text-foreground/80">
               {stage}
             </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">Each stage ensures consistency, scalability, and minimal human intervention.</p>
      </section>

      {/* Core Workflow Pipeline */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">Core Workflow Pipeline</h4>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="relative space-y-8 border-l-2 border-primary/20 pl-6 ml-4">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">1. Data Ingestion</h5>
              <ul className="space-y-1.5 text-sm text-foreground/80">
                <li>• Event organizers upload structured participant data (CSV format)</li>
                <li>• Data includes: Name, Role, Event details</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">2. Validation Layer</h5>
              <p className="text-sm text-muted-foreground mb-2">Before processing, the system performs checks:</p>
              <ul className="space-y-1.5 text-sm text-foreground/80">
                <li>• Missing field detection</li>
                <li>• Duplicate entry validation</li>
                <li>• Formatting consistency</li>
              </ul>
              <div className="mt-3 inline-block rounded-md bg-background/50 border border-border px-3 py-1.5 text-xs font-medium text-foreground">
                👉 Ensures clean data before generation
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">3. Certificate Generation Engine</h5>
              <ul className="space-y-1.5 text-sm text-foreground/80 mb-3">
                <li>• Predefined certificate templates are used</li>
                <li>• Dynamic fields are injected programmatically</li>
                <li>• Certificates are generated in bulk</li>
              </ul>
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Generation Logic:</div>
              <p className="text-xs text-muted-foreground leading-relaxed">Template → Placeholder mapping <br/> Data binding → Name, role, event <br/> Output → Rendered file (PDF/Image)</p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">4. Automated Distribution</h5>
              <ul className="space-y-1.5 text-sm text-foreground/80">
                <li>• Certificates are attached and sent via email</li>
                <li>• Batch processing ensures scalability</li>
                <li>• System handles multiple recipients efficiently</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Grid: Context, Engineering, Impact, Constraints */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">⚙️</span> Engineering Decisions
          </h5>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Used automation scripts instead of manual editing workflows</li>
            <li>• Implemented validation layer to reduce data errors</li>
            <li>• Designed reusable template system for different events</li>
          </ul>
        </div>
        
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">🚀</span> Deployment Context
          </h5>
          <p className="mb-3 text-sm font-medium text-foreground">Used in live IEEE events, where it handled:</p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Bulk certificate generation</li>
            <li>• Automated distribution</li>
            <li>• Reduced manual workload significantly</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">📊</span> Impact
          </h5>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Eliminates repetitive manual certificate creation</li>
            <li>• Reduces processing time from hours to minutes</li>
            <li>• Ensures consistency across all generated certificates</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">🔒</span> System Constraints & Choices
          </h5>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Codebase is not public due to deployment usage</li>
            <li>• Focused on reliability over experimental features</li>
            <li>• Prioritized structured workflows over complex AI models</li>
          </ul>
        </div>
      </section>

      {/* Why This System Stands Out */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">🧠 Why This System Stands Out</h4>
        <p className="mb-6 text-base text-muted-foreground leading-relaxed">
          CertifyAI is not just a script-based generator. It is a <strong>workflow-driven automation system</strong> where data flows through structured stages, errors are minimized before output, and distribution is integrated into the pipeline.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {["Bulk automation pipeline", "Validation-first processing", "Real-world deployment usage", "Scalable architecture for events"].map((diff, idx) => (
            <div key={idx} className="rounded-xl border border-border p-4 bg-card/40 flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">✓</span>
              <span className="text-sm font-medium text-foreground/80">{diff}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it differs from Canva */}
      <section className="rounded-2xl border border-primary/20 bg-card p-6 md:p-8">
        <h4 className="mb-6 text-xl font-bold tracking-tight text-foreground">⚖️ How CertifyAI Differs from Existing Tools</h4>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          While tools like Canva offer bulk certificate generation using templates, they are primarily focused on <strong>design-based automation</strong>. They require manual setup for each batch, don't validate input data, treat generation as a standalone task, and don't handle distribution.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 rounded-xl border border-border bg-secondary/30 p-5">
            <h5 className="mb-2 text-sm font-bold text-foreground">CertifyAI's Approach:</h5>
            <p className="text-xs text-muted-foreground mb-3">Instead of just generating certificates, it automates the entire operations pipeline:</p>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              <li>• Validates participant data before processing</li>
              <li>• Generates certificates programmatically at scale</li>
              <li>• Integrates distribution directly into the system</li>
              <li>• Reduces manual intervention across the workflow</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center">
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Key Distinction</div>
              <p className="text-sm font-medium text-foreground/80">Canva automates <span className="italic text-foreground">design</span>. CertifyAI automates <span className="italic text-foreground">operations</span>.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/50 p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Better Suited For:</div>
              <p className="text-xs text-muted-foreground">Large-scale events, organizations requiring reliability, and scenarios where automation needs to go beyond file creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section>
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">🔮 Future Scope</h4>
        <div className="flex flex-wrap gap-3">
          {["QR-based certificate verification system", "Public verification portal", "Fraud detection using validation + AI models", "Dashboard for event organizers"].map((scope, idx) => (
            <span key={idx} className="rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm font-medium text-muted-foreground">
              {scope}
            </span>
          ))}
        </div>
      </section>

      {/* Final Take */}
      <section className="mt-12 text-center pb-8">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">🎯 Final Take</h4>
        <p className="mb-6 text-sm text-muted-foreground max-w-2xl mx-auto">
          CertifyAI demonstrates a strong understanding of workflow automation, the ability to design scalable processing pipelines, and a focus on real-world usability over theoretical complexity.
        </p>
        <div className="inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold tracking-wide text-primary-foreground premium-shadow">
          “Designed to automate processes at scale, not just generate files.”
        </div>
      </section>
    </div>
  );
}

function DukaanDostModal() {
  return (
    <div className="space-y-12">
      {/* Problem Context */}
      <section>
        <div className="mb-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-destructive">Problem Context (Operational Gap)</h4>
          <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">
            Small businesses heavily rely on WhatsApp for customer interaction, but communication is typically:
          </p>
          <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Fully manual</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Repetitive (same questions daily)</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Inconsistent in responses</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Difficult to scale with increasing customers</li>
          </ul>
          <p className="mb-4 text-sm md:text-base text-foreground/80 leading-relaxed">Resulting Issues:</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />Delayed responses → lost customers</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />High manual workload for business owners</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />No structured order handling system</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />No consistency in customer experience</li>
          </ul>
        </div>
      </section>

      {/* System Approach */}
      <section>
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">System Approach</h4>
        <p className="mb-6 text-base text-muted-foreground leading-relaxed">
          Dukaan Dost transforms WhatsApp into a <strong>structured interaction system</strong>, where:
        </p>
        <blockquote className="border-l-4 border-primary pl-6 py-2 text-lg font-medium text-foreground italic mb-6">
          "Every conversation follows a predefined workflow instead of random manual replies"
        </blockquote>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h5 className="mb-2 text-sm font-bold text-foreground">System Design Overview</h5>
            <p className="text-xs text-muted-foreground mb-3">Built around a menu-driven conversational architecture ensuring:</p>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              <li>• Predictable user flow</li>
              <li>• Fast responses</li>
              <li>• Minimal user confusion</li>
              <li>• High reliability without complex AI</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h5 className="mb-2 text-sm font-bold text-foreground">Design Philosophy</h5>
            <p className="text-xs text-muted-foreground mb-3">Instead of using complex NLP, the system uses <strong>deterministic logic flows</strong>. Why?</p>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              <li>• Faster execution</li>
              <li>• More reliable responses</li>
              <li>• Easier debugging</li>
              <li>• Better suited for small business use</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Interaction Pipeline */}
      <section>
        <h4 className="mb-6 text-xl font-bold tracking-tight">Core Interaction Pipeline</h4>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="relative space-y-8 border-l-2 border-primary/20 pl-6 ml-4">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">1. Main Menu Engine</h5>
              <p className="text-sm text-foreground/80 mb-3">User is presented with a structured menu. Numeric input ensures simplicity and no ambiguity.</p>
              <div className="rounded-md bg-card border border-border p-3 font-mono text-xs text-muted-foreground">
                Welcome to [Store Name] 😊<br/>
                Please choose an option:<br/>
                <br/>
                1. View Products<br/>
                2. Place an Order<br/>
                3. Track an Order<br/>
                4. Contact Support
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">2. Product Browsing Flow</h5>
              <p className="text-sm text-muted-foreground mb-2">Displays available products or categories. User selects item, system responds with Name, Price, and Availability.</p>
              <div className="mt-2 inline-block rounded-md bg-background/50 border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
                👉 Focused on clarity over complexity. No heavy UI, purely conversational.
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">3. Order Placement Flow</h5>
              <p className="text-sm text-foreground/80 mb-3">Structured multi-step interaction: Select product → Enter quantity → Provide details → Confirm order.</p>
              <div className="rounded-md bg-card border border-border p-3 font-mono text-xs text-green-500/80 mb-2">
                ✅ Your order has been placed successfully!<br/>
                Order ID: #1234
              </div>
              <p className="text-xs text-muted-foreground italic">Step-by-step input avoids user errors and mimics real checkout flow within chat.</p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" />
              <h5 className="font-semibold text-primary mb-2">4. Fallback & Control Logic</h5>
              <p className="text-sm text-foreground/80 mb-3">Invalid inputs trigger guided responses. Users are redirected to the main menu to prevent dead-end conversations.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Two-Sided System */}
      <section className="rounded-2xl border border-primary/20 bg-card p-6 md:p-8">
        <h4 className="mb-6 text-xl font-bold tracking-tight text-foreground">🧑‍💼 Shop Owner Dashboard & Control System</h4>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          Beyond customer interaction, Dukaan Dost includes a <strong>secure admin interface for shop owners</strong>, enabling them to monitor, manage, and analyze business operations in real-time.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-secondary/30 p-5">
            <h5 className="mb-3 text-sm font-bold text-foreground">📊 Order Management</h5>
            <ul className="space-y-2 text-xs text-foreground/80">
              <li><strong>Today's Orders:</strong> View all orders received (ID, Customer, Products, Status)</li>
              <li><strong>Order History:</strong> Access past orders with date/status filtering</li>
            </ul>
          </div>
          
          <div className="rounded-xl border border-border bg-secondary/30 p-5">
            <h5 className="mb-3 text-sm font-bold text-foreground">📈 Demand Analytics</h5>
            <ul className="space-y-2 text-xs text-foreground/80">
              <li><strong>Most Demanded:</strong> Identifies top-selling products</li>
              <li><strong>Least Demanded:</strong> Highlights low-performing products</li>
              <li><strong>Trends:</strong> Tracks product demand over time</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-secondary/30 p-5 md:col-span-2 lg:col-span-1">
            <h5 className="mb-3 text-sm font-bold text-foreground">⚙️ Architecture</h5>
            <ul className="space-y-2 text-xs text-foreground/80">
              <li>• Backend aggregates order data</li>
              <li>• Analytics layer processes demand metrics</li>
              <li>• Dashboard visualizes insights in real-time</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/10 p-5 text-center">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Why This Matters</div>
          <p className="text-sm font-medium text-foreground/80 max-w-2xl mx-auto">
            Most WhatsApp bots only handle conversations. Dukaan Dost integrates customer interaction with business operations, providing analytics for smarter decisions and creating a lightweight CRM-like system inside the WhatsApp ecosystem.
          </p>
        </div>
      </section>

      {/* Future Scope & Impact */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">⚡</span> Impact on Business
          </h5>
          <ul className="space-y-1.5 text-sm text-foreground/80">
            <li>• Near-instant response to customer queries</li>
            <li>• Significant reduction in manual workload</li>
            <li>• Improved customer experience consistency</li>
            <li>• Provides data-driven decision making</li>
          </ul>
        </div>
        
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <h5 className="mb-3 font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">🔮</span> Future Scope
          </h5>
          <ul className="space-y-1.5 text-sm text-foreground/80">
            <li>• AI-based intent detection</li>
            <li>• Payment integration</li>
            <li>• Product database dashboard</li>
            <li>• Order analytics system</li>
          </ul>
        </div>
      </section>

      {/* Final Take */}
      <section className="mt-12 text-center pb-8">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">🎯 Final Positioning</h4>
        <p className="mb-6 text-sm text-muted-foreground max-w-2xl mx-auto">
          Dukaan Dost is not just a chatbot. It is a <strong>two-sided system</strong>: Customer-facing automation (chat workflows) and Owner-facing intelligence (dashboard + analytics).
        </p>
        <div className="inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold tracking-wide text-primary-foreground premium-shadow">
          “Not just automating replies — enabling smarter business decisions.”
        </div>
      </section>
    </div>
  );
}

const projects: Project[] = [
  {
    tag: "SaaS",
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
    buttonLabel: "See How It Works",
    helperText: "Preview available — no login required",
    modalContent: <EduAutoModal />
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
    thumbnail: "/certifyai.png",
    buttonLabel: "See How It Works",
    helperText: "Preview available — no login required",
    modalContent: <CertifyAIModal />
  },
  {
    tag: "Automation",
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
    buttonLabel: "View Demo Flow",
    helperText: "Chat flow preview — no live demo needed",
    modalContent: <DukaanDostModal />
  }
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
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

function ArchitectureDiagram({ projectTitle }: { projectTitle: string }) {
  if (projectTitle === "EduAuto") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        {/* React Frontend */}
        <div className="relative z-10 flex w-32 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 py-2 text-xs font-medium text-primary premium-shadow backdrop-blur-md">
          React Client
        </div>
        
        <div className="my-2 flex h-6 w-full items-center justify-center">
          <div className="h-full w-px bg-gradient-to-b from-primary/50 to-foreground/20"></div>
        </div>

        {/* API Layer */}
        <div className="relative z-10 flex w-40 items-center justify-center rounded-lg border border-border bg-card/60 py-2 text-xs font-medium text-foreground backdrop-blur-md shadow-sm">
          Node.js API Gateway
        </div>

        <div className="my-2 flex h-6 w-full items-center justify-center relative">
          <div className="h-full w-px bg-foreground/20"></div>
          {/* horizontal line branch */}
          <div className="absolute top-1/2 w-48 h-px bg-foreground/20 -translate-y-1/2"></div>
          {/* vertical lines down from branch */}
          <div className="absolute top-1/2 left-[calc(50%-6rem)] w-px h-3 bg-foreground/20"></div>
          <div className="absolute top-1/2 right-[calc(50%-6rem)] w-px h-3 bg-foreground/20"></div>
        </div>

        {/* Services Layer */}
        <div className="flex gap-4">
           <div className="flex w-20 flex-col items-center justify-center rounded-lg border border-border bg-card/40 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur-md">
             Prisma DB
           </div>
           <div className="flex w-20 flex-col items-center justify-center rounded-lg border border-border bg-card/40 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur-md">
             OCR Engine
           </div>
           <div className="flex w-20 flex-col items-center justify-center rounded-lg border border-border bg-card/40 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur-md">
             WhatsApp
           </div>
        </div>
      </div>
    );
  }

  if (projectTitle === "CertifyAI") {
    return (
      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="flex w-full items-center justify-between gap-1 overflow-hidden">
          {["CSV Data", "Validation", "Generator", "Email Drop"].map((step, i) => (
             <Fragment key={step}>
                <div className="flex flex-col items-center gap-2">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary">{i+1}</div>
                   <div className="text-[10px] font-medium text-foreground text-center whitespace-nowrap">{step}</div>
                </div>
                {i < 3 && <div className="h-px flex-1 bg-border relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-border"></div>
                </div>}
             </Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Dukaan Dost
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex w-full max-w-sm items-center justify-between">
         {/* Left Side: WhatsApp */}
         <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-xl shadow-[0_0_15px_rgba(37,211,102,0.1)]">
               💬
            </div>
            <div className="text-[10px] font-medium text-muted-foreground">User</div>
         </div>

         {/* Middle logic */}
         <div className="flex flex-1 items-center justify-center px-1">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card px-1 text-[9px] text-muted-foreground border border-border">API</div>
            </div>
         </div>

         {/* Core Engine */}
         <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-3 text-center shadow-sm">
            <div className="text-xs font-bold text-primary whitespace-nowrap">Workflow Engine</div>
            <div className="mt-1 text-[9px] text-foreground/60">Node.js Logic</div>
         </div>

         {/* Middle logic */}
         <div className="flex flex-1 items-center justify-center px-1">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
         </div>

         {/* Right Side: Dashboard */}
         <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-xl shadow-sm">
               📊
            </div>
            <div className="text-[10px] font-medium text-muted-foreground">Dashboard</div>
         </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-background/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border bg-card/90 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.tag}
            </span>
            <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Screenshots</div>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card/50 flex items-center justify-center">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt="Screenshot" className="h-full w-full object-cover object-top opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100" />
                ) : (
                  <span className="text-sm text-muted-foreground">Screenshots Area</span>
                )}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Architecture Diagram</div>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-secondary/30 flex items-center justify-center">
                <ArchitectureDiagram projectTitle={project.title} />
              </div>
            </div>
          </div>

          {project.modalContent}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ p, i, onOpenModal }: { p: Project; i: number; onOpenModal: () => void }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-7 shadow-[var(--shadow-card)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.19_256/0.55)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex-1 flex flex-col">
        {p.thumbnail ? (
          <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card/50">
            <img src={p.thumbnail} alt={`${p.title} preview`} className="h-full w-full object-cover object-top" />
          </div>
        ) : (
          <ProjectMockup accent={p.accent} label={`${p.title.toLowerCase()}.app`} />
        )}
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            {p.tag}
          </span>
          <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.pitch}</p>

        <div className="mt-5 flex-1 space-y-3 text-sm">
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

        <div className="mt-8 flex flex-col items-center">
          <Magnetic className="w-full">
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:premium-shadow"
            >
              {p.buttonLabel}
            </motion.button>
          </Magnetic>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

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
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} onOpenModal={() => setSelectedProject(p)} />)}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
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
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse transition-transform group-hover/item:scale-150" />
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
      link: "https://www.minotimemorials.com/",
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
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:premium-shadow"
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

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "mailto:krishmunjal126@gmail.com";
      return;
    }
    navigator.clipboard.writeText("krishmunjal126@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground premium-shadow transition-all duration-300 hover:brightness-110"
    >
      {copied ? "Copied to Clipboard!" : "Send Me an Email"}
      {!copied && <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>}
    </motion.button>
  );
}

function CopyEmailLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "mailto:krishmunjal126@gmail.com";
      return;
    }
    navigator.clipboard.writeText("krishmunjal126@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={className}>
      {copied ? "Copied!" : children}
    </button>
  );
}

function ContactImpl() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--background)" }} />
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
          Let's build something <span className="text-primary font-serif italic">impactful</span> together.
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Have an idea, internship, or problem worth solving? Let's talk.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <CopyEmailButton />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="https://github.com/krishmunjal01" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub ↗</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="https://www.linkedin.com/in/krishmunjal/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LinkedIn ↗</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <CopyEmailLink className="transition-colors hover:text-foreground">Email ↗</CopyEmailLink>
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
          <a href="https://github.com/krishmunjal01" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://www.linkedin.com/in/krishmunjal/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <CopyEmailLink className="hover:text-foreground">Email</CopyEmailLink>
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
