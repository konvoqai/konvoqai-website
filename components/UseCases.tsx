"use client";

import { motion } from "framer-motion";

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

interface UseCase {
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  items: string[];
}

const cases: UseCase[] = [
  {
    tag: "eCommerce",
    tagColor: "var(--cyan)",
    title: "Sell More, Support Less",
    desc: "Turn customer questions into conversions. Handle orders, returns, and product queries automatically, 24/7.",
    items: ["Answer product questions instantly", "Track & update orders in real-time", "Recover abandoned carts proactively"],
  },
  {
    tag: "SaaS",
    tagColor: "var(--violet)",
    title: "Reduce Churn, Scale Support",
    desc: "Deflect tickets, onboard users faster, and keep customers engaged without scaling your support team.",
    items: ["91% average ticket deflection", "In-app onboarding guidance", "Proactive churn prevention"],
  },
  {
    tag: "Real Estate",
    tagColor: "var(--rose)",
    title: "Qualify Leads 24/7",
    desc: "Never miss a buyer or seller. Konvoq qualifies leads, answers property questions, and books viewings automatically.",
    items: ["Qualify leads around the clock", "Schedule viewings automatically", "Property FAQs answered instantly"],
  },
  {
    tag: "Healthcare",
    tagColor: "var(--emerald)",
    title: "Patient Support at Scale",
    desc: "Securely handle patient queries, appointment booking, and FAQs while staying HIPAA compliant.",
    items: ["Appointment booking & reminders", "HIPAA-compliant data handling", "Secure intake collection"],
  },
  {
    tag: "Agencies",
    tagColor: "var(--amber)",
    title: "White-Label & Resell",
    desc: "Build AI chatbot products under your own brand. Resell to clients and create a new recurring revenue stream.",
    items: ["Full white-label on all plans", "Client management dashboard", "Custom pricing for your clients"],
  },
  {
    tag: "Education",
    tagColor: "var(--cyan)",
    title: "Student Support, Automated",
    desc: "Handle enrollment questions, guide students to resources, and provide round-the-clock academic support.",
    items: ["Enrollment & admissions Q&A", "Course guidance & scheduling", "Multilingual student support"],
  },
];

export default function UseCases() {
  return (
    <section id="cases" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>Use Cases</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            One platform.
            <br />
            <span className="grad-text">Every business type.</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.tag + c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3, borderColor: "var(--border-2)" }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                  display: "block",
                  color: c.tagColor,
                }}
              >
                {c.tag}
              </span>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  marginBottom: 10,
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {c.desc}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {c.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 13,
                      color: "var(--text-2)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 12, flexShrink: 0, marginTop: 1 }}>↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
