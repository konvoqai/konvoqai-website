"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Button from "@/components/atoms/Button";
import SectionHeader from "@/components/molecules/SectionHeader";
import PageLayout from "@/components/templates/MarketingPageTemplate";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For early teams validating an AI support workflow.",
    cta: "Start free",
    variant: "outline" as const,
    featured: false,
    highlights: [
      "1 production chatbot",
      "250 conversations per month",
      "1 shared inbox seat",
      "Basic analytics and widget branding",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 79,
    annualPrice: 63,
    description: "For SaaS teams replacing repetitive support and qualification work.",
    cta: "Start 14-day trial",
    variant: "primary" as const,
    featured: true,
    highlights: [
      "5 production chatbots",
      "7,500 conversations per month",
      "Unlimited content sources",
      "Advanced routing and human handoff",
      "Analytics, API access, and custom branding",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    monthlyPrice: 249,
    annualPrice: 199,
    description: "For larger teams that need governance, security, and deeper collaboration.",
    cta: "Talk to sales",
    variant: "secondary" as const,
    featured: false,
    highlights: [
      "Unlimited chatbots",
      "50,000 conversations per month",
      "SSO, audit logs, and role controls",
      "Dedicated environments and custom domains",
      "SLA-backed support",
      "Security review and procurement support",
    ],
  },
];

const comparisonRows = [
  { label: "Chatbots", starter: "1", growth: "5", scale: "Unlimited" },
  { label: "Conversations / month", starter: "250", growth: "7,500", scale: "50,000" },
  { label: "Knowledge sources", starter: "1", growth: "Unlimited", scale: "Unlimited" },
  { label: "API access", starter: false, growth: true, scale: true },
  { label: "Custom branding", starter: false, growth: true, scale: true },
  { label: "Team collaboration", starter: false, growth: true, scale: true },
  { label: "SSO and audit logs", starter: false, growth: false, scale: true },
  { label: "Security review support", starter: false, growth: false, scale: true },
];

const faqs = [
  {
    question: "Can we change plans during the quarter?",
    answer:
      "Yes. Upgrades take effect immediately, and downgrades are scheduled for the next renewal so your team keeps uninterrupted access.",
  },
  {
    question: "What counts as a conversation?",
    answer:
      "A conversation is one end-user session with your assistant. Multiple messages inside the same session count as one conversation.",
  },
  {
    question: "Do you offer startup or annual discounts?",
    answer:
      "Annual billing includes a lower effective monthly price, and we offer startup pricing for eligible early-stage teams during onboarding.",
  },
  {
    question: "Can enterprise teams use dedicated infrastructure?",
    answer:
      "Yes. Scale plans can add dedicated environments, regional data residency, procurement support, and custom security controls.",
  },
];

function StatusIcon({ enabled }: { enabled: boolean }) {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        background: enabled ? "var(--accent-muted)" : "var(--surface-3)",
        border: `1px solid ${enabled ? "rgba(91, 140, 255, 0.24)" : "var(--border)"}`,
        color: enabled ? "var(--accent)" : "var(--text-3)",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {enabled ? "+" : "-"}
    </div>
  );
}

