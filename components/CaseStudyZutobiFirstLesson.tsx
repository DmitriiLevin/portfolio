"use client";

import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";

const variants = [
  {
    id: "control",
    label: "Control",
    description: "No dialog after subscription. Users were left to navigate the app on their own after completing the paywall.",
    image: "/images/projects/zutobi-first-lesson/control.png",
  },
  {
    id: "v1",
    label: "Variant 1",
    description: `A pop-up immediately after subscribing with a clear CTA "Start Lesson" — focusing the user's attention on starting the first lesson right away.`,
    image: "/images/projects/zutobi-first-lesson/v1.png",
  },
  {
    id: "v2",
    label: "Variant 2",
    description: "After subscribing, the user is automatically redirected to the first lesson — removing the extra step of decision entirely.",
    image: "/images/projects/zutobi-first-lesson/v2.png",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}

export default function CaseStudyZutobiFirstLesson() {
  const [active, setActive] = useState("control");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const variant = variants.find(v => v.id === active)!;

  return (
    <main className="w-full px-4 md:px-6" style={{ maxWidth: "1136px", margin: "0 auto", padding: "80px 0 120px" }}>
      <div>

        {/* HERO */}
        <FadeIn>
          <div className="mb-28">
            <p className="text-sm mb-4" style={{ color: "#555555" }}>Zutobi · 2022–2025</p>
            <h1 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(28px, 5vw, 56px)", lineHeight: "64px" }}>
              First Lesson Activation
            </h1>
            <p style={{ color: "#888888", fontSize: "22px", lineHeight: "34px", maxWidth: "600px" }}>
              How prompting users to start their first lesson immediately after subscribing improved both trial retention and paid conversion.
            </p>
          </div>
        </FadeIn>

        {/* METRICS */}
        <FadeIn delay={0.1}>
          <div className="flex gap-8 md:gap-16 mb-28" style={{ alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "72px", fontWeight: 500, color: "#ffffff", lineHeight: 1 }}>+5.15%</p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#555555" }}>Install-to-Trial conversion</p>
            </div>
            <div style={{ width: "1px", background: "#222222", alignSelf: "stretch" }} />
            <div>
              <p style={{ fontSize: "48px", fontWeight: 500, color: "#555555", lineHeight: 1 }}>+4.82%</p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#555555" }}>Trial-to-Paid conversion</p>
            </div>
          </div>
        </FadeIn>

        {/* HERO IMAGE */}
        <FadeIn delay={0.15}>
          <div className="w-full rounded-2xl mb-28 overflow-hidden" style={{ background: "#161616", height: "clamp(200px, 40vw, 480px)" }}>
            <div onClick={() => setLightbox("/images/projects/zutobi-first-lesson/cover.png")} style={{ cursor: "zoom-in", width: "100%", height: "100%" }}>
              <img src="/images/projects/zutobi-first-lesson/cover.png" alt="First lesson activation" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
        </FadeIn>

        {/* THE PROBLEM */}
        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The problem</h2>
            <p style={{ color: "#aaa8a4", fontSize: "18px", lineHeight: "30px", maxWidth: "680px" }}>
              25% of users cancelled their trial within the first 10 minutes — often before engaging with any core functionality. They subscribed, but never experienced the product's value. The problem wasn't the paywall. It was what happened right after it.
            </p>
          </div>
        </FadeIn>

        {/* INSIGHT */}
        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The insight</h2>
            <p style={{ color: "#aaa8a4", fontSize: "18px", lineHeight: "30px", maxWidth: "680px" }}>
              Analytics revealed a strong correlation: users who completed the first lesson had a conversion rate of 18.1%, while users who did not complete it converted at only 10.1%. The data pointed to one clear lever — get users to start their first lesson as early as possible.
            </p>
          </div>
        </FadeIn>

        {/* ANALYTICS IMAGE */}
        <FadeIn>
          <div className="w-full rounded-2xl mb-28 overflow-hidden" style={{ background: "#161616", height: "400px", cursor: "zoom-in" }} onClick={() => setLightbox("/images/projects/zutobi-first-lesson/analytics.png")}>
            <img src="/images/projects/zutobi-first-lesson/analytics.png" alt="Analytics" className="w-full h-full object-contain p-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
        </FadeIn>

        {/* THE APPROACH */}
        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The approach</h2>
            <p style={{ color: "#aaa8a4", fontSize: "18px", lineHeight: "30px", maxWidth: "680px" }}>
              We researched how other education apps handle the moment right after subscription — and found that most simply drop users into a home screen. We hypothesized that a focused entry point directly into the first lesson would reduce cognitive load and guide users toward the action most likely to drive retention.
            </p>
          </div>
        </FadeIn>

        {/* WHAT WE TESTED */}
        <FadeIn>
          <div className="mb-8">
            <h2 className="font-medium mb-8" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>What we tested</h2>
            <div className="flex gap-2 mb-6">
              {variants.map(v => (
                <button key={v.id} onClick={() => setActive(v.id)} className="text-sm rounded-full px-4 py-1.5 transition" style={{ border: `1px solid ${active === v.id ? "#ffffff" : "#222222"}`, color: active === v.id ? "#ffffff" : "#555555", background: "transparent", cursor: "pointer" }}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn key={active}>
          <div className="rounded-2xl p-6 mb-28" style={{ background: "#161616" }}>
            <p style={{ color: "#888888", fontSize: "16px", lineHeight: "26px", marginBottom: "20px" }}>{variant.description}</p>
            <div className="w-full rounded-xl overflow-hidden" style={{ background: "#222222", cursor: "zoom-in" }} onClick={() => setLightbox(variant.image)}>
              <img src={variant.image} alt={variant.label} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
        </FadeIn>

        {/* RESULTS */}
        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>Why V2 won</h2>
            <p style={{ color: "#aaa8a4", fontSize: "18px", lineHeight: "30px", maxWidth: "680px", marginBottom: "24px" }}>
              Variant 2 outperformed both the control and Variant 1 across all key metrics. By removing the decision entirely — no pop-up, no extra tap — users were immediately inside the product doing the one thing most likely to make them stay.
            </p>
            <p style={{ color: "#aaa8a4", fontSize: "18px", lineHeight: "30px", maxWidth: "680px" }}>
              The experiment confirmed that early and focused user activation has a measurable impact on conversion and engagement — directing users to start the first lesson immediately after subscribing resulted in higher Trial-to-Paid and Install-to-Trial conversion rates.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>Results</h2>
            <p style={{ color: "#aaa8a4", fontSize: "18px", lineHeight: "30px", maxWidth: "680px", marginBottom: "32px" }}>
              V2 outperformed across all key conversion metrics — both Trial-to-Paid and Install-to-Paid improved significantly compared to the baseline and V1.
            </p>
            <div
              onClick={() => setLightbox("/images/projects/zutobi-first-lesson/results.png")}
              style={{ cursor: "zoom-in" }}
            >
              <img
                src="/images/projects/zutobi-first-lesson/results.png"
                alt="Results"
                style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
              />
            </div>
          </div>
        </FadeIn>

        {/* LEARNINGS */}
        <FadeIn>
          <div>
            <h2 className="font-medium mb-8" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>What I took away</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: "01", title: "Retention starts at activation", body: "25% of users cancelled within 10 minutes. The paywall wasn't the problem — it was the empty moment right after it. Fixing activation fixed retention." },
                { n: "02", title: "Remove decisions, not just friction", body: "V1 added a CTA. V2 removed a decision. The difference was significant. When you know what the user should do next, don't ask — just take them there." },
                { n: "03", title: "Data points to the lever", body: "The analytics correlation between first lesson completion and conversion gave us a clear hypothesis before we designed anything. Good experiment design starts with the data, not the solution." },
              ].map((l, i) => (
                <FadeIn key={l.n} delay={i * 0.08} className="h-full">
                  <div className="rounded-2xl p-8 h-full" style={{ background: "#161616" }}>
                    <p className="text-xs mb-3" style={{ color: "#555555" }}>{l.n}</p>
                    <p className="font-medium mb-3" style={{ color: "#ffffff", fontSize: "17px" }}>{l.title}</p>
                    <p style={{ color: "#888888", fontSize: "15px", lineHeight: "24px" }}>{l.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out",
            padding: "clamp(16px, 4vw, 48px)"
          }}
        >
          <img
            src={lightbox}
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "12px" }}
            onClick={e => e.stopPropagation()}
            alt=""
          />
        </div>
      )}
    </main>
  );
}
