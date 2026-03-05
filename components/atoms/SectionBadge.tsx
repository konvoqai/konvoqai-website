"use client";

export default function SectionBadge({
  children,
  dotColor = "var(--accent)",
}: {
  children: React.ReactNode;
  dotColor?: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "linear-gradient(135deg, color-mix(in srgb, var(--surface-2) 88%, transparent), color-mix(in srgb, var(--surface) 70%, transparent))",
        border: "1px solid color-mix(in srgb, var(--border) 78%, transparent)",
        borderRadius: 999,
        padding: "8px 14px",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-2)",
        marginBottom: 24,
        boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 2px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        style={{
          width: 7,
          height: 7,
          background: dotColor,
          borderRadius: "50%",
          flexShrink: 0,
          boxShadow: `0 0 8px ${dotColor}`,
        }}
      />
      {children}
    </div>
  );
}


