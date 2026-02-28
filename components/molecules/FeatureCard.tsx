"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: string;
  points?: string[];
}

export default function FeatureCard({
  icon,
  title,
  description,
  accent = "var(--cyan)",
  points,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "var(--border-2)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "28px 24px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          background: accent,
          opacity: 0.06,
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />
      <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-1)", marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65 }}>{description}</p>
      {points && points.length > 0 && (
        <ul style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6, listStyle: "none", padding: 0 }}>
          {points.map((pt) => (
            <li key={pt} style={{ fontSize: 13, color: "var(--text-2)", display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ color: accent, marginTop: 2, flexShrink: 0 }}>✓</span>
              {pt}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
