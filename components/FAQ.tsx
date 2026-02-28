"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
        marginBottom: 20,
      }}
    >
      <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

const faqs = [
  {
    q: "What is Konvoq and how does it work?",
    a: "Konvoq is an AI chatbot platform that trains a custom chatbot on your website, documents, and data. Connect your sources, customize the personality, embed one line of code — live in under 3 minutes.",
  },
  {
    q: "How do I train an AI chatbot on my website?",
    a: "Paste your website URL and Konvoq automatically crawls and learns your content. You can also upload PDFs, Word docs, CSVs, or connect Google Drive. Content auto-resyncs when you update it.",
  },
  {
    q: "Which AI models does Konvoq support?",
    a: "GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), and Gemini 1.5 Pro (Google). Choose per-chatbot, or let Konvoq auto-select the best model for each use case.",
  },
  {
    q: "Is Konvoq GDPR and HIPAA compliant?",
    a: "Yes. SOC 2 Type II certified, GDPR compliant, and HIPAA-ready. All data encrypted at rest and in transit. Full data retention control and deletion on request.",
  },
  {
    q: "Can I white-label Konvoq for my clients?",
    a: "Yes — and it's included on all paid plans, not a premium addon. Use your own logo, domain, brand colors, and bot name. Agencies manage all client bots from one dashboard.",
  },
  {
    q: "How does Konvoq compare to Chatbase and Tidio?",
    a: "Konvoq offers multi-LLM support, white-label on all plans, deeper revenue analytics, and faster setup — at a lower price. Chatbase charges extra for white-label. Tidio is legacy live chat with AI bolted on.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Konvoq is built for non-technical users. Add your chatbot with one paste-and-go embed code. One-click plugins available for Shopify, WordPress, and Webflow.",
  },
  {
    q: "What languages does Konvoq support?",
    a: "95+ languages, auto-detected from the visitor. Train in English, respond in any language — no configuration needed.",
  },
];

function FAQItem({ faq, delay }: { faq: { q: string; a: string }; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: "var(--surface)",
        border: `1px solid ${open ? "var(--border-2)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "20px 24px",
          fontSize: 15,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          color: "var(--text-1)",
          background: "none",
          border: "none",
          textAlign: "left" as const,
        }}
      >
        {faq.q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: "var(--text-3)", fontSize: 18, flexShrink: 0, marginLeft: 16 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 24px 20px",
                fontSize: 14,
                color: "var(--text-2)",
                lineHeight: 1.8,
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Questions answered
            <br />
            <span className="grad-text">before you ask them</span>
          </h2>
        </motion.div>

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
