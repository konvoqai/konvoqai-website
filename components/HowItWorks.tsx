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

const steps = [
  {
    num: "1",
    title: "Connect Your Sources",
    desc: "Paste your website URL, upload documents, or connect your knowledge base. Konvoq ingests everything instantly.",
    ringDuration: 12,
    ringReverse: false,
  },
  {
    num: "2",
    title: "Train & Customize",
    desc: "Set personality, tone, and rules. Choose your AI model. Preview live conversations before you go public.",
    ringDuration: 15,
    ringReverse: true,
  },
  {
    num: "3",
    title: "Deploy & Watch It Work",
    desc: "Embed one line of code. Live in under 3 minutes. Watch support costs drop and conversions rise automatically.",
    ringDuration: 18,
    ringReverse: false,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, var(--black) 0%, rgba(139,92,246,0.03) 50%, var(--black) 100%)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <SectionLabel>How It Works</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            From zero to AI-powered
            <br />
            <span className="grad-text">in 3 steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, position: "relative" }}>
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 44,
              left: "16.67%",
              right: "16.67%",
              height: 1,
              background: "linear-gradient(90deg, transparent, var(--border-2), rgba(6,239,255,0.3), var(--border-2), transparent)",
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              style={{ textAlign: "center", padding: "0 32px", position: "relative" }}
            >
              {/* Number with spinning ring */}
              <div style={{ position: "relative", margin: "0 auto 28px", width: 88, height: 88 }}>
                <motion.div
                  style={{
                    position: "absolute",
                    inset: -10,
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                  }}
                  animate={{ rotate: step.ringReverse ? -360 : 360 }}
                  transition={{ duration: step.ringDuration, repeat: Infinity, ease: "linear" }}
                />
                <div
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontWeight: 900,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      background: "var(--grad-text)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.75 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: 64,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "32px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 32,
              fontSize: 80,
              color: "rgba(139,92,246,0.15)",
              lineHeight: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-2)",
              fontStyle: "italic",
              lineHeight: 1.8,
              position: "relative",
              zIndex: 1,
            }}
          >
            "We replaced a 3-person support team with Konvoq. 91% ticket deflection in the first week —
            setup took 4 minutes. I wish we had done this 2 years ago."
          </p>
          <cite
            style={{
              fontSize: 13,
              color: "var(--text-3)",
              marginTop: 12,
              display: "block",
              fontStyle: "normal",
            }}
          >
            — Marcus T., CTO @ Orderwave
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
