"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/templates/MarketingPageTemplate";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const gdprRights = [
  {
    icon: "ðŸ‘ï¸",
    title: "Right to Access",
    color: "var(--accent)",
    desc: "Request a complete copy of all personal data we hold about you, including how it is processed and why.",
  },
  {
    icon: "âœï¸",
    title: "Right to Rectification",
    color: "var(--accent-strong)",
    desc: "Request correction of inaccurate or incomplete personal data without undue delay.",
  },
  {
    icon: "ðŸ—‘ï¸",
    title: "Right to Erasure",
    color: "var(--danger)",
    desc: "Request deletion of your personal data (the 'right to be forgotten') when it is no longer necessary.",
  },
  {
    icon: "ðŸ“¦",
    title: "Right to Portability",
    color: "var(--emerald)",
    desc: "Receive your data in a structured, machine-readable format and transfer it to another controller.",
  },
  {
    icon: "â¸ï¸",
    title: "Right to Restrict Processing",
    color: "var(--amber)",
    desc: "Request that we restrict processing of your data under certain circumstances.",
  },
  {
    icon: "ðŸš«",
    title: "Right to Object",
    color: "var(--text-2)",
    desc: "Object to processing based on legitimate interests or for direct marketing purposes at any time.",
  },
];

const commitments = [
  {
    icon: "ðŸŽ¯",
    title: "Data Minimization",
    desc: "We collect only the personal data that is strictly necessary for the purposes for which it is processed.",
    color: "var(--accent)",
  },
  {
    icon: "ðŸ“œ",
    title: "Lawful Basis",
    desc: "Every processing activity has a documented lawful basis: consent, contract, legal obligation, or legitimate interest.",
    color: "var(--accent-strong)",
  },
  {
    icon: "âš–ï¸",
    title: "Data Subject Rights",
    desc: "We have processes and tooling to honor all GDPR data subject rights within the required 30-day window.",
    color: "var(--emerald)",
  },
  {
    icon: "ðŸ—ï¸",
    title: "Privacy by Design",
    desc: "Data protection is baked into our engineering process from day one, not bolted on as an afterthought.",
    color: "var(--amber)",
  },
];

