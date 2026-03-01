"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/atoms/Button";
import SectionBadge from "@/components/atoms/SectionBadge";

const heroMetrics = [
  { label: "Resolution rate", value: "91%", note: "Average automated resolution" },
  { label: "Time to launch", value: "3 min", note: "From URL to embedded widget" },
  { label: "Teams onboarded", value: "12k+", note: "Across SaaS, commerce, and support" },
];

const featureChips = ["Website training", "Docs ingestion", "Human handoff", "Analytics", "White-label"];

// Non-uniform chip delays — not perfectly spaced
const chipDelays = [0.28, 0.34, 0.39, 0.44, 0.51];
// Non-uniform metric delays
const metricDelays = [0.48, 0.56, 0.63];

function ProductPreview() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 800], [0, 80]);
  const rotate = useTransform(scrollY, [0, 800], [0, -3]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: "18px 0 0",
        position: "relative",
        y: translateY,
        rotate,
        transformOrigin: "top center",
      }}
    >
      <div
        className="section-frame open-divider-grid"
        style={{
          position: "relative",
          padding: "24px 28px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at top right, rgba(91, 140, 255, 0.16), transparent 36%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "rgba(239,68,68,0.84)" }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "rgba(245,158,11,0.84)" }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "rgba(34,197,94,0.84)" }} />
          <span style={{ marginLeft: 10, fontSize: 12, color: "var(--text-3)" }}>assistant operating view</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.92fr", gap: 26, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 18 }}>
            <div style={{ paddingBottom: 18, borderBottom: "1px solid color-mix(in srgb, var(--border) 72%, transparent)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 6 }}>Overview</div>
                  <div style={{ fontSize: 24, fontWeight: 750, letterSpacing: "-0.04em" }}>Weekly operating pulse</div>
                </div>
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    padding: "7px 11px",
                    borderRadius: 999,
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Live
                </motion.div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 18 }}>
                {[
                  { label: "Conversations", value: "14,382" },
                  { label: "Qualified leads", value: "1,847" },
                  { label: "Handoff rate", value: "9%" },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.06, ease: "easeOut" }}
                    style={{ padding: "0 0 8px", borderBottom: "1px solid color-mix(in srgb, var(--border) 58%, transparent)" }}
                  >
                    <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 6 }}>{metric.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.04em" }}>{metric.value}</div>
                  </motion.div>
                ))}
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: "var(--text-3)" }}>Conversation volume</span>
                  <span style={{ fontSize: 12, color: "var(--text-2)" }}>Last 30 days</span>
                </div>
                <div style={{ display: "flex", alignItems: "end", gap: 6, height: 112 }}>
                  {[36, 52, 44, 58, 62, 76, 71, 84, 78, 94, 90, 96].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: `${height}%`, opacity: 1 }}
                      transition={{ duration: 0.55, delay: 0.38 + index * 0.03, ease: "easeOut" }}
                      style={{
                        flex: 1,
                        borderRadius: "999px 999px 0 0",
                        background: index > 7 ? "var(--grad-btn)" : "color-mix(in srgb, var(--surface-2) 84%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--border) 68%, transparent)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: 12, paddingLeft: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 6 }}>Live assistant</div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.03em" }}>Support bot response stream</div>
            </div>
            {[
              { role: "visitor", text: "Can I change plans in the middle of the month?" },
              { role: "assistant", text: "Yes. Upgrades apply immediately and billing is prorated automatically." },
              { role: "visitor", text: "Can you route enterprise requests to sales?" },
              { role: "assistant", text: "Already handled. Sales conversations route to the right owner with context attached." },
            ].map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.role === "assistant" ? -14 : 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.38, delay: 0.52 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  alignSelf: message.role === "assistant" ? "flex-start" : "flex-end",
                  maxWidth: "88%",
                  padding: "12px 14px",
                  borderRadius: 18,
                  background: message.role === "assistant" ? "color-mix(in srgb, var(--surface-2) 82%, transparent)" : "var(--accent-muted)",
                  border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                  color: message.role === "assistant" ? "var(--text-2)" : "var(--text-1)",
                  lineHeight: 1.6,
                  fontSize: 13,
                }}
              >
                {message.text}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 16,
                borderTop: "1px solid color-mix(in srgb, var(--border) 62%, transparent)",
              }}
            >
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>Next best action</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-1)" }}>Offer enterprise callback</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 900], [0, 120]);
  const orbYReverse = useTransform(scrollY, [0, 900], [0, -90]);

  return (
    <section
      id="hero"
      style={{
        padding: "132px 24px 104px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(91,140,255,0.18), transparent 70%)",
          pointerEvents: "none",
          y: orbY,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          left: -140,
          bottom: -160,
          width: 360,
          height: 360,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(91,140,255,0.12), transparent 72%)",
          pointerEvents: "none",
          y: orbYReverse,
        }}
      />

      <div className="site-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, alignItems: "center" }}>
          <div>
            {/* Badge — pure fade, no movement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <SectionBadge>Customer conversations, rethought</SectionBadge>
            </motion.div>

            {/* H1 — slides in from left, editorial feel */}
            <motion.h1
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(50px, 7.5vw, 90px)",
                lineHeight: 0.93,
                letterSpacing: "-0.065em",
                fontWeight: 800,
                maxWidth: 760,
              }}
            >
              A cleaner system for support, conversion, and AI handoff.
            </motion.h1>

            {/* Description — fades in, minimal movement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{
                margin: "0 0 28px",
                maxWidth: 580,
                fontSize: 18,
                lineHeight: 1.72,
                color: "var(--text-2)",
              }}
            >
              Train Konvoq on your website, docs, and product knowledge, then launch an assistant that answers quickly,
              routes intelligently, and looks native to your brand.
            </motion.p>

            {/* Buttons — slide up slightly */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26, ease: "easeOut" }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}
            >
              <Button href="/pricing" variant="primary" size="lg">
                Start free
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Book a demo
              </Button>
            </motion.div>

            {/* Feature chips — cascade in from left, non-uniform delays */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
              {featureChips.map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.38, delay: chipDelays[index], ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 13,
                    color: "var(--text-2)",
                    paddingBottom: 8,
                    borderBottom: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                  }}
                >
                  {chip}
                </motion.div>
              ))}
            </div>

            {/* Metrics — slide in from left with slight delay stagger */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.48, delay: metricDelays[index], ease: [0.22, 1, 0.36, 1] }}
                  style={{ paddingBottom: 14, borderBottom: "1px solid color-mix(in srgb, var(--border) 70%, transparent)" }}
                >
                  <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>{metric.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.05em", marginBottom: 6 }}>{metric.value}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{metric.note}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
