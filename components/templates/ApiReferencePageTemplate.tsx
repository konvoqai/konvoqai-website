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

// ─── Data ────────────────────────────────────────────────────────────────────

const endpointCategories = [
  {
    icon: "🤖",
    title: "Chatbots",
    desc: "Create, update, delete, and configure chatbot instances. Set personalities, training data, and deployment targets.",
    methods: ["GET", "POST", "PUT", "DELETE"],
    endpoints: 8,
    color: "var(--cyan)",
    bg: "rgba(6,239,255,0.06)",
    border: "rgba(6,239,255,0.2)",
  },
  {
    icon: "💬",
    title: "Conversations",
    desc: "Query conversation history, export transcripts, access analytics, and filter by date, resolution status, or CSAT score.",
    methods: ["GET", "POST"],
    endpoints: 6,
    color: "var(--violet)",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: "📨",
    title: "Messages",
    desc: "Send messages programmatically, retrieve thread history, inject context into ongoing conversations in real time.",
    methods: ["GET", "POST"],
    endpoints: 5,
    color: "var(--emerald)",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: "🔔",
    title: "Webhooks",
    desc: "Subscribe to real-time event notifications — new conversations, resolved tickets, escalations, and CSAT submissions.",
    methods: ["GET", "POST", "DELETE"],
    endpoints: 4,
    color: "var(--amber)",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.2)",
  },
];

const rateLimits = [
  {
    plan: "Free",
    limit: "100 / hr",
    monthly: "3,000 / mo",
    color: "var(--text-2)",
    bg: "var(--surface-3)",
    border: "var(--border)",
  },
  {
    plan: "Pro",
    limit: "10,000 / hr",
    monthly: "720,000 / mo",
    color: "var(--violet)",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    featured: true,
  },
  {
    plan: "Business",
    limit: "Unlimited",
    monthly: "Unlimited",
    color: "var(--cyan)",
    bg: "rgba(6,239,255,0.06)",
    border: "rgba(6,239,255,0.2)",
  },
];

