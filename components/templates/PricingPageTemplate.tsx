"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, type Variants } from "framer-motion";
import Button from "@/components/atoms/Button";
import SectionHeader from "@/components/molecules/SectionHeader";
import PageLayout from "@/components/templates/MarketingPageTemplate";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For early teams validating an AI support workflow.",
    cta: "Start free",
    ctaHref: "/signup",
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
    ctaHref: "/signup",
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
    ctaHref: "/contact",
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

// Directional entry — each plan slides from a unique direction
const cardInitialX = [-24, 0, 24];
const cardInitialY = [0, 28, 0];

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

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        background: featured ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface-2) 80%, transparent)",
        border: `1px solid ${featured ? "rgba(91, 140, 255, 0.28)" : "color-mix(in srgb, var(--border) 80%, transparent)"}`,
        color: featured ? "var(--accent)" : "var(--text-2)",
        fontSize: 11,
        fontWeight: 800,
      }}
    >
      ✓
    </div>
  );
}

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
      {enabled ? "+" : "−"}
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
            background: "radial-gradient(circle at 50% 0%, rgba(91, 140, 255, 0.13), transparent 36%)",
            maskImage: "linear-gradient(180deg, black 0%, transparent 72%)",
          }}
        />

        {/* Header */}
        <section style={{ padding: "48px 24px 44px" }}>
          <div className="site-container">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  badge="Pricing"
                  heading={<>Simple pricing with room to scale operationally.</>}
                  description="A neutral, procurement-friendly pricing model with generous entry points, clear upgrade paths, and enterprise options when security requirements get heavier."
                />
              </motion.div>

              {/* Billing toggle — animated sliding pill */}
              <motion.div
                variants={fadeUp}
                style={{ marginTop: 32, display: "flex", justifyContent: "center" }}
              >
                <LayoutGroup>
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
                    {(["Monthly", "Annual"] as const).map((label) => {
                      const isActive = (label === "Annual") === annual;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setAnnual(label === "Annual")}
                          style={{
                            position: "relative",
                            padding: "10px 22px",
                            borderRadius: 999,
                            border: 0,
                            background: "transparent",
                            cursor: "pointer",
                            color: isActive ? "var(--text-1)" : "var(--text-3)",
                            fontWeight: 700,
                            fontSize: 14,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="billing-pill"
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
                          <span style={{ position: "relative" }}>{label}</span>
                        </button>
                      );
                    })}
                    <div
                      style={{
                        padding: "9px 14px",
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
                </LayoutGroup>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing cards */}
        <section style={{ padding: "0 24px 40px" }}>
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 18,
                alignItems: "start",
              }}
            >
              {plans.map((plan, index) => {
                const price = annual ? plan.annualPrice : plan.monthlyPrice;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, x: cardInitialX[index], y: cardInitialY[index] }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: plan.featured ? -8 : -4 }}
                    style={{
                      position: "relative",
                      padding: plan.featured ? "32px 28px 28px" : "28px",
                      borderRadius: "var(--radius-lg)",
                      background: plan.featured
                        ? "linear-gradient(160deg, color-mix(in srgb, var(--accent-muted) 90%, var(--panel-strong) 10%) 0%, var(--panel-strong) 100%)"
                        : "color-mix(in srgb, var(--surface) 72%, transparent)",
                      border: plan.featured
                        ? "1px solid rgba(91, 140, 255, 0.32)"
                        : "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                      boxShadow: plan.featured
                        ? "var(--shadow-card), 0 0 0 1px rgba(91, 140, 255, 0.18), 0 0 60px rgba(91, 140, 255, 0.1)"
                        : "var(--shadow-card)",
                      overflow: "hidden",
                      // Featured card sits slightly higher
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

                    {/* Featured: radial glow at top */}
                    {plan.featured && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          background: "radial-gradient(ellipse at top, rgba(91, 140, 255, 0.16), transparent 48%)",
                        }}
                      />
                    )}

                    <div style={{ position: "relative" }}>
                      {/* Plan name + badge row */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 20,
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
                              padding: "6px 12px",
                              borderRadius: 999,
                              background: "color-mix(in srgb, var(--accent-muted) 80%, transparent)",
                              border: "1px solid rgba(91, 140, 255, 0.28)",
                              color: "var(--accent)",
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            Most popular
                          </div>
                        )}
                      </div>

                      {/* Price */}
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`${plan.name}-${annual ? "annual" : "monthly"}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.18 }}
                              style={{
                                fontSize: 52,
                                lineHeight: 0.92,
                                letterSpacing: "-0.06em",
                                fontWeight: 800,
                              }}
                            >
                              ${price}
                            </motion.span>
                          </AnimatePresence>
                          <span style={{ color: "var(--text-3)", fontSize: 14 }}>
                            {price === 0 ? "forever" : "/ mo"}
                          </span>
                        </div>
                        {annual && price > 0 && (
                          <div style={{ fontSize: 12, color: "var(--text-3)" }}>
                            billed annually · ${plan.monthlyPrice}/mo monthly
                          </div>
                        )}
                      </div>

                      <p style={{ margin: "0 0 22px", color: "var(--text-2)", lineHeight: 1.68, fontSize: 14 }}>
                        {plan.description}
                      </p>

                      <div style={{ marginBottom: 24 }}>
                        <Button
                          href={plan.ctaHref}
                          variant={plan.variant}
                          size="lg"
                          style={{ width: "100%" }}
                        >
                          {plan.cta}
                        </Button>
                      </div>

                      {/* Feature list */}
                      <div
                        style={{
                          paddingTop: 20,
                          borderTop: `1px solid ${plan.featured ? "rgba(91,140,255,0.18)" : "color-mix(in srgb, var(--border) 70%, transparent)"}`,
                          display: "grid",
                          gap: 12,
                        }}
                      >
                        {plan.highlights.map((item) => (
                          <div
                            key={item}
                            style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-2)" }}
                          >
                            <CheckIcon featured={plan.featured} />
                            <span style={{ fontSize: 14, lineHeight: 1.4 }}>{item}</span>
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

        {/* Enterprise readiness */}
        <section style={{ padding: "0 24px 40px" }}>
          <div className="site-container">
            <motion.div
              className="section-frame"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{
                padding: 28,
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 24,
                overflow: "hidden",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    marginBottom: 14,
                  }}
                >
                  Enterprise readiness
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 28, letterSpacing: "-0.04em", fontWeight: 760, lineHeight: 1.08 }}>
                  Structured for finance, IT, and security teams.
                </h3>
                <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72, fontSize: 15 }}>
                  Contracts, procurement reviews, security questionnaires, and usage ramp plans are supported without pushing teams into a bloated custom package too early.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 10,
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
                    className="section-surface"
                    style={{ padding: 18 }}
                  >
                    <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 6 }}>{value}</div>
                    <div style={{ color: "var(--text-2)", fontSize: 13 }}>{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison table */}
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
            <motion.div
              className="section-frame"
              initial={{ opacity: 0, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr repeat(3, minmax(0, 0.7fr))",
                  padding: "18px 24px",
                  gap: 12,
                  borderBottom: "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                  background: "color-mix(in srgb, var(--surface-2) 60%, transparent)",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                  Capability
                </div>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: plan.featured ? "var(--accent)" : "var(--text-1)",
                    }}
                  >
                    {plan.name}
                    {plan.featured && (
                      <div style={{ fontSize: 10, color: "var(--accent)", opacity: 0.7, fontWeight: 600, marginTop: 2 }}>
                        Popular
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {comparisonRows.map((row, index) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.34, delay: index * 0.04, ease: "easeOut" }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr repeat(3, minmax(0, 0.7fr))",
                    padding: "17px 24px",
                    gap: 12,
                    borderBottom: index === comparisonRows.length - 1 ? 0 : "1px solid color-mix(in srgb, var(--border) 55%, transparent)",
                  }}
                >
                  <div style={{ color: "var(--text-2)", fontSize: 14 }}>{row.label}</div>
                  {[row.starter, row.growth, row.scale].map((value, cellIndex) => (
                    <div key={cellIndex} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      {typeof value === "boolean" ? (
                        <StatusIcon enabled={value} />
                      ) : (
                        <span
                          style={{
                            color: cellIndex === 1 ? "var(--accent)" : "var(--text-1)",
                            fontWeight: cellIndex === 1 ? 700 : 500,
                            fontSize: 14,
                          }}
                        >
                          {value}
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section style={{ padding: "0 24px 88px" }}>
          <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 18 }}>

            {/* FAQ accordion */}
            <motion.div
              className="section-frame"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: 28 }}
            >
              <SectionHeader
                badge="FAQ"
                align="left"
                heading={<>Questions teams usually ask before procurement starts.</>}
                description="Short answers now. Deeper security and architecture reviews later."
                style={{ margin: 0, maxWidth: "100%" }}
              />
              <div style={{ display: "grid", gap: 10, marginTop: 26 }}>
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="section-surface"
                    style={{ overflow: "hidden" }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "16px 18px",
                        border: 0,
                        background: "transparent",
                        color: "var(--text-1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: 1.4,
                      }}
                    >
                      <span>{faq.question}</span>
                      <motion.span
                        animate={{ rotate: openFaq === index ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.6 }}
                        style={{ display: "inline-block", color: "var(--text-3)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}
                      >
                        ›
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            style={{
                              padding: "0 18px 18px",
                              color: "var(--text-2)",
                              lineHeight: 1.72,
                              fontSize: 14,
                              borderTop: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
                              paddingTop: 14,
                              marginTop: 0,
                            }}
                          >
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Custom plans CTA */}
            <motion.div
              className="section-frame"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.48, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 28, overflow: "hidden", position: "relative" }}
            >
              {/* Subtle accent glow */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at bottom right, rgba(91, 140, 255, 0.1), transparent 56%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "inline-flex",
                    padding: "7px 13px",
                    borderRadius: 999,
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(91, 140, 255, 0.26)",
                    color: "var(--accent)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 18,
                  }}
                >
                  Custom plans
                </div>
                <h3
                  style={{
                    margin: "0 0 14px",
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    letterSpacing: "-0.04em",
                    fontWeight: 760,
                    lineHeight: 1.08,
                  }}
                >
                  Need higher throughput, dedicated infrastructure, or commercial flexibility?
                </h3>
                <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72, fontSize: 15 }}>
                  We support multi-region deployments, security reviews, custom quotas, procurement workflows, and launch planning for larger enterprise rollouts.
                </p>

                {/* Trust signals */}
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "No bloated enterprise package required to start",
                    "Contract and procurement review support included",
                    "Launch planning and rollout guidance available",
                  ].map((point) => (
                    <div key={point} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 999,
                          background: "var(--accent)",
                          flexShrink: 0,
                          opacity: 0.7,
                        }}
                      />
                      <span style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.5 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative" }}>
                <Button href="/contact" size="lg">Talk to sales</Button>
                <Button href="/demo" variant="secondary" size="lg">Book a walkthrough</Button>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </PageLayout>
  );
}
