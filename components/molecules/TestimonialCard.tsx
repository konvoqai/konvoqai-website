"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarColor?: string;
  stars?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
  avatarColor = "var(--violet)",
  stars = 5,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: "var(--border-2)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: "#FBBF24", fontSize: 16 }}>★</span>
        ))}
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-2)", flex: 1, marginBottom: 24 }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: avatarColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-1)" }}>{name}</div>
          <div style={{ fontSize: 13, color: "var(--text-3)" }}>{role} · {company}</div>
        </div>
      </div>
    </motion.div>
  );
}