const sdks = [
  {
    lang: "JavaScript / TypeScript",
    icon: "⚡",
    install: "npm install @konvoq/sdk",
    color: "var(--amber)",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    lang: "Python",
    icon: "🐍",
    install: "pip install konvoq",
    color: "var(--cyan)",
    bg: "rgba(6,239,255,0.08)",
    border: "rgba(6,239,255,0.2)",
  },
  {
    lang: "Go",
    icon: "🔵",
    install: "go get github.com/konvoq/konvoq-go",
    color: "var(--violet)",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
];

const curlExample = `curl -X POST https://api.konvoq.ai/v1/chatbots \\
  -H "Authorization: Bearer kq_live_xxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Support Bot",
    "model": "gpt-4o",
    "persona": "Friendly and professional",
    "knowledge_base_ids": ["kb_abc123"],
    "languages": ["en", "es", "fr"],
    "fallback_email": "support@yourcompany.com"
  }'`;

const responseExample = `{
  "id": "bot_9f3a2c1e",
  "name": "Support Bot",
  "model": "gpt-4o",
  "status": "active",
  "created_at": "2026-02-28T12:00:00Z",
  "widget_script": "<script src=\\"https://cdn.konvoq.ai/widget/bot_9f3a2c1e.js\\"></script>",
  "metrics": {
    "resolution_rate": 0,
    "conversations": 0
  }
}`;

// ─── Component ───────────────────────────────────────────────────────────────

export default function ApiReferencePageTemplate() {
  const [activeTab, setActiveTab] = useState<"request" | "response">("request");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(curlExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
            top: "8%",
            left: "5%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(6,239,255,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "5%",
            width: 450,
            height: 450,
            background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>API Reference</SectionLabel>
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
              <span className="grad-text">Konvoq API</span> Reference
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
                maxWidth: 520,
                margin: "0 auto 36px",
              }}
            >
              Powerful APIs to integrate AI conversations anywhere. RESTful,
              predictable, and production-ready.
            </motion.p>

            {/* Base URL badge */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "var(--surface-2)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius)",
                padding: "12px 20px",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--emerald)",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 100,
                  padding: "3px 9px",
                }}
              >
                Base URL
              </span>
              <code
                style={{
                  fontFamily: "ui-monospace, 'Cascadia Code', monospace",
                  fontSize: "0.95rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.02em",
                }}
              >
                https://api.konvoq.ai/v1
              </code>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Endpoint Categories ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionLabel>Endpoints</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-1)",
              }}
            >
              API Endpoint Categories
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {endpointCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.border;
                  e.currentTarget.style.background = cat.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface-2)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{cat.icon}</div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text-1)",
                    marginBottom: 10,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-2)",
                    lineHeight: 1.65,
                    marginBottom: 18,
                  }}
                >
                  {cat.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {cat.methods.map((m) => {
                    const methodColors: Record<string, string> = {
                      GET: "var(--emerald)",
                      POST: "var(--cyan)",
                      PUT: "var(--amber)",
                      DELETE: "var(--rose)",
                    };
                    const methodBg: Record<string, string> = {
                      GET: "rgba(16,185,129,0.1)",
                      POST: "rgba(6,239,255,0.1)",
                      PUT: "rgba(245,158,11,0.1)",
                      DELETE: "rgba(244,63,94,0.1)",
                    };
                    return (
                      <span
                        key={m}
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          color: methodColors[m],
                          background: methodBg[m],
                          borderRadius: 4,
                          padding: "3px 7px",
                          fontFamily: "ui-monospace, monospace",
                        }}
                      >
                        {m}
                      </span>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: cat.color,
                  }}
                >
                  {cat.endpoints} endpoints →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Code Example ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: 40, textAlign: "center" }}
          >
            <SectionLabel>Code Example</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-1)",
              }}
            >
              Create a chatbot in one request
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface-3)",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                {(["request", "response"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background:
                        activeTab === tab ? "var(--grad-btn)" : "transparent",
                      border:
                        activeTab === tab ? "none" : "1px solid var(--border-2)",
                      borderRadius: 8,
                      padding: "6px 16px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: activeTab === tab ? "#000" : "var(--text-2)",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textTransform: "capitalize",
                    }}
                  >
                    {tab === "request" ? "cURL Request" : "JSON Response"}
                  </button>
                ))}
              </div>
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-2)",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: copied ? "var(--emerald)" : "var(--text-2)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </motion.button>
            </div>

            {/* Code */}
            <div style={{ padding: "28px 28px", overflowX: "auto" }}>
              <pre
                style={{
                  margin: 0,
                  fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  color: "var(--text-1)",
                  whiteSpace: "pre",
                }}
              >
                {activeTab === "request" ? (
                  <code>
                    {curlExample.split("\n").map((line, i) => {
                      const isFlag = line.trim().startsWith("-H") || line.trim().startsWith("-d") || line.trim().startsWith("-X");
                      const isUrl = line.includes("https://");
                      const isKey = line.includes('"') && line.includes(":");
                      return (
                        <span
                          key={i}
                          style={{
                            color: isUrl
                              ? "var(--cyan)"
                              : isFlag
                              ? "var(--violet)"
                              : isKey
                              ? "var(--amber)"
                              : "var(--text-2)",
                          }}
                        >
                          {line}
                          {"\n"}
                        </span>
                      );
                    })}
                  </code>
                ) : (
                  <code>
                    {responseExample.split("\n").map((line, i) => {
                      const isKey = line.includes('":');
                      const isValue = line.includes(": ");
                      return (
                        <span
                          key={i}
                          style={{
                            color: isKey
                              ? "var(--cyan)"
                              : isValue
                              ? "var(--emerald)"
                              : "var(--text-2)",
                          }}
                        >
                          {line}
                          {"\n"}
                        </span>
                      );
                    })}
                  </code>
                )}
              </pre>
            </div>
          </motion.div>
        </section>

        {/* ── Authentication ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <motion.div
              variants={fadeUp}
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 28px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>🔑</div>
              <SectionLabel>Authentication</SectionLabel>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-1)", marginBottom: 14 }}>
                API Key Authentication
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.65, marginBottom: 20 }}>
                All API requests must include your API key as a Bearer token in
                the Authorization header. Keys are prefixed with{" "}
                <code
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    color: "var(--cyan)",
                    background: "rgba(6,239,255,0.08)",
                    padding: "1px 6px",
                    borderRadius: 4,
                  }}
                >
                  kq_live_
                </code>{" "}
                for production and{" "}
                <code
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    color: "var(--amber)",
                    background: "rgba(245,158,11,0.08)",
                    padding: "1px 6px",
                    borderRadius: 4,
                  }}
                >
                  kq_test_
                </code>{" "}
                for sandbox.
              </p>
              <div
                style={{
                  background: "var(--surface-3)",
                  borderRadius: "var(--radius)",
                  padding: "14px 16px",
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "0.82rem",
                  color: "var(--violet)",
                }}
              >
                Authorization: Bearer kq_live_xxxxxxxxxxxx
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 28px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>⚡</div>
              <SectionLabel>Rate Limits</SectionLabel>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-1)", marginBottom: 20 }}>
                Requests Per Plan
              </h3>
              {rateLimits.map((r) => (
                <div
                  key={r.plan}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    background: r.bg,
                    border: `1px solid ${r.border}`,
                    borderRadius: "var(--radius)",
                    marginBottom: 10,
                  }}
                >
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: r.color }}>
                    {r.plan}
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-1)" }}>
                      {r.limit}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>{r.monthly}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── SDKs ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionLabel>SDKs</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-1)",
              }}
            >
              Official SDKs
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-2)", marginTop: 12 }}>
              Type-safe, well-documented, and production-ready.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {sdks.map((sdk) => (
              <motion.div
                key={sdk.lang}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                style={{
                  background: "var(--surface-2)",
                  border: `1px solid var(--border)`,
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = sdk.border;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "var(--radius)",
                      background: sdk.bg,
                      border: `1px solid ${sdk.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    {sdk.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-1)" }}>
                      {sdk.lang}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>
                      Official SDK
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background: "var(--surface-3)",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    fontFamily: "ui-monospace, 'Cascadia Code', monospace",
                    fontSize: "0.82rem",
                    color: sdk.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span>{sdk.install}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(sdk.install)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-3)",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      padding: 0,
                    }}
                    title="Copy"
                  >
                    📋
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              background: "linear-gradient(135deg, rgba(6,239,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
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
                background: "radial-gradient(ellipse at 50% 0%, rgba(6,239,255,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                  marginBottom: 16,
                }}
              >
                Ready to integrate?
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-2)",
                  maxWidth: 440,
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                Get your API key from the dashboard and make your first request
                in under 60 seconds.
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
                  Get API Key →
                </motion.a>
                <motion.a
                  href="/docs"
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
                  View Docs
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}

