"use client";

import SectionBadge from "@/components/atoms/SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  badgeDotColor?: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  style?: React.CSSProperties;
}

export default function SectionHeader({
  badge,
  badgeDotColor,
  heading,
  description,
  align = "center",
  style,
}: SectionHeaderProps) {
  return (
    <div style={{ textAlign: align, ...style }}>
      {badge && <SectionBadge dotColor={badgeDotColor}>{badge}</SectionBadge>}
      <h2
        style={{
          fontSize: "clamp(32px, 4.5vw, 56px)",
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          fontFamily: "Nunito, sans-serif",
          marginBottom: description ? 16 : 0,
        }}
      >
        {heading}
      </h2>
      {description && (
        <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7 }}>{description}</p>
      )}
    </div>
  );
}
