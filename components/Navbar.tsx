"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const pathname = usePathname();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
    return unsub;
  }, [scrollY]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 100,
          height: 64,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: scrolled ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.4)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          transition: "background 0.3s ease",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            opacity: borderOpacity,
          }}
        />

        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textDecoration: "none",
              color: "var(--text-1)",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Konv<span className="grad-text">oq</span>
          </Link>

          {/* Nav Links — Desktop */}
          <div
            className="nav-links-desktop"
            style={{
              alignItems: "center",
              gap: 4,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border)",
              borderRadius: 100,
              padding: 4,
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  style={{ borderRadius: 100 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--text-1)" : "var(--text-2)",
                      textDecoration: "none",
                      padding: "6px 16px",
                      borderRadius: 100,
                      background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right actions — Desktop */}
          <div className="nav-actions-desktop" style={{ alignItems: "center", gap: 10 }}>
            <Link
              href="#"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--text-2)",
                textDecoration: "none",
                padding: "6px 14px",
              }}
            >
              Log in
            </Link>
            <motion.div whileHover={{ y: -1 }}>
              <Link
                href="#"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--black)",
                  textDecoration: "none",
                  padding: "8px 18px",
                  background: "var(--text-1)",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Start Free →
              </Link>
            </motion.div>
          </div>

          {/* Hamburger — Mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "block", width: 22, height: 2, background: "var(--text-1)", borderRadius: 2 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: "block", width: 22, height: 2, background: "var(--text-1)", borderRadius: 2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "block", width: 22, height: 2, background: "var(--text-1)", borderRadius: 2 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: "64px 0 0 0",
              zIndex: 99,
              background: "rgba(0,0,0,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              padding: "28px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              overflowY: "auto",
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      fontSize: 20,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--text-1)" : "var(--text-2)",
                      textDecoration: "none",
                      padding: "16px 16px",
                      borderRadius: 12,
                      background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 + 0.05, ease: "easeOut" }}
              style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-2)",
                  textDecoration: "none",
                  padding: "14px",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                }}
              >
                Log in
              </Link>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--black)",
                  textDecoration: "none",
                  padding: "14px",
                  background: "var(--text-1)",
                  borderRadius: 12,
                }}
              >
                Start Free →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
