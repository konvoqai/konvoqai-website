"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/atoms/Button";
import PageLayout from "@/components/templates/MarketingPageTemplate";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "var(--surface-3)", border: "1px solid var(--border-2)",
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
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const features = [
  {
    icon: "AI",
    title: "AI Training Engine",
    subtitle: "Train on any content in minutes",
    description:
      "Our ingestion pipeline processes your content and creates a semantic knowledge base that your AI chatbot can use with far better accuracy and control.",
    points: [
      "Paste website URLs and crawl them automatically",
      "Upload PDF, DOCX, CSV, or plain-text documents",
      "Add custom Q and A pairs for precise control",
      "Sync your product catalog for real-time answers",
    ],
    accent: "var(--accent)",
    glowColor: "var(--accent-muted)",
  },
  {
    icon: "LLM",
    title: "Multi-LLM Support",
    subtitle: "GPT-4o, Claude, Gemini, and more",
    description:
      "Konvoq sits on top of major model providers so you can choose the right model for the job and switch without rebuilding the product layer.",
    points: [
      "Switch models per chatbot or per workflow",
      "Compare quality and cost across providers",
      "Set monthly token budgets to control spend",
      "Use fallback routing if a provider goes down",
    ],
    accent: "var(--accent-strong)",
    glowColor: "var(--accent-muted)",
  },
  {
    icon: "UI",
    title: "Widget Customization",
    subtitle: "Match your brand cleanly",
    description:
      "The chat widget should feel native to your product, not bolted on later. Configure tone, framing, and visual details without touching code.",
    points: [
      "Tune colors, fonts, and radius to match your system",
      "Upload a branded avatar or use a generated one",
      "Write your own welcome message and starter prompts",
      "Choose placement on site, docs, or product surfaces",
    ],
    accent: "var(--text-1)",
    glowColor: "var(--accent-muted)",
  },
  {
    icon: "AN",
    title: "Advanced Analytics",
    subtitle: "Know exactly what is working",
    description:
      "Turn every conversation into useful operational insight. Surface the questions, resolution patterns, and revenue signals that actually change decisions.",
    points: [
      "Track engagement windows and conversation volume",
      "Measure resolution versus human handoff rate",
      "Find unanswered questions to close knowledge gaps",
      "Attribute qualified conversations to pipeline impact",
    ],
    accent: "var(--text-1)",
    glowColor: "var(--accent-muted)",
  },
  {
    icon: "TM",
    title: "Team Collaboration",
    subtitle: "One platform for AI and humans",
    description:
      "Konvoq connects automation and people so customers always get the right level of help without your team switching between disconnected tools.",
    points: [
      "Shared inbox for AI-to-human handoffs",
      "Internal notes and mentions for tricky tickets",
      "Role-based access for admins, agents, and viewers",
      "Routing rules based on topic or customer tier",
    ],
    accent: "var(--text-1)",
    glowColor: "var(--accent-muted)",
  },
  {
    icon: "SEC",
    title: "Enterprise Security",
    subtitle: "SOC2 Type II, GDPR, HIPAA ready",
    description:
      "Security is the foundation. Konvoq is designed to satisfy strict compliance requirements while keeping rollout and administration simple.",
    points: [
      "End-to-end encryption in transit and at rest",
      "Regional data residency options",
      "Full audit log of configuration and conversation activity",
      "SSO via SAML and SCIM provisioning support",
    ],
    accent: "var(--accent)",
    glowColor: "var(--accent-muted)",
  },
];
const comparisonData = [
  { feature: "Custom AI Training", konvoq: true, basic: false, enterprise: true },
  { feature: "Multi-LLM Switching", konvoq: true, basic: false, enterprise: true },
  { feature: "Widget Customization", konvoq: true, basic: true, enterprise: true },
  { feature: "Conversation Analytics", konvoq: true, basic: false, enterprise: true },
  { feature: "Human Handoff", konvoq: true, basic: false, enterprise: true },
  { feature: "SOC2 / HIPAA / GDPR", konvoq: true, basic: false, enterprise: true },
  { feature: "Unlimited Sources", konvoq: true, basic: false, enterprise: true },
  { feature: "API Access", konvoq: true, basic: false, enterprise: true },
];

