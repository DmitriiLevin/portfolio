"use client";
import Link from "next/link";

const projects = [
  {
    title: "Creative Fabrica – Subscription Optimization",
    description: "How adding a timeline to the payment modal lifted trial conversion by 3.51% across 73K+ users.",
    company: "Creative Fabrica",
    year: "2025",
    href: "/case-studies/payment-modal-timeline",
    image: "/images/modal-v2.png",
  },
  {
    title: "Zutobi – Growth Experiments on Onboarding",
    description: "Three sequential A/B experiments that improved Install-to-Trial conversion.",
    company: "Zutobi",
    year: "2025",
    href: "/case-studies/zutobi-onboarding",
    image: "/images/projects/zutobi-onboarding/cover.png",
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
    title: "Zutobi Instructor – A Platform for Driving Schools",
    description: "Designing an MVP for US driving schools from zero — replacing spreadsheets with a focused tool.",
    company: "Zutobi",
    year: "2025",
    href: "/case-studies/zutobi-instructor",
    image: "/images/projects/zutobi-instructor/cover.png",
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
    <main style={{ background: "#0e0e0e", minHeight: "100vh" }}>
      
      {/* HERO */}
      <div className="overflow-hidden min-w-0" style={{ 
        maxWidth: "1136px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vw, 80px) max(20px, clamp(16px, 4vw, 48px)) 60px" 
      }}>
        <h1 className="max-w-full min-w-0" style={{ 
          fontSize: "clamp(32px, 5vw, 56px)", 
          fontWeight: 500, 
          color: "#ffffff", 
          lineHeight: "1.15", 
          marginBottom: "24px", 
          maxWidth: "700px" 
        }}>
          Hi, I&apos;m Dima Levin
        </h1>
        <p className="text-xl sm:text-3xl max-w-full min-w-0 break-words overflow-hidden" style={{ 
          fontWeight: 400, 
          color: "#888888", 
          lineHeight: "1.25"
        }}>
          Senior Product Designer at Creative Fabrica, based in Warsaw.
        </p>
        <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
          <a href="mailto:dmutrui.levin@gmail.com"
             style={{ fontSize: "24px", fontWeight: 500, color: "#888888", textDecoration: "none", transition: "color 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
             onMouseLeave={e => e.currentTarget.style.color = "#888888"}>
            Email
          </a>
          <a href="https://www.linkedin.com/in/dmytrolevin/"
             target="_blank" rel="noreferrer"
             style={{ fontSize: "24px", fontWeight: 500, color: "#888888", textDecoration: "none", transition: "color 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
             onMouseLeave={e => e.currentTarget.style.color = "#888888"}>
            LinkedIn
          </a>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="min-w-0 overflow-hidden" style={{ 
        maxWidth: "1136px", 
        margin: "120px auto 0", 
        padding: "0 max(20px, clamp(16px, 4vw, 48px)) 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px"
      }}>
        {projects.map((p, i) => {
          const imageSrc = p.image || `https://picsum.photos/seed/${i + 10}/1400/700`;
          if (p.href === "/case-studies/payment-modal-timeline") {
            console.log("Creative Fabrica project image src:", imageSrc);
          }
          return (
          <Link
            key={i}
            href={p.href || "#"}
            style={{ display: "block", textDecoration: "none" }}
          >
            {/* IMAGE */}
            <div style={{ borderRadius: "12px", overflow: "hidden", width: "100%", aspectRatio: "4/3" }}>
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
              <p style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                {p.title}
              </p>
              <p style={{ fontSize: "24px", color: "rgb(112, 112, 112)", fontWeight: 400 }}>
                {p.company} · {p.year}
              </p>
            </div>
          </Link>
        ); })}
      </div>

    </main>
  );
}
