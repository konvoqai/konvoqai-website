"use client";

interface StatItemProps {
  value: string;
  label: string;
  description?: string;
  accent?: string;
}

export default function StatItem({ value, label, description, accent = "var(--accent)" }: StatItemProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: accent,
          lineHeight: 1,
          marginBottom: 8,
          fontFamily: "Nunito, sans-serif",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-1)", marginBottom: 4 }}>{label}</div>
      {description && <div style={{ fontSize: 13, color: "var(--text-3)" }}>{description}</div>}
    </div>
  );
}

