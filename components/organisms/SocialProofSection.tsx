"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Automated answers", value: "40M+" },
  { label: "Assistant launches", value: "12k+" },
  { label: "Median response time", value: "1.2s" },
];

export default function SocialProofSection() {
  return (
    <section id="proof" style={{ padding: "48px 24px 10px" }}>
      <div className="site-container">
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.3,
              letterSpacing: "-0.04em",
              color: "var(--text-1)",
            }}
          >
            Simplicity, performance, and decision quality for teams that want AI to feel native to the product.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            style={{ margin: "0 auto 28px", maxWidth: 620, color: "var(--text-2)", lineHeight: 1.72, fontSize: 16 }}
          >
            Built for support, growth, and onboarding teams that need structure around AI, not another disconnected widget.
          </motion.p>
        </div>

        <div className="section-divider" style={{ marginBottom: 20 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 }}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              style={{
                textAlign: "center",
                padding: "24px 18px",
                borderRadius: 22,
                border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                background: "color-mix(in srgb, var(--surface-2) 82%, transparent)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>{metric.label}</div>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.05em" }}>{metric.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
