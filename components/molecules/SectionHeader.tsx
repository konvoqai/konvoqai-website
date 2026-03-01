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
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 720 : 640,
        margin: align === "center" ? "0 auto" : 0,
        ...style,
      }}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
        >
          <SectionBadge dotColor={badgeDotColor}>{badge}</SectionBadge>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, x: align === "center" ? 0 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
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
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
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
    </div>
  );
}
