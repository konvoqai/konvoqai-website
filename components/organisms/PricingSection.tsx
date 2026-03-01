"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import SectionHeader from "@/components/molecules/SectionHeader";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    annual: 0,
    description: "For small teams validating the workflow.",
    features: ["1 assistant", "500 conversations", "Basic analytics", "Website and docs ingestion"],
  },
  {
    name: "Growth",
    monthly: 49,
    annual: 39,
    description: "For teams that want full customization and better routing.",
    features: ["5 assistants", "Unlimited sources", "Advanced analytics", "White-label support", "Priority handoff rules"],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 149,
    annual: 119,
    description: "For organizations running AI support as a core operating layer.",
    features: ["Unlimited assistants", "Role controls", "Premium support", "Custom routing", "Advanced governance"],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Pricing"
          heading={<>Simple pricing with room to scale operationally.</>}
          description={<>Start with a free workflow, then move into deeper analytics, governance, and routing as the assistant becomes part of your core support stack.</>}
          style={{ marginBottom: 36 }}
        />

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 34 }}>
          <motion.div
            layout
            className="section-surface"
            style={{ padding: 6, borderRadius: 999, display: "flex", gap: 6 }}
          >
            {[
              { label: "Monthly", value: false },
              { label: "Annual", value: true },
            ].map((option) => {
              const active = annual === option.value;
              return (
                <motion.button
                  key={option.label}
                  type="button"
                  onClick={() => setAnnual(option.value)}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    border: "1px solid transparent",
                    background: "transparent",
                    color: active ? "var(--text-1)" : "var(--text-2)",
                    borderRadius: 999,
                    padding: "10px 16px",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="pricing-toggle-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 999,
                        background: "color-mix(in srgb, var(--surface-2) 76%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                      }}
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{option.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
            alignItems: "start",
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                position: "relative",
                paddingTop: 18,
                paddingBottom: 12,
                borderTop: "1px solid color-mix(in srgb, var(--border-strong) 76%, transparent)",
                borderBottom: "1px solid color-mix(in srgb, var(--border) 58%, transparent)",
                background: plan.featured ? "linear-gradient(180deg, rgba(91, 140, 255, 0.12), transparent 72%)" : "transparent",
              }}
            >
              {plan.featured && (
                <motion.div
                  layoutId="featured-plan-wash"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: "radial-gradient(circle at top, rgba(91, 140, 255, 0.16), transparent 48%)",
                  }}
                />
              )}
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12, marginBottom: 14 }}>
                  <div style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
                    {plan.name}
                  </div>
                  {plan.featured && (
                    <div
                      style={{
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "var(--accent-muted)",
                        color: "var(--accent)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Popular
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", alignItems: "end", gap: 4, marginBottom: 12 }}>
                  <motion.div layout style={{ fontSize: 46, fontWeight: 800, letterSpacing: "-0.06em" }}>
                    ${annual ? plan.annual : plan.monthly}
                  </motion.div>
                  <div style={{ color: "var(--text-3)", fontSize: 13, marginBottom: 8 }}>/month</div>
                </div>

                <p style={{ margin: "0 0 18px", color: "var(--text-2)", lineHeight: 1.72, fontSize: 15, maxWidth: 320 }}>
                  {plan.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 0.05 + featureIndex * 0.03, ease: "easeOut" }}
                      style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-2)", fontSize: 14 }}
                    >
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: plan.featured ? "var(--accent)" : "var(--text-3)", flexShrink: 0 }} />
                      {feature}
                    </motion.div>
                  ))}
                </div>
                <Button href="/pricing" variant={plan.featured ? "primary" : "outline"} size="md">
                  View plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
