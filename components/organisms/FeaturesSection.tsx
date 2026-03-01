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

// Each small card enters from a unique direction
const cardInitialX = [-18, 0, 18, 0];
const cardInitialY = [0, 22, 0, 22];
// Slightly varied hover targets
const cardHoverY = [-4, -5, -4, -5];
const cardHoverX = [-2, 0, 0, 2];
// Non-uniform point stagger in the hero card
const pointDelays = [0.06, 0.15, 0.25];

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

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 18, marginBottom: 18 }}>
          {/* Wide feature card — section-frame for proper depth + rounding */}
          <motion.div
            className="section-frame"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            style={{ padding: 32, overflow: "hidden", position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at top left, rgba(91,140,255,0.13), transparent 52%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>
                {featureCards[0].eyebrow}
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 760, letterSpacing: "-0.05em", lineHeight: 1.03, maxWidth: 640 }}>
                {featureCards[0].title}
              </h3>
              <p style={{ margin: "0 0 24px", fontSize: 16, color: "var(--text-2)", lineHeight: 1.78, maxWidth: 580 }}>
                {featureCards[0].description}
              </p>
              {/* Points cascade in from left with non-uniform delays */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {featureCards[0].points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.42, delay: pointDelays[index], ease: [0.22, 1, 0.36, 1] }}
                    style={{ paddingBottom: 10, borderBottom: "1px solid color-mix(in srgb, var(--border) 70%, transparent)" }}
                  >
                    <div style={{ width: 24, height: 2, borderRadius: 999, background: featureCards[0].accent, marginBottom: 10 }} />
                    <div style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.65 }}>{point}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote column — section-surface for visual consistency */}
          <motion.div
            className="section-surface"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.52, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
          >
            <div className="section-divider" style={{ marginBottom: 20 }} />
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.72, color: "var(--text-2)" }}>
              Konvoq is designed as an operating system for AI conversations, not a widget-only add-on. That is why the product feels more coherent at scale.
            </p>
          </motion.div>
        </div>

        {/* Small feature cards — section-surface with per-card direction */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {featureCards.slice(1).map((card, index) => (
            <motion.div
              key={card.title}
              className="section-surface"
              initial={{ opacity: 0, x: cardInitialX[index], y: cardInitialY[index] }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: cardHoverY[index] }}
              style={{ padding: 24 }}
            >
              <motion.div
                whileHover={{ x: cardHoverX[index] }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div style={{ width: 36, height: 2, borderRadius: 999, background: card.accent, marginBottom: 16 }} />
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>
                  {card.eyebrow}
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 750, letterSpacing: "-0.04em", lineHeight: 1.08 }}>
                  {card.title}
                </h3>
                <p style={{ margin: "0 0 18px", fontSize: 15, color: "var(--text-2)", lineHeight: 1.72 }}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
