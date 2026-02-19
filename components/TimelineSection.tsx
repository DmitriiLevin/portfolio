import { Fragment } from "react";

export type TimelineItem = {
  period: string | null;
  org: string;
  title: string;
  description?: string | null;
};

type TimelineSectionProps = {
  title: string;
  items: TimelineItem[];
};

const sectionTitleClass =
  "text-xl font-medium leading-7 text-neutral-900 dark:text-neutral-50 sm:text-2xl sm:leading-9";
const periodClass =
  "text-sm leading-5 text-neutral-400 whitespace-nowrap sm:text-base sm:leading-6 dark:text-neutral-400";
const orgClass =
  "text-base font-medium leading-6 text-neutral-900 dark:text-neutral-50 sm:text-[18px] sm:leading-[27px]";
const titleClass =
  "text-base font-normal leading-6 text-neutral-600 dark:text-neutral-400 sm:text-[18px] sm:leading-[27px]";
const descriptionClass =
  "text-base font-normal leading-6 text-[rgb(112,112,112)] dark:text-neutral-400 sm:text-[18px] sm:leading-[27px] max-w-[720px]";

export default function TimelineSection({ title, items }: TimelineSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-x-6 gap-y-8 pt-0 sm:gap-x-8 lg:grid-cols-[240px_240px_1fr] lg:items-start">
      {/* Header row: section title + empty columns (desktop only) */}
      <h2 className={sectionTitleClass}>{title}</h2>
      <div className="hidden lg:block" aria-hidden />
      <div className="hidden lg:block" aria-hidden />
      {/* Entry rows: spacer, date, content (each row wrapped in contents) */}
      {items.map((item, i) => (
        <div key={i} className="contents">
          {/* Desktop: spacer column, Mobile: hidden */}
          <div className={`${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"} hidden lg:block`} aria-hidden />
          {/* Date column */}
          <div className={`${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"} min-w-0`}>
            {item.period && (
              <p className={periodClass}>{item.period}</p>
            )}
          </div>
          {/* Content column */}
          <div className={`space-y-2 ${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"} min-w-0`}>
            <p className={orgClass}>{item.org}</p>
            <p className={titleClass}>{item.title}</p>
            {item.description && (
              <p className={descriptionClass}>{item.description}</p>
            )}
          </div>
          {/* Mobile divider between entries */}
          {i < items.length - 1 && (
            <div
              className="col-span-full h-px bg-neutral-200 dark:bg-white/10 lg:hidden"
              aria-hidden
            />
          )}
        </div>
      ))}
      {/* Divider under section (full width of content area) */}
      <div
        className="col-span-full h-px bg-neutral-200 dark:bg-white/10"
        aria-hidden
      />
    </section>
  );
}
