"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";

const faqs = [
  {
    question: "What can we train the agent on?",
    answer: "Website pages, help center content, product docs, onboarding notes, and other structured sources can be connected into one retrieval layer.",
  },
  {
    question: "Can the assistant escalate to a human?",
    answer: "Yes. You can route by urgency, buying intent, account tier, or topic, and pass a structured summary to the assigned owner.",
  },
  {
    question: "Does this work for support and sales?",
    answer: "That is the intended model. The same assistant can resolve support questions, qualify interest, and surface revenue opportunities.",
  },
  {
    question: "Can we customize the visual layer?",
    answer: "Yes. Teams can tune prompts, colors, widget framing, welcome states, and escalation language to match their product experience.",
  },
  {
    question: "How long does rollout usually take?",
    answer: "Most teams can connect sources and launch a working experience in a day, then iterate on routing and quality over time.",
  },
  {
    question: "Is this built for larger teams too?",
    answer: "Yes. Governance, role controls, analytics, and enterprise routing workflows are part of the product direction from the start.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "110px 24px" }}>
      <div className="site-container">
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 24 }}>
          <SectionHeader
            badge="Questions answered"
            heading={<>The questions teams usually ask before rollout.</>}
            description={<>A short overview of how the system fits into support, growth, and operational workflows.</>}
            align="left"
            style={{ margin: 0 }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.question}
                  style={{
                    padding: 20,
                    border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
                    borderRadius: 22,
                    background: open ? "color-mix(in srgb, var(--surface-2) 84%, transparent)" : "color-mix(in srgb, var(--surface) 74%, transparent)",
                    boxShadow: open ? "var(--shadow-card)" : "none",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-1)",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    <span>{faq.question}</span>
                    <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ fontSize: 20, color: "var(--text-2)" }}>
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ paddingTop: 12, color: "var(--text-2)", lineHeight: 1.72, fontSize: 15 }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
