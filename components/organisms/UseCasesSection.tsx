"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/atoms/SectionBadge";

const panels = [
  {
    title: "Support AI that also drives revenue.",
    description: "Resolve support issues, spot buying intent, and route valuable conversations without losing context.",
  },
  {
    title: "Grounded answers from your docs.",
    description: "Use product docs, release notes, and help content so answers stay accurate as your product changes.",
  },
  {
    title: "Clean human handoff.",
    description: "Send escalations with intent, summary, and next steps instead of a raw transcript.",
  },
];

export default function UseCasesSection() {
  return (
    <section id="cases" style={{ padding: "110px 24px" }}>
      <div className="site-container">
        <div style={{ marginBottom: 28 }}>
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:max-w-none md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35 }}
              className="mb-4 flex justify-center md:justify-start"
            >
              <SectionBadge>Use cases</SectionBadge>
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
              One AI agent across support, sales, and docs.
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
              Use the same AI chatbot on your website, help center, and product surfaces.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          <motion.div
            className="mx-auto w-full max-w-sm min-w-0 overflow-hidden sm:max-w-none"
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
              className="mx-auto w-full max-w-sm min-w-0 overflow-hidden sm:max-w-none"
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
