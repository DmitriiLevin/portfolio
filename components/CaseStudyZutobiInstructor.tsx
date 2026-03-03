"use client";

import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";

const features = [
  {
    id: 0,
    title: "Lesson Scheduling",
    description: "Drag & drop calendar for lessons. Instructors can plan their week, assign students, and see their full schedule at a glance.",
    rationale: "I decided to make drag-and-drop the primary interaction because instructors were rescheduling 5–10 times per week.",
    image: "/images/zutobi-instructor-scheduling.png",
  },
  {
    id: 1,
    title: "Student Profiles",
    description: "Each student has a dedicated profile with progress tracking, lesson history, package balance, and contact details.",
    rationale: "I prioritized payment status on the profile because it was the most common source of conflict between instructors and admins.",
    image: "/images/zutobi-instructor-students.png",
  },
  {
    id: 2,
    title: "Pricing Management",
    description: "UI for creating and managing lesson packages — adding, archiving, and organizing bundles with online or in-school payment options.",
    rationale: "I decided to keep package creation simple and visible so admins could adjust prices and options without digging through settings.",
    image: "/images/zutobi-instructor-pricing.png",
  },
  {
    id: 3,
    title: "Instructor Management",
    description: "School admins can view all instructors, their status, roles, and contact info — and add new instructors via a simple form.",
    rationale: "I decided to put status and contact in one view so admins could assign students without chasing people down.",
    image: "/images/zutobi-instructor-management.png",
  },
  {
    id: 4,
    title: "Working Schedule Setup",
    description: "Instructors set their weekly availability — per day, with the ability to apply settings across all weekdays. Includes profile bio and language options.",
    rationale: "I decided to let instructors set availability per day because their hours often varied by weekday.",
    image: "/images/zutobi-instructor-schedule.png",
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
    <p className="text-xs uppercase tracking-widest text-[#888580] mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="border-t border-[#2a2a28] my-20" />;
}

export default function CaseStudyZutobiInstructor() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features[activeFeature];

  return (
    <main className="w-full flex justify-center px-6">
      <div className="w-full max-w-[1200px] py-24">

        {/* HERO */}
        <section className="mb-24">
          <p className="text-xs uppercase tracking-widest text-[#888580] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
            Zutobi · Product Design · MVP
          </p>
          <h1 className="text-[56px] leading-[64px] font-medium text-[#e8e4dd] mb-6">
            Zutobi Instructor —<br />A Platform for Driving Schools
          </h1>
          <p className="text-[20px] leading-[32px] text-[#888580] max-w-[640px] mb-8">
            With one instructor to interview and 6 months on the clock, I had to make fast decisions. Here's what I cut, what I kept, and why it worked.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888580] mb-1">Role</p>
              <p className="text-sm text-[#888580]">Product Designer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888580] mb-1">Team</p>
              <p className="text-sm text-[#888580]">CEO, PM, Lead Designer, Developers, QA</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888580] mb-1">Timeline</p>
              <p className="text-sm text-[#888580]">6 months</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Product Design", "MVP", "B2B SaaS", "Driving Schools", "User Research"].map(t => (
              <span key={t} className="text-xs text-[#888580] border border-[#2a2a28] rounded-full px-4 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* HERO IMAGE */}
        <FadeIn>
          <div className="w-full aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center">
            {/* Replace with: <img src="/images/zutobi-instructor-hero.png" alt="Zutobi Instructor" className="w-full h-full object-cover rounded-2xl" /> */}
            <p className="text-xs uppercase tracking-widest text-[#444440]">Hero image placeholder</p>
          </div>
        </FadeIn>

        <Divider />

        {/* METRICS */}
        <FadeIn>
          <Label>Impact</Label>
          <h2 className="text-[32px] leading-[42px] font-medium text-[#e8e4dd] mb-10">
            The numbers
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { value: "11", label: "Driving schools onboarded" },
            { value: "6mo", label: "From zero to live product" },
            { value: "2nd", label: "Florida Virtual School competition" },
            { value: "5", label: "Core features shipped" },
          ].map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.08}>
              <div className="bg-[#1a1a18] rounded-2xl p-6">
                <p className="text-[36px] font-medium text-[#e8e4dd] leading-none mb-2">{m.value}</p>
                <p className="text-xs uppercase tracking-widest text-[#888580]">{m.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Divider />

        {/* PROBLEM */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>The problem</Label>
            <h2 className="text-[32px] leading-[42px] font-medium text-[#e8e4dd] mb-6">
              Driving schools were running on spreadsheets
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888580] mb-6">
              Most US driving schools managed their operations using disconnected tools — Excel for scheduling, Google Sheets for payments, WhatsApp for student communication. Lesson planning, student progress, and instructor availability were scattered and unstructured.
            </p>
            <p className="text-[18px] leading-[30px] text-[#888580] mb-6">
              After one contextual interview with an instructor, three blockers became obvious — and shaped everything we built.
            </p>
            <div className="border-l-2 border-[#2a2a28] pl-6 py-2 mb-6">
              <p className="text-[18px] leading-[30px] text-[#888580] italic">
                "It's hard to stay organized — even as a solo instructor."
              </p>
            </div>
            <p className="text-[18px] leading-[30px] text-[#888580]">
              The goal was clear: build one cohesive tool that replaces the chaos — fast enough to compete for a 5-year funding contract with Florida Virtual School.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* PROCESS */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>Process</Label>
            <h2 className="text-[32px] leading-[42px] font-medium text-[#e8e4dd] mb-6">
              Research under constraints
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888580] mb-6">
              With limited access to users and a tight deadline, we focused on what we could learn quickly: a contextual interview with one instructor to map her daily flow and identify the biggest blockers, combined with competitor analysis to understand the market baseline.
            </p>
          </section>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { n: "01", title: "Scheduling was manual and error-prone", body: "Instructors tracked lessons in spreadsheets, often double-booking or losing track of student progress. One wrong entry could cascade into a week of confusion." },
            { n: "02", title: "No visibility into payments", body: "Package balances and lesson invoices were managed separately, with no single source of truth. Instructors were chasing school owners for money they'd already earned." },
            { n: "03", title: "Instructor workload was invisible to admins", body: "School administrators had no way to see who was overloaded or available without calling instructors directly. Admins were guessing who was available — or just calling." },
          ].map((item, i) => (
            <FadeIn key={item.n} delay={i * 0.08} className="h-full">
              <div className="bg-[#1a1a18] rounded-2xl p-6 h-full">
                <p className="text-xs text-[#444440] mb-3">{item.n}</p>
                <p className="text-[16px] font-medium text-[#e8e4dd] mb-3">{item.title}</p>
                <p className="text-[15px] leading-[24px] text-[#888580]">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Divider />

        {/* SOLUTION */}
        <FadeIn>
          <Label>Solution</Label>
          <h2 className="text-[32px] leading-[42px] font-medium text-[#e8e4dd] mb-4">
            A focused tool for instructors and school admins
          </h2>
          <p className="text-[18px] leading-[30px] text-[#888580] max-w-[720px] mb-10">
            We built an MVP centered around clarity and speed — prioritizing the flows that instructors needed daily, without overbuilding features that would slow us down.
          </p>
        </FadeIn>

        {/* Feature tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFeature(f.id)}
              className={`text-sm rounded-full px-5 py-2 border transition ${
                activeFeature === f.id
                  ? "border-[#e8e4dd] text-[#e8e4dd]"
                  : "border-[#2a2a28] text-[#666360] hover:border-[#e8e4dd]"
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        <FadeIn key={activeFeature}>
          <div className="bg-[#1a1a18] rounded-2xl p-8">
            <p className="text-[18px] leading-[30px] text-[#888580] mb-4 max-w-[640px]">
              {feature.rationale}
            </p>
            <p className="text-[18px] leading-[30px] text-[#888580] mb-6 max-w-[640px]">
              {feature.description}
            </p>
            <div className="w-full aspect-video bg-neutral-200 rounded-xl flex items-center justify-center">
              {/* Replace with: <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" /> */}
              <p className="text-xs uppercase tracking-widest text-[#888580]">
                {feature.title} screenshot
              </p>
            </div>
          </div>
        </FadeIn>

        <Divider />

        {/* OUTCOME */}
        <FadeIn>
          <section className="max-w-[720px]">
            <Label>Outcome</Label>
            <h2 className="text-[32px] leading-[42px] font-medium text-[#e8e4dd] mb-6">
              From competition to real schools
            </h2>
            <p className="text-[18px] leading-[30px] text-[#888580] mb-6">
              We placed 2nd in the Florida Virtual School competition — strong enough validation to continue building. After the presentation, we started engaging real schools and gathering direct feedback from instructors using the product in their daily work.
            </p>
            <p className="text-[18px] leading-[30px] text-[#888580] mb-6">
              We didn't win the contract — but the feedback from real schools gave us a clearer product direction than any brief could have.
            </p>
            <p className="text-[18px] leading-[30px] text-[#888580]">
              By the time I left the team, 11 schools were actively using the platform. The feedback loop revealed new priorities — most notably, a booklet module that users consistently requested but we hadn't yet built.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* LEARNINGS */}
        <FadeIn>
          <Label>Key learnings</Label>
          <h2 className="text-[32px] leading-[42px] font-medium text-[#e8e4dd] mb-10">
            What I took away
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {[
            {
              n: "01",
              title: "One interview was enough to find the real problem",
              body: "Limited user access forced us to prioritize ruthlessly. Instead of building everything, we identified the three daily pain points that mattered most — and solved those first.",
            },
            {
              n: "02",
              title: "A tight deadline forced better prioritization than a long one would have",
              body: "Six months from zero to a live product used by real schools. Moving fast required clear scope decisions, not lower quality — knowing what not to build was as important as knowing what to build.",
            },
            {
              n: "03",
              title: "Schools asked for a feature we never considered — and they were right",
              body: "The booklet module — our most-requested feature — never came up in early research. Only after instructors used the product daily did this gap become clear. Ship, then listen.",
            },
          ].map((l, i) => (
            <FadeIn key={l.n} delay={i * 0.08} className="h-full">
              <div className="bg-[#1a1a18] rounded-2xl p-6 h-full">
                <p className="text-xs text-[#444440] mb-3">{l.n}</p>
                <p className="text-[16px] font-medium text-[#e8e4dd] mb-3">{l.title}</p>
                <p className="text-[15px] leading-[24px] text-[#888580]">{l.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </main>
  );
}
