import { Mail, Linkedin } from "lucide-react";

const footerTextClass =
  "text-lg font-normal leading-7 text-[#888888] sm:text-xl sm:leading-8 lg:text-[24px] lg:leading-[36px]";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#222222] py-8 sm:mt-20 lg:mt-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className={footerTextClass}>© 2026 Dima Levin</p>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <a
            href="mailto:dmutrui.levin@gmail.com"
            className="text-[#888888] hover:text-[#ffffff] transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dmytrolevin/"
            target="_blank"
            rel="noreferrer"
            className="text-[#888888] hover:text-[#ffffff] transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
