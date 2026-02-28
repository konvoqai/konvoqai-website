"use client";

import { motion, type Variants } from "framer-motion";

/* ── Animated aurora blobs ── */
function AuroraBlob({
  style,
  duration,
  delay = 0,
}: {
  style: React.CSSProperties;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(100px)",
        opacity: 0.5,
        pointerEvents: "none",
        ...style,
      }}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Spinning ring ── */
function HeroRing({
  size,
  duration,
  reverse = false,
  gradient,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  gradient: string;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1px solid transparent",
        background: gradient,
        top: "50%",
        left: "50%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
        pointerEvents: "none",
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ── Mock typing indicator ── */
function TypingDot({ delay }: { delay: number }) {
  return (
    <motion.div
      style={{
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--cyan)",
      }}
      animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }}
      transition={{ duration: 1.4, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Floating stat card ── */
function FloatingCard({
  label,
  value,
  change,
  style,
  delay,
}: {
  label: string;
  value: string;
  change: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "12px 16px",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: delay + 1.2, duration: 0.4 },
        scale: { delay: delay + 1.2, duration: 0.4 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 },
      }}
    >
      <div style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 4 }}>
        {label}
      </div>
      <div
        className="grad-text"
        style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em" }}
      >
        {value}
      </div>
      <div style={{ fontSize: 10, color: "var(--emerald)" }}>{change}</div>
    </motion.div>
  );
}

