"use client";

import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";

const variations = [
  {
    id: "control",
    label: "Control",
    description: "Historically, the default paywall — a standard modal with general product info and trust signals at the top.",
    image: "/images/modal-control.png",
  },
  {
    id: "v1",
    label: "Variation 1",
    description: "Added a vertical 'How the trial works' section directly below the CTA — an additional trust signal visible at the moment of decision.",
    image: "/images/modal-v1.png",
  },
  {
    id: "v2",
    label: "Variation 2",
    winner: true,
    description: "Horizontal timeline communicating how the trial works — Today, Day 2 reminder, Day 7 charge. Winner with +3.51% lift.",
    image: "/images/modal-v2.png?v=2",
  },
  {
    id: "v3",
    label: "Variation 3",
    description: "Enhanced timeline with additional UI elements showing trial steps and highlighting where the user currently is in the flow.",
    image: "/images/modal-v3.png?v=2",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    } as CSSProperties}>
      {children}
    </div>
  );
}

export default function CaseStudyPaymentModal() {
  const [active, setActive] = useState("v2");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const variation = variations.find(v => v.id === active)!;

  return (
    <main className="w-full">
      <div style={{ maxWidth: "1136px", margin: "0 auto", padding: "0 max(20px, 32px)" }} className="py-24">

        {/* HERO */}
        <FadeIn>
          <div className="mb-32 w-full">
            <p className="text-sm mb-4" style={{ color: "#555555" }}>
              Creative Fabrica · 2025
            </p>
            <h1 className="font-medium mb-6 w-full" style={{ color: "#ffffff", fontSize: "clamp(28px, 5vw, 56px)", lineHeight: "64px" }}>
              Free Trial Modal — Timeline Test
            </h1>
            <p className="max-w-full text-base md:text-xl text-[#888888] leading-relaxed overflow-hidden" style={{ maxWidth: "680px" }}>
              How adding a "how the trial works" timeline to the payment modal lifted trial conversions by 3.51% across 73K+ users.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-28 w-full">
            <h2 className="font-medium mb-6 w-full" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The product</h2>
            <p className="text-base md:text-lg overflow-hidden" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              Creative Fabrica is a subscription marketplace for design assets — fonts, graphics, templates, and AI tools for creators. Users sign up for a free trial to get unlimited access, which then converts to a paid subscription.
            </p>
          </div>
        </FadeIn>

        {/* METRICS */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 mb-28 w-full">
            <div className="w-full md:w-auto">
              <p className="mb-1 text-4xl sm:text-6xl md:text-[72px]" style={{ fontWeight: 500, color: "#ffffff" }}>+3.51%</p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#555555" }}>Trial conversion lift</p>
            </div>
            <div className="hidden md:block flex-shrink-0" style={{ width: "1px", height: "60px", background: "#222222" }} />
            <div className="w-full md:w-auto">
              <p className="mb-1 text-3xl sm:text-5xl md:text-[48px]" style={{ fontWeight: 500, color: "#555555" }}>73.6K</p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#555555" }}>Users per variation</p>
            </div>
          </div>
        </FadeIn>

        {/* HERO IMAGE */}
        <FadeIn delay={0.15}>
          <div className="w-full rounded-2xl mb-28 overflow-hidden bg-[#161616]" style={{ width: "100%", maxWidth: "100%" }}>
            <img
              src="/images/modal-v2.png?v=2"
              alt="Winning variation"
              width="100%"
              style={{ width: "100%", height: "auto", display: "block", cursor: "pointer" }}
              onClick={() => setLightbox("/images/modal-v2.png")}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        </FadeIn>

        {/* PROBLEM */}
        <FadeIn>
          <div className="mb-28 w-full">
            <h2 className="font-medium mb-6 w-full" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The problem</h2>
            <p className="text-base md:text-lg overflow-hidden" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              Creative Fabrica's free trial modal had a clean, functional layout — but a significant amount of whitespace below the form was doing nothing. Users were seeing a checkout screen with no reassurance about what they were signing up for, no clarity on when they'd be charged, and no sense of the experience ahead of them. We hypothesized that this dead space was a missed opportunity to reduce anxiety and increase activation.
            </p>
          </div>
        </FadeIn>

        {/* APPROACH */}
        <FadeIn>
          <div className="mb-28 w-full">
            <h2 className="font-medium mb-6 w-full" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The approach</h2>
            <p className="text-base md:text-lg overflow-hidden mb-4" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              Before designing, we looked at how other subscription products handle trial anxiety at checkout. Products like Canva and Miro use timeline-style explanations to show users exactly what happens after they sign up — and it works. We hypothesized the same pattern could work for Creative Fabrica.
            </p>
            <p className="text-base md:text-lg overflow-hidden" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              Instead of guessing which execution would be most effective, we designed three variations — each testing a different level of detail and visual complexity — and ran them simultaneously against the control with a 33/33/33 split.
            </p>
          </div>
        </FadeIn>

        {/* VARIATIONS */}
        <FadeIn>
          <div className="mb-28 w-full">
            <h2 className="font-medium mb-8 w-full" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>What we tested</h2>
            <div className="flex gap-2 mb-6 flex-wrap">
              {variations.map(v => (
                <button
                  key={v.id}
                  onClick={() => setActive(v.id)}
                  className="text-sm rounded-full px-4 py-1.5 transition flex items-center gap-2"
                  style={{
                    border: `1px solid ${active === v.id ? "#ffffff" : "#222222"}`,
                    color: active === v.id ? "#ffffff" : "#555555",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {v.label}
                  {v.winner && (
                    <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: "#222222", color: "#888888" }}>Winner</span>
                  )}
                </button>
              ))}
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#161616" }}>
              <p className="mb-6 overflow-hidden" style={{ color: "#888888", fontSize: "20px", lineHeight: "32px", maxWidth: "680px" }}>{variation.description}</p>
              <div className="w-full rounded-xl overflow-hidden bg-[#161616]" style={{ width: "100%", maxWidth: "100%" }}>
                <img
                  src={variation.image}
                  alt={variation.label}
                  width="100%"
                  className="rounded-xl cursor-pointer"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  onClick={() => setLightbox(variation.image)}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* WHY IT WORKED */}
        <FadeIn>
          <div className="mb-28 w-full">
            <h2 className="font-medium mb-6 w-full" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>Why Variation 2 won</h2>
            <p className="text-base md:text-lg overflow-hidden mb-4" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              Variation 2 stripped away everything except what the user needed at that moment — a clear, scannable answer to 'what am I signing up for?' No feature lists, no distractions. Just the three steps of the trial, presented horizontally so the eye moves through them in seconds.
            </p>
            <p className="text-base md:text-lg overflow-hidden mb-4" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              Variation 3 showed the strongest raw lift (+6.32%) but had only 131 users in its sample — far too small to draw conclusions. Variation 1 showed minimal directional lift (+1.11%) with no significance.
            </p>
            <p className="text-base md:text-lg overflow-hidden" style={{ color: "#aaa8a4", lineHeight: "1.6", maxWidth: "680px" }}>
              One tradeoff worth noting: Variation 2 also showed a +12.9% increase in subscription cancellations — a signal we flagged for monitoring post-launch. The test confirmed that reducing uncertainty at checkout improves conversion, but the full retention impact requires longer observation.
            </p>
          </div>
        </FadeIn>

        {/* LEARNINGS */}
        <FadeIn>
          <div className="w-full">
            <h2 className="font-medium mb-8 w-full" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>What I took away</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: "01", title: "Context reduces friction", body: "Users don't abandon because they dislike the offer — they abandon because they're uncertain about what happens next. A simple timeline resolved that." },
                { n: "02", title: "Test simultaneously", body: "Running three variations at once instead of sequentially cut our time-to-insight significantly. For conversion tests, parallel testing is almost always worth the added complexity." },
                { n: "03", title: "Sample size matters", body: "Variations 1 and 3 showed stronger directional lift but didn't reach significance. Shipping without significance — even when results look good — is a gamble that always comes back around." },
              ].map((l, i) => (
                <FadeIn key={l.n} delay={i * 0.08} className="h-full">
                  <div className="rounded-2xl p-8 h-full" style={{ background: "#161616" }}>
                    <p className="text-xs mb-3" style={{ color: "#555555" }}>{l.n}</p>
                    <p className="font-medium mb-3" style={{ color: "#ffffff", fontSize: "17px" }}>{l.title}</p>
                    <p className="mb-0 overflow-hidden" style={{ color: "#888888", fontSize: "15px", lineHeight: "24px", maxWidth: "680px" }}>{l.body}</p>
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
