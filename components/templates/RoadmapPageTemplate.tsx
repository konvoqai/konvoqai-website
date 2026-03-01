"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

type Status = "shipped" | "in-progress" | "planned";

interface RoadmapItem {
  icon: string;
  title: string;
  description: string;
  votes: number;
  progress?: number;
}

const shipped: RoadmapItem[] = [
  {
    icon: "ðŸ§ ",
    title: "AI Training Engine v2",
    description: "Complete rewrite of the ingestion pipeline â€” 3x faster indexing and higher answer accuracy across all content types.",
    votes: 312,
  },
  {
    icon: "ðŸ“Š",
    title: "Advanced Analytics Dashboard",
    description: "Conversation heatmaps, resolution funnels, revenue attribution, and full CSV/PDF export for every panel.",
    votes: 287,
  },
  {
    icon: "ðŸ‘¥",
    title: "Team Collaboration & Shared Inbox",
    description: "Invite teammates, leave internal notes, @mention agents, and manage human handoffs from one unified inbox.",
    votes: 241,
  },
  {
    icon: "âš¡",
    title: "Multi-LLM Support",
    description: "Switch between GPT-4o, Claude 3.5, and Gemini 1.5 per chatbot with automatic fallback routing.",
    votes: 229,
  },
  {
    icon: "ðŸ”Œ",
    title: "Shopify & WooCommerce Integration",
    description: "Real-time product catalog sync so your chatbot can answer stock, pricing, and order status questions instantly.",
    votes: 198,
  },
  {
    icon: "ðŸŒ",
    title: "EU Data Residency",
    description: "All customer data stored exclusively in our Frankfurt region for GDPR compliance. Opt-in from your dashboard settings.",
    votes: 176,
  },
];

const inProgress: RoadmapItem[] = [
  {
    icon: "ðŸŽ™ï¸",
    title: "Voice Chat Support",
    description: "Real-time voice conversations powered by the same knowledge base as your text chatbot â€” for phone and web.",
    votes: 418,
    progress: 72,
  },
  {
    icon: "ðŸŒ",
    title: "WhatsApp Business Channel",
    description: "Deploy your AI chatbot directly on WhatsApp Business API. Supports rich messages, buttons, and media.",
    votes: 389,
    progress: 55,
  },
  {
    icon: "ðŸ¤–",
    title: "Agentic Actions",
    description: "Let your chatbot take actions â€” book appointments, create tickets, update CRM records â€” via function calling.",
    votes: 356,
    progress: 40,
  },
  {
    icon: "ðŸ“±",
    title: "Mobile SDK (iOS & Android)",
    description: "Native SDK to embed Konvoq into your mobile apps with full support for push notifications.",
    votes: 302,
    progress: 28,
  },
];

const planned: RoadmapItem[] = [
  {
    icon: "ðŸ§©",
    title: "Custom Workflow Builder",
    description: "A no-code flow builder to create branching conversation paths, conditional logic, and automated sequences.",
    votes: 534,
  },
  {
    icon: "ðŸ”",
    title: "Semantic Search Widget",
    description: "Add a knowledge-base search bar to your site that answers in natural language â€” no chat interface required.",
    votes: 467,
  },
  {
    icon: "ðŸ“§",
    title: "Email Support Channel",
    description: "Route incoming support emails through Konvoq AI for automated replies with human escalation on complex cases.",
    votes: 412,
  },
  {
    icon: "ðŸŽ¯",
    title: "Proactive Messaging",
    description: "Trigger chat messages based on user behavior â€” time on page, scroll depth, cart abandonment, and more.",
    votes: 378,
  },
  {
    icon: "ðŸŒ",
    title: "Auto-translation (50+ languages)",
    description: "Respond to users in their browser language automatically, while you author content in a single language.",
    votes: 344,
  },
  {
    icon: "ðŸ”",
    title: "On-Premise Deployment",
    description: "Run Konvoq entirely within your own cloud infrastructure for maximum data sovereignty.",
    votes: 289,
  },
];

