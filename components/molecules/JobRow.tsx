"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface JobRowProps {
  title: string;
  department: string;
  location: string;
  type: string;
  deptColor?: string;
  hot?: boolean;
}

export default function JobRow({ title, department, location, type, deptColor = "var(--accent-strong)", hot = false }: JobRowProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: "var(--text-1)" }}>{title}</span>
            {hot && (
              <span
                style={{
                  background: "rgba(239, 68, 68, 0.18)",
                  color: "var(--danger)",
                  border: "1px solid rgba(239, 68, 68, 0.26)",
                  borderRadius: 100,
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  letterSpacing: "0.08em",
                }}
              >
                HOT
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 100,
                background: `${deptColor}20`,
                color: deptColor,
                border: `1px solid ${deptColor}35`,
              }}
            >
              {department}
            </span>
            <span style={{ fontSize: 13, color: "var(--text-2)" }}>ðŸ“ {location}</span>
            <span style={{ fontSize: 13, color: "var(--text-2)" }}>ðŸ• {type}</span>
          </div>
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
        <Link
          href={`/careers/${slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 22px",
            background: "var(--grad-btn)",
            borderRadius: 100,
            fontWeight: 700,
            fontSize: 14,
            color: "#fff",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Apply â†’
        </Link>
      </motion.div>
    </motion.div>
  );
}

