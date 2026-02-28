"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import PageLayout from "@/components/PageLayout";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-2)",
      borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-2)",
      marginBottom: 24,
    }}>
      <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for trying out Konvoq and small projects.",
    cta: "Get started free",
    ctaStyle: "outline" as const,
    popular: false,
    features: [
      "1 chatbot",
      "100 conversations / month",
      "1 data source",
      "Basic widget customization",
      "Email support",
      "Konvoq branding",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For growing businesses that need more power and insights.",
    cta: "Start Pro trial",
    ctaStyle: "gradient" as const,
    popular: true,
    features: [
      "5 chatbots",
      "5,000 conversations / month",
      "Unlimited data sources",
      "Full widget customization",
      "Priority email & chat support",
      "Advanced analytics dashboard",
      "Remove Konvoq branding",
      "API access",
    ],
  },
  {
    name: "Business",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "For teams and enterprises that need security and scale.",
    cta: "Start Business trial",
    ctaStyle: "outline" as const,
    popular: false,
    features: [
      "Unlimited chatbots",
      "50,000 conversations / month",
      "Team collaboration & inbox",
      "Role-based access control",
      "SLA guarantee (99.9% uptime)",
      "SSO / SAML 2.0",
      "Custom branding & domain",
      "Dedicated account manager",
      "SOC2 / GDPR / HIPAA",
      "Audit logs",
    ],
  },
];

const comparisonFeatures = [
  { label: "Chatbots", free: "1", pro: "5", business: "Unlimited" },
  { label: "Conversations / month", free: "100", pro: "5,000", business: "50,000" },
  { label: "Data sources", free: "1", pro: "Unlimited", business: "Unlimited" },
  { label: "Widget customization", free: "Basic", pro: "Full", business: "Full + White-label" },
  { label: "Analytics", free: false, pro: true, business: true },
  { label: "API access", free: false, pro: true, business: true },
  { label: "Team collaboration", free: false, pro: false, business: true },
  { label: "SSO / SAML", free: false, pro: false, business: true },
  { label: "Remove branding", free: false, pro: true, business: true },
  { label: "Priority support", free: false, pro: true, business: true },
  { label: "Dedicated manager", free: false, pro: false, business: true },
  { label: "SOC2 / HIPAA / GDPR", free: false, pro: false, business: true },
];

