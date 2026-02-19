import Image from "next/image";
import TimelineSection, { type TimelineItem } from "@/components/TimelineSection";

const experienceRaw = [
  {
    dates: "Sep 2025 – Present",
    company: "Creative Fabrica",
    role: "Senior Product Designer, Growth",
    type: "Full-time",
    location: "Amsterdam, North Holland, Netherlands · Remote",
    description: null as string | null,
  },
  {
    dates: "Oct 2022 – Sep 2025",
    company: "Zutobi",
    role: "Product Designer, Growth – Activation and Monetization",
    type: "Full-time",
    location: "Sweden · Remote",
    description: "A/B testing · Activation · Retention · Monetization",
  },
  {
    dates: "May 2022 – Oct 2022",
    company: "EPAM Systems",
    role: "User Experience Designer",
    type: "Full-time",
    location: "Poland · Remote",
    description: null as string | null,
  },
  {
    dates: "Mar 2021 – Apr 2022",
    company: "Web Studio AI",
    role: "User Experience Designer",
    type: "Full-time",
    location: "Kyiv, Kyiv City, Ukraine · Remote",
    description: null as string | null,
  },
  {
    dates: "Feb 2020 – Mar 2021",
    company: "Freelance Design",
    role: "UI/UX designer",
    type: "Freelance",
    location: "Ukraine · Remote",
    description: null as string | null,
  },
];

const educationRaw = [
  {
    dates: null as string | null,
    school: "Kyiv National Economics University",
    degree: "Bachelor's degree, International economy and management",
    detail: null as string | null,
  },
  {
    dates: null as string | null,
    school: "Tel-Ran, Educational Center",
    degree: "Web & mobile applications development course",
    detail:
      "Special program for adapting software developers according to Israel IT technologies by Ministry of Absorption.",
  },
];

function toExperienceItems(
  raw: typeof experienceRaw
): TimelineItem[] {
  return raw.map((item) => ({
    period: item.dates,
    org: item.company,
    title: item.role,
    description: [
      `${item.type}${item.location ? ` · ${item.location}` : ""}`,
      item.description,
    ]
      .filter(Boolean)
      .join(" · "),
  }));
}

function toEducationItems(raw: typeof educationRaw): TimelineItem[] {
  return raw.map((item) => ({
    period: item.dates,
    org: item.school,
    title: item.degree,
    description: item.detail,
  }));
}

const experience = toExperienceItems(experienceRaw);
const education = toEducationItems(educationRaw);

const linkClass =
  "text-lg font-normal leading-7 text-[rgb(112,112,112)] transition-colors hover:opacity-80 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9 dark:text-neutral-400 dark:hover:text-neutral-300";

export default function AboutPage() {
  return (
    <main>
      {/* Hero: photo + short bio — 12-col grid, 8px spacing */}
      <section className="mb-16 grid grid-cols-1 gap-12 sm:mb-20 sm:gap-14 lg:mb-24 lg:grid-cols-12 lg:gap-16">
        <div className="flex justify-start lg:col-span-4">
          <Image
            src="/images/dima.jpg"
            alt="Dima Levin"
            width={176}
            height={176}
            className="h-[140px] w-[140px] shrink-0 rounded-full object-cover shadow-md sm:h-[160px] sm:w-[160px] lg:h-[176px] lg:w-[176px]"
          />
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-5 lg:col-span-8 lg:max-w-[720px] lg:space-y-6">
          <h1 className="text-[40px] font-medium leading-[48px] text-neutral-900 dark:text-neutral-50 sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
            About
          </h1>
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <p className="text-[20px] font-normal leading-[28px] text-[rgb(112,112,112)] dark:text-neutral-400 sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[42px]">
              Placeholder bio. A short paragraph that introduces you and your background.
            </p>
            <p className="text-[20px] font-normal leading-[28px] text-[rgb(112,112,112)] dark:text-neutral-400 sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[42px]">
              Another line or two about what you care about and where you're based.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="mailto:dmutrui.levin@gmail.com" className={linkClass}>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/dmytrolevin/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Experience + Education: 3-col timeline (section title | dates | details) */}
      <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
        <TimelineSection title="Experience" items={experience} />
        <div
          className="h-px w-full border-t border-neutral-200 dark:border-neutral-800"
          aria-hidden
        />
        <TimelineSection title="Education" items={education} />
      </div>
    </main>
  );
}
