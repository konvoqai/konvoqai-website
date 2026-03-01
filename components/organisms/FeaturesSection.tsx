"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const featureCards = [
  {
    eyebrow: "Training",
    title: "A single source of truth for your assistant.",
    description:
      "Ingest website pages, product docs, help center articles, and structured files with a workflow that is fast enough for operations teams and reliable enough for enterprise rollouts.",
    points: ["Auto re-sync on content updates", "Source-level quality controls", "Private knowledge collections"],
    accent: "var(--accent)",
    wide: true,
  },
  {
    eyebrow: "Routing",
    title: "Handoff only when it matters.",
    description: "Konvoq classifies intent, spots risk, and escalates with conversation context attached.",
    points: ["SLA-aware routing", "Priority queues", "Human notes and context"],
    accent: "var(--accent-strong)",
  },
  {
    eyebrow: "Analytics",
    title: "Metrics teams can actually act on.",
    description:
      "Track containment, lead quality, resolution quality, and content gaps without digging through transcripts manually.",
    points: ["Conversation themes", "Revenue and pipeline attribution", "Knowledge gap alerts"],
    accent: "var(--success)",
  },
  {
    eyebrow: "Brand",
    title: "A widget that feels like your product.",
    description: "Use your own colors, voice, and handoff language so the assistant never feels bolted on.",
    points: ["Theme-aware embed", "Custom starter prompts", "White-label support"],
    accent: "var(--accent)",
  },
  {
    eyebrow: "Security",
    title: "Enterprise controls from day one.",
    description: "Designed for procurement review, security review, and rollout at scale.",
    points: ["Role-based access", "Regional data strategy", "Audit-friendly operations"],
    accent: "var(--danger)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Platform"
          heading={<>The product system behind high-quality AI support.</>}
          description={<>Every layer is tuned to reduce support load, preserve context, and make the customer-facing experience feel intentional.</>}
          style={{ marginBottom: 42 }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 28, marginBottom: 32 }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "8px 0 22px",
              borderTop: "1px solid color-mix(in srgb, var(--border-strong) 80%, transparent)",
              borderBottom: "1px solid color-mix(in srgb, var(--border) 64%, transparent)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at top left, rgba(91,140,255,0.12), transparent 46%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>
                {featureCards[0].eyebrow}
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(30px, 4.2vw, 52px)", fontWeight: 760, letterSpacing: "-0.05em", lineHeight: 1.02, maxWidth: 700 }}>
                {featureCards[0].title}
              </h3>
              <p style={{ margin: "0 0 22px", fontSize: 17, color: "var(--text-2)", lineHeight: 1.78, maxWidth: 700 }}>
                {featureCards[0].description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {featureCards[0].points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.08 + index * 0.05, ease: "easeOut" }}
                    style={{ paddingBottom: 10, borderBottom: "1px solid color-mix(in srgb, var(--border) 70%, transparent)" }}
                  >
                    <div style={{ width: 24, height: 2, borderRadius: 999, background: featureCards[0].accent, marginBottom: 10 }} />
                    <div style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.65 }}>{point}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ alignSelf: "end", paddingBottom: 14 }}
          >
            <div className="section-divider" style={{ marginBottom: 18 }} />
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.72, color: "var(--text-2)" }}>
              Konvoq is designed as an operating system for AI conversations, not a widget-only add-on. That is why the product feels more coherent at scale.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {featureCards.slice(1).map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.46, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                paddingTop: 22,
                borderTop: "1px solid color-mix(in srgb, var(--border-strong) 72%, transparent)",
              }}
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div style={{ width: 36, height: 2, borderRadius: 999, background: card.accent, marginBottom: 16 }} />
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>
                  {card.eyebrow}
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 26, fontWeight: 750, letterSpacing: "-0.04em", lineHeight: 1.08 }}>
                  {card.title}
                </h3>
                <p style={{ margin: "0 0 18px", fontSize: 15, color: "var(--text-2)", lineHeight: 1.72, maxWidth: 520 }}>
                  {card.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {card.points.map((point) => (
                    <div key={point} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-2)", fontSize: 14 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: card.accent, flexShrink: 0 }} />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
