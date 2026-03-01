"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import SectionHeader from "@/components/molecules/SectionHeader";
import { SIGNUP_URL } from "@/lib/config";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    description: "For testing the workflow and validating product-market fit.",
    features: ["1 assistant", "500 conversations", "Website and docs ingestion", "Basic analytics"],
  },
  {
    name: "Growth",
    monthly: 49,
    annual: 39,
    description: "For teams that want stronger routing, customization, and reporting.",
    features: ["5 assistants", "Unlimited sources", "Advanced analytics", "White-label support", "Priority rules"],
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: 0,
    annual: 0,
    description: "For teams with security, scale, and rollout requirements.",
    features: ["Unlimited assistants", "Role controls", "Custom routing", "Security review", "Dedicated support"],
    custom: true,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" style={{ padding: "110px 24px" }}>
      <div className="site-container">
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 26, alignItems: "end", marginBottom: 30 }}>
          <SectionHeader
            badge="Pricing"
            heading={<>The best work solution, for the right stage of growth.</>}
            description={<>Start lean, then scale into governance, routing, and deeper team workflows when AI becomes part of your core operating system.</>}
            align="left"
            style={{ margin: 0 }}
          />

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ display: "inline-flex", alignItems: "center", background: "color-mix(in srgb, var(--surface-2) 80%, transparent)", border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)", borderRadius: 999, padding: 4, gap: 4 }}>
              {[{ label: "Monthly", value: false }, { label: "Annual", value: true }].map((option) => {
                const active = annual === option.value;
                return (
                  <motion.button
                    key={option.label}
                    type="button"
                    onClick={() => setAnnual(option.value)}
                    whileTap={{ scale: 0.97 }}
                    style={{ position: "relative", padding: "10px 18px", border: 0, background: "transparent", color: active ? "var(--text-1)" : "var(--text-3)", fontSize: 13, fontWeight: 700, borderRadius: 999, cursor: "pointer" }}
                  >
                    {active && (
                      <motion.span
                        layoutId="home-pricing-toggle"
                        style={{ position: "absolute", inset: 0, borderRadius: 999, background: "color-mix(in srgb, var(--surface) 88%, transparent)", border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)" }}
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      />
                    )}
                    <span style={{ position: "relative", zIndex: 1 }}>{option.label}</span>
                  </motion.button>
                );
              })}
              <div style={{ padding: "9px 12px", borderRadius: 999, background: "var(--accent-muted)", border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)", color: "var(--text-1)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Save 20%
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginBottom: 20 }}>
          {plans.map((plan, index) => {
            const price = plan.custom ? "Let\'s Talk" : `$${annual ? plan.annual : plan.monthly}`;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.46, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                style={{
                  padding: 24,
                  border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                  borderRadius: 24,
                  background: plan.featured
                    ? "linear-gradient(180deg, color-mix(in srgb, var(--surface-2) 90%, transparent), color-mix(in srgb, var(--surface) 96%, transparent))"
                    : "color-mix(in srgb, var(--surface-2) 82%, transparent)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 12, color: plan.featured ? "var(--text-1)" : plan.custom ? "var(--text-2)" : "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>
                    {plan.name}
                  </div>
                  {plan.featured && (
                    <div style={{ padding: "7px 10px", borderRadius: 999, background: "var(--accent-muted)", border: "1px solid color-mix(in srgb, var(--border) 76%, transparent)", color: "var(--text-1)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Popular
                    </div>
                  )}
                </div>
                <div style={{ fontSize: plan.custom ? 34 : 46, fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 1, marginBottom: 12 }}>{price}</div>
                {!plan.custom && <div style={{ color: "var(--text-3)", fontSize: 12, marginBottom: 12 }}>/ month</div>}
                <p style={{ margin: "0 0 18px", color: "var(--text-2)", lineHeight: 1.7, fontSize: 15 }}>{plan.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                  {plan.features.map((feature) => (
                    <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-2)", fontSize: 14 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: plan.featured ? "var(--text-1)" : "var(--text-3)", flexShrink: 0 }} />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button href={plan.custom ? "/contact" : SIGNUP_URL} variant={plan.featured ? "primary" : "outline"} size="md">
                  {plan.custom ? "Book a call" : plan.monthly === 0 ? "Get started" : "Choose plan"}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

