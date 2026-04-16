"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const variants = [
  {
    id: "control",
    label: "Control",
    description:
      "No guided next step after subscription. Users landed in a broad navigation state and had to decide what to do first.",
    image: "/images/projects/zutobi-first-lesson/control.png",
  },
  {
    id: "v1",
    label: "Variant 1",
    description:
      'A post-subscription dialog with a clear CTA ("Start Lesson"). This reduced ambiguity but still required an extra decision and tap.',
    image: "/images/projects/zutobi-first-lesson/v1.png",
  },
  {
    id: "v2",
    label: "Variant 2",
    description:
      "Users were redirected directly into Lesson 1 immediately after subscribing, removing the post-paywall decision entirely.",
    image: "/images/projects/zutobi-first-lesson/v2.png",
  },
];

const bodyText = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.8,
  color: "var(--secondary)",
} as const;

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Section({ children }: { children: ReactNode }) {
  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
      <FadeIn>{children}</FadeIn>
    </section>
  );
}

export default function CaseStudyZutobiFirstLesson() {
  const [active, setActive] = useState("control");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const variant = variants.find((v) => v.id === active)!;

  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 48px 96px" }}>
        <style>{`
          .first-lesson-kpi-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }
          @media (max-width: 900px) {
            .first-lesson-kpi-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 760px) {
            .first-lesson-kpi-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <section style={{ padding: "96px 0 72px", borderTop: "1px solid var(--border)" }}>
          <FadeIn>
            <p style={{ margin: "0 0 16px", color: "var(--muted)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Zutobi · Growth Design · iOS
            </p>
            <h1
              style={{
                margin: "0 0 18px",
                color: "var(--foreground)",
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(44px, 6vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 400,
                maxWidth: "920px",
                letterSpacing: "-0.02em",
              }}
            >
              First Lesson Activation
            </h1>
            <p style={{ margin: 0, color: "var(--secondary)", fontSize: 18, lineHeight: 1.65, maxWidth: "860px" }}>
              How reducing post-subscription decision load increased immediate activation and improved
              downstream monetization.
            </p>
          </FadeIn>
        </section>

        <section style={{ padding: "0 0 76px" }}>
          <FadeIn>
            <div style={{ border: "1px solid #2a2a28", borderRadius: 14, background: "#161614", padding: 28 }}>
              <div style={{ textAlign: "center", paddingBottom: 26, borderBottom: "1px solid #232320" }}>
                <p style={{ margin: 0, color: "#e8e4dd", fontSize: "clamp(72px, 11vw, 112px)", lineHeight: 1, fontWeight: 500 }}>
                  +5.15%
                </p>
                <p style={{ margin: "12px 0 0", color: "#666360", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Install-to-Trial uplift
                </p>
              </div>

              <div className="first-lesson-kpi-grid" style={{ marginTop: 20 }}>
                <div style={{ border: "1px solid #2a2a28", borderRadius: 10, padding: "14px 16px" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "#666360", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Secondary Metric
                  </p>
                  <p style={{ margin: "6px 0 0", color: "#e8e4dd", fontSize: 16, fontWeight: 500 }}>
                    +4.82% Trial-to-Paid
                  </p>
                </div>
                <div style={{ border: "1px solid #2a2a28", borderRadius: 10, padding: "14px 16px" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "#666360", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Primary Metric
                  </p>
                  <p style={{ margin: "6px 0 0", color: "#e8e4dd", fontSize: 16, fontWeight: 500 }}>
                    Install-to-Trial
                  </p>
                </div>
                <div style={{ border: "1px solid #2a2a28", borderRadius: 10, padding: "14px 16px" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "#666360", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Segment
                  </p>
                  <p style={{ margin: "6px 0 0", color: "#e8e4dd", fontSize: 16, fontWeight: 500 }}>
                    New subscribers
                  </p>
                </div>
                <div style={{ border: "1px solid #2a2a28", borderRadius: 10, padding: "14px 16px" }}>
                  <p style={{ margin: 0, fontSize: 11, color: "#666360", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Decision
                  </p>
                  <p style={{ margin: "6px 0 0", color: "#e8e4dd", fontSize: 16, fontWeight: 500 }}>
                    V2 rolled out
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section style={{ paddingBottom: 76 }}>
          <FadeIn>
            <div
              onClick={() => setLightbox("/images/projects/zutobi-first-lesson/cover.png")}
              style={{ cursor: "zoom-in", borderRadius: 14, overflow: "hidden", border: "1px solid #2a2a28" }}
            >
              <img
                src="/images/projects/zutobi-first-lesson/cover.png"
                alt="First lesson activation cover"
                style={{ width: "100%", height: "auto", display: "block" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          </FadeIn>
        </section>

        <Section>
          <h2 style={{ margin: "0 0 16px", color: "#e8e4dd", fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.2, fontWeight: 500 }}>
            Problem
          </h2>
          <p style={bodyText}>
            A large share of new trial users cancelled within the first session window, often before
            experiencing any core product value. Subscription happened, but activation did not.
          </p>
        </Section>

        <Section>
          <h2 style={{ margin: "0 0 16px", color: "#e8e4dd", fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.2, fontWeight: 500 }}>
            How we identified and validated it
          </h2>
          <p style={bodyText}>
            We combined analytics and behavioral cohorts to locate where conversion was leaking after
            purchase. We mapped post-subscription events, compared first-lesson completion cohorts,
            and validated cancellation timing patterns.
          </p>
          <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
            <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ margin: 0, color: "#e8e4dd", fontSize: 15, fontWeight: 500 }}>Signal</p>
              <p style={{ ...bodyText, fontSize: 16, lineHeight: 1.65, marginTop: 6 }}>
                Early cancellations were concentrated right after subscription.
              </p>
            </div>
            <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ margin: 0, color: "#e8e4dd", fontSize: 15, fontWeight: 500 }}>Validation</p>
              <p style={{ ...bodyText, fontSize: 16, lineHeight: 1.65, marginTop: 6 }}>
                Users who completed Lesson 1 converted to paid materially more often than users who did not.
              </p>
            </div>
            <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ margin: 0, color: "#e8e4dd", fontSize: 15, fontWeight: 500 }}>Interpretation</p>
              <p style={{ ...bodyText, fontSize: 16, lineHeight: 1.65, marginTop: 6 }}>
                The highest-friction moment was immediately after purchase: users had to decide their next action with low context.
              </p>
            </div>
          </div>
          <div
            onClick={() => setLightbox("/images/projects/zutobi-first-lesson/analytics.png")}
            style={{ cursor: "zoom-in", marginTop: 30, borderRadius: 12, overflow: "hidden", border: "1px solid #2a2a28" }}
          >
            <img
              src="/images/projects/zutobi-first-lesson/analytics.png"
              alt="Post-subscription analytics"
              style={{ width: "100%", height: "auto", display: "block" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        </Section>

        <Section>
          <h2 style={{ margin: "0 0 16px", color: "#e8e4dd", fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.2, fontWeight: 500 }}>
            Hypotheses and why we tested them
          </h2>
          <p style={bodyText}>
            We tested progressive levels of post-subscription guidance to isolate causality:
          </p>
          <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
            <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ margin: 0, color: "#e8e4dd", fontSize: 15, fontWeight: 500 }}>H1 — No intervention (control)</p>
              <p style={{ ...bodyText, fontSize: 16, lineHeight: 1.65, marginTop: 6 }}>
                Baseline behavior if users self-navigate after purchase.
              </p>
            </div>
            <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ margin: 0, color: "#e8e4dd", fontSize: 15, fontWeight: 500 }}>H2 — Prompted action (V1)</p>
              <p style={{ ...bodyText, fontSize: 16, lineHeight: 1.65, marginTop: 6 }}>
                A CTA prompt may improve starts, but still leaves a decision step.
              </p>
            </div>
            <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ margin: 0, color: "#e8e4dd", fontSize: 15, fontWeight: 500 }}>H3 — Remove decision (V2)</p>
              <p style={{ ...bodyText, fontSize: 16, lineHeight: 1.65, marginTop: 6 }}>
                Directly entering Lesson 1 should maximize activation and downstream conversion.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={{ margin: "0 0 16px", color: "#e8e4dd", fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.2, fontWeight: 500 }}>
            How we tested
          </h2>
          <p style={bodyText}>
            We ran an A/B/n experiment across new subscribers and evaluated both primary and downstream
            metrics. This allowed us to verify not only immediate behavior change, but monetization impact.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                style={{
                  fontSize: 13,
                  borderRadius: 999,
                  padding: "7px 14px",
                  border: `1px solid ${active === v.id ? "#e8e4dd" : "#2a2a28"}`,
                  color: active === v.id ? "#e8e4dd" : "#666360",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>

          <FadeIn key={active} delay={0.05}>
            <div style={{ marginTop: 22, background: "#161614", border: "1px solid #2a2a28", borderRadius: 14, padding: 22 }}>
              <p style={{ margin: "0 0 16px", color: "#888580", fontSize: 16, lineHeight: 1.7 }}>
                {variant.description}
              </p>
              <div
                style={{ cursor: "zoom-in", borderRadius: 10, overflow: "hidden", border: "1px solid #2a2a28" }}
                onClick={() => setLightbox(variant.image)}
              >
                <img
                  src={variant.image}
                  alt={variant.label}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </div>
          </FadeIn>
        </Section>

        <Section>
          <h2 style={{ margin: "0 0 16px", color: "#e8e4dd", fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.2, fontWeight: 500 }}>
            Results and decision
          </h2>
          <p style={bodyText}>
            The experiment produced a consistent uplift across monetization metrics:
            <br />
            <br />
            - Trial-to-Paid increased from 18.3% to 19.2% (+5.15% relative)
            <br />
            - Install-to-Paid increased from 4.87% to 5.11% (+4.82% relative)
            <br />
            <br />
            Upstream behavior remained stable (no drop in trial starts), indicating the lift came
            from better activation quality rather than acquisition or pricing effects.
          </p>

          <div
            onClick={() => setLightbox("/images/projects/zutobi-first-lesson/results.png")}
            style={{ cursor: "zoom-in", marginTop: 28, borderRadius: 12, overflow: "hidden", border: "1px solid #2a2a28" }}
          >
            <img
              src="/images/projects/zutobi-first-lesson/results.png"
              alt="First lesson activation results"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{ marginTop: 22, background: "#161614", borderLeft: "3px solid #e8e4dd", borderRadius: "0 8px 8px 0", padding: "18px 22px" }}>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "#e8e4dd", fontStyle: "italic" }}>
              By optimizing the moment immediately after subscription, we improved end-to-end
              conversion without changing acquisition, pricing, or the paywall.
            </p>
          </div>
        </Section>

        <Section>
          <h2 style={{ margin: "0 0 18px", color: "#e8e4dd", fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.2, fontWeight: 500 }}>
            Senior takeaways
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
            {[
              {
                n: "01",
                title: "Activation is a high-leverage moment",
                body: "Retention and monetization can be improved by reducing ambiguity in the first post-purchase interaction.",
              },
              {
                n: "02",
                title: "Progressive testing improves decision confidence",
                body: "Control -> CTA prompt -> direct redirect created a clean causal ladder and a clear rollout decision.",
              },
              {
                n: "03",
                title: "Research must drive product direction",
                body: "We used Amplitude event analysis and cohort comparison to define the hypothesis before solution design.",
              },
            ].map((item, idx) => (
              <FadeIn key={item.n} delay={idx * 0.08}>
                <div style={{ background: "#161614", border: "1px solid #2a2a28", borderRadius: 12, padding: 20, height: "100%" }}>
                  <p style={{ margin: "0 0 8px", color: "#666360", fontSize: 12 }}>{item.n}</p>
                  <p style={{ margin: "0 0 10px", color: "#e8e4dd", fontSize: 18, fontWeight: 500 }}>{item.title}</p>
                  <p style={{ margin: 0, color: "#888580", fontSize: 15, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out",
            padding: "clamp(16px, 4vw, 48px)",
          }}
        >
          <img
            src={lightbox}
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: 12 }}
            onClick={(e) => e.stopPropagation()}
            alt=""
          />
        </div>
      )}
    </main>
  );
}
