import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};
const TYPING_WORDS = ["AI-powered systems", "Automation workflows", "SaaS products"];
function TypingRotator() {
  const [wordIndex, setWordIndex] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [deleting, setDeleting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    if (!deleting && text === word) {
      const t2 = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t2);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
      return;
    }
    const delay = deleting ? 40 : 75;
    const t = setTimeout(() => {
      setText((cur) => deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex items-baseline", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-shimmer", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-primary animate-caret" })
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-bold text-primary transition-all group-hover:scale-110 group-hover:border-primary/60", children: "KM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-sm font-medium text-muted-foreground sm:block", children: "krishmunjal.dev" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "transition-colors hover:text-foreground", children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#build", className: "transition-colors hover:text-foreground", children: "Build" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#skills", className: "transition-colors hover:text-foreground", children: "Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "transition-colors hover:text-foreground", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-full border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:scale-105 hover:border-primary/60 hover:bg-primary/10", children: "Let's talk →" })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", style: {
      background: "var(--gradient-glow)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "show", variants: stagger, className: "relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 text-center lg:order-1 lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          "Open to Internships & Collaborations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { variants: fadeUp, className: "text-balance text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl md:text-8xl animate-name-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { whileHover: {
          scale: 1.04
        }, transition: {
          type: "spring",
          stiffness: 260,
          damping: 18
        }, className: "inline-block cursor-default", children: [
          "Krish ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Munjal" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: fadeUp, className: "mx-auto mt-5 max-w-3xl text-balance text-2xl font-semibold leading-tight text-foreground/95 sm:text-3xl md:text-4xl lg:mx-0", children: [
          "I build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypingRotator, {}) }),
          " that replace manual work with automation."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mx-auto mt-3 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg lg:mx-0", children: "Focused on building real-world SaaS products, AI tools, and automation systems used in practical environments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.97
          }, transition: {
            type: "spring",
            stiffness: 320,
            damping: 20
          }, href: "#work", className: "group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:brightness-110", children: [
            "View My Work",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 inline-block transition-transform group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.a, { whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.97
          }, transition: {
            type: "spring",
            stiffness: 320,
            damping: 20
          }, href: "#contact", className: "rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10", children: "Let's Build Something" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm lg:justify-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: "Oracle Certified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: "3 Real-world Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: "IEEE CIS Core Team" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 40
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }, className: "group relative order-1 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:order-2 lg:max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90", style: {
          background: "var(--gradient-primary)",
          opacity: 0.18
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[1.5rem] border border-primary/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          scale: 1.03
        }, transition: {
          type: "spring",
          stiffness: 220,
          damping: 18
        }, className: "relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-shadow duration-500 group-hover:shadow-[0_30px_90px_-20px_oklch(0.62_0.19_256/0.45)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/krish-converted.jpg", alt: "Krish Munjal", loading: "eager", className: "aspect-[4/5] w-full object-cover", onError: (e) => {
            e.currentTarget.style.display = "none";
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" })
        ] })
      ] })
    ] })
  ] });
}
function EduAutoModal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-destructive", children: "Problem Context (Real-World Gap)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm md:text-base text-foreground/80 leading-relaxed", children: "Most schools still operate on disconnected systems:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mb-6 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Marks stored in Excel or calculated manually"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Attendance maintained in registers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Timetables managed manually"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Parent communication done via WhatsApp or paper"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm md:text-base text-foreground/80 leading-relaxed", children: "This creates:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "High administrative overhead"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Frequent human errors"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Zero real-time visibility for parents"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "No centralized data intelligence"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary", children: "System Approach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-base text-muted-foreground leading-relaxed", children: [
        "EduAuto is built as a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "complete academic operating system" }),
        ", not just a feature-based application. Instead of isolated modules, it implements ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "connected workflows" }),
        ", where:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-primary pl-6 py-2 text-lg font-medium text-foreground italic", children: '"A single action triggers a full automated pipeline across the system"' })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "Core Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 font-semibold text-foreground", children: "Multi-Tenant SaaS Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "Each school operates as an independent tenant"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "All data is isolated using ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "school_id" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "Supports scaling across multiple institutions from a single deployment"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 font-semibold text-foreground", children: "Role-Based System" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Admin" }),
              " → Full system control"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Teacher" }),
              " → Section-level operations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Parent" }),
              " → Child-linked read access"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Access is enforced using JWT-based authentication and RBAC." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 font-semibold text-foreground", children: "API-Driven Backend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "Node.js + Express backend"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "Prisma ORM for structured data access"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "REST APIs for all operations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "React frontend with React Query for real-time sync"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "End-to-End Workflow Thinking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm text-muted-foreground", children: "EduAuto is designed around connected workflows, not isolated features." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-6 font-semibold text-primary", children: "Example: Result Processing Pipeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative space-y-6 border-l-2 border-primary/20 pl-6 ml-4", children: ["Teacher uploads test sheet image", "OCR engine extracts roll numbers and marks", "Data is parsed and structured", "Teacher verifies extracted results", "Results stored in database", "Notification automatically triggered", "Parents receive real-time updates"].map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/80", children: step })
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-xl bg-background/50 p-4 border border-border/50 text-sm font-medium text-foreground", children: [
          "👉 A 45-minute manual process → ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "reduced to minutes" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "OCR-Based Result Automation (Core Innovation)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5 bg-card/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: "Manual result entry is time-consuming and error-prone." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5 bg-card/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: "An OCR-powered pipeline with a human verification layer." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5 bg-card/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Safety Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No automatic sending without teacher verification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Roll number validation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Manual correction interface" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5 bg-card/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Impact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• ~80% reduction in manual effort" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Eliminates transcription errors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Faster result delivery" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 text-sm font-bold uppercase tracking-[0.15em] text-foreground", children: "Pipeline Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Image preprocessing (noise reduction, contrast tuning)", "OCR extraction of roll numbers + marks", "Mapping to student database", "Editable verification UI", "Final approval before persistence"].map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-xs font-medium text-muted-foreground", children: [
          idx + 1,
          ". ",
          step
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "🧾" }),
          " Global Student Identity System"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 text-sm text-muted-foreground", children: [
          "Each student is assigned a unique ID (Format: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "SCHOOLCODE_0001" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Why this matters:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Prevents duplication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Enables parent-student linking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maintains identity across academic years" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "📅" }),
          " Smart Timetable Engine"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Auto-generated timetables based on subjects & teacher availability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Built-in conflict detection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Date-scoped substitution system (no permanent schedule corruption)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "📍" }),
          " Attendance System"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs text-muted-foreground", children: "Designed based on actual school operations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Daily attendance (single entry per day)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• “Mark All Present” optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Admin-controlled correction system" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Real-time parent notifications" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✏️" }),
          " Structured Leave Management"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 mb-3 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Parents apply for student leave" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Teachers apply for personal leave" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Admin approves/rejects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "All requests follow:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Defined workflow • Status tracking • Notification triggers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "🔔" }),
          " Unified Notification Engine"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Role-based notification system:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Parents" }),
            " → results, attendance alerts"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Teachers" }),
            " → approvals, schedule updates"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Admin" }),
            " → system-level alerts"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "📊" }),
          " Audit Logging System"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs text-muted-foreground", children: "Every action is tracked (Result uploads, Attendance changes, etc.)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Purpose:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: "Full transparency • Accountability • Debugging support" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "⚙️ Data Model & Backend Design" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 text-sm font-semibold text-primary", children: "Core Entities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Schools (tenant root)", "Users (role-based)", "Students (global identity)", "Sections", "Results", "Attendance", "Leaves", "Audit Logs"].map((entity, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-primary/30 bg-background/50 px-2.5 py-1 text-xs font-mono text-primary-foreground", children: entity }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 text-sm font-semibold text-primary", children: "⚡ Real-Time Data Handling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "React Query used for caching and synchronization"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "Background refetching ensures UI consistency"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }),
              "Optimistic updates for fast interactions"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "🎯 Why This System Stands Out" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-base text-muted-foreground leading-relaxed", children: [
        "EduAuto is not a CRUD-based project. It is a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "workflow-driven SaaS platform" }),
        " where features are interconnected, data flows automatically between modules, and the system reflects real-world school operations."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8", children: ["OCR-based workflow automation", "Multi-tenant SaaS architecture", "Role-based secure system", "Real-time parent engagement", "End-to-end process design"].map((diff, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4 bg-card/40 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground/80", children: diff })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/80", children: "🚀 Future Scope" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ["WhatsApp API integration", "AI-based performance analytics", "Mobile applications", "Advanced dashboards"].map((scope, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm font-medium text-muted-foreground", children: scope }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 text-center pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "🧠 Final Take" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm text-muted-foreground max-w-2xl mx-auto", children: "EduAuto is a production-oriented system built to solve real institutional problems, not a prototype. It demonstrates system design thinking, real-world problem understanding, and scalable architecture decisions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold tracking-wide text-primary-foreground shadow-[var(--shadow-glow)]", children: "“Not built as a project. Built as a product.”" })
    ] })
  ] });
}
function CertifyAIModal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-destructive", children: "Problem Context (Operational Gap)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm md:text-base text-foreground/80 leading-relaxed", children: "In most academic and professional events:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mb-6 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Certificates are created manually using design tools"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Names are edited individually ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive/70", children: '(or bulk-generated into a single massive PDF, forcing participants to "search for their own")' })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Distribution is handled one-by-one via email"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm md:text-base text-foreground/80 leading-relaxed", children: "This leads to:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "High manual effort"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Frequent formatting and data errors"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Delays in certificate delivery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Lack of scalability for large datasets"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary", children: "System Approach & Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-base text-muted-foreground leading-relaxed", children: [
        "CertifyAI replaces this fragmented workflow with a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "structured automation pipeline" }),
        ", where bulk data input triggers automated certificate generation and distribution. It is designed as a modular pipeline with clearly defined stages:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-4", children: ["1. Input Layer", "2. Validation Layer", "3. Generation Engine", "4. Distribution System"].map((stage, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card/40 p-4 text-center text-sm font-semibold text-foreground/80", children: stage }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground text-center", children: "Each stage ensures consistency, scalability, and minimal human intervention." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "Core Workflow Pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-8 border-l-2 border-primary/20 pl-6 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "1. Data Ingestion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Event organizers upload structured participant data (CSV format)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Data includes: Name, Role, Event details" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "2. Validation Layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Before processing, the system performs checks:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Missing field detection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Duplicate entry validation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Formatting consistency" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 inline-block rounded-md bg-background/50 border border-border px-3 py-1.5 text-xs font-medium text-foreground", children: "👉 Ensures clean data before generation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "3. Certificate Generation Engine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Predefined certificate templates are used" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Dynamic fields are injected programmatically" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Certificates are generated in bulk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Generation Logic:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
            "Template → Placeholder mapping ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " Data binding → Name, role, event ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " Output → Rendered file (PDF/Image)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "4. Automated Distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Certificates are attached and sent via email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Batch processing ensures scalability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• System handles multiple recipients efficiently" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "⚙️" }),
          " Engineering Decisions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Used automation scripts instead of manual editing workflows" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Implemented validation layer to reduce data errors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Designed reusable template system for different events" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "🚀" }),
          " Deployment Context"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-medium text-foreground", children: "Used in live IEEE events, where it handled:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bulk certificate generation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Automated distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduced manual workload significantly" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "📊" }),
          " Impact"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Eliminates repetitive manual certificate creation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduces processing time from hours to minutes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Ensures consistency across all generated certificates" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "🔒" }),
          " System Constraints & Choices"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Codebase is not public due to deployment usage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Focused on reliability over experimental features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Prioritized structured workflows over complex AI models" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "🧠 Why This System Stands Out" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-base text-muted-foreground leading-relaxed", children: [
        "CertifyAI is not just a script-based generator. It is a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "workflow-driven automation system" }),
        " where data flows through structured stages, errors are minimized before output, and distribution is integrated into the pipeline."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8", children: ["Bulk automation pipeline", "Validation-first processing", "Real-world deployment usage", "Scalable architecture for events"].map((diff, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4 bg-card/40 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground/80", children: diff })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-primary/20 bg-card p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight text-foreground", children: "⚖️ How CertifyAI Differs from Existing Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-sm text-muted-foreground leading-relaxed", children: [
        "While tools like Canva offer bulk certificate generation using templates, they are primarily focused on ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "design-based automation" }),
        ". They require manual setup for each batch, don't validate input data, treat generation as a standalone task, and don't handle distribution."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 rounded-xl border border-border bg-secondary/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-sm font-bold text-foreground", children: "CertifyAI's Approach:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Instead of just generating certificates, it automates the entire operations pipeline:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Validates participant data before processing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Generates certificates programmatically at scale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Integrates distribution directly into the system" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduces manual intervention across the workflow" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/30 bg-primary/10 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-primary mb-1", children: "Key Distinction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground/80", children: [
              "Canva automates ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-foreground", children: "design" }),
              ". CertifyAI automates ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-foreground", children: "operations" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/50 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Better Suited For:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Large-scale events, organizations requiring reliability, and scenarios where automation needs to go beyond file creation." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/80", children: "🔮 Future Scope" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ["QR-based certificate verification system", "Public verification portal", "Fraud detection using validation + AI models", "Dashboard for event organizers"].map((scope, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm font-medium text-muted-foreground", children: scope }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 text-center pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "🎯 Final Take" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm text-muted-foreground max-w-2xl mx-auto", children: "CertifyAI demonstrates a strong understanding of workflow automation, the ability to design scalable processing pipelines, and a focus on real-world usability over theoretical complexity." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold tracking-wide text-primary-foreground shadow-[var(--shadow-glow)]", children: "“Designed to automate processes at scale, not just generate files.”" })
    ] })
  ] });
}
function DukaanDostModal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-destructive", children: "Problem Context (Operational Gap)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm md:text-base text-foreground/80 leading-relaxed", children: "Small businesses heavily rely on WhatsApp for customer interaction, but communication is typically:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mb-6 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Fully manual"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Repetitive (same questions daily)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Inconsistent in responses"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Difficult to scale with increasing customers"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm md:text-base text-foreground/80 leading-relaxed", children: "Resulting Issues:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "Delayed responses → lost customers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "High manual workload for business owners"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "No structured order handling system"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" }),
          "No consistency in customer experience"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary", children: "System Approach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-base text-muted-foreground leading-relaxed", children: [
        "Dukaan Dost transforms WhatsApp into a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "structured interaction system" }),
        ", where:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-primary pl-6 py-2 text-lg font-medium text-foreground italic mb-6", children: '"Every conversation follows a predefined workflow instead of random manual replies"' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/40 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-sm font-bold text-foreground", children: "System Design Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Built around a menu-driven conversational architecture ensuring:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Predictable user flow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fast responses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Minimal user confusion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• High reliability without complex AI" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/40 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-2 text-sm font-bold text-foreground", children: "Design Philosophy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-3", children: [
            "Instead of using complex NLP, the system uses ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "deterministic logic flows" }),
            ". Why?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Faster execution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• More reliable responses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Easier debugging" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Better suited for small business use" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight", children: "Core Interaction Pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-8 border-l-2 border-primary/20 pl-6 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "1. Main Menu Engine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 mb-3", children: "User is presented with a structured menu. Numeric input ensures simplicity and no ambiguity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-card border border-border p-3 font-mono text-xs text-muted-foreground", children: [
            "Welcome to [Store Name] 😊",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Please choose an option:",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "1. View Products",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "2. Place an Order",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "3. Track an Order",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "4. Contact Support"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "2. Product Browsing Flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Displays available products or categories. User selects item, system responds with Name, Price, and Availability." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 inline-block rounded-md bg-background/50 border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground", children: "👉 Focused on clarity over complexity. No heavy UI, purely conversational." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "3. Order Placement Flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 mb-3", children: "Structured multi-step interaction: Select product → Enter quantity → Provide details → Confirm order." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-card border border-border p-3 font-mono text-xs text-green-500/80 mb-2", children: [
            "✅ Your order has been placed successfully!",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Order ID: #1234"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "Step-by-step input avoids user errors and mimics real checkout flow within chat." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary shadow-[0_0_0_4px_oklch(var(--background))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-primary mb-2", children: "4. Fallback & Control Logic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 mb-3", children: "Invalid inputs trigger guided responses. Users are redirected to the main menu to prevent dead-end conversations." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-primary/20 bg-card p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-6 text-xl font-bold tracking-tight text-foreground", children: "🧑‍💼 Shop Owner Dashboard & Control System" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-sm text-muted-foreground leading-relaxed", children: [
        "Beyond customer interaction, Dukaan Dost includes a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "secure admin interface for shop owners" }),
        ", enabling them to monitor, manage, and analyze business operations in real-time."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 text-sm font-bold text-foreground", children: "📊 Order Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Today's Orders:" }),
              " View all orders received (ID, Customer, Products, Status)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Order History:" }),
              " Access past orders with date/status filtering"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 text-sm font-bold text-foreground", children: "📈 Demand Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Most Demanded:" }),
              " Identifies top-selling products"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Least Demanded:" }),
              " Highlights low-performing products"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trends:" }),
              " Tracks product demand over time"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/30 p-5 md:col-span-2 lg:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 text-sm font-bold text-foreground", children: "⚙️ Architecture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Backend aggregates order data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Analytics layer processes demand metrics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Dashboard visualizes insights in real-time" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-xl border border-primary/30 bg-primary/10 p-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-primary mb-2", children: "Why This Matters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/80 max-w-2xl mx-auto", children: "Most WhatsApp bots only handle conversations. Dukaan Dost integrates customer interaction with business operations, providing analytics for smarter decisions and creating a lightweight CRM-like system inside the WhatsApp ecosystem." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "⚡" }),
          " Impact on Business"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Near-instant response to customer queries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Significant reduction in manual workload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Improved customer experience consistency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Provides data-driven decision making" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-3 font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "🔮" }),
          " Future Scope"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• AI-based intent detection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Payment integration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Product database dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Order analytics system" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 text-center pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "🎯 Final Positioning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-sm text-muted-foreground max-w-2xl mx-auto", children: [
        "Dukaan Dost is not just a chatbot. It is a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "two-sided system" }),
        ": Customer-facing automation (chat workflows) and Owner-facing intelligence (dashboard + analytics)."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold tracking-wide text-primary-foreground shadow-[var(--shadow-glow)]", children: "“Not just automating replies — enabling smarter business decisions.”" })
    ] })
  ] });
}
const projects = [{
  tag: "SaaS",
  title: "EduAuto",
  pitch: "Full-stack SaaS that delivers personalized student reports at scale.",
  problem: "Manual student result communication wastes hours of repetitive effort.",
  solution: "A full-stack SaaS with role-based access and WhatsApp automation to deliver personalized student reports at scale.",
  impact: ["**Reduces manual effort by up to 90%**", "Automates delivery via structured data pipelines", "Scalable, real-world deployable architecture"],
  tech: ["Python", "Node.js", "React", "Prisma", "WhatsApp API", "OCR"],
  accent: "from-blue-500/20 to-cyan-500/5",
  buttonLabel: "See How It Works",
  helperText: "Preview available — no login required",
  modalContent: /* @__PURE__ */ jsxRuntimeExports.jsx(EduAutoModal, {})
}, {
  tag: "AI",
  title: "CertifyAI",
  pitch: "AI that generates, verifies, and classifies certificates at scale.",
  problem: "Certificate fraud and manual verification reduce trust in digital documents.",
  solution: "An AI-powered system to generate, verify, and classify certificates at scale.",
  impact: ["**Used in live IEEE events** for certificate automation", "Identifies document inconsistencies using ML", "Cuts manual verification workload significantly"],
  tech: ["Python", "Machine Learning", "OpenAI API"],
  accent: "from-cyan-500/20 to-blue-500/5",
  thumbnail: "/certifyai.png",
  buttonLabel: "See How It Works",
  helperText: "Preview available — no login required",
  modalContent: /* @__PURE__ */ jsxRuntimeExports.jsx(CertifyAIModal, {})
}, {
  tag: "Automation",
  title: "Dukaan Dost",
  pitch: "WhatsApp chatbot that automates small-business customer workflows.",
  problem: "Small businesses struggle with managing repetitive customer queries.",
  solution: "A WhatsApp-based chatbot to automate customer interaction and business workflows.",
  impact: ["**Automates customer responses** for business owners", "Improves response efficiency and engagement", "Designed for scalable small-business use cases"],
  tech: ["Node.js", "WhatsApp API"],
  accent: "from-sky-500/20 to-blue-500/5",
  buttonLabel: "View Demo Flow",
  helperText: "Chat flow preview — no live demo needed",
  modalContent: /* @__PURE__ */ jsxRuntimeExports.jsx(DukaanDostModal, {})
}];
function renderImpact(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground", children: part.slice(2, -2) }, idx) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, idx));
}
function ProjectMockup({
  accent,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative mb-6 h-32 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${accent}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-3 top-3 flex gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground/20" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-4 bottom-4 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2/3 rounded-full bg-foreground/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-1/2 rounded-full bg-foreground/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-3/4 rounded-full bg-foreground/15" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-3 rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur", children: label })
  ] });
}
function ArchitectureDiagram({
  projectTitle
}) {
  if (projectTitle === "EduAuto") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex w-32 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 py-2 text-xs font-medium text-primary shadow-[var(--shadow-glow)] backdrop-blur-md", children: "React Client" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 flex h-6 w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-px bg-gradient-to-b from-primary/50 to-foreground/20" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex w-40 items-center justify-center rounded-lg border border-border bg-card/60 py-2 text-xs font-medium text-foreground backdrop-blur-md shadow-sm", children: "Node.js API Gateway" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-2 flex h-6 w-full items-center justify-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-px bg-foreground/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 w-48 h-px bg-foreground/20 -translate-y-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-[calc(50%-6rem)] w-px h-3 bg-foreground/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-[calc(50%-6rem)] w-px h-3 bg-foreground/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-20 flex-col items-center justify-center rounded-lg border border-border bg-card/40 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur-md", children: "Prisma DB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-20 flex-col items-center justify-center rounded-lg border border-border bg-card/40 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur-md", children: "OCR Engine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-20 flex-col items-center justify-center rounded-lg border border-border bg-card/40 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur-md", children: "WhatsApp" })
      ] })
    ] });
  }
  if (projectTitle === "CertifyAI") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-between gap-1 overflow-hidden", children: ["CSV Data", "Validation", "Generator", "Email Drop"].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium text-foreground text-center whitespace-nowrap", children: step })
      ] }),
      i < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-border" }) })
    ] }, step)) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full max-w-sm items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-xl shadow-[0_0_15px_rgba(37,211,102,0.1)]", children: "💬" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium text-muted-foreground", children: "User" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card px-1 text-[9px] text-muted-foreground border border-border", children: "API" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-3 text-center shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-primary whitespace-nowrap", children: "Workflow Engine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[9px] text-foreground/60", children: "Node.js Logic" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-xl shadow-sm", children: "📊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium text-muted-foreground", children: "Dashboard" })
    ] })
  ] }) });
}
function ProjectModal({
  project,
  onClose
}) {
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-background/80", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    scale: 0.95,
    opacity: 0,
    y: 20
  }, animate: {
    scale: 1,
    opacity: 1,
    y: 0
  }, exit: {
    scale: 0.95,
    opacity: 0,
    y: 20
  }, transition: {
    type: "spring",
    stiffness: 300,
    damping: 24
  }, onClick: (e) => e.stopPropagation(), className: "relative flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-card/90 px-6 py-4 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground", children: project.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold tracking-tight", children: project.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6 6 18" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 6 12 12" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Screenshots" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card/50 flex items-center justify-center", children: project.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.thumbnail, alt: "Screenshot", className: "h-full w-full object-cover object-top opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Screenshots Area" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Architecture Diagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-secondary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchitectureDiagram, { projectTitle: project.title }) })
        ] })
      ] }),
      project.modalContent
    ] })
  ] }) });
}
function ProjectCard({
  p,
  i,
  onOpenModal
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { variants: fadeUp, whileHover: {
    y: -6
  }, transition: {
    type: "spring",
    stiffness: 300,
    damping: 24
  }, className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-7 shadow-[var(--shadow-card)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.19_256/0.55)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 flex flex-col", children: [
      p.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.thumbnail, alt: `${p.title} preview`, className: "h-full w-full object-cover object-top" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectMockup, { accent: p.accent, label: `${p.title.toLowerCase()}.app` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground", children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-bold tracking-tight sm:text-3xl", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.pitch }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex-1 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80", children: "Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: p.problem })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80", children: "Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: p.solution })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80", children: "Impact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1.5", children: p.impact.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: renderImpact(it) })
          ] }, it)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "mt-5 flex flex-wrap gap-1.5", initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: 0.1
          }
        }
      }, children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: {
        hidden: {
          opacity: 0,
          y: 8
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }, className: "rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/30", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { onClick: onOpenModal, whileHover: {
          scale: 1.03
        }, whileTap: {
          scale: 0.97
        }, className: "w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]", children: p.buttonLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-[11px] text-muted-foreground/80", children: p.helperText })
      ] })
    ] })
  ] });
}
function Projects() {
  const [selectedProject, setSelectedProject] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "relative px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-100px"
    }, variants: stagger, className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-16 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "Featured Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: "Products, not just projects." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Three things I've built end-to-end — from problem to deployed system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { p, i, onOpenModal: () => setSelectedProject(p) }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedProject && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectModal, { project: selectedProject, onClose: () => setSelectedProject(null) }) })
  ] });
}
function WhatIBuild() {
  const items = [{
    title: "AI Automation Systems",
    desc: "Pipelines that replace repetitive human workflows.",
    icon: "✦"
  }, {
    title: "SaaS Products",
    desc: "Full-stack tools shipped for real users.",
    icon: "◆"
  }, {
    title: "Workflow Optimization",
    desc: "Internal tools that make teams move faster.",
    icon: "▲"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "build", className: "relative border-y border-border bg-card/30 px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
    once: true,
    margin: "-100px"
  }, variants: stagger, className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "What I Build" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: "Focused on building systems that create real impact." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, whileHover: {
      y: -6,
      scale: 1.02
    }, transition: {
      type: "spring",
      stiffness: 280,
      damping: 22
    }, className: "group rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-xl transition-all hover:border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        scale: 0,
        rotate: -30,
        opacity: 0
      }, whileInView: {
        scale: 1,
        rotate: 0,
        opacity: 1
      }, viewport: {
        once: true
      }, transition: {
        type: "spring",
        stiffness: 220,
        damping: 14,
        delay: 0.1
      }, className: "mb-6 grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-xl text-primary transition-transform group-hover:scale-110 group-hover:rotate-6", children: it.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: it.desc })
    ] }, it.title)) })
  ] }) });
}
function Skills() {
  const groups = [{
    label: "Languages",
    items: ["Python", "JavaScript", "C / C++"]
  }, {
    label: "Frameworks",
    items: ["React", "Node.js"]
  }, {
    label: "Tools",
    items: ["OpenAI API", "Firebase", "Git"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
    once: true,
    margin: "-100px"
  }, variants: stagger, className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "Toolkit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: "Built with sharp tools." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Tools I use to design, build, and ship products." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, whileHover: {
      y: -6
    }, className: "rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-xl transition-all hover:border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground", children: g.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.ul, { className: "space-y-3", initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1
          }
        }
      }, children: g.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { variants: {
        hidden: {
          opacity: 0,
          x: -12
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }, className: "group/item flex items-center justify-between border-b border-border/60 pb-3 text-foreground transition-colors last:border-0 hover:text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-dot-pulse transition-transform group-hover/item:scale-150" })
      ] }, s)) })
    ] }, g.label)) })
  ] }) });
}
function Achievements() {
  const items = [{
    title: "Oracle Generative AI Professional",
    detail: "Advanced certification in AI systems"
  }, {
    title: "Oracle AI Foundations",
    detail: "Foundational AI & ML certification"
  }, {
    title: "OpenAI Buildathon",
    detail: "State Level Qualifier"
  }, {
    title: "Smart India Hackathon",
    detail: "Internal Round Selection"
  }, {
    title: "EY Techathon",
    detail: "Advanced to Round 2"
  }, {
    title: "IEEE CIS Chandigarh University",
    detail: "Core Team Member building tech initiatives"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-t border-border bg-card/30 px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
    once: true,
    margin: "-100px"
  }, variants: stagger, className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "Recognition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: "Achievements & experience." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      x: i % 2 === 0 ? -32 : 32
    }, whileInView: {
      opacity: 1,
      x: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.55,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1]
    }, whileHover: {
      scale: 1.02,
      x: i % 2 === 0 ? 4 : -4
    }, className: "group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-xl transition-[border-color,background] hover:border-primary/50 hover:bg-card/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60 font-mono text-xs text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: it.detail })
      ] })
    ] }, it.title)) })
  ] }) });
}
function Contact() {
  return ContactImpl();
}
function OtherWork() {
  const others = [{
    tag: "Web",
    title: "Minoti Memorials NGO Website",
    problem: "NGOs often lack a strong online presence to reach wider audiences.",
    solution: "Designed and developed a responsive website to improve accessibility and outreach.",
    impact: ["Improved digital presence for the NGO", "Enhanced accessibility and user experience", "Enabled better communication with supporters"],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.minotimemorials.com/"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "other", className: "relative px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
    once: true,
    margin: "-100px"
  }, variants: stagger, className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-10 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Other Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl", children: "Additional things I've shipped." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: others.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { variants: fadeUp, whileHover: {
      y: -4
    }, className: "group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-xl transition-all hover:border-primary/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground", children: p.tag }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold tracking-tight", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: p.solution }),
        " ",
        p.problem
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground", children: p.impact.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary/60" }),
        it
      ] }, it)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground", children: t }, t)) }),
      p.link && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.a, { href: p.link, target: "_blank", rel: "noopener noreferrer", whileHover: {
        scale: 1.03
      }, whileTap: {
        scale: 0.97
      }, className: "mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]", children: "View Website" })
    ] }, p.title)) })
  ] }) });
}
function CopyEmailButton() {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "mailto:krishmunjal126@gmail.com";
      return;
    }
    navigator.clipboard.writeText("krishmunjal126@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { onClick: handleCopy, whileHover: {
    scale: 1.06
  }, whileTap: {
    scale: 0.97
  }, transition: {
    type: "spring",
    stiffness: 300,
    damping: 20
  }, className: "group relative rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground animate-pulse-glow transition-all duration-300 hover:brightness-110", children: [
    copied ? "Copied to Clipboard!" : "Send Me an Email",
    !copied && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 inline-block transition-transform group-hover:translate-x-1", children: "→" })
  ] });
}
function CopyEmailLink({
  children,
  className
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "mailto:krishmunjal126@gmail.com";
      return;
    }
    navigator.clipboard.writeText("krishmunjal126@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopy, className, children: copied ? "Copied!" : children });
}
function ContactImpl() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", style: {
      background: "var(--gradient-glow)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: stagger, className: "relative mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }, className: "text-balance text-5xl font-bold tracking-tight sm:text-6xl", children: [
        "Let's build something ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "impactful" }),
        " together."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground", children: "Have an idea, internship, or problem worth solving? Let's talk." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyEmailButton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/krishmunjal01", target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "GitHub ↗" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/krishmunjal/", target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "LinkedIn ↗" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyEmailLink, { className: "transition-colors hover:text-foreground", children: "Email ↗" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-xs font-bold text-primary", children: "KM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Krish Munjal"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/krishmunjal01", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground", children: "GitHub" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/krishmunjal/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground", children: "LinkedIn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyEmailLink, { className: "hover:text-foreground", children: "Email" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtherWork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatIBuild, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
