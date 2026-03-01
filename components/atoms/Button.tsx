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
  primary: {
    background: "var(--grad-btn)",
    color: "#ffffff",
    border: "1px solid color-mix(in srgb, var(--accent) 68%, white 12%)",
    boxShadow: "var(--shadow-button)",
  },
  secondary: {
    background: "color-mix(in srgb, var(--surface-2) 72%, transparent)",
    color: "var(--text-1)",
    border: "1px solid var(--border-2)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-2)",
    border: "1px solid transparent",
  },
  outline: {
    background: "color-mix(in srgb, var(--surface) 54%, transparent)",
    color: "var(--text-1)",
    border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
  },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding: "10px 16px", fontSize: 13 },
  md: { padding: "12px 18px", fontSize: 14 },
  lg: { padding: "14px 22px", fontSize: 15 },
};

function ButtonInner({ children, variant }: { children: React.ReactNode; variant: Variant }) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span>{children}</span>
      <motion.span
        aria-hidden
        initial={{ scaleX: variant === "ghost" ? 0 : 0.22, opacity: variant === "primary" ? 0.3 : 0.18 }}
        whileHover={{ scaleX: 1, opacity: 0.95 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -6,
          height: 1,
          transformOrigin: "left",
          background: variant === "primary" ? "rgba(255,255,255,0.92)" : "currentColor",
        }}
      />
    </span>
  );
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
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 999,
    fontWeight: 700,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    position: "relative",
    overflow: "hidden",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  const glowStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background:
      variant === "primary"
        ? "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.22), transparent 60%)"
        : "radial-gradient(circle at 50% 0%, rgba(91,140,255,0.14), transparent 60%)",
    pointerEvents: "none",
  };

  const content = (
    <>
      <span style={glowStyle} />
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 24, mass: 0.7 }}
      style={{ display: "inline-block" }}
    >
      {href ? (
        <Link href={href} style={baseStyle} className={className}>
          {content}
        </Link>
      ) : (
        <button type="button" onClick={onClick} style={baseStyle} className={className}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
