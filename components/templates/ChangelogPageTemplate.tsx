"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/templates/MarketingPageTemplate";

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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type BadgeType = "New Feature" | "Improvement" | "Bug Fix" | "Performance" | "Security";

interface Release {
  version: string;
  date: string;
  type: BadgeType;
  title: string;
  description: string;
  changes: string[];
}

const badgeColors: Record<BadgeType, { bg: string; border: string; text: string }> = {
  "New Feature": { bg: "rgba(6,239,255,0.1)", border: "rgba(6,239,255,0.3)", text: "var(--cyan)" },
  "Improvement": { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)", text: "var(--violet)" },
  "Bug Fix": { bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.3)", text: "var(--rose)" },
  "Performance": { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", text: "var(--amber)" },
  "Security": { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", text: "var(--emerald)" },
};

const releases: Release[] = [
  {
    version: "v2.4.0",
    date: "Feb 20, 2026",
    type: "New Feature",
    title: "Multi-LLM Routing & A/B Testing",
    description:
      "You can now run multiple LLM backends simultaneously and split traffic between them to compare quality, latency, and cost before committing to a model.",
    changes: [
      "Added LLM router: route by topic, user segment, or traffic split percentage",
      "A/B test dashboard shows side-by-side quality and cost metrics for each model",
      "Support for Claude 3.5 Sonnet added alongside GPT-4o and Gemini 1.5 Pro",
      "Automatic fallback to secondary model on provider timeout or rate limit",
      "Model-level spend caps to prevent budget surprises",
    ],
  },
  {
    version: "v2.3.2",
    date: "Feb 7, 2026",
    type: "Bug Fix",
    title: "Widget Rendering & Safari Fixes",
    description:
      "Addressed a batch of widget rendering issues reported by users on Safari 17 and iOS 18, plus several edge cases in the conversation state machine.",
    changes: [
      "Fixed chat widget flicker on Safari 17 caused by backdrop-filter repaints",
      "Resolved iOS keyboard pushing widget off-screen on mobile",
      "Fixed conversation context occasionally being dropped after 20+ message turns",
      "Corrected avatar image crop on high-DPI displays",
    ],
  },
  {
    version: "v2.3.0",
    date: "Jan 22, 2026",
    type: "New Feature",
    title: "Advanced Analytics Dashboard",
    description:
      "The analytics suite has been completely rebuilt. You now have access to conversation heatmaps, resolution funnels, revenue attribution, and exportable reports.",
    changes: [
      "Conversation heatmap: see engagement peaks by hour, day, and week",
      "Resolution funnel: track how many chats resolve vs. escalate vs. abandon",
      "Revenue attribution: connect resolved chats to downstream purchases via UTM params",
      "Top unanswered questions report — updated daily",
      "CSV and PDF export for all dashboard panels",
    ],
  },
  {
    version: "v2.2.1",
    date: "Jan 8, 2026",
    type: "Performance",
    title: "Response Latency Improvements",
    description:
      "Infrastructure and prompt optimizations that cut median first-token latency by 38% across all regions.",
    changes: [
      "Switched to streaming completions by default for all LLM providers",
      "Knowledge base lookup now uses approximate nearest-neighbor indexing (HNSW)",
      "CDN edge caching for static widget assets — load time down from 420ms to 90ms",
      "Reduced average context window size with smarter chunk ranking",
    ],
  },
  {
    version: "v2.2.0",
    date: "Dec 18, 2025",
    type: "New Feature",
    title: "Team Collaboration & Shared Inbox",
    description:
      "Pro and Business plan users can now invite team members, collaborate on escalated tickets, and manage human handoffs from a unified inbox.",
    changes: [
      "Shared inbox: all escalated conversations in one place for your team",
      "Internal notes: leave private comments on any conversation",
      "@mentions: notify teammates directly from the conversation thread",
      "Role-based access: Admin, Agent, and Viewer permissions",
      "Audit log: full history of who did what and when",
    ],
  },
  {
    version: "v2.1.0",
    date: "Nov 30, 2025",
    type: "Improvement",
    title: "Widget Customization v2",
    description:
      "The widget editor got a major overhaul with live preview, new layout options, and far more granular control over every visual element.",
    changes: [
      "Live preview panel — see changes in real-time as you edit",
      "Custom CSS injection for advanced brand consistency",
      "New launcher button styles: circle, pill, and custom image",
      "Conversation starter bubbles: up to 6 quick-reply prompts",
      "Multilingual welcome messages based on browser locale",
    ],
  },
  {
    version: "v2.0.0",
    date: "Oct 15, 2025",
    type: "New Feature",
    title: "Konvoq 2.0 — Complete Rebuild",
    description:
      "After months of work, Konvoq 2.0 ships with a new training engine, a redesigned dashboard, and the foundation for everything we're building next.",
    changes: [
      "New AI Training Engine with 3x faster ingestion and higher answer accuracy",
      "Completely redesigned dashboard — faster, cleaner, more powerful",
      "Webhook system for real-time event notifications to any endpoint",
      "Public API v2 with full OpenAPI spec and SDK libraries",
      "New pricing plans with higher limits and more flexibility",
    ],
  },
  {
    version: "v1.9.4",
    date: "Sep 2, 2025",
    type: "Security",
    title: "Security Hardening & SOC2 Prep",
    description:
      "A focused release on security hardening as we complete our SOC2 Type II audit, plus GDPR data residency controls for EU customers.",
    changes: [
      "EU data residency option — all data stored in Frankfurt region",
      "Session tokens now rotate on every API call (token refresh pattern)",
      "Added rate limiting to all public-facing API endpoints",
      "Dependency audit: updated 34 packages with known CVEs",
    ],
  },
];

function TypeBadge({ type }: { type: BadgeType }) {
  const style = badgeColors[type];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      background: style.bg, border: `1px solid ${style.border}`,
      color: style.text, fontSize: 11, fontWeight: 700,
      padding: "3px 10px", borderRadius: 100, letterSpacing: "0.06em",
      textTransform: "uppercase", whiteSpace: "nowrap",
    }}>
      {type}
    </span>
  );
}

