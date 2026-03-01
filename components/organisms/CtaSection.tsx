"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";

export default function CtaSection() {
  return (
    <section id="cta" style={{ padding: "120px 24px 136px" }}>
      <div className="site-container">
        <motion.div
          className="section-frame"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            padding: 36,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at top, rgba(91,140,255,0.16), transparent 42%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 760, position: "relative" }}>
            <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700 }}>
              Ready when your team is
            </div>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.02, letterSpacing: "-0.05em", fontWeight: 800 }}>
              Build a cleaner support experience without adding another messy tool.
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: 620, color: "var(--text-2)", lineHeight: 1.75, fontSize: 17 }}>
              Start with the free workflow, then scale into deeper analytics, governance, and routing when the assistant becomes part of your core support system.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button href="/pricing" variant="primary" size="lg">
                Start free
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

