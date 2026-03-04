import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: "1136px", margin: "0 auto", padding: "80px 32px 120px" }}>
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
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
            fontSize: "40px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: "1.2",
            marginBottom: "16px"
          }}>
            Specialised in growth experiments that move real metrics.
          </h1>
          <p style={{ fontSize: "18px", color: "#888888", lineHeight: "28px" }}>
            I&apos;m drawn to the fundamental challenge of building products that actually convert. Most of my work centers on activation flows, paywalls, and A/B experiments that connect design decisions to revenue.
          </p>
          <p style={{ fontSize: "18px", color: "#888888", lineHeight: "28px" }}>
            Over 6+ years, I&apos;ve worn many hats — UX/UI, growth designer. No matter the scale, I&apos;m not afraid of work that has no precedent or playbook.
          </p>
          <p style={{ fontSize: "18px", color: "#888888", lineHeight: "28px" }}>
            A frontend background helps me work closely with engineers to make sure everything is thought through down to the last pixel — no compromises.
          </p>
          <p style={{ fontSize: "18px", color: "#888888", lineHeight: "28px" }}>
            I always look for ways to grow myself and others. I believe the best results come from teams where every perspective is heard and everyone builds on each other&apos;s strengths.
          </p>
        </div>
      </section>
    </main>
  );
}
