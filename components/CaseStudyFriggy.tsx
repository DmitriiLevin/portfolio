"use client";

import Image from "next/image";
import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";

const features = [
  {
    id: 0,
    title: "Personalized Onboarding",
    description:
      "Users select focus areas, set personal goals, and choose books that match their interests. The onboarding flow builds a reading profile that shapes every recommendation going forward.",
    image: "/images/projects/friggy/onboarding.png",
  },
  {
    id: 1,
    title: "For You Feed",
    description:
      "A daily summary feed personalized to the user's goals and reading history. Non-subscribers get one rotating free summary each week — a deliberate hook to engage before the paywall.",
    image: "/images/projects/friggy/home.png",
  },
  {
    id: 2,
    title: "Read & Listen Player",
    description:
      "An audio-first reading experience with a clean, focused player interface. Users can switch between reading and listening — built around the insight that people preferred listening over reading.",
    image: "/images/projects/friggy/home.png",
  },
  {
    id: 3,
    title: "Smart Search & Discovery",
    description:
      "Book discovery by goals, themes, or reader type. Users can browse trending content, revisit previous searches, and get personalized recommendations based on selected topics.",
    image: "/images/projects/friggy/search.png",
  },
  {
    id: 4,
    title: "Gamified Profile",
    description:
      "Reading streaks, collectible achievements, and a constellation system that visualizes weekly progress. Designed to build habit and reward consistency — not just content consumption.",
    image: "/images/projects/friggy/overview.png",
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-[#888888] mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="border-t border-[#222222] my-20" />;
}

export default function CaseStudyFriggy() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const feature = features[activeFeature];
  console.log(features[activeFeature].image);

  return (
    <main className="w-full px-4 md:px-6" style={{ maxWidth: "1136px", margin: "0 auto", padding: "80px 0 120px" }}>
      <div>

        {/* HERO */}
        <section className="mb-24">
          <p className="text-xs uppercase tracking-widest text-[#888888] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
            Friggy · Product Design · Consumer App
          </p>
          <h1 className="leading-[64px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
            Friggy —<br />A Book Summary App
          </h1>
          <p className="text-[20px] leading-[32px] text-[#888888] max-w-[640px] mb-8">
            Designing a personalized reading app that stands out in a crowded market — by putting audio-first experience, habit formation, and personalization ahead of generic content feeds.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-1">Role</p>
              <p className="text-sm text-[#888888]">Product Designer (pair with 1 designer)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-1">Team</p>
              <p className="text-sm text-[#888888]">PM, 2 Designers, Developers, QA, Graphic Team</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-1">Status</p>
              <p className="text-sm text-[#888888]">Live on iOS</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Product Design", "Consumer App", "iOS", "Gamification", "Audio UX", "Personalization"].map(t => (
              <span key={t} className="text-xs text-[#888888] border border-[#222222] rounded-full px-4 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* HERO IMAGE */}
        <FadeIn>
          <div onClick={() => setLightbox("/images/projects/friggy/cover.png")} style={{ cursor: "zoom-in" }}>
            <Image
              src="/images/projects/friggy/cover.png"
              alt="Friggy cover"
              width={1200}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </FadeIn>

        <Divider />

        {/* PROBLEM */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>The problem</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              The market was crowded — but missing something
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888] mb-6">
              Apps like Blinkist and Headway had already proven the demand for book summaries. But they treated users the same — same feed, same recommendations, same experience regardless of goals or preferences. The opportunity was personalization: an app that felt like it was built for you, not for everyone.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* RESEARCH */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>Research</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              What we learned early
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888] mb-8">
              We started with competitive analysis of Blinkist, Headway, and Bookmates — mapping their strengths and gaps. We combined this with quick corridor testing to gather early reactions from real users.
            </p>
          </section>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { n: "01", title: "Users dropped off after 1–2 summaries", body: "Without a clear next step or personal recommendation, non-paying users had no reason to come back." },
            { n: "02", title: "People preferred listening over reading", body: "Audio consumption was significantly more popular — but most apps treated audio as a secondary feature." },
            { n: "03", title: "Users didn't know what to read next", body: "Strong demand for personalization and guidance — not just a catalog to browse." },
          ].map((item, i) => (
            <FadeIn key={item.n} delay={i * 0.08} className="h-full">
              <div className="bg-[#161616] rounded-2xl p-6 h-full">
                <p className="text-xs text-[#555555] mb-3">{item.n}</p>
                <p className="text-[16px] font-medium text-[#ffffff] mb-3">{item.title}</p>
                <p className="text-[15px] leading-[24px] text-[#888888]">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Divider />

        {/* PROCESS */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>Process</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              Moving fast with a clear framework
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888]">
              To move quickly and stay aligned across two designers, we built a shared UX framework early: a user journey map based on reading motivation, a prioritization matrix to scope the MVP, and weekly design-engineering syncs with early prototypes tested internally to validate flows before building.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* FEATURES */}
        <FadeIn>
          <Label>Solution</Label>
          <h2 className="leading-[42px] font-medium text-[#ffffff] mb-4" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
            Designed around clarity, focus, and habit
          </h2>
          <p className="text-[18px] leading-[30px] text-[#888888] max-w-[720px] mb-10">
            Every feature was designed to answer one of three needs: help users discover what to read next, make consuming summaries effortless, and give them a reason to come back tomorrow.
          </p>
        </FadeIn>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFeature(f.id)}
              className={`text-sm rounded-full px-5 py-2 border transition ${
                activeFeature === f.id
                  ? "border-[#ffffff] text-[#ffffff]"
                  : "border-[#222222] text-[#555555] hover:border-[#ffffff]"
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        <FadeIn key={activeFeature}>
          <div className="bg-[#161616] rounded-2xl p-8">
            <p className="text-[18px] leading-[30px] text-[#888888] mb-6 max-w-[640px]">
              {feature.description}
            </p>
            <div onClick={() => setLightbox(features[activeFeature].image)} style={{ cursor: "zoom-in" }}>
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            </div>
          </div>
        </FadeIn>

        <Divider />

        {/* OUTCOME */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>Outcome</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              Live on iOS, preparing for growth
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888] mb-6">
              Friggy launched on iOS and is now live for early users. The MVP was built around audio-first experience, personalization, and clarity — shaped directly by our early research findings.
            </p>
            <p className="text-[18px] leading-[30px] text-[#888888]">
              The next stage focuses on A/B testing the onboarding flow with a goal of increasing trial starts — applying the same growth experimentation approach used in previous projects.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* LEARNINGS */}
        <FadeIn>
          <Label>Key learnings</Label>
          <h2 className="leading-[42px] font-medium text-[#ffffff] mb-10" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
            What I took away
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {[
            {
              n: "01",
              title: "Audio-first is a UX decision, not a feature",
              body: "Treating audio as the primary consumption mode — not an add-on — changed how we designed every screen. Player UI, navigation, and content structure all followed from this one decision.",
            },
            {
              n: "02",
              title: "Habit requires a hook, not just content",
              body: "The gamification layer wasn't decoration — it was the answer to the drop-off problem. Streaks and constellations gave users a reason to open the app even when they had nothing specific to read.",
            },
            {
              n: "03",
              title: "Lightweight testing beats no testing",
              body: "Without budget for formal user research, corridor testing with colleagues gave us enough signal to make confident prioritization decisions. Imperfect data is still better than assumptions.",
            },
          ].map((l, i) => (
            <FadeIn key={l.n} delay={i * 0.08} className="h-full">
              <div className="bg-[#161616] rounded-2xl p-6 h-full">
                <p className="text-xs text-[#555555] mb-3">{l.n}</p>
                <p className="text-[16px] font-medium text-[#ffffff] mb-3">{l.title}</p>
                <p className="text-[15px] leading-[24px] text-[#888888]">{l.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

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
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              borderRadius: "12px",
              objectFit: "contain"
            }}
            onClick={e => e.stopPropagation()}
            alt=""
          />
        </div>
      )}
    </main>
  );
}
