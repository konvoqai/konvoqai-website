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

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  style,
  className,
}: ButtonProps) {
  const classList = [
    "app-button-control",
    `app-button--${variant}`,
    `app-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    cursor: "pointer",
    fontFamily: "inherit",
    boxShadow: variant === "primary" ? "var(--shadow-button)" : "none",
    ...style,
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 24, mass: 0.7 }}
      className="app-button-shell"
      style={{ display: "inline-block" }}
    >
      {href ? (
        <Link href={href} style={baseStyle} className={classList}>
          {children}
        </Link>
      ) : (
        <button type="button" onClick={onClick} style={baseStyle} className={classList}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
