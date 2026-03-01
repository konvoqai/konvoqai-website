"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  cover: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  date: string;
  href?: string;
}

export default function BlogCard({ cover, category, title, excerpt, readTime, author, date, href = "#" }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "var(--border-2)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
        <div
          style={{
            height: 140,
            background: "var(--surface-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            borderBottom: "1px solid var(--border)",
          }}
        >
          {cover}
        </div>
        <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 10,
              display: "block",
            }}
          >
            {category}
          </span>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-1)", lineHeight: 1.4, marginBottom: 10 }}>
            {title}
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>
            {excerpt}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-3)" }}>
            <span>{author} Â· {readTime}</span>
            <span>{date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

