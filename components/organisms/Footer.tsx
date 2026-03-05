"use client";

import { GitHubIcon, LinkedInIcon, XTwitterIcon } from "@/components/atoms/Icons";
import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Documentation", href: "/docs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Status", href: "/status" },
];

const utilityLinks = [
  { label: "API Reference", href: "/api-reference" },
  { label: "Changelog", href: "/changelog" },
  { label: "Security", href: "/security" },
  { label: "Privacy", href: "/privacy" },
];

const socials = [
  { label: "X", Icon: XTwitterIcon, href: "https://twitter.com/konvoqai" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://linkedin.com/company/konvoq" },
  { label: "GitHub", Icon: GitHubIcon, href: "https://github.com/konvoq-ai" },
];

const contactItems: Array<{
  label: string;
  value: string;
  href: string;
  icon: "mail" | "link" | "pin";
}> = [
    {
      label: "Sales",
      value: "sales@konvoq.ai",
      href: "mailto:sales@konvoq.ai",
      icon: "mail",
    },
    {
      label: "Support",
      value: "support@konvoq.ai",
      href: "mailto:support@konvoq.ai",
      icon: "mail",
    },
    {
      label: "App",
      value: "app.konvoq.ai",
      href: "https://app.konvoq.ai",
      icon: "link",
    },
    {
      label: "Presence",
      value: "Remote-first / Global",
      href: "/contact",
      icon: "pin",
    },
  ];

function FooterIcon({ type }: { type: "mail" | "link" | "pin" }) {
  if (type === "mail") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.75" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10.5 13.5 13.5 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8.25 15.75H7a4 4 0 1 1 0-8h1.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.75 8.25H17a4 4 0 1 1 0 8h-1.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s6-5.25 6-10a6 6 0 1 0-12 0c0 4.75 6 10 6 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h4
        style={{
          margin: "0 0 20px",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-1)",
        }}
      >
        {title}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="motion-link"
            style={{
              width: "fit-content",
              color: "var(--text-2)",
              textDecoration: "none",
              fontSize: 15,
              lineHeight: 1.5,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ padding: "64px 24px 28px" }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            paddingTop: 36,
            borderTop: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
          }}
        >
          <div className="block md:hidden" style={{ marginBottom: 42 }}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <FooterColumn title="Quick Links" links={quickLinks} />
              <FooterColumn title="Support" links={supportLinks} />
              <FooterColumn title="Utilities" links={utilityLinks} />
              <div className="col-span-2">
                <h4
                  style={{
                    margin: "0 0 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-1)",
                  }}
                >
                  Contact Us
                </h4>
                <div style={{ display: "grid", gap: 14 }}>
                  {contactItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: 12,
                        color: "var(--text-2)",
                        textDecoration: "none",
                        fontSize: 15,
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ display: "inline-flex", marginTop: 2, color: "var(--accent)" }}>
                        <FooterIcon type={item.icon} />
                      </span>
                      <span>
                        <span style={{ display: "block", color: "var(--text-3)", fontSize: 12, marginBottom: 3 }}>{item.label}</span>
                        <span>{item.value}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden md:grid footer-links-grid"
            style={{
              display: undefined,
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 36,
              marginBottom: 42,
            }}
          >
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn title="Support" links={supportLinks} />
            <FooterColumn title="Utilities" links={utilityLinks} />

            <div>
              <h4
                style={{
                  margin: "0 0 20px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-1)",
                }}
              >
                Contact Us
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {contactItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: 12,
                      color: "var(--text-2)",
                      textDecoration: "none",
                      fontSize: 15,
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{ display: "inline-flex", marginTop: 2, color: "var(--accent)" }}>
                      <FooterIcon type={item.icon} />
                    </span>
                    <span>
                      <span style={{ display: "block", color: "var(--text-3)", fontSize: 12, marginBottom: 3 }}>{item.label}</span>
                      <span>{item.value}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="footer-meta-row"
            style={{
              paddingTop: 22,
              borderTop: "1px solid color-mix(in srgb, var(--border) 68%, transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 42,
            }}
          >
            <div style={{ color: "var(--text-3)", fontSize: 13 }}>
              Designed for modern support teams.
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ color: "var(--text-1)", fontSize: 13, fontWeight: 700 }}>Follow Us</span>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -2, color: "var(--accent-soft)", borderColor: "rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: 36,
                      height: 36,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 999,
                      border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                      background: "transparent",
                      color: "var(--text-2)",
                      textDecoration: "none",
                    }}
                  >
                    <social.Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ position: "relative", overflow: "hidden", paddingBottom: 8 }}>
            <div
              className="footer-wordmark"
              aria-hidden="true"
              style={{
                fontSize: "clamp(76px, 16vw, 220px)",
                lineHeight: 0.88,
                fontWeight: 800,
                letterSpacing: "-0.08em",
                whiteSpace: "nowrap",
                userSelect: "none",
                backgroundImage: "var(--wordmark-stripes)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                opacity: 0.95,
                transform: "translateX(-4px)",
              }}
            >
              Konvoq AI
            </div>
          </div>

          <div
            className="footer-legal-row"
            style={{
              paddingTop: 18,
              borderTop: "1px solid color-mix(in srgb, var(--border) 68%, transparent)",
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              color: "var(--text-3)",
              fontSize: 13,
            }}
          >
            <span>Copyright 2026 Konvoq AI. All rights reserved.</span>
            <span>Theme aware. Accessibility minded. Built for production.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
