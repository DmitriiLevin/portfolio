import Link from "next/link";

const caseStudies = [
  { slug: "project-1", title: "Project One" },
  { slug: "project-2", title: "Project Two" },
  { slug: "project-3", title: "Project Three" },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <div className="max-w-5xl py-16 sm:py-24">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">Case Studies</h1>
        <ul className="mt-8 space-y-3">
          {caseStudies.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                href={`/case-studies/${slug}`}
                className="text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
