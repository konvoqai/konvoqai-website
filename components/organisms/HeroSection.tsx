"use client";

import Button from "@/components/atoms/Button";
import SectionBadge from "@/components/atoms/SectionBadge";
import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedCheckmark({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <motion.circle
        cx="8" cy="8" r="7"
        stroke="currentColor"
        strokeWidth="1.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.35 }}
        transition={{ duration: 0.55, delay, ease: "easeOut" }}
      />
      <motion.path
        d="M5 8L7 10L11 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.32, ease: "easeOut" }}
      />
    </svg>
  );
}

const proofPoints = [
  "Train on your website and docs",
  "Human handoff included",
];

const trustStats = [
  { label: "Teams onboarded", value: "12k+" },
  { label: "Average containment", value: "91%" },
  { label: "Median setup time", value: "1 day" },
];

const leftRail = ["Agent routing", "Knowledge score", "Lead intent", "Escalation map"];
const actionCards = [
  { title: "Billing plan update", meta: "Resolved with pricing context and proration logic.", label: "Support", status: "Resolved" },
  { title: "Enterprise demo request", meta: "Assigned to sales owner with rollout and procurement context.", label: "Sales", status: "Assigned" },
  { title: "API auth question", meta: "Answered from docs and linked to the correct setup path.", label: "Support", status: "Docs grounded" },
];

