"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const useCases = [
  {
    audience: "SaaS",
    title: "Deflect repetitive product questions without degrading tone.",
    description: "Keep onboarding and support moving while routing high-value accounts and upgrade intent to the right owner.",
  },
  {
    audience: "Commerce",
    title: "Handle order, return, and product questions at buying speed.",
    description: "Reduce drop-off by resolving pre-purchase hesitation before the visitor leaves the page.",
  },
  {
    audience: "Agencies",
    title: "Launch branded assistants across multiple client accounts.",
    description: "Operate many assistants from one control surface while preserving each client brand and workflow.",
  },
  {
    audience: "Enterprise support",
    title: "Create a consistent front door before tickets reach the queue.",
    description: "Standardize intake, capture context, and protect response quality during volume spikes.",
  },
];

// Cards alternate direction: left, right, left, right
const cardInitialX = [-16, 16, -16, 16];

export default function UseCasesSection() {
  return (
    <section id="cases" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Built for your team"
          heading={<>Flexible enough for different teams, consistent enough for one brand.</>}
          description={<>The same operating model adapts across support, growth, and onboarding, which means your assistant can expand without creating a fragmented customer experience.</>}
          style={{ marginBottom: 28 }}
        />

        {/* Asymmetric column widths — left column wider, subtly intentional */}
        <div style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: 14 }}>
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              className="section-surface"
              initial={{ opacity: 0, x: cardInitialX[index] }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.46, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{ padding: 24 }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 12 }}>
                {item.audience}
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 24, lineHeight: 1.08, letterSpacing: "-0.04em", fontWeight: 760 }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, color: "var(--text-2)", lineHeight: 1.72 }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
