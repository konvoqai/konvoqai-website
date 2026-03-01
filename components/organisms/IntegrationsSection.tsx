"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const stacks = ["Next.js", "Webflow", "Shopify", "Zendesk", "HubSpot", "Salesforce", "Stripe", "Slack", "Notion", "Intercom", "Docs", "API"];

export default function IntegrationsSection() {
  return (
    <section id="integrations" style={{ padding: "110px 24px" }}>
      <div className="site-container" style={{ display: "grid", gridTemplateColumns: "0.94fr 1.06fr", gap: 24, alignItems: "center" }}>
        <div>
          <SectionHeader
            badge="Inject into your stack"
            heading={<>Connect the agent to the software your team already operates.</>}
            description={<>Route support into help desks, pass lead intent into CRM, and train from the sources your product and success teams already maintain.</>}
            align="left"
            style={{ margin: 0 }}
          />
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
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 18, alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.12em" }}>Connected stack</div>
              <div style={{ fontSize: 26, lineHeight: 1.08, letterSpacing: "-0.05em", fontWeight: 760, maxWidth: 360 }}>
                One assistant layer across support, docs, and revenue surfaces.
              </div>
            </div>
            <div style={{ padding: "10px 12px", borderRadius: 999, border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)", background: "color-mix(in srgb, var(--surface) 72%, transparent)", color: "var(--text-2)", fontSize: 12, fontWeight: 700 }}>
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
                  padding: "12px 16px",
                  borderRadius: 999,
                  border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                  background: index % 4 === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface-2) 82%, transparent)",
                  color: index % 4 === 0 ? "var(--text-1)" : "var(--text-2)",
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
