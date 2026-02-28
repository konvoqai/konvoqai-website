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

interface Plan {
  tier: string;
  price: number;
  desc: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    tier: "Starter",
    price: 0,
    desc: "Perfect for trying Konvoq. Get started for free, no credit card needed.",
    features: [
      "1 chatbot",
      "500 conversations / month",
      "1 data source",
      "Basic analytics",
      "Community support",
    ],
    ctaLabel: "Get Started Free",
  },
  {
    tier: "Pro",
    price: 49,
    desc: "For businesses that need real power, white-label, and revenue analytics.",
    features: [
      "5 chatbots",
      "10,000 conversations / month",
      "Unlimited data sources",
      "White-label (zero Konvoq branding)",
      "GPT-4o + Claude + Gemini",
      "Revenue analytics & lead capture",
      "Smart human handoff",
      "Email support",
    ],
    ctaLabel: "Start Pro →",
    popular: true,
  },
  {
    tier: "Scale",
    price: 149,
    desc: "For high-volume businesses and agencies managing multiple clients.",
    features: [
      "Unlimited chatbots",
      "100,000 conversations / month",
      "Unlimited data sources",
      "White-label + custom domain",
      "Full REST API access",
      "Advanced automations & flows",
      "Priority support + SLA",
      "Agency client dashboard",
    ],
    ctaLabel: "Start Scaling →",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, var(--black) 0%, rgba(6,239,255,0.02) 50%, var(--black) 100%)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>Pricing</SectionLabel>
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
            Transparent pricing.
            <br />
            <span className="grad-text">No surprises. No sales calls.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-2)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            Start free. Scale as you grow. Cancel anytime — no questions asked.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={plan.popular ? "gradient-border" : ""}
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                padding: 36,
                ...(plan.popular
                  ? {}
                  : {
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }),
              }}
            >
              {/* Popular glow */}
              {plan.popular && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--radius-xl)",
                      background: "radial-gradient(ellipse at 50% 0%, rgba(6,239,255,0.04) 0%, transparent 60%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: -13,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--grad-btn)",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 800,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.1em",
                      padding: "4px 16px",
                      borderRadius: 100,
                    }}
                  >
                    Most Popular
                  </div>
                </>
              )}

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  color: "var(--text-3)",
                  marginBottom: 20,
                }}
              >
                {plan.tier}
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: "var(--text-2)" }}>$</span>
                <span
                  style={{
                    fontSize: 60,
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    ...(plan.popular
                      ? {
                          background: "var(--grad-text)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : {}),
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ fontSize: 14, color: "var(--text-3)" }}>/mo</span>
              </div>

              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 28 }}>
                {plan.desc}
              </p>

              <div style={{ height: 1, background: "var(--border)", marginBottom: 24 }} />

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-2)" }}
                  >
                    <span style={{ color: "var(--emerald)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={
                  plan.popular
                    ? { boxShadow: "0 0 50px rgba(6,239,255,0.25)", y: -1 }
                    : { background: "rgba(255,255,255,0.1)" }
                }
                style={{
                  display: "block",
                  textAlign: "center",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  padding: 13,
                  textDecoration: "none",
                  ...(plan.popular
                    ? {
                        background: "var(--grad-btn)",
                        color: "#fff",
                        boxShadow: "0 0 30px rgba(6,239,255,0.15)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--text-1)",
                        border: "1px solid var(--border-2)",
                      }),
                }}
              >
                {plan.ctaLabel}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Enterprise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            padding: 20,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            textAlign: "center",
            fontSize: 14,
            color: "var(--text-2)",
          }}
        >
          Need custom models, SSO, dedicated infrastructure, or a custom SLA?{" "}
          <a href="#" style={{ color: "var(--cyan)", textDecoration: "none" }}>
            Talk to our enterprise team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

