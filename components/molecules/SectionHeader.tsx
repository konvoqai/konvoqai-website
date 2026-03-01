"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 720 : 640,
        margin: align === "center" ? "0 auto" : 0,
        ...style,
      }}
    >
      {badge && <SectionBadge dotColor={badgeDotColor}>{badge}</SectionBadge>}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        style={{
          margin: 0,
          fontSize: "clamp(32px, 4.8vw, 58px)",
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: "-0.04em",
          marginBottom: description ? 16 : 0,
        }}
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: 0,
            fontSize: 17,
            color: "var(--text-2)",
            lineHeight: 1.72,
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
