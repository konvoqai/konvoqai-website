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
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding: "8px 14px",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-2)",
        marginBottom: 24,
        boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
      }}
    >
      <div
        style={{
          width: 7,
          height: 7,
          background: dotColor,
          borderRadius: "50%",
          flexShrink: 0,
          boxShadow: `0 0 18px ${dotColor}`,
        }}
      />
      {children}
    </div>
  );
}

