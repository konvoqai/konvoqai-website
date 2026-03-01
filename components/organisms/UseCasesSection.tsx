"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const panels = [
  {
    title: "Customer service AI agents that sell, not just solve.",
    description: "Resolve support issues, capture commercial intent, and move high-value conversations toward the right owner without making the customer repeat context.",
  },
  {
    title: "Knowledge retrieval that stays grounded.",
    description: "Use docs, product notes, and help content as one operating layer so answers stay useful as the product changes.",
  },
  {
    title: "Structured handoff for serious teams.",
    description: "Escalations arrive with intent, summary, and next-step guidance instead of a raw transcript and guesswork.",
  },
];

export default function UseCasesSection() {
  return (
    <section id="cases" style={{ padding: "110px 24px" }}>
      <div className="site-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
          <SectionHeader
            badge="Use cases"
            heading={<>Customer-facing AI built for support, growth, and documentation surfaces.</>}
            description={<>Different teams can run the same agent system without fragmenting the experience for customers.</>}
            align="left"
            style={{ margin: 0 }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr 0.9fr", gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
            style={{ padding: 22, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", borderRadius: 24, background: "color-mix(in srgb, var(--surface-2) 80%, transparent)" }}
          >
            <div style={{ fontSize: 12, color: "var(--text-1)", marginBottom: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>
              Priority conversations
            </div>
            <h3 style={{ margin: "0 0 12px", fontSize: 28, lineHeight: 1.08, letterSpacing: "-0.05em", fontWeight: 760 }}>
              {panels[0].title}
            </h3>
            <p style={{ margin: "0 0 18px", color: "var(--text-2)", lineHeight: 1.74, fontSize: 15 }}>{panels[0].description}</p>
            <div style={{ display: "grid", gap: 10 }}>
              {["Lead intent surfaced", "Support urgency detected", "Relevant docs attached", "Owner assigned"].map((item, index) => (
                <div key={item} style={{ display: "flex", justifyContent: "space-between", padding: "11px 12px", borderRadius: 14, background: index === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface) 70%, transparent)", color: index === 0 ? "var(--text-1)" : "var(--text-2)", fontSize: 13 }}>
                  <span>{item}</span>
                  <span>{index + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {[panels[1], panels[2]].map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.46, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                padding: 22,
                border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                borderRadius: 24,
                background: "color-mix(in srgb, var(--surface-2) 80%, transparent)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ width: 34, height: 2, borderRadius: 999, background: index === 0 ? "var(--text-1)" : "var(--text-3)", marginBottom: 16 }} />
              <h3 style={{ margin: "0 0 10px", fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.04em", fontWeight: 760 }}>
                {panel.title}
              </h3>
              <p style={{ margin: "0 0 16px", color: "var(--text-2)", lineHeight: 1.72, fontSize: 15 }}>{panel.description}</p>
              <div style={{ padding: 16, borderRadius: 18, border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)", background: "color-mix(in srgb, var(--surface-2) 80%, transparent)" }}>
                <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>{index === 0 ? "Document summary" : "Escalation preview"}</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-2)" }}>
                  {index === 0
                    ? "Product documentation, help center, and release notes unified into one grounded answer layer."
                    : "Intent: enterprise evaluation. Suggested owner: growth lead. Suggested next step: book a technical review."}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
