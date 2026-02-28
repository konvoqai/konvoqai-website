"use client";

import { motion } from "framer-motion";

interface BentoCard {
  icon: string;
  iconClass: "cyan" | "violet" | "rose" | "emerald" | "amber";
  glowClass: "cyan" | "violet" | "rose" | "emerald";
  title: string;
  desc: string;
  wide?: boolean;
  tall?: boolean;
  extra?: React.ReactNode;
}

function IconBox({ icon, color }: { icon: string; color: string }) {
  const colors: Record<string, { bg: string; border: string }> = {
    cyan: { bg: "rgba(6,239,255,0.1)", border: "rgba(6,239,255,0.2)" },
    violet: { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
    rose: { bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.2)" },
    emerald: { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
    amber: { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
  };
  const c = colors[color];
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        marginBottom: 20,
        background: c.bg,
        border: `1px solid ${c.border}`,
      }}
    >
      {icon}
    </div>
  );
}

const glowMap: Record<string, string> = {
  cyan: "radial-gradient(circle at 0% 0%, rgba(6,239,255,0.06) 0%, transparent 60%)",
  violet: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.07) 0%, transparent 60%)",
  rose: "radial-gradient(circle at 0% 100%, rgba(244,63,94,0.06) 0%, transparent 60%)",
  emerald: "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.07) 0%, transparent 60%)",
};

const lineMap: Record<string, string> = {
  cyan: "linear-gradient(90deg, transparent, rgba(6,239,255,0.6), transparent)",
  violet: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)",
  rose: "linear-gradient(90deg, transparent, rgba(244,63,94,0.6), transparent)",
  emerald: "linear-gradient(90deg, transparent, rgba(16,185,129,0.6), transparent)",
};

function BentoCardComponent({
  card,
  delay,
}: {
  card: BentoCard;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      style={{
        gridColumn: card.wide ? "span 2" : "span 1",
        gridRow: card.tall ? "span 2" : "span 1",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 32,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Top gradient line on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background: lineMap[card.glowClass],
          borderRadius: "100%",
        }}
      />
      {/* Glow overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          background: glowMap[card.glowClass],
          borderRadius: "inherit",
          pointerEvents: "none",
        }}
      />

      <IconBox icon={card.icon} color={card.iconClass} />
      <h3
        style={{
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          marginBottom: 10,
          color: "var(--text-1)",
          fontFamily: "Nunito, sans-serif",
          position: "relative",
          zIndex: 1,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "var(--text-2)",
          lineHeight: 1.75,
          position: "relative",
          zIndex: 1,
        }}
      >
        {card.desc}
      </p>
      {card.extra && (
        <div style={{ position: "relative", zIndex: 1 }}>{card.extra}</div>
      )}
    </motion.div>
  );
}

const cards: BentoCard[] = [
  {
    icon: "⚡",
    iconClass: "cyan",
    glowClass: "cyan",
    title: "Choose Your AI Brain — GPT-4o, Claude 3.5, or Gemini",
    desc: "The only chatbot platform that lets you pick the model that fits your use case. Switch per-bot, not per-plan. Always using the world's best AI.",
    wide: true,
    extra: (
      <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
        {[
          { label: "GPT-4o", dotColor: "#10a37f" },
          { label: "Claude 3.5 Sonnet", dotColor: "#c07b4f" },
          { label: "Gemini 1.5 Pro", dotColor: "#4285F4" },
        ].map((m) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border-2)",
              borderRadius: 8,
              padding: "8px 14px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-1)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: m.dotColor,
                boxShadow: `0 0 8px ${m.dotColor}`,
              }}
            />
            {m.label}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "🧠",
    iconClass: "violet",
    glowClass: "violet",
    title: "Train on Your Website, Docs & Data",
    desc: "Paste a URL. Upload PDFs. Connect Drive. Konvoq reads everything and auto-resyncs when content changes.",
  },
  {
    icon: "📊",
    iconClass: "rose",
    glowClass: "rose",
    title: "Revenue Intelligence Dashboard",
    desc: "Topic clustering, sentiment analysis, conversion tracking, and knowledge gap detection. Know exactly what your customers need — before they leave.",
    tall: true,
    extra: (
      <>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 60, marginTop: 24 }}>
          {[35, 55, 45, 80, 65, 95, 75, 100].map((h, i) => (
            <motion.div
              key={i}
              style={{
                flex: 1,
                borderRadius: "3px 3px 0 0",
                background: [1, 3, 5, 7].includes(i)
                  ? "linear-gradient(180deg, rgba(6,239,255,0.8), rgba(139,92,246,0.8))"
                  : "rgba(139,92,246,0.2)",
              }}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
            />
          ))}
        </div>
        <p style={{ marginTop: 20, fontSize: 13, color: "var(--text-2)", lineHeight: 1.75 }}>
          Understand every conversation. Optimize every week.
        </p>
      </>
    ),
  },
  {
    icon: "🚀",
    iconClass: "emerald",
    glowClass: "emerald",
    title: "Live in Under 3 Minutes",
    desc: "One line of code. Any website. Zero technical skills required. Most users go live before their coffee is ready.",
  },
  {
    icon: "🎨",
    iconClass: "violet",
    glowClass: "violet",
    title: "White-Label on Every Plan",
    desc: "Not a paid addon. Your brand. Your colors. Your name. Zero Konvoq branding — ever. Agencies love this.",
  },
  {
    icon: "🔒",
    iconClass: "emerald",
    glowClass: "emerald",
    title: "Enterprise-Grade Security — Included, Not Extra",
    desc: "SOC 2 Type II, GDPR, and HIPAA compliance built into the platform. Data isolation, encryption at rest and in transit, and configurable data retention policies.",
    wide: true,
    extra: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
        {["SOC 2 Type II", "GDPR Compliant", "HIPAA Ready", "AES-256 Encryption", "99.9% Uptime SLA"].map((b) => (
          <span
            key={b}
            style={{
              fontSize: 11,
              fontWeight: 600,
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              color: "var(--emerald)",
              padding: "5px 12px",
              borderRadius: 6,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: "🌐",
    iconClass: "cyan",
    glowClass: "cyan",
    title: "Omnichannel in One Dashboard",
    desc: "Web, WhatsApp, Instagram, Slack — one bot, all channels, full context across every session.",
  },
  {
    icon: "🤝",
    iconClass: "rose",
    glowClass: "rose",
    title: "Smart Human Handoff",
    desc: "AI resolves 80%+ automatically. Complex queries route to your team with full conversation history intact.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
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
              marginBottom: 20,
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
            Features
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Everything to deploy an AI chatbot
            <br />
            <span className="grad-text">that actually performs</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-2)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            Not another chatbot widget. A revenue engine trained on your business and built to convert.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {cards.map((card, i) => (
            <BentoCardComponent key={card.title} card={card} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