export default function PricingPageTemplate() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageLayout>
      <div style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 50% 0%, rgba(91, 140, 255, 0.12), transparent 34%)",
            maskImage: "linear-gradient(180deg, black 0%, transparent 78%)",
          }}
        />

        <section style={{ padding: "48px 24px 40px" }}>
          <div className="site-container">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  badge="Pricing"
                  heading={<>Simple pricing for teams that want to ship AI support with less friction.</>}
                  description="A neutral, procurement-friendly pricing model with generous entry points, clear upgrade paths, and enterprise options when security requirements get heavier."
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                style={{
                  marginTop: 28,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 999,
                    padding: 8,
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setAnnual(false)}
                    style={{
                      border: 0,
                      borderRadius: 999,
                      padding: "10px 16px",
                      background: annual ? "transparent" : "var(--background-elevated)",
                      color: annual ? "var(--text-2)" : "var(--text-1)",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnnual(true)}
                    style={{
                      border: 0,
                      borderRadius: 999,
                      padding: "10px 16px",
                      background: annual ? "var(--background-elevated)" : "transparent",
                      color: annual ? "var(--text-1)" : "var(--text-2)",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Annual
                  </button>
                  <div
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "var(--accent-muted)",
                      border: "1px solid rgba(91, 140, 255, 0.24)",
                      color: "var(--accent)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Save 20%
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: "0 24px 36px" }}>
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 20,
              }}
            >
              {plans.map((plan, index) => {
                const price = annual ? plan.annualPrice : plan.monthlyPrice;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    style={{
                      position: "relative",
                      padding: 28,
                      borderRadius: "var(--radius-lg)",
                      background: plan.featured
                        ? "linear-gradient(180deg, color-mix(in srgb, var(--accent-muted) 85%, var(--panel-strong) 15%) 0%, var(--panel-strong) 100%)"
                        : "var(--surface)",
                      border: plan.featured ? "1px solid rgba(91, 140, 255, 0.28)" : "1px solid var(--border)",
                      boxShadow: "var(--shadow-card)",
                      overflow: "hidden",
                    }}
                  >
                    {plan.featured && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          background:
                            "radial-gradient(circle at top, rgba(91, 140, 255, 0.18), transparent 42%)",
                        }}
                      />
                    )}
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 20,
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--text-3)",
                              marginBottom: 10,
                            }}
                          >
                            {plan.name}
                          </div>
                          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                            <AnimatePresence mode="wait">
                              <motion.span
                                key={`${plan.name}-${annual ? "annual" : "monthly"}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18 }}
                                style={{
                                  fontSize: 48,
                                  lineHeight: 0.95,
                                  letterSpacing: "-0.05em",
                                  fontWeight: 800,
                                }}
                              >
                                ${price}
                              </motion.span>
                            </AnimatePresence>
                            <span style={{ color: "var(--text-3)", fontSize: 14 }}>
                              {price === 0 ? "forever" : "/ month"}
                            </span>
                          </div>
                        </div>
                        {plan.featured && (
                          <div
                            style={{
                              padding: "8px 10px",
                              borderRadius: 14,
                              background: "var(--background-elevated)",
                              border: "1px solid rgba(91, 140, 255, 0.24)",
                              color: "var(--accent)",
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            Recommended
                          </div>
                        )}
                      </div>

                      <p style={{ margin: "0 0 24px", color: "var(--text-2)", lineHeight: 1.7 }}>
                        {plan.description}
                      </p>

                      <div style={{ marginBottom: 24 }}>
                        <Button href={plan.featured ? "/signup" : "/contact"} variant={plan.variant} size="lg" style={{ width: "100%" }}>
                          {plan.cta}
                        </Button>
                      </div>

                      <div style={{ display: "grid", gap: 12 }}>
                        {plan.highlights.map((item) => (
                          <div
                            key={item}
                            style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-2)" }}
                          >
                            <div
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: 999,
                                display: "grid",
                                placeItems: "center",
                                background: plan.featured ? "var(--accent-muted)" : "var(--surface-3)",
                                border: `1px solid ${plan.featured ? "rgba(91, 140, 255, 0.24)" : "var(--border)"}`,
                                color: plan.featured ? "var(--accent)" : "var(--text-1)",
                                fontSize: 11,
                                fontWeight: 700,
                              }}
                            >
                              ✓
                            </div>
                            <span style={{ fontSize: 14 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 40px" }}>
          <div className="site-container">
            <div
              className="section-frame"
              style={{
                padding: 24,
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    marginBottom: 14,
                  }}
                >
                  Enterprise readiness
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 28, letterSpacing: "-0.04em" }}>
                  Structured for finance, IT, and security teams.
                </h3>
                <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 560 }}>
                  Contracts, procurement reviews, security questionnaires, and usage ramp plans are supported without pushing teams into a bloated custom package too early.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 12,
                }}
              >
                {[
                  ["99.9%", "SLA available"],
                  ["SOC 2", "Documentation ready"],
                  ["EU / US", "Regional hosting"],
                  ["< 2 weeks", "Typical rollout"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    style={{
                      padding: 18,
                      borderRadius: "var(--radius)",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{value}</div>
                    <div style={{ color: "var(--text-2)", fontSize: 13 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 40px" }}>
          <div className="site-container">
            <div style={{ marginBottom: 24 }}>
              <SectionHeader
                badge="Compare"
                align="left"
                heading={<>A clear feature matrix, without feature-sprawl.</>}
                description="The product tiers map to team maturity, not arbitrary packaging tricks."
                style={{ margin: 0 }}
              />
            </div>
            <div className="section-frame" style={{ overflow: "hidden" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr repeat(3, minmax(0, 0.7fr))",
                  padding: "18px 22px",
                  gap: 12,
                  borderBottom: "1px solid var(--border)",
                  background: "var(--surface-2)",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}>
                  Capability
                </div>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    style={{ textAlign: "center", fontSize: 13, fontWeight: 700, color: plan.featured ? "var(--accent)" : "var(--text-1)" }}
                  >
                    {plan.name}
                  </div>
                ))}
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr repeat(3, minmax(0, 0.7fr))",
                    padding: "18px 22px",
                    gap: 12,
                    borderBottom: index === comparisonRows.length - 1 ? 0 : "1px solid var(--border)",
                    background: index % 2 === 0 ? "transparent" : "var(--surface-3)",
                  }}
                >
                  <div style={{ color: "var(--text-2)", fontSize: 14 }}>{row.label}</div>
                  {[row.starter, row.growth, row.scale].map((value, cellIndex) => (
                    <div key={cellIndex} style={{ display: "flex", justifyContent: "center" }}>
                      {typeof value === "boolean" ? (
                        <StatusIcon enabled={value} />
                      ) : (
                        <span style={{ color: cellIndex === 1 ? "var(--accent)" : "var(--text-1)", fontWeight: cellIndex === 1 ? 700 : 500, fontSize: 14 }}>
                          {value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 88px" }}>
          <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div className="section-frame" style={{ padding: 24 }}>
              <SectionHeader
                badge="FAQ"
                align="left"
                heading={<>Questions teams usually ask before procurement starts.</>}
                description="Short answers now. Deeper security and architecture reviews later."
                style={{ margin: 0, maxWidth: "100%" }}
              />
              <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    style={{
                      borderRadius: "var(--radius)",
                      border: "1px solid var(--border)",
                      background: openFaq === index ? "var(--surface-2)" : "var(--surface)",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "18px 18px 16px",
                        border: 0,
                        background: "transparent",
                        color: "var(--text-1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        cursor: "pointer",
                        fontWeight: 700,
                      }}
                    >
                      <span>{faq.question}</span>
                      <span style={{ color: "var(--text-3)", fontSize: 18 }}>{openFaq === index ? "-" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ padding: "0 18px 18px", color: "var(--text-2)", lineHeight: 1.7 }}>
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-frame" style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(91, 140, 255, 0.24)",
                    color: "var(--accent)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Custom plans
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 30, letterSpacing: "-0.04em" }}>
                  Need higher throughput, dedicated infrastructure, or commercial flexibility?
                </h3>
                <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72 }}>
                  We support multi-region deployments, security reviews, custom quotas, procurement workflows, and launch planning for larger enterprise rollouts.
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button href="/contact" size="lg">Talk to sales</Button>
                <Button href="/demo" variant="secondary" size="lg">Book a walkthrough</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}


