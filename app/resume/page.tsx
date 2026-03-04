export default function ResumePage() {
  return (
    <main>
      <div className="max-w-5xl py-16 sm:py-24">
        <h1 className="text-3xl font-semibold text-[#ffffff]">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[24px] leading-[36px] font-normal text-[#888888] transition-colors hover:opacity-80 hover:text-[#ffffff]"
        >
          Resume
        </a>
      </div>
    </main>
  );
}
