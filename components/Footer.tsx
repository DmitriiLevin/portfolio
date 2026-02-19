const footerTextClass =
  "text-lg font-normal leading-7 text-neutral-500 dark:text-neutral-400 sm:text-xl sm:leading-8 lg:text-[24px] lg:leading-[36px]";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 py-8 dark:border-neutral-800 sm:mt-20 lg:mt-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className={footerTextClass}>© 2026 Dima Levin</p>
        <div className={`flex flex-wrap items-center gap-6 sm:gap-8 ${footerTextClass}`}>
          <a
            href="mailto:dmutrui.levin@gmail.com"
            className="transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/dmytrolevin/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
