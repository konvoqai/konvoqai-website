"use client";

export default function SectionBadge({
  children,
  dotColor = "var(--grad-aurora)",
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
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--border-2)",
        borderRadius: 100,
        padding: "6px 16px",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--text-2)",
        marginBottom: 24,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          background: dotColor,
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}
