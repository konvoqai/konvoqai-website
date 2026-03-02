"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";
import { LightningIcon, HandoffIcon, ChartBarIcon, ShieldCheckIcon } from "@/components/atoms/Icons";

const pillars = [
  {
    title: "Faster resolution",
    description: "Answer repetitive support questions instantly without losing product accuracy.",
    Icon: LightningIcon,
  },
  {
    title: "Better handoff quality",
    description: "Escalate conversations with context, intent, and the right suggested next step.",
    Icon: HandoffIcon,
  },
  {
    title: "Operational visibility",
    description: "See what resolves, what converts, and where your knowledge gaps still live.",
    Icon: ChartBarIcon,
  },
  {
    title: "Brand-safe deployment",
    description: "Launch a system that feels native to your product instead of bolted on after the fact.",
    Icon: ShieldCheckIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "110px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Why choose Konvoq"
          heading={<>A product system designed for teams that care about experience quality.</>}
          description={<>The advantage is not just automation. It is the quality of the product layer around every answer, escalation, and opportunity.</>}
          style={{ marginBottom: 34 }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                padding: 24,
                border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                borderRadius: 24,
                background: "color-mix(in srgb, var(--surface-2) 80%, transparent)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
              }}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: index * 0.06 + 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 18,
                  background: index === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface) 78%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
                  color: "var(--text-1)",
                }}
              >
                <pillar.Icon size={18} />
              </motion.div>
              <h3 style={{ margin: "0 0 10px", fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.04em", fontWeight: 760 }}>
                {pillar.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.72, color: "var(--text-2)" }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
