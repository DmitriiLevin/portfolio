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
    <section className="pt-0">
      <h2 className={sectionTitleClass}>{title}</h2>

      {/* Mobile / tablet: stacked cards — date, org, title, description */}
      <div className="mt-6 space-y-0 sm:mt-8 lg:hidden">
        {items.map((item, i) => (
          <div key={i}>
            <div
              className={`space-y-2 min-w-0 ${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"}`}
            >
              {item.period && (
                <p className={periodClass}>{item.period}</p>
              )}
              <p className={orgClass}>{item.org}</p>
              <p className={titleClass}>{item.title}</p>
              {item.description && (
                <p className={descriptionClass}>{item.description}</p>
              )}
            </div>
            {i < items.length - 1 && (
              <div
                className="h-px bg-neutral-200 dark:bg-white/10"
                aria-hidden
              />
            )}
          </div>
        ))}
        <div
          className="h-px bg-neutral-200 dark:bg-white/10"
          aria-hidden
        />
      </div>

      {/* Desktop: 3-column grid (spacer | date | content) */}
      <div className="hidden lg:grid lg:grid-cols-[240px_240px_1fr] lg:gap-x-8 lg:gap-y-8 lg:items-start">
        <div aria-hidden />
        <div aria-hidden />
        {items.map((item, i) => (
          <Fragment key={i}>
            <div
              className={`${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"} min-w-0`}
              aria-hidden
            />
            <div className={`${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"} min-w-0`}>
              {item.period && (
                <p className={periodClass}>{item.period}</p>
              )}
            </div>
            <div
              className={`space-y-2 ${i === 0 ? "pb-6 sm:pb-8" : "py-6 sm:py-8"} min-w-0`}
            >
              <p className={orgClass}>{item.org}</p>
              <p className={titleClass}>{item.title}</p>
              {item.description && (
                <p className={descriptionClass}>{item.description}</p>
              )}
            </div>
          </Fragment>
        ))}
        <div
          className="col-span-full h-px bg-neutral-200 dark:bg-white/10"
          aria-hidden
        />
      </div>
    </section>
  );
}
