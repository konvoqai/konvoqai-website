"use client";

import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import ThemeToggle from "@/components/atoms/ThemeToggle";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 100,
          padding: "16px 24px 0",
        }}
      >
        <div
          className="site-container"
          style={{
            height: "var(--nav-height)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 999,
            border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)",
            background: scrolled ? "color-mix(in srgb, var(--background-elevated) 82%, transparent)" : "color-mix(in srgb, var(--surface) 46%, transparent)",
            boxShadow: scrolled ? "var(--shadow-soft)" : "none",
            backdropFilter: "blur(20px)",
            padding: "0 18px 0 20px",
          }}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="motion-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "var(--text-1)",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            <motion.span
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              style={{
                width: 28,
                height: 28,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                background: "var(--grad-btn)",
                color: "#ffffff",
                boxShadow: "var(--shadow-button)",
                fontSize: 11,
                fontWeight: 800,
              }}
            >
              K
            </motion.span>
            Konvoq
          </Link>

          <LayoutGroup>
            <div className="nav-links-desktop" style={{ alignItems: "center", gap: 4, position: "relative" }}>
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} style={{ position: "relative" }}>
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 999,
                          background: "color-mix(in srgb, var(--surface-2) 72%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)",
                        }}
                        transition={{ type: "spring", stiffness: 340, damping: 28 }}
                      />
                    )}
                    <Link
                      href={link.href}
                      className="motion-link"
                      style={{
                        position: "relative",
                        zIndex: 1,
                        padding: "10px 14px",
                        borderRadius: 999,
                        fontSize: 13,
                        fontWeight: active ? 700 : 600,
                        textDecoration: "none",
                        color: active ? "var(--text-1)" : "var(--text-2)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="nav-actions-desktop" style={{ alignItems: "center", gap: 10 }}>
            <ThemeToggle />
            <Button href="/contact" variant="ghost" size="sm">
              Book demo
            </Button>
            <Button href="/pricing" variant="primary" size="sm">
              Start free
            </Button>
          </div>

          <motion.button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            whileTap={{ scale: 0.96 }}
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "color-mix(in srgb, var(--surface-2) 78%, transparent)",
              color: "var(--text-1)",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: -3 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              style={{
                position: "absolute",
                width: 16,
                height: 1.5,
                background: "currentColor",
                borderRadius: 999,
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "absolute",
                width: 16,
                height: 1.5,
                background: "currentColor",
                borderRadius: 999,
              }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 3 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              style={{
                position: "absolute",
                width: 16,
                height: 1.5,
                background: "currentColor",
                borderRadius: 999,
              }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: "94px 20px auto",
              zIndex: 99,
              borderRadius: 28,
              border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)",
              background: "color-mix(in srgb, var(--background-elevated) 90%, transparent)",
              boxShadow: "var(--shadow-soft)",
              backdropFilter: "blur(18px)",
              padding: 18,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="motion-link"
                    style={{
                      padding: "14px 16px",
                      borderRadius: 16,
                      background: active ? "color-mix(in srgb, var(--surface-2) 72%, transparent)" : "transparent",
                      border: active ? "1px solid var(--border)" : "1px solid transparent",
                      textDecoration: "none",
                      color: active ? "var(--text-1)" : "var(--text-2)",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 12,
                alignItems: "center",
                marginTop: 18,
                paddingTop: 18,
                borderTop: "1px solid var(--border)",
              }}
            >
              <ThemeToggle />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Button href="/contact" variant="outline" size="md">
                  Book demo
                </Button>
                <Button href="/pricing" variant="primary" size="md">
                  Start free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
