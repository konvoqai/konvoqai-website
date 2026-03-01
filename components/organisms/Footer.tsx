"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API reference", href: "/api-reference" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
];

const socials = [
  { label: "X", href: "#" },
  { label: "In", href: "#" },
  { label: "Gh", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ padding: "48px 24px 40px" }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-frame"
          style={{
            padding: 32,
            marginBottom: 24,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                Built for modern support teams
              </p>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                }}
              >
                A cleaner way to ship AI support that feels enterprise ready.
              </h3>
              <p style={{ margin: 0, maxWidth: 540, fontSize: 16, lineHeight: 1.7, color: "var(--text-2)" }}>
                Train on your product, route the hard cases to humans, and keep the customer experience
                consistent across every channel.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
              <Button href="/pricing" variant="primary" size="lg">
                Start free
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Speak with sales
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="section-frame" style={{ padding: "32px 32px 24px" }}>
          <div className="footer-grid" style={{ gap: 32, marginBottom: 28 }}>
            <div>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  textDecoration: "none",
                  color: "var(--text-1)",
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    background: "var(--grad-btn)",
                    color: "#ffffff",
                    boxShadow: "var(--shadow-button)",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  K
                </span>
                Konvoq
              </Link>
              <p style={{ margin: "0 0 20px", maxWidth: 280, fontSize: 14, lineHeight: 1.7, color: "var(--text-2)" }}>
                Customer conversations with better structure, better answers, and better handoff quality.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    style={{
                      width: 38,
                      height: 38,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "var(--surface-2)",
                      color: "var(--text-2)",
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {footerCols.map((column) => (
              <div key={column.title}>
                <h4
                  style={{
                    margin: "0 0 16px",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                  }}
                >
                  {column.title}
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        color: "var(--text-2)",
                        textDecoration: "none",
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              paddingTop: 20,
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              color: "var(--text-3)",
              fontSize: 13,
            }}
          >
            <span>Copyright 2026 Konvoq Inc. All rights reserved.</span>
            <span>Theme aware. Accessibility minded. Built for production.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

