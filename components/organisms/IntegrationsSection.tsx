"use client";

import { motion } from "framer-motion";

const row1 = [
  { em: "🛒", label: "Shopify" },
  { em: "🟠", label: "WooCommerce" },
  { em: "💳", label: "Stripe" },
  { em: "🟡", label: "HubSpot" },
  { em: "☁️", label: "Salesforce" },
  { em: "🎫", label: "Zendesk" },
  { em: "💚", label: "WhatsApp" },
  { em: "📘", label: "Messenger" },
  { em: "💬", label: "Slack" },
];

const row2 = [
  { em: "📝", label: "Notion" },
  { em: "📁", label: "Google Drive" },
  { em: "⚡", label: "Zapier" },
  { em: "🔧", label: "Make" },
  { em: "🌐", label: "WordPress" },
  { em: "🎨", label: "Webflow" },
  { em: "🔴", label: "Freshdesk" },
  { em: "📸", label: "Instagram" },
  { em: "🤖", label: "REST API" },
];

function IntChip({ em, label }: { em: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "12px 20px",
        fontSize: 13,
        fontWeight: 500,
        color: "var(--text-2)",
        whiteSpace: "nowrap" as const,
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 18 }}>{em}</span>
      {label}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 25,
}: {
  items: { em: string; label: string }[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 12, overflow: "hidden" }}>
      <motion.div
        style={{ display: "flex", gap: 12, willChange: "transform" }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <IntChip key={`${item.label}-${i}`} em={item.em} label={item.label} />
        ))}
      </motion.div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--border-2)",
        borderRadius: 100,
        padding: "6px 16px",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: "var(--text-2)",
        marginBottom: 20,
      }}
    >
      <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section id="integrations" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>Integrations</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Connects to every tool
            <br />
            <span className="grad-text">your team already uses</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-2)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            50+ native integrations. Connect anything else via REST API or Zapier.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows — full width with edge fade */}
      <div className="integration-fade" style={{ marginTop: 0 }}>
        <MarqueeRow items={row1} duration={25} />
        <MarqueeRow items={row2} reverse duration={30} />
      </div>
    </section>
  );
}