const faqs = [
  {
    q: "Can I change plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your dashboard. Upgrades take effect immediately and you'll be prorated for the rest of the billing period. Downgrades take effect at the next renewal date.",
  },
  {
    q: "What counts as a conversation?",
    a: "A conversation is a single chat session between a user and your AI chatbot, regardless of how many messages are exchanged within it. Sessions that last fewer than 5 seconds are not counted.",
  },
  {
    q: "Do unused conversations roll over?",
    a: "No. Conversation limits reset at the start of each billing month. If you regularly hit your limit, we recommend upgrading to the next plan — or contacting us for a custom quota.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Yes. Both Pro and Business plans come with a 14-day free trial, no credit card required. You'll get full access to every feature during the trial period.",
  },
  {
    q: "Do you offer discounts for nonprofits or startups?",
    a: "Yes. We offer a 50% discount for registered nonprofits and early-stage startups (under $1M ARR). Contact us with proof and we'll apply the discount to your account within 24 hours.",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.15" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.04)" />
      <path d="M5.5 10.5l5-5M10.5 10.5l-5-5" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)",
          width: 800, height: 500,
          background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "100px 24px 72px" }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Pricing</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
                letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 auto 20px", maxWidth: 720,
              }}
            >
              Simple, transparent pricing.{" "}
              <span className="grad-text">No surprises.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: 19, color: "var(--text-2)", maxWidth: 500,
              margin: "0 auto 48px", lineHeight: 1.7,
            }}>
              Start free. Scale as you grow. Cancel anytime.
            </motion.p>

            {/* Toggle */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}
            >
              <span style={{ fontSize: 15, fontWeight: 500, color: !annual ? "var(--text-1)" : "var(--text-3)" }}>
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                style={{
                  width: 52, height: 28, borderRadius: 100,
                  background: annual ? "var(--grad-btn)" : "var(--surface-3)",
                  border: "1px solid var(--border-2)", cursor: "pointer",
                  position: "relative", transition: "background 0.3s",
                  padding: 0,
                }}
              >
                <motion.div
                  animate={{ x: annual ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: annual ? "#000" : "var(--text-2)",
                    position: "absolute", top: 2, left: 3,
                  }}
                />
              </button>
              <span style={{ fontSize: 15, fontWeight: 500, color: annual ? "var(--text-1)" : "var(--text-3)" }}>
                Annual
              </span>
              <AnimatePresence>
                {annual && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -8 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)",
                      color: "var(--emerald)", fontSize: 12, fontWeight: 700,
                      padding: "3px 10px", borderRadius: 100, letterSpacing: "0.04em",
                    }}
                  >
                    Save 20%
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>

        {/* Plans */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24,
          }}>
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.1 * i, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                style={{
                  background: plan.popular ? "var(--surface-2)" : "var(--surface)",
                  border: plan.popular ? "1px solid transparent" : "1px solid var(--border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage: plan.popular
                    ? "linear-gradient(var(--surface-2), var(--surface-2)), var(--grad-btn)"
                    : "none",
                  backgroundOrigin: plan.popular ? "border-box" : "initial",
                  backgroundClip: plan.popular ? "padding-box, border-box" : "initial",
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: "absolute", top: 20, right: 20,
                    background: "var(--grad-btn)", color: "#000",
                    fontSize: 11, fontWeight: 700, padding: "4px 12px",
                    borderRadius: 100, letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>
                    Most Popular
                  </div>
                )}

                {plan.popular && (
                  <div style={{
                    position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
                    width: 300, height: 200,
                    background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                )}

                <div style={{ marginBottom: 8, fontSize: 14, fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {plan.name}
                </div>

                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{
                        fontSize: 52, fontWeight: 800, letterSpacing: "-0.04em",
                        color: "var(--text-1)", lineHeight: 1,
                      }}
                    >
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  {plan.monthlyPrice > 0 && (
                    <span style={{ color: "var(--text-3)", fontSize: 16, marginBottom: 8 }}>/mo</span>
                  )}
                </div>

                {annual && plan.monthlyPrice > 0 && (
                  <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>
                    Billed ${plan.annualPrice * 12}/year
                  </div>
                )}

                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.6, marginBottom: 28 }}>
                  {plan.description}
                </p>

                <a
                  href="/signup"
                  style={{
                    display: "block", textAlign: "center", textDecoration: "none",
                    fontWeight: 700, fontSize: 15, padding: "14px 24px",
                    borderRadius: "var(--radius)", marginBottom: 32,
                    ...(plan.ctaStyle === "gradient"
                      ? { background: "var(--grad-btn)", color: "#000" }
                      : {
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid var(--border-2)",
                          color: "var(--text-1)",
                        }),
                  }}
                >
                  {plan.cta}
                </a>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {plan.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <CheckIcon color={plan.popular ? "var(--cyan)" : "var(--emerald)"} />
                      <span style={{ fontSize: 14, color: "var(--text-2)" }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Full Comparison</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800,
              letterSpacing: "-0.03em", color: "var(--text-1)",
            }}>
              Compare all features
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}
          >
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 120px 120px 120px",
              background: "var(--surface-2)", borderBottom: "1px solid var(--border)",
              padding: "14px 28px", gap: 8,
            }}>
              <div style={{ color: "var(--text-3)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Feature</div>
              {["Free", "Pro", "Business"].map((label) => (
                <div key={label} style={{
                  textAlign: "center", fontSize: 13, fontWeight: 700,
                  color: label === "Pro" ? "var(--cyan)" : "var(--text-2)",
                }}>
                  {label}
                </div>
              ))}
            </div>

            {comparisonFeatures.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "grid", gridTemplateColumns: "1fr 120px 120px 120px",
                  padding: "14px 28px", gap: 8,
                  borderBottom: i < comparisonFeatures.length - 1 ? "1px solid var(--border)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <div style={{ color: "var(--text-2)", fontSize: 14 }}>{row.label}</div>
                {[row.free, row.pro, row.business].map((val, vi) => (
                  <div key={vi} style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {typeof val === "boolean" ? (
                      val ? <CheckIcon color={vi === 1 ? "var(--cyan)" : "var(--emerald)"} /> : <CrossIcon />
                    ) : (
                      <span style={{ fontSize: 13, color: vi === 1 ? "var(--cyan)" : "var(--text-2)", fontWeight: vi === 1 ? 600 : 400 }}>
                        {val}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Money Back */}
        <section style={{ padding: "0 24px 64px", maxWidth: 1000, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
              background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: "var(--radius-lg)", padding: "20px 32px", flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 28 }}>🛡️</span>
            <div>
              <div style={{ fontWeight: 700, color: "var(--emerald)", fontSize: 15 }}>30-Day Money-Back Guarantee</div>
              <div style={{ color: "var(--text-2)", fontSize: 14 }}>Not happy? Get a full refund within 30 days — no questions asked.</div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "0 24px 80px", maxWidth: 760, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>FAQ</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800,
              letterSpacing: "-0.03em", color: "var(--text-1)",
            }}>
              Pricing questions
            </motion.h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius)", overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", textAlign: "left", padding: "20px 24px",
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    gap: 16, fontFamily: "inherit",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-1)" }}>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: "var(--text-3)", fontSize: 22, flexShrink: 0, lineHeight: 1 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{
                        padding: "0 24px 20px",
                        color: "var(--text-2)", fontSize: 15, lineHeight: 1.75,
                        borderTop: "1px solid var(--border)",
                        paddingTop: 16,
                      }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enterprise CTA */}
        <section style={{ padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              maxWidth: 800, margin: "0 auto", textAlign: "center",
              background: "var(--surface)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "64px 48px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(6,239,255,0.06) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />
            <motion.div variants={fadeUp}>
              <SectionLabel>Enterprise</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800,
              letterSpacing: "-0.03em", color: "var(--text-1)", marginBottom: 16,
            }}>
              Need more than Business?
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              color: "var(--text-2)", fontSize: 17, lineHeight: 1.7,
              maxWidth: 520, margin: "0 auto 36px",
            }}>
              Custom conversation quotas, dedicated infrastructure, on-premise deployment,
              and a white-glove onboarding experience. Let's build something together.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--grad-btn)", color: "#000", fontWeight: 700,
                  padding: "14px 36px", borderRadius: "var(--radius)", fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Talk to sales
              </a>
              <a
                href="/demo"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.06)", border: "1px solid var(--border-2)",
                  color: "var(--text-1)", fontWeight: 600, padding: "14px 36px",
                  borderRadius: "var(--radius)", fontSize: 15, textDecoration: "none",
                }}
              >
                Book a demo
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}