export default function GdprPageTemplate() {
  const [form, setForm] = useState({ email: "", type: "access", details: "", submitted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm((s) => ({ ...s, submitted: true }));
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          padding: "100px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(122, 162, 255, 0.09) 0%, transparent 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(122, 162, 255, 0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* EU Stars decoration */}
        <div
          style={{
            position: "absolute",
            top: 32,
            right: "15%",
            fontSize: 80,
            opacity: 0.06,
            pointerEvents: "none",
          }}
        >
          ðŸ‡ªðŸ‡º
        </div>

        <motion.div variants={stagger} initial="hidden" animate="visible" style={{ position: "relative", zIndex: 1 }}>
          <motion.div variants={fadeUp}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(122, 162, 255, 0.3)",
                background: "rgba(122, 162, 255, 0.12)",
                color: "var(--accent-strong)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              <span>ðŸ‡ªðŸ‡º</span> Compliance
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}
          >
            GDPR Compliant{" "}
            <span className="grad-text">by Design</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--text-2)", fontSize: 18, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}
          >
            Konvoq AI is committed to full compliance with the European Union's General Data Protection Regulation.
            Your rights as a data subject are fully respected and enforced.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#dpa"
              style={{
                padding: "12px 28px",
                background: "var(--grad-btn)",
                borderRadius: "var(--radius)",
                color: "#000",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Download DPA
            </a>
            <a
              href="#rights-form"
              style={{
                padding: "12px 28px",
                background: "transparent",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius)",
                color: "var(--text-1)",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Submit a Rights Request
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Commitments */}
      <section style={{ padding: "80px 24px", background: "var(--black)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-strong)", marginBottom: 12 }}>
              Our Commitments
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>
              GDPR Compliance is Core to Our Mission
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
          >
            {commitments.map(({ icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={cardIn}
                style={{
                  padding: "32px 24px",
                  background: "var(--surface-2)",
                  border: `1px solid ${color}20`,
                  borderRadius: "var(--radius-xl)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    margin: "0 auto 20px",
                  }}
                >
                  {icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color, marginBottom: 12 }}>{title}</h3>
                <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GDPR Rights */}
      <section style={{ padding: "80px 24px", background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Your Rights
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>Your Rights Under GDPR</h2>
            <p style={{ color: "var(--text-2)", marginTop: 12, maxWidth: 540, margin: "12px auto 0" }}>
              As a data subject under GDPR, you have extensive rights over your personal data. We honor all of them.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          >
            {gdprRights.map(({ icon, title, color, desc }) => (
              <motion.div
                key={title}
                variants={cardIn}
                style={{
                  padding: "28px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius)",
                    background: `${color}12`,
                    border: `1px solid ${color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color, marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: "center", color: "var(--text-2)", marginTop: 32, fontSize: 14 }}
          >
            We respond to all data subject requests within{" "}
            <strong style={{ color: "var(--text-1)" }}>30 days</strong> as required by GDPR Article 12.
          </motion.p>
        </div>
      </section>

      {/* How We Handle Data */}
      <section style={{ padding: "80px 24px", background: "var(--black)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--emerald)", marginBottom: 12 }}>
              Data Handling
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 20 }}>
              How We Handle Your Data
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Lawful Basis Documentation", desc: "Every processing activity is documented with its lawful basis in our Records of Processing Activities (ROPA)." },
                { title: "Data Inventory", desc: "We maintain a complete inventory of all personal data we process, including purpose, retention period, and legal basis." },
                { title: "Impact Assessments", desc: "Data Protection Impact Assessments (DPIAs) are conducted for any high-risk processing activities." },
                { title: "Breach Notification", desc: "We notify supervisory authorities within 72 hours and affected individuals without undue delay in case of a data breach." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  style={{
                    padding: "16px 20px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <p style={{ fontWeight: 600, marginBottom: 6, color: "var(--text-1)", fontSize: 14 }}>{title}</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              style={{
                padding: "36px",
                background: "var(--surface-2)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>EU-US Data Transfers</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                We transfer personal data from the EU to the US under the following mechanisms in compliance with GDPR
                Chapter V:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { mechanism: "Standard Contractual Clauses (SCCs)", status: "Active", icon: "ðŸ“‹" },
                  { mechanism: "EU-US Data Privacy Framework", status: "Certified", icon: "ðŸ…" },
                  { mechanism: "Binding Corporate Rules", status: "In Progress", icon: "ðŸ”„" },
                ].map(({ mechanism, status, icon }) => (
                  <div
                    key={mechanism}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 16px",
                      background: "var(--surface-3)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span>{icon}</span>
                      <span style={{ fontSize: 13, color: "var(--text-1)" }}>{mechanism}</span>
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: 999,
                        background: status === "Active" || status === "Certified" ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)",
                        color: status === "Active" || status === "Certified" ? "var(--emerald)" : "var(--amber)",
                      }}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ color: "var(--text-2)", fontSize: 13, marginTop: 16, lineHeight: 1.6 }}>
                All sub-processors are bound by SCCs and our Data Processing Agreement. See our full sub-processor list
                at konvoq.ai/sub-processors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DPA Download */}
      <section
        id="dpa"
        style={{
          padding: "80px 24px",
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            maxWidth: 720,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-strong)", marginBottom: 12 }}>
              Data Processing Agreement
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Download Our DPA</h2>
            <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
              Our standard Data Processing Agreement is pre-signed and available for immediate download. Enterprise
              customers requiring custom DPAs can contact our legal team.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  background: "var(--grad-btn)",
                  borderRadius: "var(--radius)",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                <span>ðŸ“¥</span> Download DPA (PDF)
              </a>
              <a
                href="mailto:legal@konvoq.ai"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  background: "transparent",
                  border: "1px solid var(--border-2)",
                  borderRadius: "var(--radius)",
                  color: "var(--text-1)",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Request Custom DPA
              </a>
            </div>
          </div>
          <div
            style={{
              padding: "28px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p style={{ fontWeight: 700, marginBottom: 4 }}>DPO Contact</p>
            <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.6 }}>
              Our Data Protection Officer is available for all GDPR-related enquiries, including supervisory authority
              communications.
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 8 }}>
              <span style={{ fontSize: 20 }}>ðŸ“§</span>
              <a href="mailto:dpo@konvoq.ai" style={{ color: "var(--accent)", fontWeight: 600 }}>
                dpo@konvoq.ai
              </a>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 20 }}>ðŸ¢</span>
              <span style={{ fontSize: 13, color: "var(--text-2)" }}>Konvoq AI, Inc. â€” 1209 Orange St, Wilmington, DE 19801</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rights Request Form */}
      <section id="rights-form" style={{ padding: "80px 24px", background: "var(--black)" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ maxWidth: 560, margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Exercise Your Rights
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, marginBottom: 12 }}>
              Submit a Rights Request
            </h2>
            <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.7 }}>
              Submit your GDPR request below. We will respond within 30 days as required by law.
            </p>
          </div>

          {form.submitted ? (
            <div
              style={{
                padding: "32px",
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "var(--radius-xl)",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>âœ…</span>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Request Received</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                We&apos;ve received your request and will respond to <strong style={{ color: "var(--text-1)" }}>{form.email}</strong> within 30 days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                padding: "40px",
                background: "var(--surface-2)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-xl)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--text-2)" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--surface-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    color: "var(--text-1)",
                    fontSize: 15,
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--text-2)" }}>
                  Request Type *
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm((s) => ({ ...s, type: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--surface-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    color: "var(--text-1)",
                    fontSize: 15,
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="access">Right to Access</option>
                  <option value="rectification">Right to Rectification</option>
                  <option value="erasure">Right to Erasure</option>
                  <option value="portability">Right to Portability</option>
                  <option value="restrict">Right to Restrict Processing</option>
                  <option value="object">Right to Object</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--text-2)" }}>
                  Additional Details
                </label>
                <textarea
                  value={form.details}
                  onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))}
                  placeholder="Please provide any additional context to help us process your request..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--surface-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    color: "var(--text-1)",
                    fontSize: 15,
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "14px",
                  background: "var(--grad-btn)",
                  border: "none",
                  borderRadius: "var(--radius)",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Submit Request
              </button>
              <p style={{ fontSize: 12, color: "var(--text-3)", textAlign: "center", lineHeight: 1.6 }}>
                You may be asked to verify your identity before we process your request. We respond within 30 days.
              </p>
            </form>
          )}
        </motion.div>
      </section>
    </PageLayout>
  );
}


