"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const bodyTextStyle = {
  margin: "0 0 20px",
  fontFamily: "var(--font-inter)",
  fontSize: "17px",
  color: "#57534e",
  lineHeight: 1.8,
  maxWidth: "100%",
} as const;

const headingStyle = {
  margin: "0 0 20px",
  fontFamily: "var(--font-dm-serif)",
  fontSize: "clamp(26px, 3vw, 34px)",
  fontWeight: 400,
  color: "#1c1917",
  lineHeight: 1.2,
} as const;

const cardTitleStyle = {
  margin: "0 0 10px",
  fontFamily: "var(--font-dm-serif)",
  fontSize: 22,
  fontWeight: 400,
  color: "#1c1917",
} as const;

const cardBodyStyle = {
  margin: 0,
  fontFamily: "var(--font-inter)",
  fontSize: 15,
  color: "#78716c",
  lineHeight: 1.7,
} as const;

const insightTextStyle = {
  margin: 0,
  fontFamily: "var(--font-inter)",
  fontSize: 16,
  color: "#e7e3dc",
  lineHeight: 1.7,
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
          padding-top: 80px;
          padding-bottom: 80px;
          border-top: 1px solid #e7e3dc;
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
        background: "#f0ede8",
        border: "1px dashed #e0ddd8",
        borderRadius: "12px",
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#b0ada8",
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
        background: "#f7f4ef",
        color: "#1c1917",
        fontFamily: "var(--font-inter)",
      }}
    >
      <style>{`
        .case-study-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .hero-section {
          padding-top: 96px;
          padding-bottom: 72px;
          border-top: none;
        }
        .hero-meta {
          font-family: var(--font-inter);
          font-size: 12px;
          color: #999490;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 24px;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1fr;
          gap: 0;
          border-top: 1px solid #e7e3dc;
          border-bottom: 1px solid #e7e3dc;
          padding: 36px 0;
          margin-bottom: 0;
        }
        .hero-stat-col {
          min-width: 0;
        }
        .hero-stat-col.with-divider {
          border-right: 1px solid #e7e3dc;
        }
        .hero-stat-col.pad-right {
          padding-right: 40px;
        }
        .hero-stat-col.pad-left {
          padding-left: 40px;
        }

        .first-content-section {
          padding-top: 80px;
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
            grid-template-columns: 2fr 1.5fr 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .case-study-container {
            padding: 0 24px;
          }
          .hero-stats {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .hero-stat-col.with-divider {
            border-right: none;
          }
          .hero-stat-col.pad-left {
            padding-left: 0;
          }
          .hero-stat-col.pad-right {
            padding-right: 0;
          }
          .section-block {
            padding-top: 64px;
            padding-bottom: 64px;
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
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 400,
                color: "#1c1917",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                maxWidth: "760px",
                marginBottom: 20,
              }}
            >
              Most users never started a trial. Those who did - left on Day 1.
            </h1>
            <p
              style={{
                margin: "0 0 56px",
                fontFamily: "var(--font-inter)",
                fontSize: 18,
                color: "#78716c",
                lineHeight: 1.65,
                maxWidth: "560px",
              }}
            >
              How one transparency experiment lifted Install-to-Trial by +7% on iOS US
            </p>

            <div className="hero-stats">
              <div className="hero-stat-col with-divider pad-right">
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#a8a39d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                    display: "block",
                  }}
                >
                  Overview
                </p>
                <p style={{ margin: 0, fontSize: 15, color: "#1c1917", lineHeight: 1.5 }}>
                  Redesigned Zutobi&apos;s paywall to reduce trial anxiety and improve transparency,
                  lifting Install-to-Trial conversion by +7%.
                </p>
              </div>
              <div className="hero-stat-col with-divider pad-right pad-left">
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#a8a39d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                    display: "block",
                  }}
                >
                  My Role
                </p>
                <p style={{ margin: 0, fontSize: 15, color: "#1c1917", lineHeight: 1.5 }}>
                  Design Strategy, UI, UX, User Research
                </p>
              </div>
              <div className="hero-stat-col with-divider pad-right pad-left">
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#a8a39d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                    display: "block",
                  }}
                >
                  Team
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                  {["Me", "PM", "Dev", "QA"].map((member) => (
                    <span
                      key={member}
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#e7e3dc",
                        border: "1px solid #d4cfc8",
                        fontSize: 11,
                        color: "#78716c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hero-stat-col pad-left">
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#a8a39d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                    display: "block",
                  }}
                >
                  Timeline
                </p>
                <p style={{ margin: 0, fontSize: 15, color: "#1c1917", lineHeight: 1.5 }}>
                  ~4 weeks
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <Section className="first-content-section">
          <h2 style={headingStyle}>About Zutobi</h2>
          <p style={bodyTextStyle}>
            Zutobi is a gamified learning app that helps students prepare for their permit test - 
            with state-specific lessons, DMV guides, and practice exams on iOS and Android.
          </p>
        </Section>

        <Section>
          <div>
            <h2 style={headingStyle}>The Problem</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  margin: "0 0 32px",
                }}
              >
                <div
                  style={{
                    background: "#f0ece5",
                    borderRadius: "12px",
                    padding: "24px",
                    borderLeft: "3px solid #1c1917",
                  }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: "700",
                      color: "#1c1917",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    15.9%
                  </div>
                  <div style={{ fontSize: "13px", color: "#78716c", lineHeight: 1.5 }}>
                    of users who installed the app started a trial
                  </div>
                </div>
                <div
                  style={{
                    background: "#f0ece5",
                    borderRadius: "12px",
                    padding: "24px",
                    borderLeft: "3px solid #1c1917",
                  }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: "700",
                      color: "#1c1917",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    43%
                  </div>
                  <div style={{ fontSize: "13px", color: "#78716c", lineHeight: 1.5 }}>
                    of those who started cancelled on Day 1
                  </div>
                </div>
              </div>

              <p style={bodyTextStyle}>
                Users completed the full onboarding flow - but the app never mentioned that full
                access required payment. The paywall was the first moment users realized the
                product was paid. For many, it felt like a surprise. They closed it and left.
              </p>
              <p style={bodyTextStyle}>The problem wasn't the price. It was the surprise.</p>
              <div style={{ background: "#f0ece5", borderRadius: "12px", padding: "16px", marginTop: "32px" }}>
                <img
                  src="/images/projects/zutobi/amplitude-funnel.png"
                  alt="Amplitude funnel - Install to Trial conversion"
                  style={{ width: "100%", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>Current Flow</h2>
          <div style={{background:"#f0ece5",borderRadius:"16px",padding:"48px 40px",marginTop:"40px"}}>
          <svg width="100%" viewBox="0 0 680 560" role="img" style={{display:"block"}}>
            <title>Zutobi 3-day trial flow</title>
            <desc>User journey from install through paywall to premium or limited access</desc>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>

            <text fontSize="11" fill="#B4B2A9" x="36" y="232" textAnchor="middle">Day 1</text>
            <line x1="54" y1="230" x2="66" y2="230" stroke="#B4B2A9" strokeWidth="0.5"/>
            <text fontSize="11" fill="#B4B2A9" x="36" y="336" textAnchor="middle">Day 1-3</text>
            <line x1="54" y1="334" x2="66" y2="334" stroke="#B4B2A9" strokeWidth="0.5"/>
            <text fontSize="11" fill="#B4B2A9" x="36" y="500" textAnchor="middle">Day 3</text>
            <line x1="54" y1="498" x2="66" y2="498" stroke="#B4B2A9" strokeWidth="0.5"/>

            <rect x="250" y="20" width="180" height="40" rx="20" fill="#D3D1C7" stroke="#B4B2A9" strokeWidth="0.5"/>
            <text fontSize="13" fontWeight="500" fill="#2C2C2A" x="340" y="40" textAnchor="middle" dominantBaseline="central">Install app</text>
            <line x1="340" y1="60" x2="340" y2="96" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow)"/>

            <rect x="160" y="96" width="360" height="60" rx="10" fill="#B5D4F4" stroke="#378ADD" strokeWidth="0.5"/>
            <text fontSize="13" fontWeight="500" fill="#042C53" x="340" y="116" textAnchor="middle" dominantBaseline="central">Start 3-day free trial?</text>
            <text fontSize="11" fill="#185FA5" x="340" y="140" textAnchor="middle" dominantBaseline="central">Payment via App Store / Google Play</text>

            <line x1="340" y1="156" x2="340" y2="200" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text fontSize="11" fill="#78716c" x="356" y="182" dominantBaseline="central">Yes</text>

            <path d="M160 126 L84 126 L84 518 L158 518" fill="none" stroke="#888780" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow)"/>
            <text fontSize="11" fill="#78716c" x="118" y="116" textAnchor="middle">No</text>

            <rect x="160" y="200" width="360" height="60" rx="10" fill="#9FE1CB" stroke="#1D9E75" strokeWidth="0.5"/>
            <text fontSize="13" fontWeight="500" fill="#04342C" x="340" y="220" textAnchor="middle" dominantBaseline="central">Premium trial - 3 days</text>
            <text fontSize="11" fill="#0F6E56" x="340" y="244" textAnchor="middle" dominantBaseline="central">Full access to all content</text>
            <line x1="340" y1="260" x2="340" y2="304" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow)"/>

            <rect x="160" y="304" width="360" height="60" rx="10" fill="#B5D4F4" stroke="#378ADD" strokeWidth="0.5"/>
            <text fontSize="13" fontWeight="500" fill="#042C53" x="340" y="324" textAnchor="middle" dominantBaseline="central">Cancel during trial?</text>
            <text fontSize="11" fill="#185FA5" x="340" y="348" textAnchor="middle" dominantBaseline="central">Day 1 - Day 3</text>

            <line x1="250" y1="364" x2="250" y2="490" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text fontSize="11" fill="#78716c" x="232" y="428" textAnchor="middle">Yes</text>

            <line x1="430" y1="364" x2="430" y2="490" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text fontSize="11" fill="#78716c" x="450" y="428" textAnchor="middle">No</text>

            <rect x="66" y="490" width="244" height="56" rx="10" fill="#D3D1C7" stroke="#B4B2A9" strokeWidth="0.5"/>
            <text fontSize="13" fontWeight="500" fill="#2C2C2A" x="188" y="510" textAnchor="middle" dominantBaseline="central">Limited version</text>
            <text fontSize="11" fill="#5F5E5A" x="188" y="532" textAnchor="middle" dominantBaseline="central">First lesson only</text>

            <rect x="370" y="490" width="244" height="56" rx="10" fill="#FAC775" stroke="#BA7517" strokeWidth="0.5"/>
            <text fontSize="13" fontWeight="500" fill="#412402" x="492" y="510" textAnchor="middle" dominantBaseline="central">Charged for premium</text>
            <text fontSize="11" fill="#633806" x="492" y="532" textAnchor="middle" dominantBaseline="central">Continues as paid subscriber</text>
          </svg>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>How We Investigated</h2>
          <p style={bodyTextStyle}>
            I took the initiative to lead the investigation with the Growth Analyst and PM.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "20px 24px",
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#a8a39d",
                  letterSpacing: "0.1em",
                  minWidth: "28px",
                  paddingTop: "2px",
                }}
              >
                01
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1c1917", marginBottom: "4px" }}>
                  Reviewed product analytics
                </div>
                <div style={{ fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>
                  Amplitude showed only 15.9% Install-to-Trial. 43% of those who started cancelled on Day 1.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "20px 24px",
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#a8a39d",
                  letterSpacing: "0.1em",
                  minWidth: "28px",
                  paddingTop: "2px",
                }}
              >
                02
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1c1917", marginBottom: "4px" }}>
                  Analyzed user feedback
                </div>
                <div style={{ fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>
                  App Store reviews and support survey showed users felt surprised by the paywall after onboarding.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "20px 24px",
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#a8a39d",
                  letterSpacing: "0.1em",
                  minWidth: "28px",
                  paddingTop: "2px",
                }}
              >
                03
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1c1917", marginBottom: "4px" }}>
                  Researched competitor patterns
                </div>
                <div style={{ fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>
                  I found a Blinkist case study describing the exact same problem - solved with a trial timeline. This validated our direction.
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>What the Data Told Us</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: "12px",
                padding: "24px 28px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 600, color: "#1c1917" }}>
                App Store & Support reviews
              </p>
              <p style={{ margin: 0, fontSize: "15px", color: "#78716c", lineHeight: 1.7 }}>
                Users consistently mentioned that reaching the paywall felt unexpected - they had no idea the app required payment until that moment.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: "12px",
                padding: "24px 28px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 600, color: "#1c1917" }}>
                Amplitude analytics
              </p>
              <p style={{ margin: 0, fontSize: "15px", color: "#78716c", lineHeight: 1.7 }}>
                Only 15.9% Install-to-Trial. 43% cancelled on Day 1 - before exploring any premium content. Users were leaving, not bouncing.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: "12px",
                padding: "24px 28px",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 600, color: "#1c1917" }}>
                User survey
              </p>
              <p style={{ margin: 0, fontSize: "15px", color: "#78716c", lineHeight: 1.7 }}>
                Top reason for not starting a trial: "I didn't know it was a paid app." The problem wasn't price resistance - it was surprise.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#1c1917",
              borderRadius: "10px",
              padding: "22px 28px",
              margin: "24px 0 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                color: "#e7e3dc",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              "The problem wasn't price or value. Users liked the product - they just didn't know it was paid until it was too late."
            </p>
          </div>
        </Section>

        <Section>
          <div>
            <h2 style={headingStyle}>Why the Timeline?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={bodyTextStyle}>
                During research, I came across a case study by a Blinkist designer describing the exact same problem. Their users felt surprised by payment after onboarding - and the team solved it with a timeline that explained what happens on each day of the trial.
              </p>
              <p style={bodyTextStyle}>
                We decided to test the same approach. The question wasn't whether to add a timeline - it was where to place it.
              </p>
              <div style={{ background: "#f0ece5", borderRadius: "12px", padding: "16px", marginTop: "32px" }}>
                <img
                  src="/images/projects/zutobi/competitor-analysis.png"
                  alt="Competitor analysis - trial transparency patterns"
                  style={{ width: "100%", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>What Didn't Work - and Why</h2>
          <p style={bodyTextStyle}>
            Before the timeline, we ran multiple experiments. Each test taught us something - but none solved the core problem.
          </p>

          <div className="attempt-grid">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  padding: "3px 10px",
                  border: "1px solid #d4d0cc",
                  borderRadius: 4,
                  color: "#a8a39d",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                ATTEMPT 01
              </span>
              <h3 style={cardTitleStyle}>
                "How can I cancel?" section
              </h3>
              <p style={cardBodyStyle}>
                Users' top support request was "how do I cancel?" - so we added cancellation instructions to the paywall. No meaningful improvement. Users weren't afraid of cancelling - they were surprised by the paywall itself.
              </p>
              <div style={{ background: "#f0ece5", borderRadius: "12px", padding: "16px", marginTop: "32px" }}>
                <img
                  src="/images/projects/zutobi/attempt-cancel.png"
                  alt="How can I cancel section variant"
                  style={{ width: "100%", borderRadius: "8px", display: "block" }}
                />
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e3dc",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  padding: "3px 10px",
                  border: "1px solid #d4d0cc",
                  borderRadius: 4,
                  color: "#a8a39d",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                ATTEMPT 02
              </span>
              <h3 style={cardTitleStyle}>
                Trust signals & copy changes
              </h3>
              <p style={cardBodyStyle}>
                We tested: stronger "Cancel anytime" copy, app ratings, user reviews, and more free lesson access. Some tests showed positive signals - but users still didn't understand how the subscription worked.
              </p>
              <div style={{ background: "#f0ece5", borderRadius: "12px", padding: "16px", marginTop: "32px" }}>
                <img
                  src="/images/projects/zutobi/attempt-trust.png"
                  alt="Trust signals on plan picker variant"
                  style={{ width: "100%", borderRadius: "8px", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div style={{ background: "#f0ece5", borderRadius: "12px", padding: "16px", marginTop: "32px" }}>
            <img
              src="/images/projects/zutobi/Examples.png"
              alt="All tested variants side by side"
              style={{ width: "100%", borderRadius: "12px", display: "block" }}
            />
          </div>

          <div
            style={{
              marginTop: 24,
              background: "#1c1917",
              padding: "22px 28px",
              borderRadius: "10px",
            }}
          >
            <p style={insightTextStyle}>
              Every test addressed symptoms at the paywall. The real problem was earlier: users arrived at the paywall without any mental preparation for payment.
            </p>
          </div>

        </Section>

        <Section>
          <h2 style={headingStyle}>The Experiment</h2>
          <div
            style={{
              background: "#1c1917",
              padding: "22px 28px",
              borderRadius: "10px",
              margin: "0 0 32px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#78716c",
                marginBottom: "10px",
              }}
            >
              Hypothesis
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                color: "#e7e3dc",
                lineHeight: 1.7,
              }}
            >
              If users understand what happens on each day of the trial before they decide - they
              will feel confident enough to start.
            </p>
          </div>
          <p style={bodyTextStyle}>
            Analytics showed users consistently scrolled through the entire paywall. So we tested the timeline in multiple positions - top, middle, bottom of paywall, and on the plan picker. The bottom placement, right before the plan picker, delivered the results.
          </p>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a8a39d",
              marginBottom: "16px",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid #e7e3dc",
            }}
          >
            Test result - winning placement
          </div>
          <div className="attempt-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: "48px" }}>
            <div>
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#a8a39d",
                  display: "block",
                }}
              >
                Before
              </p>
              <div
                style={{
                  background: "#f7f4ef",
                  border: "1px solid #e7e3dc",
                  borderRadius: "12px",
                  padding: "16px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/projects/zutobi/paywall-baseline.png"
                  alt="Baseline paywall - before timeline"
                  style={{
                    width: "100%",
                    maxHeight: "520px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#a8a39d",
                  display: "block",
                }}
              >
                After
              </p>
              <div
                style={{
                  background: "#f7f4ef",
                  border: "1px solid #e7e3dc",
                  borderRadius: "12px",
                  padding: "16px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/projects/zutobi/paywall-winner.png"
                  alt="Winning variant with timeline"
                  style={{
                    width: "100%",
                    maxHeight: "520px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 style={headingStyle}>Results</h2>
          <div
            style={{
              borderRadius: "20px",
              background: "#1c1917",
              padding: "72px 48px",
              textAlign: "center",
              marginTop: 0,
            }}
          >
            <div style={{ textAlign: "center", paddingBottom: "28px" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-dm-serif)",
                  fontSize: "clamp(88px, 14vw, 128px)",
                  fontWeight: 400,
                  color: "#f7f4ef",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                +7%
              </p>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 13,
                  color: "#78716c",
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
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "24px",
                borderTop: "1px solid #2c2926",
                paddingTop: "32px",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "0 0 6px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#78716c" }}>
                  Population
                </p>
                <p style={{ margin: 0, fontSize: "16px", color: "#e7e3dc", fontWeight: 500 }}>
                  iOS US
                </p>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "0 0 6px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#78716c" }}>
                  Primary Metric
                </p>
                <p style={{ margin: 0, fontSize: "16px", color: "#e7e3dc", fontWeight: 500 }}>
                  Install-to-Trial
                </p>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "0 0 6px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#78716c" }}>
                  Decision
                </p>
                <p style={{ margin: 0, fontSize: "16px", color: "#e7e3dc", fontWeight: 500 }}>
                  Rolled out as default
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#f0ece5",
                borderRadius: "10px",
                padding: "22px 28px",
                margin: "32px 0 0",
                borderLeft: "3px solid #1c1917",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#a8a39d",
                  marginBottom: "10px",
                }}
              >
                Unexpected finding
              </div>
              <p style={{ margin: 0, fontSize: "15px", color: "#57534e", lineHeight: 1.7 }}>
                Post-launch interviews revealed some users were rushing through lessons in 3 days
                then cancelling before being charged. Transparency solved the surprise - but exposed
                a new challenge: communicating long-term value.
              </p>
            </div>
          </div>
          <p
            style={{
              margin: "32px auto 0",
              maxWidth: "560px",
              fontFamily: "var(--font-inter)",
              fontSize: 17,
              color: "#78716c",
              lineHeight: 1.75,
              textAlign: "center",
            }}
          >
            The bottom-placement timeline outperformed the baseline. Install-to-Trial increased by +7% on iOS US - rolled out as default.
          </p>
        </Section>

        <Section>
          <h2 style={headingStyle}>What I Learned</h2>
          <p style={bodyTextStyle}>
            Conversion problems are rarely about price. They're about expectations. Users weren't refusing to pay - they were refusing to be surprised.
          </p>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#1c1917",
              lineHeight: 1.6,
              marginTop: "28px",
              paddingLeft: "20px",
              borderLeft: "3px solid #1c1917",
            }}
          >
            Solving for user understanding isn't the same as solving for business metrics - but when done right, it moves both.
          </div>
        </Section>
      </div>
    </div>
  );
}
