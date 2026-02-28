"use client";

import { motion, type Variants } from "framer-motion";
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
    icon: "🧠",
    title: "AI Training Engine",
    subtitle: "Train on any content in minutes",
    description:
      "Our proprietary ingestion pipeline processes your content and creates a semantic knowledge base that your AI chatbot draws from with pinpoint accuracy. No coding required.",
    points: [
      "Paste website URLs — we crawl and index automatically",
      "Upload PDF, DOCX, CSV, or plain-text documents",
      "Add custom Q&A pairs for precise control",
      "Sync your product catalog for real-time inventory answers",
    ],
    accent: "var(--cyan)",
    glowColor: "rgba(6,239,255,0.12)",
  },
  {
    icon: "⚡",
    title: "Multi-LLM Support",
    subtitle: "GPT-4o, Claude 3.5, Gemini 1.5 — you choose",
    description:
      "Never be locked into a single AI provider. Konvoq sits on top of every major model so you can pick the right brain for the right job — and switch on the fly.",
    points: [
      "Switch between models per chatbot or per conversation",
      "A/B test different LLMs to compare quality and cost",
      "Set monthly token budgets to keep spending predictable",
      "Automatic fallback routing if a provider goes down",
    ],
    accent: "var(--violet)",
    glowColor: "rgba(139,92,246,0.12)",
  },
  {
    icon: "🎨",
    title: "Widget Customization",
    subtitle: "Match your brand perfectly",
    description:
      "The chat widget is a seamless extension of your product — not an afterthought. Configure every visual detail through a live preview editor without touching a line of code.",
    points: [
      "Custom colors, fonts, and corner radius to match your design system",
      "Upload a branded avatar or use an AI-generated one",
      "Write your own welcome message and conversation starters",
      "Choose placement: bottom-right, bottom-left, or embedded inline",
    ],
    accent: "var(--rose)",
    glowColor: "rgba(244,63,94,0.12)",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    subtitle: "Know exactly what's working",
    description:
      "Turn every conversation into actionable intelligence. Our analytics suite surfaces the insights that actually drive decisions — not vanity metrics.",
    points: [
      "Conversation heatmaps showing peak engagement times",
      "Resolution rate tracking vs. human handoff rate",
      "Top unanswered questions to plug knowledge gaps fast",
      "Revenue attribution — see which chats convert to sales",
    ],
    accent: "var(--amber)",
    glowColor: "rgba(245,158,11,0.12)",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    subtitle: "Your whole team, one platform",
    description:
      "Konvoq bridges AI and human support so customers always get the help they need. Your team stays in the loop without switching between a dozen tools.",
    points: [
      "Shared inbox for seamless AI-to-human handoffs",
      "Internal notes and mentions to coordinate on tricky tickets",
      "Role-based access: Admin, Agent, and Viewer permissions",
      "Automated routing rules based on topic or customer tier",
    ],
    accent: "var(--emerald)",
    glowColor: "rgba(16,185,129,0.12)",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    subtitle: "SOC2 Type II, GDPR, HIPAA ready",
    description:
      "Security isn't a feature — it's the foundation. Konvoq is built from the ground up to satisfy the strictest compliance requirements across every major regulation.",
    points: [
      "End-to-end encryption in transit and at rest (AES-256)",
      "Data residency options: US, EU, or APAC regions",
      "Full audit log of every configuration change and conversation",
      "SSO via SAML 2.0 and SCIM provisioning for zero-friction onboarding",
    ],
    accent: "var(--cyan)",
    glowColor: "rgba(6,239,255,0.08)",
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

export default function FeaturesPage() {
  return (
    <PageLayout>
      {/* Aurora Blobs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-10%", width: 700, height: 700,
          background: "radial-gradient(circle, rgba(6,239,255,0.06) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "30%", right: "-15%", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "20%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 70%)",
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
              <a
                href="/signup"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--grad-btn)", color: "#000", fontWeight: 700,
                  padding: "14px 32px", borderRadius: "var(--radius)", fontSize: 15,
                  textDecoration: "none", letterSpacing: "-0.01em",
                }}
              >
                Start for free
              </a>
              <a
                href="/demo"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.06)", border: "1px solid var(--border-2)",
                  color: "var(--text-1)", fontWeight: 600, padding: "14px 32px",
                  borderRadius: "var(--radius)", fontSize: 15, textDecoration: "none",
                }}
              >
                Watch demo
              </a>
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
                      ? <span style={{ color: "var(--emerald)", fontSize: 18 }}>✓</span>
                      : <span style={{ color: "var(--text-3)", fontSize: 18 }}>✕</span>}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {row.konvoq
                      ? <span style={{ color: "var(--cyan)", fontSize: 18, fontWeight: 700 }}>✓</span>
                      : <span style={{ color: "var(--text-3)", fontSize: 18 }}>✕</span>}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {row.enterprise
                      ? <span style={{ color: "var(--emerald)", fontSize: 18 }}>✓</span>
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
              <a
                href="/signup"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "var(--grad-btn)", color: "#000", fontWeight: 700,
                  padding: "16px 40px", borderRadius: "var(--radius)", fontSize: 16,
                  textDecoration: "none",
                }}
              >
                Start free — no card needed
              </a>
              <a
                href="/pricing"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "rgba(255,255,255,0.06)", border: "1px solid var(--border-2)",
                  color: "var(--text-1)", fontWeight: 600, padding: "16px 40px",
                  borderRadius: "var(--radius)", fontSize: 16, textDecoration: "none",
                }}
              >
                View pricing
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}
