"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const categories = [
  {
    title: "Commerce",
    tools: ["Shopify", "Stripe", "WooCommerce", "BigCommerce"],
  },
  {
    title: "Support",
    tools: ["Zendesk", "Intercom", "Freshdesk", "Help Scout"],
  },
  {
    title: "Content",
    tools: ["Notion", "Google Drive", "Confluence", "Webflow"],
  },
  {
    title: "Data and automation",
    tools: ["Salesforce", "HubSpot", "Zapier", "REST API"],
  },
];

const marqueeTools = [
  "Shopify",
  "HubSpot",
  "Salesforce",
  "Zendesk",
  "Stripe",
  "Webflow",
  "Linear",
  "Notion",
  "Slack",
  "REST API",
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Integrations"
          heading={<>Built to fit the stack you already operate.</>}
          description={<>Connect the assistant to support tools, CRM systems, content sources, and event pipelines without introducing a fragile setup.</>}
          style={{ marginBottom: 28 }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 18 }}>
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="section-surface"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              style={{ padding: 22 }}
            >
              <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>
                {category.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {category.tools.map((tool) => (
                  <div key={tool} style={{ padding: "10px 12px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--surface-2)", fontSize: 14, color: "var(--text-2)" }}>
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="integration-fade" style={{ marginTop: 6 }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", gap: 10, width: "max-content", padding: "0 24px" }}
        >
          {[...marqueeTools, ...marqueeTools].map((tool, index) => (
            <div
              key={`${tool}-${index}`}
              className="section-surface"
              style={{
                padding: "12px 16px",
                borderRadius: 999,
                fontSize: 13,
                color: "var(--text-2)",
                whiteSpace: "nowrap",
              }}
            >
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

