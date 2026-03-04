"use client";

import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";

const experiments = [
  {
    id: 1,
    label: "Experiment 01",
    title: `Adding "How your free trial works" section`,
    context: `Zutobi's paywall showed product benefits, ratings, and social proof — but never explained how the free trial actually worked. Users had no clarity on when they'd be charged or what they were signing up for.`,
    hypothesis: `Adding a simple explanation of the trial mechanics directly on the paywall would reduce uncertainty and increase the number of users starting a trial.`,
    variants: [
      { id: "a", label: "Baseline", description: "No trial explanation. Only product benefits, reviews, and featured logos shown.", image: "/images/projects/zutobi-onboarding/exp1-baseline.png" },
      { id: "b", label: "Variant B", description: `Added a "How your free trial works" section below the CTA — showing trial steps, reminder timing, and cancellation instructions.`, image: "/images/projects/zutobi-onboarding/exp1-variant.png" },
    ],
    metrics: [
      { value: "+7%", label: "Install-to-Trial conversion" },
      { value: "iOS US", label: "Launched for" },
      { value: "Default", label: "Became new baseline" },
    ],
    insight: `Clearly explaining the trial mechanics gave users more confidence. Even a small informational block had a meaningful impact — proving that trust-building elements can drive conversion.`,
  },
  {
    id: 2,
    label: "Experiment 02",
    title: "Minimal paywall focused on trial clarity",
    context: `After the +7% lift, we hypothesized that users needed even more clarity — not just about the trial steps, but about the full value of what they were signing up for. We took the opposite approach: strip everything away and focus only on what matters most.`,
    hypothesis: `A radically simplified paywall — removing feature lists, ratings, and reviews — and focusing only on trial explanation, transparent pricing, and a clear CTA would increase trial starts further.`,
    variants: [
      { id: "a", label: "Baseline", description: "Rich paywall with features, ratings, reviews, and social proof.", image: "/images/projects/zutobi-onboarding/exp2-baseline.png" },
      { id: "b", label: "Variant B", description: `Minimal paywall — only trial steps, cancellation instructions, transparent pricing, and "Try for $0.00" CTA.`, image: "/images/projects/zutobi-onboarding/exp2-variant.png" },
    ],
    metrics: [
      { value: "+3.1%", label: "Install-to-Trial conversion" },
      { value: "50%", label: "iOS US traffic rollout" },
      { value: "↑ Cancel", label: "Tradeoff observed" },
    ],
    insight: `Transparency builds trust — but it also sets expectations. Users who started trials through the minimal paywall cancelled more before converting to paid. More trials started, but trial quality dropped. The next problem to solve was retention, not just activation.`,
  },
  {
    id: 3,
    label: "Experiment 03",
    title: "Deep onboarding personalization",
    context: `The first two experiments focused on the paywall itself. This experiment stepped back further — to the onboarding flow before the paywall. We hypothesized that users who felt more invested in the product before hitting the paywall would be more likely to start a trial.`,
    hypothesis: `A longer, personalized onboarding flow — with dynamic questions, motivational screens, and gradual paywall build-up — would increase emotional investment and improve Install-to-Trial conversion.`,
    variants: [
      { id: "a", label: "Baseline", description: "Short onboarding — state selection and vehicle type, then paywall.", image: "/images/projects/zutobi-onboarding/exp3-baseline.png" },
      { id: "b", label: "Variant B", description: "Extended flow with dynamic questions, motivational screens, social proof, micro-interactions, and a gradual paywall build-up.", image: "/images/projects/zutobi-onboarding/exp3-variant.png" },
    ],
    metrics: [
      { value: "+5.8%", label: "Install-to-Trial conversion" },
      { value: "Significant", label: "Statistically significant" },
      { value: "↑ Drop-off", label: "Post-paywall tradeoff" },
    ],
    insight: `Personalization raised the bar — users arrived at the paywall with higher expectations, and the product needed to meet them. The lift was real and significant, but early post-paywall drop-off increased, suggesting that a better onboarding flow must be paired with stronger trial value delivery.`,
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

export default function CaseStudyZutobi() {
  const [activeExp, setActiveExp] = useState(1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const experiment = experiments.find(e => e.id === activeExp)!;

  return (
    <main className="w-full">
      <div style={{ maxWidth: "1136px", margin: "0 auto", padding: "0 max(20px, 32px)" }} className="py-24">

        <FadeIn>
          <div className="mb-28">
            <p className="text-sm mb-4" style={{ color: "#555555" }}>Zutobi · 2022–2025</p>
            <h1 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(28px, 5vw, 56px)", lineHeight: "64px" }}>
              Growth Experiments<br />on Onboarding
            </h1>
            <p className="text-base md:text-xl max-w-full overflow-hidden" style={{ color: "#888888", lineHeight: "1.5" }}>
              Three sequential A/B experiments that improved Install-to-Trial conversion — and revealed the hidden tradeoffs between clarity, trust, and retention.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 mb-28 w-full">
            <div className="w-full md:w-auto">
              <p className="text-4xl sm:text-6xl md:text-[72px]" style={{ fontWeight: 500, color: "#ffffff", lineHeight: 1 }}>+7%</p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#555555" }}>Best experiment lift</p>
            </div>
            <div className="hidden md:block flex-shrink-0" style={{ width: "1px", background: "#222222", alignSelf: "stretch", minHeight: "40px" }} />
            <div className="w-full md:w-auto">
              <p className="text-4xl sm:text-6xl md:text-[48px]" style={{ fontWeight: 500, color: "#555555", lineHeight: 1 }}>3</p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#555555" }}>Sequential experiments</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="w-full mb-28">
            <div
              onClick={() => setLightbox("/images/projects/zutobi-onboarding/cover.png")}
              style={{ cursor: "zoom-in" }}
            >
              <img
                src="/images/projects/zutobi-onboarding/cover.png"
                alt="Zutobi"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The product</h2>
            <p className="text-base md:text-lg max-w-full overflow-hidden" style={{ color: "#aaa8a4", lineHeight: "1.6" }}>
              Zutobi is a driving education app for the US market. Users install the app, go through onboarding, and hit a paywall before accessing the full course content. The core growth challenge was converting free installs into paying trial subscribers.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-28">
            <h2 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>The challenge</h2>
            <p className="text-base md:text-lg max-w-full overflow-hidden" style={{ color: "#aaa8a4", lineHeight: "1.6" }}>
              The existing paywall was feature-rich but lacked one thing: clarity about what users were actually signing up for. We ran three sequential experiments, each building on the learnings of the previous one — treating the onboarding and paywall as a system, not isolated screens.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-8">
            <h2 className="font-medium mb-8" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>What we tested</h2>
            <div className="flex gap-2 mb-10">
              {experiments.map(e => (
                <button key={e.id} onClick={() => setActiveExp(e.id)} className="text-sm rounded-full px-4 py-1.5 transition" style={{ border: `1px solid ${activeExp === e.id ? "#ffffff" : "#222222"}`, color: activeExp === e.id ? "#ffffff" : "#555555", background: "transparent", cursor: "pointer" }}>
                  {e.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn key={activeExp}>
          <div className="mb-28">
            <h3 className="font-medium mb-6" style={{ color: "#ffffff", fontSize: "28px" }}>{experiment.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#555555" }}>Context</p>
                <p style={{ color: "#aaa8a4", fontSize: "16px", lineHeight: "26px" }} className="max-w-full overflow-hidden">{experiment.context}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#555555" }}>Hypothesis</p>
                <p style={{ color: "#aaa8a4", fontSize: "16px", lineHeight: "26px" }} className="max-w-full overflow-hidden">{experiment.hypothesis}</p>
              </div>
            </div>

            {activeExp === 3 ? (
              <div className="flex flex-col gap-8 mb-8">
                {experiment.variants.map((v) => (
                  <div
                    key={v.id}
                    className="rounded-2xl p-6 min-w-0"
                    style={{ background: "#161616" }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#555555" }}>{v.label}</p>
                    <p style={{ color: "#888888", fontSize: "16px", lineHeight: "26px", marginBottom: "16px" }}>{v.description}</p>
                    <div
                      onClick={() => setLightbox(v.image)}
                      style={{ cursor: "zoom-in", width: "100%" }}
                    >
                      <img
                        src={v.image}
                        alt={v.label}
                        style={{
                          width: "100%",
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "12px",
                          display: "block",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              style={{ display: "grid", alignItems: "flex-start" }}
            >
              {experiment.variants.map((v) => (
                <div
                  key={v.id}
                  className="flex flex-col rounded-2xl p-6 min-w-0"
                  style={{ background: "#161616" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#555555" }}>{v.label}</p>
                  <p
                    style={{
                      color: "#888888",
                      fontSize: "16px",
                      lineHeight: "26px",
                      marginBottom: "16px",
                      minHeight: "78px"
                    }}
                  >
                    {v.description}
                  </p>
                  <div
                    onClick={() => setLightbox(v.image)}
                    className="flex items-start"
                    style={{ cursor: "zoom-in", width: "100%", minWidth: 0 }}
                  >
                    <img
                      src={v.image}
                      alt={v.label}
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "12px",
                        display: "block",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {experiment.metrics.map((m, i) => (
                <div key={i} className="rounded-xl p-5" style={{ background: "#161616" }}>
                  <p className="font-medium mb-1" style={{ color: "#ffffff", fontSize: "28px" }}>{m.value}</p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#555555" }}>{m.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-6" style={{ background: "#161616", borderLeft: "2px solid #222222" }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#555555" }}>Insight</p>
              <p style={{ color: "#aaa8a4", fontSize: "16px", lineHeight: "26px" }}>{experiment.insight}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <h2 className="font-medium mb-8" style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 40px)" }}>What I took away</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: "01", title: "Trust reduces friction", body: "Even a single informational block explaining how a trial works can meaningfully lift conversion. Users don't need convincing — they need clarity." },
                { n: "02", title: "Clarity has tradeoffs", body: "The minimal paywall improved trial starts but increased post-trial cancellations. Transparency must be paired with strong value delivery during the trial." },
                { n: "03", title: "Personalization raises the bar", body: "A deeper onboarding flow raised user expectations at the paywall. When the product met that bar — conversion lifted. When it didn't — drop-off increased." },
              ].map((l, i) => (
                <FadeIn key={l.n} delay={i * 0.08} className="h-full">
                  <div className="rounded-2xl p-8 h-full" style={{ background: "#161616" }}>
                    <p className="text-xs mb-3" style={{ color: "#222222" }}>{l.n}</p>
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
