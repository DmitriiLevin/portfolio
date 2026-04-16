import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: "1080px", margin: "0 auto", padding: "96px 48px 96px" }}>
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "80px",
        alignItems: "start"
      }}>
        {/* LEFT: photo */}
        <div>
          <Image
            src="/images/dima.jpg"
            alt="Dima Levin"
            width={520}
            height={640}
            style={{
              width: "100%",
              height: "640px",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block"
            }}
          />
        </div>

        {/* RIGHT: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "8px" }}>
          <h1 style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(32px, 5vw, 44px)",
            fontWeight: 400,
            color: "var(--foreground)",
            lineHeight: "1.15",
            marginBottom: "16px"
          }}>
            Specialised in growth experiments that move real metrics.
          </h1>
          <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: 1.8 }}>
            I&apos;m drawn to the fundamental challenge of building products that actually convert. Most of my work centers on activation flows, paywalls, and A/B experiments that connect design decisions to revenue.
          </p>
          <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: 1.8 }}>
            Over 6+ years, I&apos;ve worn many hats — UX/UI, growth designer. No matter the scale, I&apos;m not afraid of work that has no precedent or playbook.
          </p>
          <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: 1.8 }}>
            A frontend background helps me work closely with engineers to make sure everything is thought through down to the last pixel — no compromises.
          </p>
          <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: 1.8 }}>
            I always look for ways to grow myself and others. I believe the best results come from teams where every perspective is heard and everyone builds on each other&apos;s strengths.
          </p>
        </div>
      </section>
    </main>
  );
}
