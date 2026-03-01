"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const rows = [
  { feature: "Setup speed", konvoq: "Under 3 minutes", otherA: "15 to 20 minutes", otherB: "30 minutes", otherC: "Hours" },
  { feature: "Model flexibility", konvoq: "Multiple models", otherA: "Single provider", otherB: "Limited", otherC: "Single provider" },
  { feature: "White-label support", konvoq: "Included", otherA: "Add-on", otherB: "No", otherC: "No" },
  { feature: "Revenue attribution", konvoq: "Built in", otherA: "Basic", otherB: "Basic", otherC: "Premium tier" },
  { feature: "Handoff context", konvoq: "Structured", otherA: "Partial", otherB: "Basic", otherC: "Structured" },
  { feature: "Operational visibility", konvoq: "Full dashboard", otherA: "Limited", otherB: "Limited", otherC: "Fragmented" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Why teams switch"
          heading={<>A more opinionated product than generic chatbot tooling.</>}
          description={<>Konvoq is designed to behave like a serious operating layer for support and growth teams, not a widget with AI bolted on afterward.</>}
          style={{ marginBottom: 28 }}
        />

        <motion.div
          className="section-frame"
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {[
                  "Capability",
                  "Konvoq",
                  "Alternative A",
                  "Alternative B",
                  "Alternative C",
                ].map((heading, index) => (
                  <th
                    key={heading}
                    style={{
                      textAlign: index === 0 ? "left" : "center",
                      padding: "18px 16px",
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                      background: index === 1 ? "var(--accent-muted)" : "var(--surface-2)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.36, delay: index * 0.05, ease: "easeOut" }}
                >
                  <td style={{ padding: "16px", borderBottom: index < rows.length - 1 ? "1px solid var(--border)" : "none", fontWeight: 600 }}>
                    {row.feature}
                  </td>
                  {[row.konvoq, row.otherA, row.otherB, row.otherC].map((value, valueIndex) => (
                    <td
                      key={valueIndex}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        borderBottom: index < rows.length - 1 ? "1px solid var(--border)" : "none",
                        background: valueIndex === 0 ? "color-mix(in srgb, var(--accent-muted) 72%, transparent)" : "transparent",
                        color: valueIndex === 0 ? "var(--text-1)" : "var(--text-2)",
                        fontWeight: valueIndex === 0 ? 700 : 500,
                      }}
                    >
                      {value}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
