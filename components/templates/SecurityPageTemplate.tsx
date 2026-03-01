"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/templates/MarketingPageTemplate";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SecurityPageTemplate() {
  const [formState, setFormState] = useState({ email: "", submitted: false });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, submitted: true }));
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
          background: "linear-gradient(180deg, rgba(16,185,129,0.07) 0%, transparent 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(16,185,129,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Animated shield rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 200 + i * 120,
              height: 200 + i * 120,
              border: `1px solid rgba(16,185,129,${0.06 - i * 0.015})`,
              borderRadius: "50%",
              pointerEvents: "none",
            }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ position: "relative", zIndex: 1 }}
        >
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(16,185,129,0.15), var(--accent-muted-strong))",
                border: "2px solid rgba(16,185,129,0.3)",
                fontSize: 36,
                marginBottom: 24,
              }}
            >
              ðŸ›¡ï¸
            </div>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}
          >
            Security is Our{" "}
            <span className="grad-text">Top Priority</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--text-2)", fontSize: 18, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}
          >
            Konvoq AI is built from the ground up with enterprise-grade security, compliance, and
            reliability to protect your data and your users.
          </motion.p>

          {/* Security badges */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}
          >
            {[
              { label: "SOC 2 Type II", color: "var(--emerald)" },
              { label: "GDPR Compliant", color: "var(--accent)" },
              { label: "HIPAA Ready", color: "var(--accent-strong)" },
              { label: "ISO 27001", color: "var(--amber)" },
            ].map(({ label, color }) => (
              <span
                key={label}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: `1px solid ${color}40`,
                  background: `${color}10`,
                  color,
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                âœ“ {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications */}
      <Section label="Certifications" title="Industry-Leading Compliance" dim>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}
        >
          {[
            {
              icon: "ðŸ†",
              title: "SOC 2 Type II",
              color: "var(--emerald)",
              desc: "Annual third-party audit verifying our security, availability, processing integrity, confidentiality, and privacy controls.",
            },
            {
              icon: "ðŸ‡ªðŸ‡º",
              title: "GDPR Compliant",
              color: "var(--accent)",
              desc: "Full compliance with the EU General Data Protection Regulation including DPA, data subject rights, and transfer mechanisms.",
            },
            {
              icon: "ðŸ¥",
              title: "HIPAA Ready",
              color: "var(--accent-strong)",
              desc: "Healthcare customers can sign a BAA. Our platform supports HIPAA-compliant deployment configurations for protected health information.",
            },
            {
              icon: "ðŸŒ",
              title: "ISO 27001",
              color: "var(--amber)",
              desc: "Information security management system certified to ISO/IEC 27001:2022 international standard.",
            },
          ].map(({ icon, title, color, desc }) => (
            <motion.div
              key={title}
              variants={cardIn}
              style={{
                padding: "32px 28px",
                background: "var(--surface-2)",
                border: `1px solid ${color}25`,
                borderRadius: "var(--radius-xl)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: `radial-gradient(circle at 100% 0%, ${color}12 0%, transparent 70%)`,
                }}
              />
              <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>{icon}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color, marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Infrastructure Security */}
      <Section label="Infrastructure" title="Cloud-Native, Battle-Hardened Infrastructure">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {[
            { icon: "â˜ï¸", title: "AWS Infrastructure", stat: "99.99%", statLabel: "Uptime SLA", desc: "Hosted on Amazon Web Services â€” the world's most secure and reliable cloud provider. We leverage AWS Shield, WAF, and Security Hub." },
            { icon: "ðŸŒ", title: "Multi-Region", stat: "5+", statLabel: "Global Regions", desc: "Data replicated across multiple AWS regions for disaster recovery, data residency compliance, and low-latency access worldwide." },
            { icon: "âš¡", title: "99.99% Uptime SLA", stat: "<100ms", statLabel: "Avg. Latency", desc: "Enterprise SLA with financial-backed guarantees. Real-time status at status.konvoq.ai. Automatic failover in under 30 seconds." },
          ].map(({ icon, title, stat, statLabel, desc }) => (
            <motion.div
              key={title}
              variants={cardIn}
              style={{
                padding: "32px 28px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 32 }}>{icon}</span>
              <div
                style={{
                  padding: "12px 20px",
                  background: "var(--surface-3)",
                  borderRadius: "var(--radius)",
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                <p style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{stat}</p>
                <p style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>{statLabel}</p>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700 }}>{title}</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Data Security */}
      <Section label="Data Security" title="Your Data Is Encrypted End-to-End" dim>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {[
            { icon: "ðŸ”’", title: "AES-256 at Rest", color: "var(--accent)", desc: "All stored data â€” conversations, configs, user records â€” encrypted using AES-256-GCM, the same standard used by financial institutions." },
            { icon: "ðŸ”", title: "TLS 1.3 in Transit", color: "var(--accent-strong)", desc: "All data transmitted using TLS 1.3 with perfect forward secrecy. Older cipher suites are disabled. HSTS enforced across all endpoints." },
            { icon: "ðŸ•³ï¸", title: "Zero-Knowledge Architecture", color: "var(--emerald)", desc: "Conversation data is processed ephemerally for AI responses. We do not train our models on your private conversations without explicit consent." },
          ].map(({ icon, title, color, desc }) => (
            <motion.div
              key={title}
              variants={cardIn}
              style={{
                padding: "32px 28px",
                background: "linear-gradient(135deg, var(--surface-2) 0%, var(--surface-3) 100%)",
                border: `1px solid ${color}30`,
                borderRadius: "var(--radius-xl)",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "var(--radius)",
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 20,
                }}
              >
                {icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color, marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Access Controls */}
      <Section label="Access Controls" title="Enterprise Identity & Access Management">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {[
            { icon: "ðŸ”‘", title: "SSO / SAML 2.0", desc: "Single sign-on via SAML 2.0, OAuth 2.0, and OIDC. Integrates with Okta, Azure AD, Google Workspace, and any SAML-compliant IdP." },
            { icon: "ðŸ‘¥", title: "Role-Based Access Control", desc: "Granular RBAC with custom roles. Assign permissions at the workspace, project, and resource level. Full audit trail of all access events." },
            { icon: "ðŸ“±", title: "MFA Enforcement", desc: "Require MFA for all team members. Supports authenticator apps (TOTP), hardware keys (FIDO2/WebAuthn), and SMS fallback." },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardIn}
              style={{
                padding: "32px 28px",
                background: "var(--surface-2)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <span style={{ fontSize: 32, display: "block", marginBottom: 16 }}>{icon}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Incident Response */}
      <Section label="Incident Response" title="Always-On Security Operations" dim>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 24, alignItems: "stretch" }}
        >
          <motion.div
            variants={cardIn}
            style={{
              padding: "40px",
              background: "linear-gradient(135deg, rgba(91, 140, 255, 0.1) 0%, rgba(122, 162, 255, 0.07) 100%)",
              border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(91, 140, 255, 0.18)",
                border: "1px solid rgba(91, 140, 255, 0.32)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              ðŸ‘ï¸
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700 }}>24/7 Security Monitoring</h3>
            <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.7 }}>
              Our security operations center monitors all systems around the clock using SIEM, intrusion detection, and
              anomaly detection powered by AI. Every event is logged, analyzed, and retained for 1 year.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["SIEM", "IDS/IPS", "WAF", "DDoS Protection"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "4px 12px",
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(91, 140, 255, 0.24)",
                    borderRadius: 999,
                    fontSize: 12,
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={cardIn}
            style={{
              padding: "32px 28px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 36 }}>âš¡</span>
            <p style={{ fontSize: 40, fontWeight: 800, color: "var(--emerald)" }}>&lt;1h</p>
            <p style={{ color: "var(--text-2)", fontSize: 14 }}>Incident Response Time</p>
          </motion.div>
          <motion.div
            variants={cardIn}
            style={{
              padding: "32px 28px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 36 }}>ðŸ“Š</span>
            <p style={{ fontSize: 18, fontWeight: 700 }}>Public Status Page</p>
            <a
              href="https://status.konvoq.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                fontSize: 14,
                textDecoration: "none",
                padding: "8px 16px",
                border: "1px solid rgba(91, 140, 255, 0.32)",
                borderRadius: 999,
              }}
            >
              status.konvoq.ai â†’
            </a>
          </motion.div>
        </motion.div>
      </Section>

      {/* Pen Testing + Vuln Disclosure */}
      <Section label="Vulnerability Program" title="Responsible Security Research">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          <motion.div
            variants={cardIn}
            style={{
              padding: "36px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>ðŸ§ª</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Quarterly Penetration Testing</h3>
            <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              We engage independent, certified third-party security firms to conduct comprehensive penetration tests
              every quarter â€” covering our web application, API, infrastructure, and mobile surfaces.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Network & infrastructure testing", "Web application (OWASP Top 10)", "API security assessment", "Social engineering simulation"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "var(--text-2)" }}>
                  <span style={{ color: "var(--emerald)", fontWeight: 700 }}>âœ“</span> {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={cardIn}
            style={{
              padding: "36px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>ðŸ”Ž</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Vulnerability Disclosure Program</h3>
            <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              We welcome responsible disclosure of security vulnerabilities from the security research community.
              Researchers who report valid findings are recognized in our Hall of Fame.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 20 }}>ðŸ“§</span>
                <a href="mailto:security@konvoq.ai" style={{ color: "var(--accent)", fontWeight: 600 }}>
                  security@konvoq.ai
                </a>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-2)" }}>
                Please include proof-of-concept, impact assessment, and steps to reproduce. We commit to a 72-hour
                acknowledgment and 90-day resolution target.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Download SOC 2 */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>ðŸ“„</span>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Download Our{" "}
            <span className="grad-text">SOC 2 Report</span>
          </h2>
          <p style={{ color: "var(--text-2)", marginBottom: 32, lineHeight: 1.7 }}>
            Request a copy of our most recent SOC 2 Type II audit report. Available to enterprise prospects and
            customers under NDA.
          </p>
          {formState.submitted ? (
            <div
              style={{
                padding: "24px",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "var(--radius-lg)",
                color: "var(--emerald)",
                fontWeight: 600,
              }}
            >
              âœ“ Request received! We&apos;ll send the report to your email within 1 business day.
            </div>
          ) : (
            <form
              onSubmit={handleDownload}
              style={{ display: "flex", gap: 12, maxWidth: 440, margin: "0 auto" }}
            >
              <input
                type="email"
                required
                placeholder="Work email address"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-2)",
                  borderRadius: "var(--radius)",
                  color: "var(--text-1)",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  background: "var(--grad-btn)",
                  border: "none",
                  borderRadius: "var(--radius)",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Request Report
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </PageLayout>
  );
}

/* â”€â”€â”€ Section wrapper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function Section({
  label,
  title,
  children,
  dim,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  dim?: boolean;
}) {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: dim ? "var(--surface)" : "var(--black)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--emerald)",
              marginBottom: 12,
            }}
          >
            {label}
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}


