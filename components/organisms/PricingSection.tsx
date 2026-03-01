"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    featured: false,
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
    featured: false,
  },
];

// Directional entry — Starter from left, Growth from below, Scale from right
const cardInitialX = [-22, 0, 22];
const cardInitialY = [0, 26, 0];

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

        {/* Billing toggle — sliding pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "color-mix(in srgb, var(--surface-2) 80%, transparent)",
              border: "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
              borderRadius: 999,
              padding: 4,
              boxShadow: "var(--shadow-card)",
              gap: 2,
            }}
          >
            {([
              { label: "Monthly", value: false },
              { label: "Annual", value: true },
            ] as const).map((option) => {
              const active = annual === option.value;
              return (
                <motion.button
                  key={option.label}
                  type="button"
                  onClick={() => setAnnual(option.value)}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    position: "relative",
                    border: 0,
                    background: "transparent",
                    color: active ? "var(--text-1)" : "var(--text-3)",
                    borderRadius: 999,
                    padding: "10px 20px",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="pricing-toggle-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 999,
                        background: "var(--background-elevated)",
                        border: "1px solid color-mix(in srgb, var(--border-strong) 65%, transparent)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.14)",
                      }}
                      transition={{ type: "spring", stiffness: 360, damping: 30, mass: 0.7 }}
                    />
                  )}
                  <span style={{ position: "relative" }}>{option.label}</span>
                </motion.button>
              );
            })}
            <div
              style={{
                padding: "9px 13px",
                borderRadius: 999,
                background: "var(--accent-muted)",
                border: "1px solid rgba(91, 140, 255, 0.26)",
                color: "var(--accent)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginLeft: 2,
              }}
            >
              Save 20%
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            alignItems: "start",
          }}
        >
          {plans.map((plan, index) => {
            const price = annual ? plan.annual : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, x: cardInitialX[index], y: cardInitialY[index] }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: plan.featured ? -8 : -4 }}
                style={{
                  position: "relative",
                  padding: plan.featured ? "30px 26px 26px" : "26px",
                  borderRadius: "var(--radius-lg)",
                  background: plan.featured
                    ? "linear-gradient(160deg, color-mix(in srgb, var(--accent-muted) 90%, var(--panel-strong) 10%) 0%, var(--panel-strong) 100%)"
                    : "color-mix(in srgb, var(--surface) 72%, transparent)",
                  border: plan.featured
                    ? "1px solid rgba(91, 140, 255, 0.32)"
                    : "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                  boxShadow: plan.featured
                    ? "var(--shadow-card), 0 0 0 1px rgba(91, 140, 255, 0.16), 0 0 56px rgba(91, 140, 255, 0.1)"
                    : "var(--shadow-card)",
                  overflow: "hidden",
                  marginTop: plan.featured ? -10 : 0,
                }}
              >
                {/* Featured: top accent bar */}
                {plan.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "var(--grad-btn)",
                    }}
                  />
                )}

                {/* Featured: top radial glow */}
                {plan.featured && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: "radial-gradient(ellipse at top, rgba(91, 140, 255, 0.16), transparent 52%)",
                    }}
                  />
                )}

                <div style={{ position: "relative" }}>
                  {/* Plan name + badge */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: plan.featured ? "var(--accent)" : "var(--text-3)",
                      }}
                    >
                      {plan.name}
                    </div>
                    {plan.featured && (
                      <div
                        style={{
                          padding: "5px 10px",
                          borderRadius: 999,
                          background: "color-mix(in srgb, var(--accent-muted) 80%, transparent)",
                          border: "1px solid rgba(91, 140, 255, 0.28)",
                          color: "var(--accent)",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${plan.name}-${annual}`}
                          initial={{ opacity: 0, y: 7 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -7 }}
                          transition={{ duration: 0.16 }}
                          style={{
                            fontSize: 46,
                            fontWeight: 800,
                            letterSpacing: "-0.06em",
                            lineHeight: 0.92,
                          }}
                        >
                          ${price}
                        </motion.span>
                      </AnimatePresence>
                      <span style={{ color: "var(--text-3)", fontSize: 13, marginBottom: 2 }}>
                        {price === 0 ? "forever" : "/mo"}
                      </span>
                    </div>
                    {annual && price > 0 && (
                      <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 5 }}>
                        billed annually
                      </div>
                    )}
                  </div>

                  <p style={{ margin: "0 0 20px", color: "var(--text-2)", lineHeight: 1.68, fontSize: 14 }}>
                    {plan.description}
                  </p>

                  {/* Feature list */}
                  <div
                    style={{
                      paddingTop: 16,
                      borderTop: `1px solid ${plan.featured ? "rgba(91,140,255,0.18)" : "color-mix(in srgb, var(--border) 65%, transparent)"}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      marginBottom: 22,
                    }}
                  >
                    {plan.features.map((feature) => (
                      <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-2)", fontSize: 14 }}>
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: 999,
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0,
                            background: plan.featured ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface-2) 80%, transparent)",
                            border: `1px solid ${plan.featured ? "rgba(91,140,255,0.26)" : "color-mix(in srgb, var(--border) 80%, transparent)"}`,
                            color: plan.featured ? "var(--accent)" : "var(--text-2)",
                            fontSize: 10,
                            fontWeight: 800,
                          }}
                        >
                          ✓
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    href="/pricing"
                    variant={plan.featured ? "primary" : "outline"}
                    size="md"
                    style={{ width: "100%" }}
                  >
                    {price === 0 ? "Start free" : "View plan"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
