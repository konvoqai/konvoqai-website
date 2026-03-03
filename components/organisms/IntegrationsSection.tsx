"use client";

import { motion } from "framer-motion";
import { IntegrationIcon } from "@/components/atoms/Icons";
import SectionBadge from "@/components/atoms/SectionBadge";

const stacks = ["Next.js", "Webflow", "Shopify", "Zendesk", "HubSpot", "Salesforce", "Stripe", "Slack", "Notion", "Intercom", "Docs", "API"];

export default function IntegrationsSection() {
  return (
    <section id="integrations" style={{ padding: "110px 24px" }}>
      <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 md:grid-cols-2 site-container">
        <div className="mx-auto max-w-3xl text-center md:mx-0 md:max-w-none md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
            className="mb-4 flex justify-center md:justify-start"
          >
            <SectionBadge>Integrations</SectionBadge>
          </motion.div>
          <motion.h2
            className="section-heading mobile-text-break"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: 0,
              marginBottom: 16,
              fontSize: "clamp(32px, 4.8vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
            }}
          >
            Connect your AI chatbot to your stack.
          </motion.h2>
          <motion.p
            className="section-description mobile-text-break"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
            style={{
              margin: 0,
              fontSize: 17,
              color: "var(--text-2)",
              lineHeight: 1.72,
            }}
          >
            Sync your help desk, CRM, docs, and website without changing how your team already works.
          </motion.p>
          <motion.a
            href="/integrations"
            className="motion-link"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            style={{ display: "inline-flex", marginTop: 22, color: "var(--text-1)", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
          >
            View integrations
          </motion.a>
        </div>

        <motion.div
          className="mx-auto w-full min-w-0 overflow-hidden max-w-sm md:max-w-none"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            minHeight: 260,
            padding: 24,
            borderRadius: 28,
            border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
            background: "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 86%, transparent), color-mix(in srgb, var(--surface) 92%, transparent))",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-4" style={{ marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.12em" }}>Connected stack</div>
              <div style={{ fontSize: 26, lineHeight: 1.08, letterSpacing: "-0.05em", fontWeight: 760, maxWidth: 360 }}>
                One AI layer across support, docs, and sales.
              </div>
            </div>
            <div className="shrink-0 self-start" style={{ padding: "10px 12px", borderRadius: 999, border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)", background: "color-mix(in srgb, var(--surface) 72%, transparent)", color: "var(--text-2)", fontSize: 12, fontWeight: 700 }}>
              12+ integrations
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "flex-start" }}>
            {stacks.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.34, delay: index * 0.025, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.02 }}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                  background: index % 4 === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface-2) 82%, transparent)",
                  color: index % 4 === 0 ? "var(--text-1)" : "var(--text-2)",
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                <IntegrationIcon name={item} size={14} />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
