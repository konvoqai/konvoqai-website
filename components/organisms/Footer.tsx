"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "GDPR", href: "/gdpr" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

const socials = [
  { label: "𝕏", href: "#" },
  { label: "in", href: "#" },
  { label: "▶", href: "#" },
  { label: "gh", href: "#" },
];

const bottomLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
  { label: "GDPR", href: "/gdpr" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "72px 24px 40px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Top grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-grid"
          style={{
            gap: 40,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="grad-text"
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: 10,
                fontFamily: "Nunito, sans-serif",
                textDecoration: "none",
                display: "block",
              }}
            >
              Konvoq
            </Link>
            <div
              style={{
                fontSize: 14,
                color: "var(--text-3)",
                maxWidth: 210,
                lineHeight: 1.65,
              }}
            >
              The AI chatbot platform that converts visitors, resolves tickets, and grows your
              business — automatically.
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{
                    background: "rgba(255,255,255,0.08)",
                    color: "var(--text-1)",
                    borderColor: "var(--border-2)",
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    textDecoration: "none",
                    color: "var(--text-2)",
                  }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                  color: "var(--text-1)",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </h4>
              {col.links.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 2 }} style={{ marginBottom: 10 }}>
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      fontSize: 13,
                      color: "var(--text-3)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid var(--border)",
            fontSize: 13,
            color: "var(--text-3)",
          }}
        >
          <span>© 2026 Konvoq Inc. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {bottomLinks.map((l) => (
              <motion.div key={l.label} whileHover={{ color: "var(--text-1)" }}>
                <Link
                  href={l.href}
                  style={{ color: "var(--text-3)", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