export default function FeaturesPageTemplate() {
  return (
    <PageLayout>
      {/* Aurora Blobs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-10%", width: 700, height: 700,
          background: "radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "30%", right: "-15%", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(0, 163, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "20%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(255, 196, 70, 0.07) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "100px 24px 80px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Platform Features</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 auto 24px",
                maxWidth: 840,
                letterSpacing: "-0.03em",
              }}
            >
              Every feature you need to{" "}
              <span className="grad-text">automate customer conversations</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 20,
                color: "var(--text-2)",
                maxWidth: 560,
                margin: "0 auto 48px",
                lineHeight: 1.7,
              }}
            >
              From AI training to enterprise security, Konvoq gives you the complete
              toolkit to deploy, manage, and scale AI chatbots that customers actually love.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/signup" variant="primary" size="lg">
                Start for free
              </Button>
              <Button href="/demo" variant="outline" size="lg">
                Watch demo
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Sections */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 * i }}
                whileHover={{ y: -4 }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Glow blob inside card */}
                <div style={{
                  position: "absolute", top: -60, right: -60, width: 300, height: 300,
                  background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 70%)`,
                  borderRadius: "50%", pointerEvents: "none",
                }} />

                <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap", position: "relative" }}>
                  {/* Left */}
                  <div style={{ flex: "1 1 340px" }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: "var(--radius)",
                      background: `${feature.glowColor}`, border: `1px solid ${feature.accent}33`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 28, marginBottom: 20,
                    }}>
                      {feature.icon}
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: feature.accent, marginBottom: 8,
                    }}>
                      {feature.subtitle}
                    </div>
                    <h2 style={{
                      fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em",
                      color: "var(--text-1)", marginBottom: 16, lineHeight: 1.25,
                    }}>
                      {feature.title}
                    </h2>
                    <p style={{ color: "var(--text-2)", lineHeight: 1.75, fontSize: 16 }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Right - points */}
                  <div style={{ flex: "1 1 300px" }}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                      style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}
                    >
                      {feature.points.map((point) => (
                        <motion.div
                          key={point}
                          variants={cardVariants}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                        >
                          <div style={{
                            width: 20, height: 20, borderRadius: "50%",
                            background: `${feature.glowColor}`,
                            border: `1px solid ${feature.accent}55`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0, marginTop: 2,
                          }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5L8 3" stroke={feature.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.65 }}>{point}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{ padding: "80px 24px", background: "var(--surface)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ textAlign: "center", marginBottom: 56 }}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>How We Compare</SectionLabel>
              </motion.div>
              <motion.h2 variants={fadeUp} style={{
                fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
                letterSpacing: "-0.03em", color: "var(--text-1)",
              }}>
                Built different — <span className="grad-text">built better</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              {/* Table Header */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 160px 160px 160px",
                background: "var(--surface-2)", borderBottom: "1px solid var(--border)",
                padding: "16px 28px",
              }}>
                <div style={{ color: "var(--text-3)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Feature</div>
                <div style={{ color: "var(--text-3)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Basic Tools</div>
                <div style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  textAlign: "center", background: "var(--grad-btn)", WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Konvoq AI</div>
                <div style={{ color: "var(--text-3)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Enterprise</div>
              </div>

              {comparisonData.map((row, i) => (
                <div
                  key={row.feature}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 160px 160px 160px",
                    padding: "16px 28px", borderBottom: i < comparisonData.length - 1 ? "1px solid var(--border)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                  }}
                >
                  <div style={{ color: "var(--text-2)", fontSize: 15 }}>{row.feature}</div>
                  <div style={{ textAlign: "center" }}>
                    {row.basic
                      ? <span style={{ color: "var(--warning)", fontSize: 18 }}>✓</span>
                      : <span style={{ color: "var(--text-3)", fontSize: 18 }}>✕</span>}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {row.konvoq
                      ? <span style={{ color: "var(--accent)", fontSize: 18, fontWeight: 700 }}>✓</span>
                      : <span style={{ color: "var(--text-3)", fontSize: 18 }}>✕</span>}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {row.enterprise
                      ? <span style={{ color: "var(--warning)", fontSize: 18 }}>✓</span>
                      : <span style={{ color: "var(--text-3)", fontSize: 18 }}>✕</span>}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 24px", textAlign: "center" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Get Started Today</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800,
              letterSpacing: "-0.03em", marginBottom: 20, color: "var(--text-1)",
            }}>
              Ready to automate your{" "}
              <span className="grad-text">customer support?</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              color: "var(--text-2)", fontSize: 18, maxWidth: 500,
              margin: "0 auto 40px", lineHeight: 1.7,
            }}>
              Join 2,400+ companies using Konvoq to handle support at scale. No credit card required.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/signup" variant="primary" size="lg">
                Start free - no card needed
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View pricing
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}







