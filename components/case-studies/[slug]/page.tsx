import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const metadataChips = [
  { label: "Role", value: "Placeholder role" },
  { label: "Timeline", value: "Placeholder timeline" },
  { label: "Team", value: "Placeholder team" },
  { label: "Platform", value: "Placeholder platform" },
];

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const title = formatTitle(slug);

  return (
    <main className="pb-24">
      <div className="max-w-5xl py-12 sm:py-16">
        {/* Back links */}
        <div className="mb-10 flex flex-wrap gap-4">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            ← Back to Case Studies
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header / Hero */}
        <header className="mb-16">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h1>
          <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400">
            Placeholder subtitle. One line that sets the stage for this case study.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metadataChips.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/50"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </header>

        <article>
          {/* TL;DR — Impact Card */}
          <section id="tldr" className="scroll-mt-24 mt-16">
            <div className="rounded-2xl border border-zinc-200 bg-slate-50/80 p-6 dark:border-zinc-700 dark:bg-slate-900/30 sm:p-8">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                TL;DR
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Placeholder TL;DR. Summarize the case study outcome and key takeaways in a few sentences.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start gap-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  Outcome placeholder one.
                </li>
                <li className="flex items-start gap-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  Outcome placeholder two.
                </li>
                <li className="flex items-start gap-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  Outcome placeholder three.
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-200">
                  +X% Activation
                </span>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-200">
                  -Y% Drop-off
                </span>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-200">
                  Z% Lift
                </span>
              </div>
            </div>
          </section>

          <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

          <section id="context" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Context
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder context. Describe the product, business, and situation before the work began.
            </p>
          </section>

          <section id="problem" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Problem
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder problem. Define the core problem or opportunity you were addressing.
            </p>
          </section>

          <section id="hypothesis" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Hypothesis
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder hypothesis. State what you believed would happen if you made specific changes.
            </p>
          </section>

          {/* Metrics — 3 cards */}
          <section id="metrics" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Metrics
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder intro. List the key metrics you used to measure success and why they mattered.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-900 p-5 dark:border-zinc-100 dark:bg-zinc-100">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-300 dark:text-zinc-600">
                  Primary metric
                </p>
                <p className="mt-2 text-lg font-semibold text-white dark:text-zinc-900">
                  Placeholder metric name
                </p>
                <p className="mt-1 text-sm text-zinc-300 dark:text-zinc-600">
                  Small note about why this was primary.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 dark:border-zinc-700 dark:bg-zinc-800/50">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Guardrail 1
                </p>
                <p className="mt-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
                  Placeholder guardrail
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Small note.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 dark:border-zinc-700 dark:bg-zinc-800/50">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Guardrail 2
                </p>
                <p className="mt-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
                  Placeholder guardrail
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Small note.
                </p>
              </div>
            </div>
          </section>

          <section id="constraints" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Constraints
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder constraints. Note any technical, resource, or timeline constraints you worked within.
            </p>
          </section>

          {/* Exploration — two columns */}
          <section id="exploration" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Exploration
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder exploration. Describe how you explored the problem space, research, and ideation.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  What we tried
                </h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    Placeholder bullet.
                  </li>
                  <li className="flex items-start gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    Placeholder bullet.
                  </li>
                  <li className="flex items-start gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    Placeholder bullet.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  What we learned
                </h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    Placeholder bullet.
                  </li>
                  <li className="flex items-start gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    Placeholder bullet.
                  </li>
                  <li className="flex items-start gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    Placeholder bullet.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solution — mockup grid with captions */}
          <section id="solution" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Solution
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder solution. Explain the solution you designed and implemented.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="aspect-video w-full rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800" />
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                  Caption placeholder for mockup one.
                </p>
              </div>
              <div>
                <div className="aspect-video w-full rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800" />
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                  Caption placeholder for mockup two.
                </p>
              </div>
              <div className="sm:col-span-2">
                <div className="aspect-video w-full rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800" />
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                  Caption placeholder for mockup three.
                </p>
              </div>
            </div>
          </section>

          <section id="experiment" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Experiment
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder experiment. Describe how you ran the experiment, A/B test, or rollout approach.
            </p>
          </section>

          <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

          {/* Results — chart panel + summary card */}
          <section id="results" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Results
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder results. Summarize the outcome and impact on the metrics you defined.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-800/30">
              <div className="flex aspect-video w-full items-center justify-center rounded-2xl">
                <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                  Chart placeholder
                </span>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-700 dark:bg-zinc-800/30 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Results summary
              </h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">Outcome:</span>
                  Placeholder outcome summary.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">Confidence / notes:</span>
                  Placeholder confidence or caveats.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">Next step:</span>
                  Placeholder next step or follow-up.
                </li>
              </ul>
            </div>
          </section>

          <section id="learnings" className="scroll-mt-24 mt-16">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Learnings
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Placeholder learnings. Reflect on what you learned, what you would do differently, and takeaways for future work.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