const statusConfig = {
  shipped: {
    label: "Shipped",
    icon: "âœ“",
    headerBg: "rgba(16,185,129,0.08)",
    headerBorder: "rgba(16,185,129,0.2)",
    headerText: "var(--emerald)",
    glowColor: "rgba(16,185,129,0.08)",
    cardBorder: "rgba(16,185,129,0.12)",
    accentColor: "var(--emerald)",
    dotColor: "var(--emerald)",
  },
  "in-progress": {
    label: "In Progress",
    icon: "âŸ³",
    headerBg: "var(--accent-muted)",
    headerBorder: "rgba(91, 140, 255, 0.24)",
    headerText: "var(--accent)",
    glowColor: "var(--accent-muted)",
    cardBorder: "rgba(91, 140, 255, 0.18)",
    accentColor: "var(--accent)",
    dotColor: "var(--accent)",
  },
  planned: {
    label: "Planned",
    icon: "â—·",
    headerBg: "rgba(122, 162, 255, 0.12)",
    headerBorder: "rgba(122, 162, 255, 0.24)",
    headerText: "var(--accent-strong)",
    glowColor: "rgba(122, 162, 255, 0.09)",
    cardBorder: "rgba(122, 162, 255, 0.16)",
    accentColor: "var(--accent-strong)",
    dotColor: "var(--accent-strong)",
  },
};

function VoteButton({ votes, accent }: { votes: number; accent: string }) {
  const [voted, setVoted] = useState(false);
  const [count, setCount] = useState(votes);

  function handleVote() {
    if (!voted) {
      setVoted(true);
      setCount((c) => c + 1);
    } else {
      setVoted(false);
      setCount((c) => c - 1);
    }
  }

  return (
    <button
      onClick={handleVote}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: voted ? `${accent}18` : "rgba(255,255,255,0.04)",
        border: `1px solid ${voted ? accent + "44" : "var(--border)"}`,
        color: voted ? accent : "var(--text-3)",
        fontSize: 12, fontWeight: 600, padding: "5px 12px",
        borderRadius: 100, cursor: "pointer", fontFamily: "inherit",
        transition: "all 0.2s",
      }}
    >
      <span style={{ fontSize: 11 }}>â–²</span>
      {count}
    </button>
  );
}

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 6,
      }}>
        <span style={{ fontSize: 11, color: "var(--text-3)", fontWeight: 500 }}>Progress</span>
        <span style={{ fontSize: 11, color, fontWeight: 700 }}>{value}%</span>
      </div>
      <div style={{
        height: 4, background: "var(--surface-3)", borderRadius: 100, overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ height: "100%", background: `linear-gradient(to right, ${color}, ${color}88)`, borderRadius: 100 }}
        />
      </div>
    </div>
  );
}

function RoadmapCard({
  item,
  status,
}: {
  item: RoadmapItem;
  status: Status;
}) {
  const cfg = statusConfig[status];

  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.015 }}
      style={{
        background: "var(--surface)",
        border: `1px solid ${cfg.cardBorder}`,
        borderRadius: "var(--radius-lg)",
        padding: 24,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div style={{
        position: "absolute", top: -40, right: -40, width: 160, height: 160,
        background: `radial-gradient(circle, ${cfg.glowColor} 0%, transparent 70%)`,
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 28 }}>{item.icon}</div>
        <VoteButton votes={item.votes} accent={cfg.accentColor} />
      </div>

      <h3 style={{
        fontSize: 16, fontWeight: 700, color: "var(--text-1)",
        letterSpacing: "-0.01em", marginBottom: 8, lineHeight: 1.35,
      }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65 }}>
        {item.description}
      </p>

      {status === "in-progress" && item.progress !== undefined && (
        <ProgressBar value={item.progress} color={cfg.accentColor} />
      )}

      {status === "shipped" && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          marginTop: 14, fontSize: 12, color: cfg.accentColor, fontWeight: 600,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill={cfg.accentColor} fillOpacity="0.15" />
            <path d="M3.5 6l2 2L8.5 4" stroke={cfg.accentColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Shipped
        </div>
      )}
    </motion.div>
  );
}