/* ── Dashboard mockup ── */
function DashboardMockup() {
  const mockStats = [
    { label: "Conversations", val: "14,382", change: "↑ 28% vs last month", color: "grad-text" },
    { label: "Resolution Rate", val: "91%", change: "↑ 4% improvement", color: "emerald" },
    { label: "Leads Captured", val: "1,847", change: "↑ 62% new this month", color: "rose" },
  ];

  const barHeights = [38, 52, 45, 68, 60, 82, 75, 92, 85, 100, 94, 100];
  const hiIndices = [3, 5, 7, 9, 11];

  const conversations = [
    { initial: "J", name: "James Cooper", msg: "What's the return policy for international orders?", status: "Resolved", grad: "linear-gradient(135deg,#06EFFF,#8B5CF6)" },
    { initial: "A", name: "Aisha Patel", msg: "Can I upgrade my plan mid-billing cycle?", status: "Resolved", grad: "linear-gradient(135deg,#10B981,#06EFFF)" },
    { initial: "M", name: "Marco Silva", msg: "Need help with API webhook integration", status: "Pending", grad: "linear-gradient(135deg,#F43F5E,#8B5CF6)" },
  ];

  return (
    <motion.div
      style={{ position: "relative", width: "100%", maxWidth: 1000, margin: "64px auto 0" }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
    >
      {/* Glow underneath */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,92,246,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating cards */}
      <FloatingCard
        label="Ticket deflection"
        value="91%"
        change="↑ vs human-only"
        delay={0.2}
        style={{ top: -20, left: -80 }}
      />
      <FloatingCard
        label="Leads captured today"
        value="+147"
        change="↑ 62% this month"
        delay={0.6}
        style={{ bottom: -16, right: -70 }}
      />

      {/* Browser frame */}
      <div
        style={{
          position: "relative",
          background: "var(--surface-2)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 32px 64px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Gradient top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(6,239,255,0.5), rgba(139,92,246,0.5), transparent)",
          }}
        />

        {/* Title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 18px",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {[{ bg: "#FF5F57" }, { bg: "#FEBC2E" }, { bg: "#28C840" }].map((d, i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: d.bg }} />
          ))}
          <div
            style={{
              marginLeft: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "5px 14px",
              fontSize: 12,
              color: "var(--text-3)",
              flex: 1,
              maxWidth: 280,
            }}
          >
            app.konvoq.ai / dashboard
          </div>
        </div>

        {/* Body: sidebar + main + chat */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 260px", height: 460 }}>
          {/* Sidebar */}
          <div
            style={{
              background: "rgba(255,255,255,0.015)",
              borderRight: "1px solid var(--border)",
              padding: "20px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
                padding: "0 6px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              <span className="grad-text">Konvoq</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", padding: "0 8px", margin: "4px 0" }}>Main</div>
            {[
              { icon: "⬡", label: "Dashboard", active: true, badge: null },
              { icon: "💬", label: "Conversations", active: false, badge: "12" },
              { icon: "🤖", label: "Chatbots", active: false, badge: null },
              { icon: "📚", label: "Knowledge", active: false, badge: null },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 10px",
                  borderRadius: 7,
                  fontSize: 12,
                  color: item.active ? "var(--text-1)" : "var(--text-2)",
                  background: item.active ? "rgba(255,255,255,0.06)" : "transparent",
                }}
              >
                <span style={{ fontSize: 13 }}>{item.icon}</span>
                {item.label}
                {item.badge && (
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "rgba(6,239,255,0.15)",
                      color: "var(--cyan)",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "1px 7px",
                      borderRadius: 100,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
            <div style={{ height: 1, background: "var(--border)", margin: "8px 0" }} />
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", padding: "0 8px", margin: "4px 0" }}>Insights</div>
            {["📊 Analytics", "🎯 Leads", "⚡ Flows"].map((item) => {
              const [icon, ...rest] = item.split(" ");
              return (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 7, fontSize: 12, color: "var(--text-2)" }}>
                  <span>{icon}</span>{rest.join(" ")}
                </div>
              );
            })}
          </div>

          {/* Main panel */}
          <div style={{ padding: "20px 22px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>Overview</h3>
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>Last 30 days · All bots</span>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
              {mockStats.map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 4 }}>{s.label}</div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      ...(s.color === "emerald" ? { color: "var(--emerald)" } : {}),
                      ...(s.color === "rose" ? { background: "linear-gradient(135deg,#F43F5E,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : {}),
                      ...(s.color === "grad-text" ? { background: "var(--grad-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : {}),
                    }}
                  >
                    {s.val}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--emerald)", marginTop: 2 }}>{s.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: 10, padding: 12, height: 120, marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 8 }}>Conversation volume</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: "3px 3px 0 0",
                      background: hiIndices.includes(i)
                        ? "linear-gradient(180deg, rgba(6,239,255,0.8), rgba(139,92,246,0.8))"
                        : "rgba(139,92,246,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Conversation list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {conversations.map((c) => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: c.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{c.initial}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 600 }}>{c.name}</div>
                    <div style={{ fontSize: 10, color: "var(--text-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 140 }}>{c.msg}</div>
                  </div>
                  <div style={{
                    fontSize: 9,
                    padding: "2px 7px",
                    borderRadius: 100,
                    fontWeight: 600,
                    background: c.status === "Resolved" ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)",
                    color: c.status === "Resolved" ? "var(--emerald)" : "var(--amber)",
                  }}>{c.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat panel */}
          <div style={{ borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--grad-btn)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🤖</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>Konvoq AI</div>
                <div style={{ fontSize: 10, color: "var(--emerald)" }}>● Instant replies</div>
              </div>
            </div>

            <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }}>
              {[
                { ai: true, text: "Hi! 👋 How can I help you today?", time: "2:14 PM" },
                { ai: false, text: "What's your refund policy?", time: "2:14 PM" },
                { ai: true, text: "We offer a 30-day money-back guarantee — no questions asked. Want me to process one for you?", time: "2:14 PM" },
                { ai: false, text: "Yes, order #4821", time: "2:15 PM" },
              ].map((msg, i) => (
                <div key={i} style={{ maxWidth: 200, alignSelf: msg.ai ? "flex-start" : "flex-end" }}>
                  <div style={{
                    padding: "9px 12px",
                    borderRadius: msg.ai ? "3px 11px 11px 11px" : "11px 3px 11px 11px",
                    fontSize: 11,
                    lineHeight: 1.5,
                    background: msg.ai ? "rgba(255,255,255,0.05)" : "var(--grad-btn)",
                    border: msg.ai ? "1px solid var(--border)" : "none",
                    color: msg.ai ? "var(--text-2)" : "#fff",
                  }}>
                    {msg.text}
                  </div>
                  <div style={{ fontSize: 9, color: "var(--text-3)", marginTop: 3, padding: "0 4px", textAlign: msg.ai ? "left" : "right" }}>{msg.time}</div>
                </div>
              ))}

              {/* Typing indicator */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "9px 12px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "3px 11px 11px 11px",
                width: 56,
              }}>
                <TypingDot delay={0} />
                <TypingDot delay={0.2} />
                <TypingDot delay={0.4} />
              </div>
            </div>

            <div style={{ padding: "10px 12px", borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 12px" }}>
                <span style={{ fontSize: 11, color: "var(--text-3)" }}>Ask anything…</span>
                <div style={{ width: 24, height: 24, background: "var(--grad-btn)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff" }}>→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Hero section ── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aurora blobs */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <AuroraBlob
          duration={25}
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(6,239,255,0.35) 0%, transparent 70%)",
            top: -200,
            left: -100,
          }}
        />
        <AuroraBlob
          duration={30}
          delay={-8}
          style={{
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            top: -100,
            right: -200,
          }}
        />
        <AuroraBlob
          duration={22}
          delay={-15}
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(244,63,94,0.25) 0%, transparent 70%)",
            bottom: 0,
            left: "30%",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          zIndex: 0,
        }}
      />

      {/* Spinning rings */}
      <HeroRing
        size={900}
        duration={20}
        gradient="linear-gradient(var(--black), var(--black)) padding-box, conic-gradient(from 0deg, transparent 0%, rgba(6,239,255,0.3) 25%, rgba(139,92,246,0.3) 50%, rgba(244,63,94,0.2) 75%, transparent 100%) border-box"
      />
      <HeroRing
        size={700}
        duration={15}
        reverse
        gradient="linear-gradient(var(--black), var(--black)) padding-box, conic-gradient(from 180deg, transparent 0%, rgba(139,92,246,0.2) 30%, transparent 60%) border-box"
      />

      {/* Hero content */}
      <motion.div
        style={{ position: "relative", zIndex: 2, maxWidth: 860 }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              padding: "8px 20px",
              marginBottom: 36,
              fontSize: 13,
              color: "var(--text-2)",
            }}
          >
            <motion.div
              style={{
                width: 7,
                height: 7,
                background: "var(--emerald)",
                borderRadius: "50%",
                boxShadow: "0 0 8px var(--emerald)",
              }}
              animate={{ opacity: [1, 0.5, 1], scale: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Powered by{" "}
            <strong style={{ color: "var(--text-1)" }}>
              GPT-4o · Claude 3.5 · Gemini 1.5
            </strong>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: "clamp(52px, 7vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Turn Your Website Into an{" "}
          <motion.span
            className="grad-text"
            style={{ display: "block" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            AI Sales Machine
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 19,
            color: "var(--text-2)",
            lineHeight: 1.75,
            maxWidth: 580,
            margin: "0 auto 44px",
            fontWeight: 400,
          }}
        >
          Konvoq trains a custom AI chatbot on your website, docs, and data —
          then deploys it in minutes. Convert more. Support better. Grow without
          hiring.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <motion.a
            href="#"
            whileHover={{ y: -2, boxShadow: "0 0 60px rgba(6,239,255,0.3), 0 0 100px rgba(139,92,246,0.15)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--grad-btn)",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(6,239,255,0.2), 0 0 80px rgba(139,92,246,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Build Your Chatbot Free →
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ background: "rgba(255,255,255,0.08)", color: "var(--text-1)", borderColor: "rgba(255,255,255,0.2)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-2)",
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid var(--border-2)",
            }}
          >
            ▶ Watch 2-min Demo
          </motion.a>
        </motion.div>

        {/* Meta */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            fontSize: 13,
            color: "var(--text-3)",
          }}
        >
          {["Setup in under 3 minutes", "No coding required", "Free forever plan"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "var(--emerald)" }}>✓</span> {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard mockup */}
      <DashboardMockup />
    </section>
  );
}

