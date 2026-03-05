"use client";

import Button from "@/components/atoms/Button";
import { KonvoqLogoMark } from "@/components/atoms/Icons";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/config";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

type NavVariant = "hero" | "sticky";

function NavContent({
  pathname,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  variant,
}: {
  pathname: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  variant: NavVariant;
}) {
  const sticky = variant === "sticky";

  return (
    <>
      <Link
        href="/"
        onClick={onCloseMenu}
        className="motion-link nav-brand"
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
            color: "var(--accent-foreground)",
            boxShadow: "var(--shadow-button)",
          }}
        >
          <KonvoqLogoMark size={16} />
        </motion.span>
        Konvoq
      </Link>

      <LayoutGroup>
        <div className="nav-links-desktop" style={{ alignItems: "center", gap: 4, position: "relative" }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                whileHover={{ y: -1, color: "var(--accent-soft)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  position: "relative",
                  color: active ? "var(--accent)" : "var(--text-2)",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 999,
                      background: "rgba(59, 130, 246, 0.1)",
                      border: "1px solid rgba(59, 130, 246, 0.36)",
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
                    color: "inherit",
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
        <Button href={LOGIN_URL} variant="ghost" size="sm">
          Login
        </Button>
        <Button href={SIGNUP_URL} variant="primary" size="sm">
          Signup
        </Button>
      </div>

      <motion.button
        type="button"
        className="nav-hamburger"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
        whileTap={{ scale: 0.96 }}
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
          border: sticky ? "1px solid var(--border)" : "1px solid color-mix(in srgb, var(--border) 56%, transparent)",
          background: sticky ? "color-mix(in srgb, var(--surface-2) 78%, transparent)" : "transparent",
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
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    if (!isHome) {
      return;
    }

    const syncScrolledState = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const isPastActivationThreshold = y >= 20;
      setScrolled((prev) => {
        const next = isPastActivationThreshold;
        return prev === next ? prev : next;
      });
    };

    const handleScroll = () => syncScrolledState();

    let raf = 0;
    let timeout: number | null = null;

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("load", syncScrolledState);
    window.addEventListener("pageshow", syncScrolledState);
    window.addEventListener("resize", syncScrolledState);
    syncScrolledState();
    raf = window.requestAnimationFrame(() => {
      syncScrolledState();
    });
    timeout = window.setTimeout(syncScrolledState, 80);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", syncScrolledState);
      window.removeEventListener("pageshow", syncScrolledState);
      window.removeEventListener("resize", syncScrolledState);
      window.cancelAnimationFrame(raf);
      if (timeout !== null) {
        window.clearTimeout(timeout);
      }
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const sticky = !isHome || scrolled;

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          padding: "0 24px",
          background: "transparent",
          borderBottom: "1px solid transparent",
          transition: "none",
        }}
      >
        <div
          className={`site-container nav-shell ${sticky ? "nav-shell-scrolled" : "nav-shell-top"}`}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: sticky ? "0 25px" : "0 4px",
            borderRadius: sticky ? 50 : 0,
            border: sticky ? "1px solid color-mix(in srgb, var(--border) 76%, transparent)" : "1px solid transparent",
            background: sticky
              ? "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 84%, transparent), color-mix(in srgb, var(--background-elevated) 92%, transparent))"
              : "transparent",
            boxShadow: sticky ? "0 14px 34px rgba(0, 0, 0, 0.3)" : "none",
            backdropFilter: sticky ? "blur(16px)" : "none",
            transform: sticky ? "translateY(4px)" : "translateY(0)",
            transition:
              "padding 220ms ease, border-radius 220ms ease, border-color 220ms ease, background-color 220ms ease, box-shadow 260ms ease, backdrop-filter 220ms ease, transform 220ms ease",
          }}
        >
          <NavContent
            pathname={pathname}
            menuOpen={menuOpen}
            onToggleMenu={() => setMenuOpen((open) => !open)}
            onCloseMenu={closeMenu}
            variant={sticky ? "sticky" : "hero"}
          />
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-menu-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: "88px 20px auto",
              zIndex: 230,
              borderRadius: 28,
              border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)",
              background: "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 84%, transparent), color-mix(in srgb, var(--background-elevated) 92%, transparent))",
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
                      background: active ? "rgba(59, 130, 246, 0.12)" : "transparent",
                      border: active ? "1px solid rgba(59, 130, 246, 0.36)" : "1px solid transparent",
                      textDecoration: "none",
                      color: active ? "var(--accent)" : "var(--text-2)",
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
              className="nav-menu-actions mobile-button-group"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 18,
                paddingTop: 18,
                borderTop: "1px solid var(--border)",
              }}
            >
              <Button href={LOGIN_URL} variant="outline" size="md">
                Login
              </Button>
              <Button href={SIGNUP_URL} variant="primary" size="md">
                Signup
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
