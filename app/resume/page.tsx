export default function ResumePage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-6 md:px-12 py-16 sm:py-24">
        <h1 style={{ fontFamily: "var(--font-dm-serif)", fontWeight: 400 }} className="text-3xl text-[var(--foreground)]">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] leading-[28px] font-semibold transition-colors text-[var(--secondary)] hover:text-[var(--foreground)]"
        >
          Resume
        </a>
      </div>
    </main>
  );
}
