"use client";

import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";

const features = [
  {
    id: 0,
    title: "Lesson Scheduling",
    description: "Drag & drop calendar for lessons. Instructors can plan their week, assign students, and see their full schedule at a glance.",
    rationale: "I decided to make drag-and-drop the primary interaction because instructors were rescheduling 5–10 times per week.",
    image: "/images/projects/zutobi-instructor/calendar.png",
  },
  {
    id: 1,
    title: "Student Profiles",
    description: "Each student has a dedicated profile with progress tracking, lesson history, package balance, and contact details.",
    rationale: "I prioritized payment status on the profile because it was the most common source of conflict between instructors and admins.",
    image: "/images/projects/zutobi-instructor/students.png",
  },
  {
    id: 2,
    title: "Pricing Management",
    description: "UI for creating and managing lesson packages — adding, archiving, and organizing bundles with online or in-school payment options.",
    rationale: "I decided to keep package creation simple and visible so admins could adjust prices and options without digging through settings.",
    image: "/images/projects/zutobi-instructor/pricing.png",
  },
  {
    id: 3,
    title: "Instructor Management",
    description: "School admins can view all instructors, their status, roles, and contact info — and add new instructors via a simple form.",
    rationale: "I decided to put status and contact in one view so admins could assign students without chasing people down.",
    image: "/images/projects/zutobi-instructor/instructors.png",
  },
  {
    id: 4,
    title: "Working Schedule Setup",
    description: "Instructors set their weekly availability — per day, with the ability to apply settings across all weekdays. Includes profile bio and language options.",
    rationale: "I decided to let instructors set availability per day because their hours often varied by weekday.",
    image: "/images/projects/zutobi-instructor/schedule.png",
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

export default function CaseStudyZutobiInstructor() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const feature = features[activeFeature];

  return (
    <main className="w-full px-4 md:px-6 overflow-x-hidden" style={{ maxWidth: "1136px", margin: "0 auto", padding: "80px 0 120px" }}>
      <div className="max-w-full overflow-hidden">

        {/* HERO */}
        <section style={{ marginBottom: "80px" }}>
          <p className="text-xs uppercase tracking-widest text-[#888888] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
            Zutobi · B2B SaaS · Product Design
          </p>
          <h1 className="leading-[64px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
            Zutobi Instructor —<br />A Platform for Driving Schools
          </h1>
          <p className="text-base md:text-xl max-w-full overflow-hidden text-[#888888] leading-relaxed mb-8">
            Designing an MVP for US driving schools from zero — replacing spreadsheets with a focused scheduling and student management tool.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-1">Role</p>
              <p className="text-sm text-[#888888]">Product Designer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-1">Team</p>
              <p className="text-sm text-[#888888]">PM, Designer, Developers</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-1">Status</p>
              <p className="text-sm text-[#888888]">Shipped</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["B2B SaaS", "MVP", "Scheduling", "Student Management", "Driving Schools"].map(t => (
              <span key={t} className="text-xs text-[#888888] border border-[#222222] rounded-full px-4 py-1.5">{t}</span>
            ))}
          </div>
        </section>

        {/* HERO IMAGE */}
        <FadeIn>
          <div onClick={() => setLightbox("/images/projects/zutobi-instructor/cover.png")} style={{ cursor: "zoom-in" }}>
            <img
              src="/images/projects/zutobi-instructor/cover.png"
              alt="Zutobi Instructor"
              style={{ width: "100%", borderRadius: "12px", display: "block" }}
            />
          </div>
        </FadeIn>

        <Divider />

        {/* PROBLEM */}
        <FadeIn>
          <section style={{ maxWidth: "720px" }}>
            <Label>The problem</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              Driving schools were running on spreadsheets
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888] mb-6">
              US driving schools had no dedicated software. Instructors managed schedules in Google Sheets, tracked student progress in notebooks, and chased payments manually. The goal was to build an MVP that replaced this chaos with a focused, easy-to-use platform.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* RESEARCH */}
        <FadeIn>
          <section style={{ maxWidth: "720px" }}>
            <Label>Research</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              Talking to real instructors
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888] mb-8">
              We conducted user interviews with driving school owners and instructors to understand their daily workflows, pain points, and priorities. Three key insights shaped the MVP scope.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <div onClick={() => setLightbox("/images/projects/zutobi-instructor/research.png")} style={{ cursor: "zoom-in" }}>
            <img
              src="/images/projects/zutobi-instructor/research.png"
              alt="User research interviews"
              style={{ width: "100%", borderRadius: "12px", display: "block", marginBottom: "40px" }}
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { n: "01", title: "Scheduling was the biggest pain point", body: "Instructors spent hours every week manually updating schedules and resolving conflicts between students and time slots." },
            { n: "02", title: "Payment tracking caused conflicts", body: "Schools had no clear view of who had paid, who hadn't, and which packages were running out — leading to awkward conversations." },
            { n: "03", title: "Simplicity was non-negotiable", body: "Instructors weren't tech-savvy. Any tool that required training would be abandoned. The UI had to be immediately intuitive." },
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

        {/* SOLUTION */}
        <FadeIn>
          <Label>Solution</Label>
          <h2 className="leading-[42px] font-medium text-[#ffffff] mb-4" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
            Built around the instructor&apos;s daily workflow
          </h2>
          <p className="text-[18px] leading-[30px] text-[#888888] max-w-[720px] mb-10">
            The platform was scoped to five core modules — each solving a specific workflow problem identified in research.
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
            <p className="text-[18px] leading-[30px] text-[#888888] mb-4 max-w-[640px]">
              {feature.description}
            </p>
            <p className="text-[14px] leading-[24px] text-[#555555] mb-6 max-w-[640px]">
              → {feature.rationale}
            </p>
            <div onClick={() => setLightbox(features[activeFeature].image)} style={{ cursor: "zoom-in" }}>
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                style={{ width: "100%", borderRadius: "12px", display: "block" }}
              />
            </div>
          </div>
        </FadeIn>

        <Divider />

        {/* OUTCOME */}
        <FadeIn>
          <section style={{ maxWidth: "720px" }}>
            <Label>Outcome</Label>
            <h2 className="leading-[42px] font-medium text-[#ffffff] mb-6" style={{ fontSize: "clamp(22px, 4vw, 40px)" }}>
              From competition entry to real schools
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888888] mb-6">
              The MVP was built and shipped. Zutobi Instructor went from a competition entry concept to a product used by real driving schools in the US.
            </p>
            <p className="text-[18px] leading-[30px] text-[#888888]">
              The core scheduling and student management flows reduced the time instructors spent on admin work — letting them focus on teaching rather than managing spreadsheets.
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
            { n: "01", title: "MVP scope is a design decision", body: "Deciding what NOT to build was harder than designing the features themselves. Every cut required justification based on research — not assumptions." },
            { n: "02", title: "B2B UX requires different instincts", body: "Driving school owners cared about efficiency and reliability above everything else. Delight and polish mattered less than clarity and speed." },
            { n: "03", title: "Designing from zero is liberating and terrifying", body: "No existing patterns to follow meant total creative freedom — but also total responsibility for getting the information architecture right from the start." },
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