export default function RoadmapPageTemplate() {
  const [requestText, setRequestText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (requestText.trim()) setSubmitted(true);
  }

  const columns: Array<{ status: Status; items: RoadmapItem[] }> = [
    { status: "shipped", items: shipped },
    { status: "in-progress", items: inProgress },
    { status: "planned", items: planned },
  ];

  return (
    <PageLayout>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-10%", left: "-5%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "-5%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(122, 162, 255, 0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "40%", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(91, 140, 255, 0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "100px 24px 80px" }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Product Roadmap</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800,
                letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 auto 20px", maxWidth: 700,
              }}
            >
              Where we're{" "}
              <span className="grad-text">headed</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 19, color: "var(--text-2)", maxWidth: 500,
                margin: "0 auto 24px", lineHeight: 1.7,
              }}
            >
              Vote on features you want, track what's in progress, and see what we've already shipped.
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}
            >
              {columns.map(({ status, items }) => {
                const cfg = statusConfig[status];
                return (
                  <div key={status} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "8px 16px", borderRadius: 100,
                    background: cfg.headerBg, border: `1px solid ${cfg.headerBorder}`,
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: cfg.accentColor,
                    }} />
                    <span style={{ fontSize: 13, color: cfg.headerText, fontWeight: 600 }}>
                      {cfg.label}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-3)" }}>
                      {items.length}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* Kanban Board */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}>
            {columns.map(({ status, items }) => {
              const cfg = statusConfig[status];
              return (
                <div key={status}>
                  {/* Column Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "12px 16px", marginBottom: 20,
                      background: cfg.headerBg, border: `1px solid ${cfg.headerBorder}`,
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <span style={{ fontSize: 16, color: cfg.headerText, fontWeight: 700, lineHeight: 1 }}>
                      {cfg.icon}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: cfg.headerText }}>
                      {cfg.label}
                    </span>
                    <span style={{
                      marginLeft: "auto", fontSize: 12, fontWeight: 700,
                      background: cfg.headerBg, border: `1px solid ${cfg.headerBorder}`,
                      color: cfg.headerText, padding: "2px 8px", borderRadius: 100,
                    }}>
                      {items.length}
                    </span>
                  </motion.div>

                  {/* Cards */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={staggerContainer}
                    style={{ display: "flex", flexDirection: "column", gap: 16 }}
                  >
                    {items.map((item) => (
                      <RoadmapCard key={item.title} item={item} status={status} />
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Feature Request CTA */}
        <section style={{ padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              maxWidth: 680, margin: "0 auto", textAlign: "center",
              background: "var(--surface)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "64px 48px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(122, 162, 255, 0.1) 0%, transparent 60%)",
              pointerEvents: "none",
            }} />

            <motion.div variants={fadeUp} style={{ fontSize: 44, marginBottom: 16 }}>ðŸ’¡</motion.div>
            <motion.div variants={fadeUp}>
              <SectionLabel>Feature Requests</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800,
              letterSpacing: "-0.02em", color: "var(--text-1)", marginBottom: 14,
            }}>
              Missing something?
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              color: "var(--text-2)", fontSize: 15, lineHeight: 1.7,
              maxWidth: 480, margin: "0 auto 32px",
            }}>
              Tell us what you'd like to see in Konvoq. The most-requested features go straight to the top of our backlog.
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
                Thanks! Your request has been added to our backlog.
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 480, margin: "0 auto" }}
              >
                <textarea
                  value={requestText}
                  onChange={(e) => setRequestText(e.target.value)}
                  placeholder="Describe the feature you'd like to see..."
                  required
                  rows={3}
                  style={{
                    width: "100%", padding: "14px 16px",
                    background: "var(--surface-2)", border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius)", color: "var(--text-1)", fontSize: 15,
                    fontFamily: "inherit", outline: "none", resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "13px 24px", background: "var(--grad-btn)",
                    color: "#000", fontWeight: 700, fontSize: 15,
                    border: "none", borderRadius: "var(--radius)", cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Submit feature request
                </button>
              </motion.form>
            )}

            <motion.p variants={fadeUp} style={{
              marginTop: 20, fontSize: 13, color: "var(--text-3)",
            }}>
              Or <a href="mailto:hello@konvoq.ai" style={{ color: "var(--accent)", textDecoration: "none" }}>email us directly</a> â€” we read every message.
            </motion.p>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}


