"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";

export default function CtaSection() {
  return (
    <section id="cta" style={{ padding: "120px 24px 136px" }}>
      <div className="site-container">
        <motion.div
          className="section-frame"
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
              background: "radial-gradient(ellipse at top left, rgba(91,140,255,0.14), transparent 48%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 760, position: "relative" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700 }}
            >
              Ready when your team is
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              style={{ margin: "0 0 16px", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.02, letterSpacing: "-0.05em", fontWeight: 800 }}
            >
              Build a cleaner support experience without adding another messy tool.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.24 }}
              style={{ margin: "0 0 24px", maxWidth: 620, color: "var(--text-2)", lineHeight: 1.75, fontSize: 17 }}
            >
              Start with the free workflow, then scale into deeper analytics, governance, and routing when the assistant becomes part of your core support system.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.32, ease: "easeOut" }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <Button href="/pricing" variant="primary" size="lg">
                Start free
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to sales
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
