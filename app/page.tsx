"use client";

import Link from "next/link";

const projects = [
  {
    title: "Creative Fabrica – Subscription Optimization",
    subtitle: "Monetization, retention flows, A/B testing",
    description: "How adding a timeline to the payment modal lifted trial conversion by 3.51% across 73K+ users.",
    company: "Creative Fabrica",
    year: "2025",
    status: "CASE STUDY ↗",
    href: "/case-studies/payment-modal-timeline",
    bg: "#1e1c1a",
  },
  {
    title: "Zutobi – Growth Experiments on Onboarding",
    subtitle: "A/B testing, paywall optimization, trial conversion",
    description: "Three sequential A/B experiments that improved Install-to-Trial conversion — and revealed the tradeoffs between clarity and retention.",
    company: "Zutobi",
    year: "2025",
    status: "CASE STUDY ↗",
    href: "/case-studies/zutobi-onboarding",
    bg: "#1a1d22",
  },
  {
    title: "Zutobi – First Lesson Activation",
    subtitle: "Trial retention, activation, A/B testing",
    description: "How prompting users to start their first lesson immediately after subscribing reduced early cancellations and improved Trial-to-Paid conversion.",
    company: "Zutobi",
    year: "2025",
    status: "CASE STUDY ↗",
    href: "/case-studies/zutobi-first-lesson",
    bg: "#1a1e1c",
  },
  {
    title: "Zutobi Instructor – A Platform for Driving Schools",
    subtitle: "Product design, MVP, B2B SaaS",
    description: "Designing an MVP for US driving schools from zero — replacing spreadsheets with a focused scheduling and student management tool.",
    company: "Zutobi",
    year: "2025",
    status: "CASE STUDY ↗",
    href: "/case-studies/zutobi-instructor",
    bg: "#1c1c1e",
  },
  {
    title: "Friggy – Gamified Learning App",
    subtitle: "Onboarding, personalization, audio summaries",
    description: "A personalized book summary app built around audio-first experience, habit formation, and gamification.",
    company: "Friggy",
    year: "2025",
    status: "SHIPPED ↗",
    href: "/case-studies/friggy",
    bg: "#1e1a22",
  },
];

export default function Home() {
  return (
    <main style={{ background: "#111110", minHeight: "100vh" }}>
      {/* HERO */}
      <div style={{ padding: "80px 48px 60px" }}>
        <h1 style={{ fontSize: "56px", fontWeight: 500, color: "#e8e4dd", lineHeight: "64px", marginBottom: "16px", maxWidth: "700px" }}>
          Hi, I&apos;m Dima Levin
        </h1>
        <p style={{ fontSize: "20px", color: "#888580", lineHeight: "30px", maxWidth: "560px" }}>
          Senior Product Designer focused on Growth, experimentation, and building scalable product systems.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div style={{ padding: "0 48px 80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {projects.map((p, i) => (
          <Link key={i} href={p.href || "#"} style={{ textDecoration: "none", display: "block" }}>
            <div>
              {/* THUMBNAIL */}
              <div style={{ width: "100%", aspectRatio: "16/9", background: p.bg, borderRadius: "12px", marginBottom: "16px", overflow: "hidden" }} />
              {/* TEXT */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "16px", fontWeight: 500, color: "#e8e4dd" }}>{p.title}</span>
                <span style={{ fontSize: "11px", color: "#666360", border: "1px solid #2a2a28", borderRadius: "999px", padding: "2px 8px", whiteSpace: "nowrap", marginTop: "2px" }}>{p.status}</span>
              </div>
              <p style={{ fontSize: "14px", color: "#888580", lineHeight: "22px", marginBottom: "8px" }}>{p.description}</p>
              <p style={{ fontSize: "13px", color: "#555350", fontWeight: 500 }}>{p.company} · {p.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
