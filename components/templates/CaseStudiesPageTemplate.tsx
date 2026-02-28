"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/templates/MarketingPageTemplate";

// ─── Reusable helpers ────────────────────────────────────────────────────────

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
        textTransform: "uppercase",
        color: "var(--text-2)",
        marginBottom: 24,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          background: "var(--grad-aurora)",
          borderRadius: "50%",
        }}
      />
      {children}
    </div>
  );
}

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const industries = ["All", "E-commerce", "SaaS", "Healthcare", "Education", "Legal"];

const caseStudies = [
  {
    company: "ShopEasy",
    logo: "🛍️",
    industry: "E-commerce",
    headline: "70% reduction in support tickets within 30 days of deployment",
    description:
      "ShopEasy was drowning in order-status, return, and shipping queries. After deploying Konvoq, 70% of those tickets vanished overnight — handled instantly by AI.",
    metrics: [
      { label: "Ticket Reduction", value: "70%" },
      { label: "CSAT Score", value: "4.8/5" },
      { label: "Response Time", value: "< 2s" },
    ],
    color: "var(--cyan)",
    bg: "rgba(6,239,255,0.06)",
    border: "rgba(6,239,255,0.15)",
    gradient: "linear-gradient(135deg, rgba(6,239,255,0.1), rgba(6,239,255,0.02))",
  },
  {
    company: "HealthFirst",
    logo: "🏥",
    industry: "Healthcare",
    headline: "89% of patient queries resolved without human intervention",
    description:
      "HealthFirst needed HIPAA-compliant AI that could handle appointment scheduling, lab result questions, and insurance FAQs at 3am. Konvoq delivered.",
    metrics: [
      { label: "Resolution Rate", value: "89%" },
      { label: "After-hours Coverage", value: "100%" },
      { label: "Patient Satisfaction", value: "4.9/5" },
    ],
    color: "var(--emerald)",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02))",
  },
  {
    company: "EduLearn",
    logo: "🎓",
    industry: "Education",
    headline: "5x increase in student engagement with personalized AI tutoring",
    description:
      "EduLearn embedded Konvoq into their learning platform to answer curriculum questions 24/7. Students now spend more time learning and less time waiting.",
    metrics: [
      { label: "Engagement Increase", value: "5x" },
      { label: "Avg Response Time", value: "1.2s" },
      { label: "Student NPS", value: "+72" },
    ],
    color: "var(--violet)",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.02))",
  },
  {
    company: "CloudHost",
    logo: "☁️",
    industry: "SaaS",
    headline: "$2M saved in annual support costs by scaling AI to handle tier-1",
    description:
      "CloudHost replaced their entire tier-1 support team with Konvoq AI. Human agents now focus exclusively on complex tier-2 and tier-3 incidents.",
    metrics: [
      { label: "Annual Savings", value: "$2M" },
      { label: "Tier-1 Auto-resolved", value: "96%" },
      { label: "Team Redirected", value: "14 FTE" },
    ],
    color: "var(--amber)",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))",
  },
  {
    company: "LegalEase",
    logo: "⚖️",
    industry: "Legal",
    headline: "24/7 client intake automation — never miss a lead again",
    description:
      "LegalEase automated client intake, initial case triage, and document collection with Konvoq. They now capture 3x more qualified leads after business hours.",
    metrics: [
      { label: "After-hours Leads", value: "3x" },
      { label: "Intake Time", value: "-80%" },
      { label: "Client Rating", value: "4.7/5" },
    ],
    color: "var(--rose)",
    bg: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.15)",
    gradient: "linear-gradient(135deg, rgba(244,63,94,0.1), rgba(244,63,94,0.02))",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function CaseStudiesPageTemplate() {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered =
    activeIndustry === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === activeIndustry);

  return (
    <PageLayout>
      {/* Background ambient glows */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Case Studies</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 20,
                color: "var(--text-1)",
              }}
            >
              Real results from{" "}
              <span className="grad-text">real businesses</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
              }}
            >
              See how companies across every industry are transforming their
              customer support with Konvoq AI.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Metric Callouts ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                value: "94%",
                label: "avg resolution rate",
                sublabel: "across all customers",
                color: "var(--emerald)",
                bg: "rgba(16,185,129,0.08)",
                border: "rgba(16,185,129,0.2)",
              },
              {
                value: "67%",
                label: "ticket reduction",
                sublabel: "median within 60 days",
                color: "var(--cyan)",
                bg: "rgba(6,239,255,0.08)",
                border: "rgba(6,239,255,0.2)",
              },
              {
                value: "3x",
                label: "faster response time",
                sublabel: "vs human-only teams",
                color: "var(--violet)",
                bg: "rgba(139,92,246,0.08)",
                border: "rgba(139,92,246,0.2)",
              },
            ].map((m) => (
              <motion.div
                key={m.value}
                variants={scaleIn}
                style={{
                  background: m.bg,
                  border: `1px solid ${m.border}`,
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
                    fontWeight: 900,
                    color: m.color,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-1)", marginBottom: 4 }}>
                  {m.label}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>{m.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Featured Case Study ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 60px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "linear-gradient(135deg, rgba(6,239,255,0.07) 0%, rgba(139,92,246,0.07) 60%, rgba(244,63,94,0.05) 100%)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-xl)",
                padding: "52px 52px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Decorative bg emoji */}
              <div
                style={{
                  position: "absolute",
                  right: 48,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: 160,
                  opacity: 0.06,
                  userSelect: "none",
                }}
              >
                🏢
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#000",
                      background: "var(--grad-btn)",
                      borderRadius: 100,
                      padding: "4px 12px",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--cyan)",
                      background: "rgba(6,239,255,0.1)",
                      border: "1px solid rgba(6,239,255,0.2)",
                      borderRadius: 100,
                      padding: "4px 12px",
                    }}
                  >
                    SaaS
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "var(--radius)",
                      background: "rgba(6,239,255,0.1)",
                      border: "1px solid rgba(6,239,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                    }}
                  >
                    🏗️
                  </div>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-1)" }}>
                      TechCorp
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>
                      Enterprise Software · 850 employees
                    </div>
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    color: "var(--text-1)",
                    marginBottom: 16,
                    maxWidth: 620,
                  }}
                >
                  How TechCorp Cut Support Costs by 60% in 30 Days
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                    maxWidth: 580,
                    marginBottom: 32,
                  }}
                >
                  TechCorp was spending $4.2M annually on customer support. After deploying Konvoq
                  across all product tiers, their AI now handles 94% of tier-1 queries autonomously,
                  reducing costs by 60% while improving CSAT from 3.8 to 4.7.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, auto)",
                    gap: 32,
                    marginBottom: 32,
                    width: "fit-content",
                  }}
                >
                  {[
                    { label: "Cost Reduction", value: "60%" },
                    { label: "Resolution Rate", value: "94%" },
                    { label: "CSAT Improvement", value: "+0.9" },
                    { label: "Annual Savings", value: "$2.5M" },
                  ].map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                          fontWeight: 900,
                          color: "var(--cyan)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          marginBottom: 4,
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "var(--grad-btn)",
                    border: "none",
                    borderRadius: "var(--radius)",
                    padding: "13px 26px",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "#000",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Read Full Case Study →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Industry Filter ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 36px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            {industries.map((ind) => (
              <motion.button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background:
                    activeIndustry === ind ? "var(--grad-btn)" : "var(--surface-2)",
                  border:
                    activeIndustry === ind ? "none" : "1px solid var(--border-2)",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: activeIndustry === ind ? "#000" : "var(--text-2)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
              >
                {ind}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ── Case Study Cards Grid ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {filtered.map((cs) => (
              <motion.article
                key={cs.company}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 26px",
                  cursor: "pointer",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cs.border;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {/* Top band */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: cs.gradient,
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "var(--radius)",
                        background: cs.bg,
                        border: `1px solid ${cs.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                      }}
                    >
                      {cs.logo}
                    </div>
                    <div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-1)" }}>
                        {cs.company}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: cs.color,
                        }}
                      >
                        {cs.industry}
                      </div>
                    </div>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: "var(--text-1)",
                    marginBottom: 12,
                  }}
                >
                  {cs.headline}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-2)",
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}
                >
                  {cs.description}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "flex",
                    gap: 0,
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    marginBottom: 20,
                  }}
                >
                  {cs.metrics.map((m, i) => (
                    <div
                      key={m.label}
                      style={{
                        flex: 1,
                        padding: "12px 4px",
                        textAlign: "center",
                        borderRight: i < cs.metrics.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          color: cs.color,
                          lineHeight: 1,
                          marginBottom: 4,
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-3)", lineHeight: 1.3 }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: cs.color,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                  }}
                >
                  Read Case Study →
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)" }}
            >
              No case studies in this category yet.
            </motion.div>
          )}
        </section>

        {/* ── Bottom CTA ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(6,239,255,0.08) 100%)",
              border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)",
              padding: "64px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.1) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🏆</div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                  marginBottom: 16,
                }}
              >
                Want to be our next case study?
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-2)",
                  maxWidth: 460,
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                Join hundreds of businesses already transforming their support
                with Konvoq. Start free — no credit card required.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <motion.a
                  href="https://app.konvoq.ai"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "var(--grad-btn)",
                    borderRadius: "var(--radius)",
                    padding: "14px 28px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#000",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Start Free Trial →
                </motion.a>
                <motion.a
                  href="/pricing"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius)",
                    padding: "14px 28px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-1)",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View Pricing
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}

