"use client";
import Link from "next/link";

const projects = [
  {
    title: "Zutobi – Trial Transparency",
    description: "How transparent trial communication lifted Install-to-Trial conversion by +7% on iOS US.",
    company: "Zutobi",
    year: "2025",
    href: "/case-studies/zutobi-onboarding",
    image: "/images/projects/zutobi/Examples.png",
  },
  {
    title: "Zutobi Instructor – A Platform for Driving Schools",
    description: "Designing an MVP for US driving schools from zero — replacing spreadsheets with a focused tool.",
    company: "Zutobi",
    year: "2025",
    href: "/case-studies/zutobi-instructor",
    image: "/images/projects/zutobi-instructor/cover.png",
  },
  {
    title: "Zutobi – First Lesson Activation",
    description: "How prompting users to start their first lesson immediately after subscribing reduced early cancellations.",
    company: "Zutobi",
    year: "2025",
    href: "/case-studies/zutobi-first-lesson",
    image: "/images/projects/zutobi-first-lesson/cover.png",
  },
  {
    title: "Creative Fabrica – Subscription Optimization",
    description: "How adding a timeline to the payment modal lifted trial conversion by 3.51% across 73K+ users.",
    company: "Creative Fabrica",
    year: "2025",
    href: "/case-studies/payment-modal-timeline",
    image: "/images/modal-v2.png",
  },
  {
    title: "Friggy – Gamified Learning App",
    description: "A personalized book summary app built around audio-first experience and gamification.",
    company: "Friggy",
    year: "2025",
    href: "/case-studies/friggy",
    image: "/images/projects/friggy/cover.png",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      
      {/* HERO */}
      <div className="overflow-hidden min-w-0" style={{ 
        maxWidth: "1080px", 
        margin: "0 auto", 
        padding: "96px 48px 72px" 
      }}>
        <h1 className="max-w-full min-w-0" style={{ 
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(44px, 6vw, 72px)", 
          fontWeight: 400, 
          color: "var(--foreground)", 
          lineHeight: "1.05", 
          letterSpacing: "-0.01em",
          marginBottom: "20px", 
          maxWidth: "700px" 
        }}>
          Hi, I&apos;m Dima Levin
        </h1>
        <p className="max-w-full min-w-0 break-words overflow-hidden" style={{ 
          fontSize: "clamp(18px, 2.5vw, 32px)",
          fontWeight: 400, 
          color: "var(--secondary)", 
          lineHeight: "1.35",
          maxWidth: "820px",
        }}>
          Senior Product Designer at Creative Fabrica, based in Warsaw.
        </p>
        <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
          <a href="mailto:dmutrui.levin@gmail.com"
             style={{ fontSize: "18px", fontWeight: 600, color: "var(--secondary)", textDecoration: "none", transition: "color 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.color = "var(--foreground)"}
             onMouseLeave={e => e.currentTarget.style.color = "var(--secondary)"}>
            Email
          </a>
          <a href="https://www.linkedin.com/in/dmytrolevin/"
             target="_blank" rel="noreferrer"
             style={{ fontSize: "18px", fontWeight: 600, color: "var(--secondary)", textDecoration: "none", transition: "color 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.color = "var(--foreground)"}
             onMouseLeave={e => e.currentTarget.style.color = "var(--secondary)"}>
            LinkedIn
          </a>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="min-w-0 overflow-hidden" style={{ 
        maxWidth: "1080px", 
        margin: "0 auto", 
        padding: "0 48px 96px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px"
      }}>
        {projects.map((p, i) => {
          const imageSrc = p.image || `https://picsum.photos/seed/${i + 10}/1400/700`;
          return (
          <Link
            key={i}
            href={p.href || "#"}
            style={{ 
              display: "block", 
              textDecoration: "none", 
              cursor: "pointer",
            }}
          >
            {/* IMAGE */}
            <div style={{ borderRadius: "16px", overflow: "hidden", width: "100%", aspectRatio: "4/3", background: "#f0ece5", border: "1px solid var(--border)" }}>
              <img
                src={imageSrc}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transform: "scale(1)",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
            {/* TEXT */}
            <div style={{ padding: "20px 0 0 0" }}>
              <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--foreground)", marginBottom: "4px" }}>
                {p.title}
              </p>
              <p style={{ fontSize: "14px", color: "var(--secondary)", fontWeight: 500, letterSpacing: "0.02em" }}>
                {p.company} · {p.year}
              </p>
            </div>
          </Link>
        ); })}
      </div>

    </main>
  );
}
