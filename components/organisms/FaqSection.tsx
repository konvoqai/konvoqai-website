"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";

const faqs = [
  {
    question: "How long does setup usually take?",
    answer: "Most teams can connect content, tune the assistant, and embed the widget in under three minutes. More advanced routing and governance settings can be layered in afterward.",
  },
  {
    question: "Can we use our own voice and escalation policy?",
    answer: "Yes. You can shape the assistant tone, define escalation conditions, and determine which conversations stay automated versus routed to a person.",
  },
  {
    question: "Does Konvoq work for both support and conversion?",
    answer: "That is the intended operating model. The assistant can answer support questions, qualify leads, capture intent, and route sales opportunities with context attached.",
  },
  {
    question: "Can we run Konvoq across multiple brands or client accounts?",
    answer: "Yes. The product is structured to support multiple assistants, multiple environments, and brand-specific presentation without creating operational sprawl.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="FAQ"
          heading={<>A few things teams usually ask before rollout.</>}
          description={<>The questions below come up often when support and growth teams are evaluating how an assistant should fit into their existing workflow.</>}
          style={{ marginBottom: 28 }}
        />

        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="section-surface" style={{ overflow: "hidden" }}>
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
                    padding: "20px 22px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-1)",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {faq.question}
                  <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ fontSize: 20, color: "var(--text-3)" }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 22px 20px", color: "var(--text-2)", lineHeight: 1.75, fontSize: 15 }}>
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
    </section>
  );
}

