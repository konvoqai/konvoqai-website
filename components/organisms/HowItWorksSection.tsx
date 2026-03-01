"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Connect your sources",
    description: "Start with your public site, docs, onboarding material, or internal product notes. Konvoq consolidates them into one searchable operating layer.",
  },
  {
    step: "02",
    title: "Tune the assistant",
    description: "Set escalation rules, define conversation style, and control which flows should end with a handoff, a lead capture, or a direct answer.",
  },
  {
    step: "03",
    title: "Launch and improve",
    description: "Deploy the assistant, review containment metrics, and continuously improve response quality from the dashboard instead of patching support macros.",
  },
];

// Each step enters from a different direction — left, up, right
const stepInitialX = [-16, 0, 16];
const stepInitialY = [0, 18, 0];

export default function HowItWorksSection() {
  return (
    <section id="how" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 18, marginBottom: 18, alignItems: "start" }}>
          <SectionHeader
            badge="Workflow"
            heading={<>Launch the assistant without bolting on another tool.</>}
            description={<>The setup is intentionally operational: connect the source material, tune the decision layer, and launch with enough visibility to improve fast.</>}
            align="left"
          />

          <div className="section-frame" style={{ padding: 22 }}>
            <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 10 }}>Why teams move quickly</div>
            <div style={{ fontSize: 24, fontWeight: 760, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 12 }}>
              The redesign focuses on operational clarity, not marketing noise.
            </div>
            <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72, fontSize: 15 }}>
              Each phase maps directly to a real rollout step so the assistant reaches production without a long implementation loop or brittle custom setup.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="section-surface"
              initial={{ opacity: 0, x: stepInitialX[index], y: stepInitialY[index] }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{ padding: 24 }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                {/* Step number — springs in with a scale pop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.68 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, delay: index * 0.07 + 0.16, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.06em" }}
                >
                  {step.step}
                </motion.div>
                {/* Subtle circle arrow — replaces the meaningless "Go" box */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--text-3)",
                    fontSize: 13,
                  }}
                >
                  →
                </div>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 750, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
                {step.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.72, color: "var(--text-2)" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
