"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const bodyTextStyle = {
  margin: 0,
  fontSize: "19px",
  color: "#b2aea7",
  lineHeight: 1.8,
  maxWidth: "100%",
} as const;

const headingStyle = {
  margin: "0 0 20px",
  fontSize: "30px",
  fontWeight: 500,
  color: "#e8e4dd",
  lineHeight: 1.25,
} as const;

const cardTitleStyle = {
  margin: "0 0 10px",
  fontSize: 20,
  fontWeight: 500,
  color: "#e8e4dd",
} as const;

const cardBodyStyle = {
  margin: 0,
  fontSize: 16,
  color: "#9a9690",
  lineHeight: 1.75,
} as const;

const insightTextStyle = {
  margin: 0,
  fontSize: 17,
  color: "#e8e4dd",
  lineHeight: 1.6,
  fontStyle: "italic",
} as const;

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <>
      <style>{`
        .section-block {
          padding-top: 88px;
          padding-bottom: 88px;
        }
      `}</style>
      <section className={`section-block ${className}`.trim()}>
        <FadeIn>
          {children}
        </FadeIn>
      </section>
    </>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        background: "#1a1a18",
        border: "1px solid #2a2a28",
        borderRadius: "12px",
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#555552",
        fontSize: "13px",
      }}
    >
      {text}
    </div>
  );
}

