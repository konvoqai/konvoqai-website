"use client";

import { motion } from "framer-motion";

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
        opacity: 0.4,
        pointerEvents: "none",
        ...style,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.05, 0.96, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function CtaSection() {
  return (
    <section
      id="cta"
      style={{
        padding: "140px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aurora */}
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
          WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%)",
          maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%)",
          zIndex: 0,
        }}
      />

      {/* Spinning ring */}
      <motion.div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "1px solid transparent",
          background:
            "linear-gradient(var(--black), var(--black)) padding-box, conic-gradient(from 0deg, transparent 0%, rgba(6,239,255,0.2) 25%, rgba(139,92,246,0.2) 50%, transparent 100%) border-box",
          top: "50%",
          left: "50%",
          marginLeft: -350,
          marginTop: -350,
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto" }}
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
            textTransform: "uppercase" as const,
            color: "var(--text-2)",
            marginBottom: 24,
          }}
        >
          <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
          Get Started
        </div>

        <h2
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Your AI support team is
          <br />
          <span className="grad-text">3 minutes away</span>
        </h2>

        <p style={{ fontSize: 18, color: "var(--text-2)", marginBottom: 44, lineHeight: 1.7 }}>
          Join 12,000+ businesses that converted more visitors, resolved more tickets, and scaled
          without hiring — using Konvoq.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <motion.a
            href="#"
            whileHover={{ y: -2, boxShadow: "0 0 60px rgba(6,239,255,0.3), 0 0 100px rgba(139,92,246,0.15)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--grad-btn)",
              color: "#fff",
              padding: "15px 32px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(6,239,255,0.2)",
            }}
          >
            Create Your Free Chatbot →
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ background: "rgba(255,255,255,0.08)", color: "var(--text-1)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-2)",
              padding: "14px 28px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid var(--border-2)",
            }}
          >
            Talk to Sales
          </motion.a>
        </div>

        <div
          style={{
            fontSize: 13,
            color: "var(--text-3)",
            display: "flex",
            gap: 28,
            justifyContent: "center",
          }}
        >
          {["No credit card", "Free forever plan", "Live in under 3 min"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "var(--emerald)" }}>✓</span> {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

