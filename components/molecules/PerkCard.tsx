"use client";

import { motion } from "framer-motion";

interface PerkCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: string;
}

export default function PerkCard({ icon, title, description, accent = "var(--cyan)" }: PerkCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
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
          top: 0,
          right: 0,
          width: 80,
          height: 80,
          background: accent,
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />
      <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "var(--text-1)" }}>{title}</h3>
      <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{description}</p>
    </motion.div>
  );
}
