"use client";

import { motion, type Variants } from "framer-motion";
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

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const quickStart = [
  {
    icon: "⚡",
    step: "01",
    title: "Install Widget",
    time: "5 min",
    desc: "Add one script tag to your site and the chat widget appears instantly.",
    color: "var(--cyan)",
    gradient: "linear-gradient(135deg, rgba(6,239,255,0.12), rgba(6,239,255,0.04))",
    borderColor: "rgba(6,239,255,0.2)",
  },
  {
    icon: "🧠",
    step: "02",
    title: "Train Your Bot",
    time: "10 min",
    desc: "Upload docs, paste URLs, or connect your knowledge base for instant AI training.",
    color: "var(--violet)",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04))",
    borderColor: "rgba(139,92,246,0.2)",
  },
  {
    icon: "🚀",
    step: "03",
    title: "Go Live",
    time: "2 min",
    desc: "Publish your chatbot and watch it handle customer queries autonomously.",
    color: "var(--emerald)",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))",
    borderColor: "rgba(16,185,129,0.2)",
  },
];

const docCategories = [
  {
    icon: "🚀",
    title: "Getting Started",
    desc: "Installation, configuration, and your first chatbot in minutes.",
    articles: 12,
    color: "var(--cyan)",
    bg: "rgba(6,239,255,0.06)",
    border: "rgba(6,239,255,0.15)",
  },
  {
    icon: "🎨",
    title: "Widget Customization",
    desc: "Themes, colors, positioning, triggers, and advanced UI options.",
    articles: 24,
    color: "var(--violet)",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
  },
  {
    icon: "🔌",
    title: "API & Webhooks",
    desc: "REST endpoints, webhook events, authentication, and rate limits.",
    articles: 31,
    color: "var(--rose)",
    bg: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.15)",
  },
  {
    icon: "🔗",
    title: "Integrations",
    desc: "Connect with Slack, HubSpot, Shopify, Zendesk, and 100+ more.",
    articles: 47,
    color: "var(--amber)",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
];

const popularArticles = [
  { title: "Quick Start: Add Konvoq Widget in 5 Minutes", time: "3 min read", tag: "Getting Started" },
  { title: "Training Your AI on Custom Knowledge Bases", time: "7 min read", tag: "Training" },
  { title: "Authenticating API Requests with Bearer Tokens", time: "4 min read", tag: "API" },
  { title: "Setting Up Webhook Event Listeners", time: "6 min read", tag: "Webhooks" },
  { title: "Customizing Chat Widget Colors & Branding", time: "5 min read", tag: "Customization" },
  { title: "Connecting Konvoq to HubSpot CRM", time: "8 min read", tag: "Integrations" },
  { title: "Multilingual Support: Enabling 50+ Languages", time: "4 min read", tag: "Advanced" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function DocsPageTemplate() {
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
            top: "10%",
            left: "20%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(6,239,255,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "10%",
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Documentation</SectionLabel>
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
              Everything you need to{" "}
              <span className="grad-text">build with Konvoq</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.15rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto 40px",
              }}
            >
              Comprehensive guides, API references, and examples to help you
              integrate AI conversations into your product in minutes.
            </motion.p>

            {/* Search bar */}
            <motion.div
              variants={fadeUp}
              style={{
                maxWidth: 560,
                margin: "0 auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-3)",
                  fontSize: 18,
                }}
              >
                🔍
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                style={{
                  width: "100%",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-2)",
                  borderRadius: "var(--radius-lg)",
                  padding: "16px 20px 16px 52px",
                  fontSize: "1rem",
                  color: "var(--text-1)",
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--cyan)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-2)";
                }}
              />
              <kbd
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "var(--surface-3)",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "3px 8px",
                  fontSize: 11,
                  color: "var(--text-3)",
                  fontFamily: "inherit",
                }}
              >
                ⌘K
              </kbd>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Quick Start ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {quickStart.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{
                  background: item.gradient,
                  border: `1px solid ${item.borderColor}`,
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 28px 24px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: item.color,
                    background: `rgba(0,0,0,0.3)`,
                    border: `1px solid ${item.borderColor}`,
                    borderRadius: 100,
                    padding: "3px 10px",
                  }}
                >
                  {item.time}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 14,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: item.color,
                    marginBottom: 6,
                  }}
                >
                  Step {item.step}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--text-1)",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: item.color,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  Start →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Categories ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionLabel>Browse by Category</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-1)",
              }}
            >
              All Documentation
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
            {docCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{
                  background: "var(--surface-2)",
                  border: `1px solid var(--border)`,
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 28px",
                  cursor: "pointer",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  position: "relative",
                  overflow: "hidden",
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
                <div style={{ fontSize: 36, marginBottom: 16 }}>{cat.icon}</div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text-1)",
                    marginBottom: 8,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-2)",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {cat.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: cat.color,
                      background: cat.bg,
                      border: `1px solid ${cat.border}`,
                      borderRadius: 100,
                      padding: "3px 10px",
                    }}
                  >
                    {cat.articles} articles
                  </span>
                  <span style={{ color: cat.color, fontSize: "1rem" }}>→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Popular Articles ── */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px 80px",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 40,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: 32 }}>
              <SectionLabel>Popular Articles</SectionLabel>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                }}
              >
                Most Read This Week
              </h2>
            </motion.div>

            {popularArticles.map((article, i) => (
              <motion.div
                key={article.title}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--border)",
                  cursor: "pointer",
                  gap: 16,
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text-3)",
                      minWidth: 24,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.95rem", color: "var(--text-1)", fontWeight: 500 }}>
                    {article.title}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--violet)",
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      borderRadius: 100,
                      padding: "2px 8px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {article.tag}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-3)", whiteSpace: "nowrap" }}>
                    {article.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar changelog / updates */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 24px",
                marginTop: 72,
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>
                Recently Updated
              </div>
              {[
                { title: "Webhook v2 Events Reference", date: "Feb 24, 2026", badge: "Updated" },
                { title: "GPT-4o Model Selection Guide", date: "Feb 20, 2026", badge: "New" },
                { title: "React SDK v3 Migration Guide", date: "Feb 15, 2026", badge: "New" },
                { title: "GDPR Data Handling Policy", date: "Feb 10, 2026", badge: "Updated" },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: item.badge === "New" ? "var(--emerald)" : "var(--amber)",
                        background: item.badge === "New" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                        borderRadius: 100,
                        padding: "2px 7px",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-1)", fontWeight: 500, marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>{item.date}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── API Reference CTA ── */}
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
              padding: "60px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(6,239,255,0.1)",
                  border: "1px solid rgba(6,239,255,0.2)",
                  borderRadius: 100,
                  padding: "4px 14px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  marginBottom: 16,
                }}
              >
                API Reference
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                  marginBottom: 10,
                }}
              >
                Build anything with our REST API
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-2)", maxWidth: 460 }}>
                Full REST API with SDKs for JavaScript, Python, and Go.
                Integrate Konvoq into any application or workflow.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <motion.a
                href="/api-reference"
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
                View API Reference →
              </motion.a>
              <motion.a
                href="#"
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
                Download SDKs
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}

