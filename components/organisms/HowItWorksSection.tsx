"use client";

import { RocketIcon, SlidersIcon, UploadCloudIcon } from "@/components/atoms/Icons";
import SectionBadge from "@/components/atoms/SectionBadge";
import { motion } from "framer-motion";
import * as React from "react";

const stepIcons = [UploadCloudIcon, SlidersIcon, RocketIcon];

const steps = [
  {
    step: "01",
    title: "Train the agent",
    description: "Connect docs, website pages, onboarding material, and product knowledge into one retrieval layer.",
  },
  {
    step: "02",
    title: "Customize the widget",
    description: "Tune the tone, prompts, escalation rules, and visual layer so it feels native to your product.",
  },
  {
    step: "03",
    title: "Deploy everywhere",
    description: "Launch on web, docs, and product surfaces with shared reporting and structured handoff logic.",
  },
];

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div style={{ padding: 16, borderRadius: 18, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", background: "color-mix(in srgb, var(--surface-2) 80%, transparent)" }}>
        <div style={{ display: "grid", gap: 10 }}>
          {["Website pages", "Docs", "Internal notes"].map((item, itemIndex) => (
            <div key={item} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", borderRadius: 12, background: itemIndex === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface) 70%, transparent)", fontSize: 13, color: itemIndex === 0 ? "var(--text-1)" : "var(--text-2)" }}>
              <span>{item}</span>
              <span>{itemIndex + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div style={{ padding: 16, borderRadius: 18, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", background: "color-mix(in srgb, var(--surface-2) 80%, transparent)" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          {["var(--background)", "var(--background-elevated)", "var(--border)", "var(--accent)"].map((color) => (
            <div key={color} style={{ width: 22, height: 22, borderRadius: 999, background: color, border: "1px solid color-mix(in srgb, var(--border) 60%, transparent)" }} />
          ))}
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ padding: "10px 12px", borderRadius: 12, background: "var(--accent-muted)", fontSize: 13 }}>Welcome to Konvoq AI</div>
          <div style={{ padding: "10px 12px", borderRadius: 12, background: "color-mix(in srgb, var(--surface) 70%, transparent)", fontSize: 13, color: "var(--text-2)" }}>Prompt starters</div>
          <div style={{ padding: "10px 12px", borderRadius: 12, background: "color-mix(in srgb, var(--surface) 70%, transparent)", fontSize: 13, color: "var(--text-2)" }}>Escalation rules</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 16, borderRadius: 18, border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)", background: "color-mix(in srgb, var(--surface-2) 80%, transparent)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
        {["Web app", "Docs", "Shopify", "Help center", "CRM"].map((item, itemIndex) => (
          <div key={item} style={{ padding: "8px 10px", borderRadius: 999, background: itemIndex === 2 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface) 70%, transparent)", color: itemIndex === 2 ? "var(--text-1)" : "var(--text-2)", fontSize: 12 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ padding: "12px 14px", borderRadius: 14, background: "var(--accent-muted)", fontSize: 13 }}>
        Embed once. Operate everywhere.
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how" style={{ padding: "110px 24px" }}>
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center md:items-end md:justify-between md:text-left" style={{ marginBottom: 30 }}>
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:max-w-none md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35 }}
              className="mb-4 flex justify-center md:justify-start"
            >
              <SectionBadge>How it works</SectionBadge>
            </motion.div>
            <motion.h2
              className="section-heading mobile-text-break"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{
                margin: 0,
                marginBottom: 16,
                fontSize: "clamp(32px, 4.8vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Set up your AI chatbot in three steps.
            </motion.h2>
            <motion.p
              className="section-description mobile-text-break"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
              style={{
                margin: 0,
                fontSize: 17,
                color: "var(--text-2)",
                lineHeight: 1.72,
              }}
            >
              Train it, match your brand, and launch it where customers need help.
            </motion.p>
          </div>
          <motion.a
            href="/docs"
            className="motion-link"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            style={{ color: "var(--accent)", fontSize: 14, fontWeight: 700, textDecoration: "none", paddingBottom: 8 }}
          >
            View workflow docs
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="mx-auto w-full max-w-sm min-w-0 overflow-hidden sm:max-w-none"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.48, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: "var(--card-hover-border)" }}
              style={{
                padding: 24,
                border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                borderRadius: 24,
                background: "color-mix(in srgb, var(--surface-2) 82%, transparent)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.06em", color: "var(--text-3)" }}>{step.step}</div>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, delay: index * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid color-mix(in srgb, var(--border) 72%, transparent)",
                    background: "color-mix(in srgb, var(--surface) 72%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  {React.createElement(stepIcons[index], { size: 17 })}
                </motion.div>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 24, lineHeight: 1.08, letterSpacing: "-0.04em", fontWeight: 760 }}>
                {step.title}
              </h3>
              <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.72, color: "var(--text-2)" }}>{step.description}</p>
              <StepVisual index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