export default function CaseStudyZutobiOnboarding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#9a9690",
      }}
    >
      <style>{`
        .case-study-container {
          max-width: 1136px;
          margin: 0 auto;
          padding: 0 max(24px, 48px);
        }

        .hero-section {
          padding-top: 80px;
          padding-bottom: 64px;
          border-top: 1px solid #1a1a18;
        }
        .hero-meta {
          font-size: 12px;
          color: #444440;
          letter-spacing: 0.08em;
          margin: 0 0 32px;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 0;
          border-top: 1px solid #1e1e1c;
          border-bottom: 1px solid #1e1e1c;
          padding-top: 28px;
          padding-bottom: 28px;
        }
        .hero-stat-col {
          min-width: 0;
          padding-left: 24px;
        }
        .hero-stat-col:first-child {
          padding-left: 0;
        }
        .hero-stat-col:nth-child(-n + 3) {
          border-right: 1px solid #1e1e1c;
          padding-right: 24px;
        }

        .first-content-section {
          padding-top: 72px;
          border-top: none;
        }

        .attempt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 28px;
        }

        .placeholder-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (max-width: 880px) {
          .hero-stats {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .hero-stat-col:nth-child(-n + 3) {
            padding-right: 0;
            border-right: none;
          }
          .hero-stat-col {
            padding-left: 0;
          }
        }
        @media (max-width: 768px) {
          .section-block {
            padding-top: 72px;
            padding-bottom: 72px;
          }
          .attempt-grid {
            grid-template-columns: 1fr;
          }
          .results-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="case-study-container">
        <section className="hero-section">
          <FadeIn delay={40}>
            <p className="hero-meta">Zutobi · Growth Design · iOS · 2024</p>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 500,
                color: "#e8e4dd",
                lineHeight: 1.15,
                maxWidth: "760px",
                marginBottom: 20,
              }}
            >
              Most users never started a trial. Those who did - left on Day 1.
            </h1>
            <p
              style={{
                margin: "0 0 48px",
                fontSize: 18,
                color: "#8f8b84",
                lineHeight: 1.6,
                maxWidth: "680px",
              }}
            >
              An A/B test that lifted Install-to-Trial conversion by +7% on iOS US
            </p>

            <div className="hero-stats">
              <div className="hero-stat-col">
                <p
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "#444440",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  The Problem
                </p>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: "#f0ece5", lineHeight: 1.4 }}>
                  Trial anxiety at paywall
                </p>
              </div>
              <div className="hero-stat-col">
                <p
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "#444440",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Validated by
                </p>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: "#f0ece5", lineHeight: 1.4 }}>
                  Analytics · Reviews · Survey
                </p>
              </div>
              <div className="hero-stat-col">
                <p
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "#444440",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Solution
                </p>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: "#f0ece5", lineHeight: 1.4 }}>
                  Timeline on paywall
                </p>
              </div>
              <div className="hero-stat-col">
                <p
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "#444440",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Result
                </p>
                <p style={{ margin: "8px 0 0", fontSize: 15, fontWeight: 500, color: "#f7f4ed", lineHeight: 1.4 }}>
                  +7% Install-to-Trial
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <Section className="first-content-section">
          <h2 style={headingStyle}>Background</h2>
          <p style={bodyTextStyle}>
            At Zutobi, we want to make getting a driver's license as simple and stress-free as
            possible. Zutobi is a gamified learning app that helps students prepare for their
            permit test - with state-specific lessons, DMV guides, and practice exams on iOS and
            Android.
          </p>
        </Section>

        <Section>
          <div>
            <h2 style={headingStyle}>Why we started redesigning paywall?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <p style={bodyTextStyle}>
                We identified a key issue in our conversion funnel: a significant drop-off between
                app installation and trial start. Despite users successfully completing onboarding,
                only 15.9% proceeded to start a free trial.
                <br />
                <br />
                Additionally, we observed that a large portion of users who did start a trial ended
                up canceling it on the same day.
              </p>
              <img
                src="/images/projects/zutobi/amplitude-funnel.png"
                alt="Amplitude funnel — Install to Trial conversion"
                style={{ width: "100%", borderRadius: "12px", marginTop: "40px", display: "block" }}
              />
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>Current Flow</h2>
          <svg width="100%" viewBox="0 0 680 540" role="img" style={{ display: "block", marginTop: "40px" }}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>

            <text fontSize="11" fontWeight="500" letterSpacing="0.08em" fill="#444440" x="36" y="232" textAnchor="middle" opacity="0.6">Day 1</text>
            <line x1="52" y1="230" x2="64" y2="230" stroke="#2a2a28" strokeWidth="0.5" />
            <text fontSize="11" fontWeight="500" letterSpacing="0.08em" fill="#444440" x="36" y="336" textAnchor="middle" opacity="0.6">Day 1–3</text>
            <line x1="52" y1="334" x2="64" y2="334" stroke="#2a2a28" strokeWidth="0.5" />
            <text fontSize="11" fontWeight="500" letterSpacing="0.08em" fill="#444440" x="36" y="492" textAnchor="middle" opacity="0.6">Day 3</text>
            <line x1="52" y1="490" x2="64" y2="490" stroke="#2a2a28" strokeWidth="0.5" />

            <rect x="250" y="20" width="180" height="40" rx="20" fill="#1e1e1c" stroke="#333330" strokeWidth="0.5" />
            <text fontSize="13" fontWeight="500" fill="#e8e4dd" x="340" y="40" textAnchor="middle" dominantBaseline="central">Install app</text>
            <line x1="340" y1="60" x2="340" y2="96" stroke="#555552" strokeWidth="1" markerEnd="url(#arrow)" />

            <rect x="160" y="96" width="360" height="60" rx="10" fill="#0c2d4a" stroke="#185FA5" strokeWidth="0.5" />
            <text fontSize="13" fontWeight="500" fill="#85B7EB" x="340" y="116" textAnchor="middle" dominantBaseline="central">Start 3-day free trial?</text>
            <text fontSize="11" fill="#378ADD" x="340" y="140" textAnchor="middle" dominantBaseline="central">Payment via App Store / Google Play</text>

            <line x1="340" y1="156" x2="340" y2="200" stroke="#555552" strokeWidth="1" markerEnd="url(#arrow)" />
            <text fontSize="11" fill="#666360" x="356" y="182" dominantBaseline="central">Yes</text>

            <path d="M160 126 L84 126 L84 460 L158 460" fill="none" stroke="#2a2a28" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)" />
            <text fontSize="11" fill="#666360" x="118" y="116" textAnchor="middle">No</text>

            <rect x="160" y="200" width="360" height="60" rx="10" fill="#04342C" stroke="#0F6E56" strokeWidth="0.5" />
            <text fontSize="13" fontWeight="500" fill="#9FE1CB" x="340" y="220" textAnchor="middle" dominantBaseline="central">Premium trial — 3 days</text>
            <text fontSize="11" fill="#5DCAA5" x="340" y="244" textAnchor="middle" dominantBaseline="central">Full access to all content</text>
            <line x1="340" y1="260" x2="340" y2="304" stroke="#555552" strokeWidth="1" markerEnd="url(#arrow)" />

            <rect x="160" y="304" width="360" height="60" rx="10" fill="#0c2d4a" stroke="#185FA5" strokeWidth="0.5" />
            <text fontSize="13" fontWeight="500" fill="#85B7EB" x="340" y="324" textAnchor="middle" dominantBaseline="central">Cancel during trial?</text>
            <text fontSize="11" fill="#378ADD" x="340" y="348" textAnchor="middle" dominantBaseline="central">Day 1 – Day 3</text>

            <line x1="250" y1="364" x2="250" y2="460" stroke="#555552" strokeWidth="1" markerEnd="url(#arrow)" />
            <text fontSize="11" fill="#666360" x="232" y="414" textAnchor="middle">Yes</text>

            <line x1="430" y1="364" x2="430" y2="460" stroke="#555552" strokeWidth="1" markerEnd="url(#arrow)" />
            <text fontSize="11" fill="#666360" x="450" y="414" textAnchor="middle">No</text>

            <rect x="66" y="460" width="244" height="60" rx="10" fill="#1e1e1c" stroke="#333330" strokeWidth="0.5" />
            <text fontSize="13" fontWeight="500" fill="#aaa8a4" x="188" y="480" textAnchor="middle" dominantBaseline="central">Limited version</text>
            <text fontSize="11" fill="#666360" x="188" y="504" textAnchor="middle" dominantBaseline="central">First lesson only</text>

            <rect x="370" y="460" width="244" height="60" rx="10" fill="#412402" stroke="#854F0B" strokeWidth="0.5" />
            <text fontSize="13" fontWeight="500" fill="#FAC775" x="492" y="480" textAnchor="middle" dominantBaseline="central">Charged for premium</text>
            <text fontSize="11" fill="#EF9F27" x="492" y="504" textAnchor="middle" dominantBaseline="central">Continues as paid subscriber</text>
          </svg>
        </Section>

        <Section>
          <h2 style={headingStyle}>Research Process</h2>
          <p style={bodyTextStyle}>
            I organized a growth team brainstorming session where I presented the problem and
            walked the team through the current user flow. This created an opportunity to align on
            the issue and discuss potential friction points within the existing experience.
          </p>
          <img
            src="/images/projects/zutobi/research.png"
            alt="Research workshop outcomes"
            style={{ width: "100%", borderRadius: "12px", marginTop: "40px", display: "block" }}
          />
          <p style={{ ...bodyTextStyle, marginTop: "40px" }}>
            Next, in close collaboration with the Growth Analyst and PM, I conducted a deeper
            analysis of the problem using data. We focused on uncovering user behavior patterns
            where users were navigating, what actions they were taking, and how they engaged with
            the product during the trial period.
          </p>
          <img
            src="/images/projects/zutobi/cancellations-by-day.png"
            alt="Cancellations by day of trial chart"
            style={{ width: "100%", borderRadius: "12px", marginTop: "40px", display: "block" }}
          />
        </Section>

        <Section>
          <h2 style={headingStyle}>Research Insights</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                background: "#161614",
                border: "1px solid #2a2a28",
                borderLeft: "3px solid #4f6f95",
                borderRadius: "12px",
                padding: "18px 20px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 500, color: "#e8e4dd" }}>
                User reports
              </p>
              <p style={{ margin: 0, fontSize: "16px", color: "#888580", lineHeight: 1.7 }}>
                We collected all feedback from emails, Google Play and App Store reviews. It was
                clear our top complaint was our users forgetting to cancel during their trial and
                being charged.
              </p>
            </div>

            <div
              style={{
                background: "#161614",
                border: "1px solid #2a2a28",
                borderLeft: "3px solid #5c7f73",
                borderRadius: "12px",
                padding: "18px 20px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 500, color: "#e8e4dd" }}>
                Data
              </p>
              <p style={{ margin: 0, fontSize: "16px", color: "#888580", lineHeight: 1.7 }}>
                We found that most users who did sign up to the trial, would cancel their trial on
                the first day. We hypothesized that they cancelled before even trying the app to
                avoid forgetting to cancel later if they didn&apos;t like Zutobi.
              </p>
            </div>

            <div
              style={{
                background: "#161614",
                border: "1px solid #2a2a28",
                borderLeft: "3px solid #7d6950",
                borderRadius: "12px",
                padding: "18px 20px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 500, color: "#e8e4dd" }}>
                Survey
              </p>
              <p style={{ margin: 0, fontSize: "16px", color: "#888580", lineHeight: 1.7 }}>
                We conducted a survey and asked users two things; why users didn&apos;t sign up to a
                trial and why they cancelled their trial. We found that the top reason people
                cancelled was because they had a fear of forgetting to cancel later and being
                charged.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <h2 style={headingStyle}>Design Direction</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "24px" }}>
                We arrived at the timeline direction by connecting three signals: users feared
                being charged unexpectedly, many cancelled on Day 1, and prior copy-based trust
                messages did not improve trial starts. This pointed to a clarity problem, not a
                value problem - users needed to understand exactly what happens, when reminders are
                sent, and when charges occur.
              </p>
              <p style={bodyTextStyle}>
                To understand how others were solving the same problem, I started with a market
                analysis - reviewing how other subscription apps handle trial transparency during
                onboarding.
                <br />
                <br />
                Three patterns stood out: a timeline explaining what happens during and after the
                trial, a short quiz during onboarding to surface the app's value before the paywall,
                and placing the paywall after a few lessons so users experience the product first.
                <br />
                <br />
                I brought these examples together with our survey findings and Amplitude data, and
                ran a call with the team to validate our understanding of the problem and align on
                which direction to test first.
              </p>
              <img
                src="/images/projects/zutobi/competitor-analysis.png"
                alt="Competitor analysis — trial transparency patterns"
                style={{ width: "100%", borderRadius: "12px", marginTop: "40px", display: "block" }}
              />
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>What We Tried Before</h2>
          <p style={bodyTextStyle}>
            Before introducing the timeline, we tested a wide range of hypotheses that were
            expected to influence users' decision to start a free trial.
          </p>

          <div className="attempt-grid">
            <div
              style={{
                background: "transparent",
                border: "1px solid #2a2a28",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  padding: "3px 8px",
                  border: "1px solid #333",
                  borderRadius: 4,
                  color: "#888580",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Attempt 01
              </span>
              <h3 style={cardTitleStyle}>
                "How can I cancel?" section
              </h3>
              <p style={cardBodyStyle}>
                We added cancellation instructions to the paywall in different positions. Users
                could see how to cancel - but it didn't reduce their fear of being charged.
              </p>
              <img
                src="/images/projects/zutobi/attempt-cancel.png"
                alt="How can I cancel section variant"
                style={{ width: "100%", borderRadius: "8px", marginTop: "20px", display: "block" }}
              />
            </div>

            <div
              style={{
                background: "transparent",
                border: "1px solid #2a2a28",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  padding: "3px 8px",
                  border: "1px solid #333",
                  borderRadius: 4,
                  color: "#888580",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Attempt 02
              </span>
              <h3 style={cardTitleStyle}>
                Trust signals on plan picker
              </h3>
              <p style={cardBodyStyle}>
                We added "3-days free. Cancel anytime in the App Store" directly on the plan card.
                Same result - no meaningful improvement.
              </p>
              <img
                src="/images/projects/zutobi/attempt-trust.png"
                alt="Trust signals on plan picker variant"
                style={{ width: "100%", borderRadius: "8px", marginTop: "20px", display: "block" }}
              />
            </div>
          </div>

          <img
            src="/images/projects/zutobi/Examples.png"
            alt="All tested variants side by side"
            style={{ width: "100%", borderRadius: "12px", marginTop: "40px", display: "block" }}
          />

          <div
            style={{
              marginTop: 24,
              background: "#161614",
              borderLeft: "3px solid #e8e4dd",
              padding: "20px 28px",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p style={insightTextStyle}>
              Prior to this, we conducted multiple experiments to test a range of hypotheses.
              Unfortunately, most of these tests did not deliver positive results. However, we
              deliberately followed a learning-driven approach, treating each experiment as a source
              of insights to refine and strengthen our future hypotheses.
            </p>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>The Experiment</h2>
          <div
            style={{
              marginBottom: 20,
              background: "#161614",
              borderLeft: "3px solid #e8e4dd",
              padding: "20px 28px",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p style={insightTextStyle}>
              If we clearly explain what happens on each day of the trial - including when the
              reminder is sent and when the charge occurs - users will feel more confident starting
              a trial.
            </p>
          </div>
          <p style={bodyTextStyle}>
            From our analytics, we observed that users consistently scrolled through the entire
            paywall. Based on this insight, one of the ideas was to place the "How your free trial
            works" section at the bottom of the page.
            <br />
            <br />
            We had previously tested this section in multiple positions, but it was specifically
            this placement that delivered the expected results.
          </p>
          <div className="attempt-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#666360",
                }}
              >
                Before
              </p>
              <img
                src="/images/projects/zutobi/paywall-baseline.png"
                alt="Baseline paywall — before timeline"
                style={{
                  width: "100%",
                  maxHeight: "520px",
                  objectFit: "contain",
                  background: "#161614",
                  border: "1px solid #2a2a28",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#666360",
                }}
              >
                After
              </p>
              <img
                src="/images/projects/zutobi/paywall-winner.png"
                alt="Winning variant with timeline"
                style={{
                  width: "100%",
                  maxHeight: "520px",
                  objectFit: "contain",
                  background: "#161614",
                  border: "1px solid #2a2a28",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>Results</h2>
          <div
            style={{
              border: "1px solid #2a2a28",
              borderRadius: "14px",
              background: "#161614",
              padding: "36px 28px",
            }}
          >
            <div style={{ textAlign: "center", paddingBottom: "28px", borderBottom: "1px solid #232320" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(80px, 14vw, 120px)",
                  fontWeight: 500,
                  color: "#e8e4dd",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                +7%
              </p>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 13,
                  color: "#6f6b64",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Install-to-Trial conversion uplift
              </p>
            </div>

            <div
              className="results-metrics-grid"
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
              }}
            >
              <div style={{ border: "1px solid #2a2a28", borderRadius: "10px", padding: "14px 16px" }}>
                <p style={{ margin: 0, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666360" }}>
                  Population
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "16px", color: "#e8e4dd", fontWeight: 500 }}>
                  iOS US
                </p>
              </div>
              <div style={{ border: "1px solid #2a2a28", borderRadius: "10px", padding: "14px 16px" }}>
                <p style={{ margin: 0, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666360" }}>
                  Primary Metric
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "16px", color: "#e8e4dd", fontWeight: 500 }}>
                  Install-to-Trial
                </p>
              </div>
              <div style={{ border: "1px solid #2a2a28", borderRadius: "10px", padding: "14px 16px" }}>
                <p style={{ margin: 0, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666360" }}>
                  Decision
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "16px", color: "#e8e4dd", fontWeight: 500 }}>
                  Rolled out as default
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: 19,
              color: "#b2aea7",
              lineHeight: 1.75,
              maxWidth: "760px",
            }}
          >
            The timeline variant outperformed the baseline and increased Install-to-Trial
            conversion by +7% on iOS US.
            <br />
            <br />
            The result confirmed our hypothesis: users were not afraid of the product - they were
            afraid of uncertainty. Once trial mechanics became transparent, more users felt
            confident enough to start.
          </p>
        </Section>

        <Section>
          <h2 style={headingStyle}>Key Takeaways</h2>
          <p style={bodyTextStyle}>
            I approached this business problem from the user's perspective. Yes, some revenue came
            from users who forgot to cancel - but solving for user trust made a more positive
            impact on the business in a more ethical way.
          </p>
          <p
            style={{
              fontSize: 19,
              color: "#e8e4dd",
              fontWeight: 500,
              lineHeight: 1.7,
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Key lesson: transparency builds trust - and trust improves conversion.
          </p>
        </Section>
      </div>
    </div>
  );
}
