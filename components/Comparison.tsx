"use client";

import { motion } from "framer-motion";

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

const rows = [
  { feature: "Setup Time", konvoq: "⚡ Under 3 minutes", chatbase: "15–20 min", tidio: "30+ min", intercom: "Hours" },
  { feature: "AI Models", konvoq: "GPT-4o + Claude + Gemini", chatbase: "GPT-4 only", tidio: "Limited", intercom: "GPT-4" },
  { feature: "White-label", konvoq: "✓ All plans", chatbase: "Paid addon", tidio: "✗", intercom: "✗", konvoqGreen: true },
  { feature: "Revenue Analytics", konvoq: "✓ Built-in", chatbase: "Basic", tidio: "Basic", intercom: "Expensive", konvoqGreen: true },
  { feature: "Human Handoff", konvoq: "✓ Smart routing", chatbase: "Basic", tidio: "✓", intercom: "✓", konvoqGreen: true },
  { feature: "Languages", konvoq: "95+ auto-detect", chatbase: "Limited", tidio: "30+", intercom: "Limited" },
  { feature: "Starting Price", konvoq: "Free → $49/mo", chatbase: "$19/mo", tidio: "$29/mo", intercom: "$74/mo" },
  { feature: "Branding Removal", konvoq: "✓ Free on all plans", chatbase: "Paid addon", tidio: "N/A", intercom: "N/A", konvoqGreen: true },
];

export default function Comparison() {
  return (
    <section id="comparison" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>Comparison</SectionLabel>
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
            Why choose Konvoq over
            <br />
            <span className="grad-text">Chatbase, Tidio & Intercom?</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-2)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            We didn't build another chatbot. We built the platform that makes the others obsolete.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "18px 24px",
                    textAlign: "left",
                    fontSize: 13,
                    fontWeight: 700,
                    background: "rgba(255,255,255,0.02)",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-2)",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "18px 24px",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    background: "rgba(6,239,255,0.04)",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    Konvoq
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.08em",
                        background: "var(--grad-btn)",
                        color: "#fff",
                        padding: "3px 8px",
                        borderRadius: 100,
                      }}
                    >
                      Best
                    </span>
                  </div>
                </th>
                {["Chatbase", "Tidio", "Intercom"].map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "18px 24px",
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      background: "rgba(255,255,255,0.02)",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text-2)",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td
                    style={{
                      padding: "14px 24px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text-1)",
                      borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
                    }}
                  >
                    {row.feature}
                  </td>
                  <td
                    style={{
                      padding: "14px 24px",
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: 600,
                      color: row.konvoqGreen ? "var(--emerald)" : "var(--text-1)",
                      background: "rgba(6,239,255,0.02)",
                      borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
                    }}
                  >
                    {row.konvoq}
                  </td>
                  {[row.chatbase, row.tidio, row.intercom].map((val, j) => (
                    <td
                      key={j}
                      style={{
                        padding: "14px 24px",
                        textAlign: "center",
                        fontSize: 13,
                        color: val === "✗" ? "var(--text-3)" : "var(--text-2)",
                        borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
                      }}
                    >
                      {val}
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