function HeroDashboard() {
  const { scrollY } = useScroll();
  const panelY = useTransform(scrollY, [0, 900], [0, 64]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", y: panelY }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: -24,
          left: "50%",
          x: "-50%",
          width: 320,
          height: 24,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.16), rgba(136, 144, 150, 0.12) 48%, transparent 78%)",
          filter: "blur(14px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-frame"
        style={{
          position: "relative",
          padding: 24,
          overflow: "hidden",
          borderRadius: 32,
          border: "1px solid color-mix(in srgb, var(--border) 78%, transparent)",
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 82%, transparent) 0%, color-mix(in srgb, var(--surface) 92%, transparent) 100%)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.06), transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 24%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", display: "grid", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Operator dashboard
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.02 }}>
                Support and sales dashboard
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{ padding: "9px 12px", borderRadius: 999, background: "color-mix(in srgb, var(--surface) 76%, transparent)", border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)", color: "var(--text-2)", fontSize: 12, fontWeight: 700 }}>
                Live
              </div>
              <div style={{ padding: "9px 12px", borderRadius: 999, background: "var(--accent-muted)", border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)", color: "var(--text-1)", fontSize: 12, fontWeight: 700 }}>
                91% containment
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0, 1fr) 280px", gap: 18, alignItems: "stretch" }}>
            <div style={{ padding: 16, borderRadius: 22, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", background: "color-mix(in srgb, var(--surface-2) 82%, transparent)" }}>
              <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.12em" }}>Workspace</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {leftRail.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.36, delay: 0.24 + index * 0.05, ease: "easeOut" }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 13px",
                      borderRadius: 14,
                      background: index === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface) 72%, transparent)",
                      color: index === 0 ? "var(--text-1)" : "var(--text-2)",
                      fontSize: 13,
                    }}
                  >
                    <span>{item}</span>
                    <span style={{ color: "var(--text-3)", fontSize: 12 }}>{index + 1}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <div style={{ padding: 18, borderRadius: 22, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", background: "color-mix(in srgb, var(--surface-2) 78%, transparent)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "Conversations", value: "14,382" },
                    { label: "Resolved", value: "12,945" },
                    { label: "Escalated", value: "1,437" },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.32 + index * 0.05, ease: "easeOut" }}
                      style={{ paddingBottom: 8, borderBottom: "1px solid color-mix(in srgb, var(--border) 60%, transparent)" }}
                    >
                      <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 6 }}>{metric.label}</div>
                      <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.04em" }}>{metric.value}</div>
                    </motion.div>
                  ))}
                </div>

                <div style={{ padding: 14, borderRadius: 18, border: "1px solid color-mix(in srgb, var(--border) 68%, transparent)", background: "linear-gradient(180deg, color-mix(in srgb, var(--surface) 84%, transparent), transparent)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: "var(--text-3)" }}>Performance trend</span>
                    <span style={{ fontSize: 12, color: "var(--text-2)" }}>Last 30 days</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "end", gap: 7, height: 140 }}>
                    {[18, 24, 28, 34, 42, 51, 57, 54, 66, 72, 79, 86].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${height}%`, opacity: 1 }}
                        transition={{ duration: 0.55, delay: 0.42 + index * 0.03, ease: "easeOut" }}
                        style={{
                          flex: 1,
                          borderRadius: "999px 999px 0 0",
                          background: index > 7 ? "linear-gradient(180deg, var(--text-1), var(--text-2))" : "color-mix(in srgb, var(--surface-2) 88%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 14 }}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.66, ease: "easeOut" }}
                  style={{ padding: 18, borderRadius: 20, background: "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 82%, transparent), transparent 100%)", border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)" }}
                >
                  <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>Assistant response</div>
                  <div style={{ fontSize: 15, lineHeight: 1.72, color: "var(--text-1)" }}>
                    &ldquo;Yes. Plan upgrades apply immediately, enterprise requests can route to sales, and billing is prorated automatically.&rdquo;
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.74, ease: "easeOut" }}
                  style={{ padding: 18, borderRadius: 20, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", background: "color-mix(in srgb, var(--surface-2) 78%, transparent)" }}
                >
                  <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>Suggested next action</div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Offer enterprise callback</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                    Customer mentioned procurement, internal rollout, and owner assignment in the same thread.
                  </div>
                </motion.div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.34, ease: "easeOut" }}
                style={{
                  padding: 18,
                  borderRadius: 22,
                  border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                  background: "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 86%, transparent), color-mix(in srgb, var(--surface) 92%, transparent))",
                }}
              >
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700, marginBottom: 10 }}>
                  Lead signal
                </div>
                <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.06em", marginBottom: 6 }}>+32%</div>
                <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                  More qualified buying intent from conversations mentioning rollout, pricing, and procurement in the same thread.
                </div>
              </motion.div>

              {actionCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.42 + index * 0.08, ease: "easeOut" }}
                  style={{
                    padding: 16,
                    borderRadius: 20,
                    border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                    background: "color-mix(in srgb, var(--surface-2) 78%, transparent)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700 }}>
                      {card.label}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--text-3)" }}>{card.status}</span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, lineHeight: 1.35 }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{card.meta}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, paddingTop: 18, borderTop: "1px solid color-mix(in srgb, var(--border) 72%, transparent)" }}>
            {trustStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.54 + index * 0.06, ease: "easeOut" }}
                style={{ padding: "6px 4px 0", textAlign: "center" }}
              >
                <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.05em" }}>{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const topGlowY = useTransform(scrollY, [0, 900], [0, 120]);
  const bottomGlowY = useTransform(scrollY, [0, 900], [0, -76]);

  return (
    <section
      id="hero"
      style={{
        padding: "60px 24px 88px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: -180,
          right: -180,
          width: 620,
          height: 620,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 72%)",
          pointerEvents: "none",
          y: topGlowY,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          left: -120,
          bottom: -180,
          width: 420,
          height: 420,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(136, 144, 150, 0.12), transparent 72%)",
          pointerEvents: "none",
          y: bottomGlowY,
        }}
      />

      <div className="site-container">
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ display: "flex", justifyContent: "center" }}>
            <SectionBadge>AI chatbot platform</SectionBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(52px, 7.4vw, 92px)",
              lineHeight: 0.94,
              letterSpacing: "-0.07em",
              fontWeight: 800,
            }}
          >
            AI chatbot for support, sales, and docs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.16, ease: "easeOut" }}
            style={{
              margin: "0 auto 26px",
              maxWidth: 560,
              fontSize: 17,
              lineHeight: 1.68,
              color: "var(--text-2)",
            }}
          >
            Train one AI agent on your website and docs, answer faster, and route high-intent conversations with context.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.24, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 20 }}
          >
            <Button href="/pricing" variant="primary" size="lg">
              Try for free
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 18, marginBottom: 42, color: "var(--text-2)", fontSize: 14 }}
          >
            {proofPoints.map((item, index) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-2)" }}>
                <AnimatedCheckmark delay={0.36 + index * 0.1} />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