export default function ChangelogPageTemplate() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <PageLayout>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400,
          background: "radial-gradient(ellipse, rgba(6,239,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "100px 24px 80px" }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Changelog</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
                letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 auto 20px", maxWidth: 640,
              }}
            >
              What's new in{" "}
              <span className="grad-text">Konvoq</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 18, color: "var(--text-2)", maxWidth: 480,
                margin: "0 auto", lineHeight: 1.7,
              }}
            >
              Every update, improvement, and fix — documented as it ships.
            </motion.p>
          </motion.div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "0 24px 80px", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            {/* Animated timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{
                position: "absolute", left: 140, top: 0, bottom: 0,
                width: 1, background: "linear-gradient(to bottom, var(--cyan), var(--violet), transparent)",
                transformOrigin: "top",
                opacity: 0.3,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {releases.map((release, i) => (
                <motion.div
                  key={release.version}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
                  style={{
                    display: "flex", gap: 0, alignItems: "flex-start",
                    paddingBottom: 56,
                  }}
                >
                  {/* Left: date + version */}
                  <div style={{
                    width: 130, flexShrink: 0, textAlign: "right",
                    paddingRight: 28, paddingTop: 6,
                  }}>
                    <div style={{ fontSize: 12, color: "var(--text-3)", fontWeight: 500, marginBottom: 4 }}>
                      {release.date}
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: "var(--text-3)",
                      letterSpacing: "0.06em",
                    }}>
                      {release.version}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div style={{
                    width: 22, flexShrink: 0, display: "flex",
                    flexDirection: "column", alignItems: "center", paddingTop: 6,
                  }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                      style={{
                        width: 12, height: 12, borderRadius: "50%",
                        background: "var(--grad-btn)",
                        boxShadow: "0 0 12px rgba(6,239,255,0.5)",
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Right: content */}
                  <div style={{ flex: 1, paddingLeft: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                      <TypeBadge type={release.type} />
                    </div>
                    <h2 style={{
                      fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em",
                      color: "var(--text-1)", marginBottom: 10, lineHeight: 1.3,
                    }}>
                      {release.title}
                    </h2>
                    <p style={{
                      color: "var(--text-2)", fontSize: 15, lineHeight: 1.7,
                      marginBottom: 20,
                    }}>
                      {release.description}
                    </p>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                      style={{
                        background: "var(--surface)", border: "1px solid var(--border)",
                        borderRadius: "var(--radius)", padding: "20px 24px",
                        display: "flex", flexDirection: "column", gap: 10,
                      }}
                    >
                      {release.changes.map((change) => (
                        <motion.div
                          key={change}
                          variants={fadeUp}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                        >
                          <div style={{
                            width: 5, height: 5, borderRadius: "50%",
                            background: "var(--text-3)", flexShrink: 0, marginTop: 8,
                          }} />
                          <span style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65 }}>
                            {change}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section style={{ padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              maxWidth: 600, margin: "0 auto", textAlign: "center",
              background: "var(--surface)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "56px 48px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(139,92,246,0.07) 0%, transparent 60%)",
              pointerEvents: "none",
            }} />
            <motion.div variants={fadeUp} style={{ fontSize: 40, marginBottom: 16 }}>📬</motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em",
              color: "var(--text-1)", marginBottom: 12,
            }}>
              Stay in the loop
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              color: "var(--text-2)", fontSize: 15, lineHeight: 1.7, marginBottom: 28,
            }}>
              Get a short email whenever we ship something new. No noise — only meaningful updates.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: "var(--radius)", padding: "16px 24px",
                  color: "var(--emerald)", fontWeight: 600, fontSize: 15,
                }}
              >
                You're subscribed! We'll be in touch.
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                style={{ display: "flex", gap: 12, maxWidth: 420, margin: "0 auto", flexWrap: "wrap" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  style={{
                    flex: 1, minWidth: 180, padding: "12px 16px",
                    background: "var(--surface-2)", border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius)", color: "var(--text-1)", fontSize: 15,
                    fontFamily: "inherit", outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 24px", background: "var(--grad-btn)",
                    color: "#000", fontWeight: 700, fontSize: 15,
                    border: "none", borderRadius: "var(--radius)", cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}

