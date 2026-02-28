"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  style?: React.CSSProperties;
  className?: string;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: { background: "var(--grad-btn)", color: "#fff", border: "none" },
  secondary: { background: "var(--text-1)", color: "var(--black)", border: "none" },
  ghost: { background: "rgba(255,255,255,0.04)", color: "var(--text-1)", border: "1px solid var(--border-2)" },
  outline: { background: "transparent", color: "var(--text-2)", border: "1px solid var(--border)" },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding: "8px 18px", fontSize: 13 },
  md: { padding: "12px 28px", fontSize: 14 },
  lg: { padding: "14px 36px", fontSize: 15 },
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  style,
  className,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 100,
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
      {href ? (
        <Link href={href} style={baseStyle} className={className}>
          {children}
        </Link>
      ) : (
        <button type="button" onClick={onClick} style={baseStyle} className={className}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
