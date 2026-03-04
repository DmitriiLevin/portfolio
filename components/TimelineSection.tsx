export type TimelineItem = {
  period: string | null;
  org: string;
  title: string;
  description?: string | null;
};

type TimelineSectionProps = {
  title?: string;
  items: TimelineItem[];
};

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: "48px" }}>
          {item.period && (
            <p style={{ fontSize: "16px", color: "#555555", marginBottom: "8px" }}>
              {item.period}
            </p>
          )}
          <p style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            {item.org} — {item.title}
          </p>
          {item.description && (
            <p style={{ fontSize: "16px", color: "#888888", lineHeight: "26px" }}>
              {item.description}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
