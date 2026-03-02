"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import { SIGNUP_URL } from "@/lib/config";

export default function CtaSection() {
  return (
    <section id="cta" style={{ padding: "120px 24px 136px" }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: 780,
            margin: "0 auto",
            textAlign: "center",
            paddingTop: 26,
            borderTop: "1px solid color-mix(in srgb, var(--border-strong) 76%, transparent)",
          }}
        >
          <div style={{ fontSize: 12, color: "var(--text-1)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700 }}>
            Ready to launch
          </div>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.04, letterSpacing: "-0.05em", fontWeight: 800 }}>
            Launch a better AI chatbot experience.
          </h2>
          <p style={{ margin: "0 auto 24px", maxWidth: 620, color: "var(--text-2)", lineHeight: 1.74, fontSize: 17 }}>
            Use Konvoq to answer faster, reduce repetitive tickets, and route buyers or support issues with context.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Button href={SIGNUP_URL} variant="primary" size="lg">
              Start free
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
