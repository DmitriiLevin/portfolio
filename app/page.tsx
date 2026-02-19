import Link from "next/link";
import ProjectThumbnail from "@/components/ProjectThumbnail";

const projects = [
  { slug: "project-1", title: "Project One", subtitle: "Growth experiment · 2024", image: "/images/projects/project-1.jpg" },
  { slug: "project-2", title: "Project Two", subtitle: "Growth experiment · 2024", image: "/images/projects/project-2.jpg" },
  { slug: "project-3", title: "Project Three", subtitle: "Growth experiment · 2024", image: "/images/projects/project-3.jpg" },
];

export default function Home() {
  return (
    <main className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero — 8px grid */}
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <h1 className="mb-6 text-[40px] font-medium leading-[48px] text-neutral-900 dark:text-neutral-50 sm:mb-8 sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
          Hi, I'm Dima Levin
        </h1>
        <p className="mb-8 text-[20px] font-normal leading-[28px] text-[rgb(112,112,112)] dark:text-neutral-400 sm:mb-10 sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[42px] lg:max-w-[980px]">
          Senior Product Designer at Creative Fabrica, based in Warsaw.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a
            href="mailto:dmutrui.levin@gmail.com"
            className="text-lg font-normal leading-7 text-[rgb(112,112,112)] transition-colors hover:opacity-80 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9 dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/dmytrolevin/"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-normal leading-7 text-[rgb(112,112,112)] transition-colors hover:opacity-80 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9 dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Case studies — 8px grid */}
      <section id="selected-work">
        <h2 className="mb-12 text-[24px] font-medium text-neutral-900 dark:text-neutral-50 sm:mb-14 lg:mb-16 lg:text-[28px]">
          Case studies
        </h2>
        <div className="flex flex-col">
          {projects.map(({ slug, title, subtitle, image }) => (
            <Link
              key={slug}
              href={`/case-studies/${slug}`}
              className="group mb-16 block w-full cursor-pointer text-left last:mb-0 sm:mb-20 lg:mb-24"
            >
              <div className="mb-6 w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-[1.02] sm:mb-8 sm:rounded-3xl dark:shadow-neutral-900/30">
                <ProjectThumbnail
                  src={image}
                  alt={title}
                  aspectClass="aspect-[4/3] sm:aspect-[16/9]"
                  className="rounded-none"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-[24px] font-medium text-neutral-900 dark:text-neutral-50 sm:text-[26px] lg:text-[28px]">
                  {title}
                </h3>
                <p className="text-[16px] text-neutral-500 dark:text-neutral-400 sm:text-[18px]">
                  {subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
