"use client";

import { motion } from "framer-motion";

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
        textTransform: "uppercase" as const,
        color: "var(--text-2)",
        marginBottom: 20,
      }}
    >
      <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

const testimonials = [
  {
    quote: "We replaced a 3-person support team with Konvoq. 91% ticket deflection in the first week. ROI paid for itself in 3 days flat.",
    name: "Marcus T.",
    role: "CTO @ Orderwave · eCommerce",
    initial: "M",
    grad: "linear-gradient(135deg,#06EFFF,#8B5CF6)",
  },
  {
    quote: "Finally an AI chatbot that sounds like us, not a robot. Our CSAT went from 3.4 to 4.7 in the first month. Setup was shockingly simple.",
    name: "Priya M.",
    role: "Head of CX @ TalentPilot · SaaS",
    initial: "P",
    grad: "linear-gradient(135deg,#10B981,#06EFFF)",
  },
  {
    quote: "We capture 40% more leads since switching to Konvoq. The proactive engagement triggers are a game changer — nothing else comes close.",
    name: "David K.",
    role: "Founder @ PropNest · Real Estate",
    initial: "D",
    grad: "linear-gradient(135deg,#F43F5E,#8B5CF6)",
  },
];

const trustPills = [
  "⭐ G2 Leader · AI Chatbot 2024",
  "🏆 Capterra Top Rated",
  "🚀 Product Hunt #1 of the Day",
  "🔒 SOC 2 Type II",
  "🇪🇺 GDPR Compliant",
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Real results from real
            <br />
            <span className="grad-text">businesses like yours</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -3, borderColor: "var(--border-2)" }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(5)].map((_, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + si * 0.05 + 0.3 }}
                    style={{ fontSize: 14, color: "var(--amber)" }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.8, fontStyle: "italic", flex: 1 }}>
                "{t.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: t.grad,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-1)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 56,
          }}
        >
          {trustPills.map((pill) => (
            <div
              key={pill}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "10px 20px",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--text-2)",
              }}
            >
              {pill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

