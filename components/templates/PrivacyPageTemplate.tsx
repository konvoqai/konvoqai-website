"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/templates/MarketingPageTemplate";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "data-retention", title: "Data Retention" },
  { id: "security-measures", title: "Security Measures" },
  { id: "your-rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "policy-changes", title: "Changes to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function PrivacyPageTemplate() {
  const [activeSection, setActiveSection] = useState("information-we-collect");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, var(--accent-muted) 0%, transparent 100%)",
          borderBottom: "1px solid var(--border)",
          padding: "80px 24px 64px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-muted) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ position: "relative", zIndex: 1 }}
        >
          <motion.div variants={fadeUp}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid var(--border-2)",
                background: "var(--accent-muted)",
                color: "var(--accent)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              <span>ðŸ”’</span> Legal
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Privacy{" "}
            <span className="grad-text">Policy</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--text-2)", fontSize: 17, marginBottom: 8 }}
          >
            Last updated: <strong style={{ color: "var(--text-1)" }}>February 28, 2026</strong>
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{
              color: "var(--text-2)",
              fontSize: 16,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            At Konvoq AI, your privacy is fundamental. This policy explains how we collect, use,
            and protect your personal information.
          </motion.p>
        </motion.div>
      </section>

      {/* Body */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 24px 100px",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* Sidebar TOC */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          style={{
            position: "sticky",
            top: 88,
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "24px 16px",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              marginBottom: 16,
              paddingLeft: 8,
            }}
          >
            Contents
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {sections.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: activeSection === id ? "var(--accent-muted)" : "transparent",
                  border: "none",
                  borderRadius: "var(--radius)",
                  padding: "8px 12px",
                  textAlign: "left",
                  cursor: "pointer",
                  color: activeSection === id ? "var(--accent)" : "var(--text-2)",
                  fontSize: 13,
                  fontWeight: activeSection === id ? 600 : 400,
                  transition: "all 0.2s",
                  borderLeft: activeSection === id
                    ? "2px solid var(--accent)"
                    : "2px solid transparent",
                }}
              >
                {title}
              </button>
            ))}
          </nav>
        </motion.aside>

        {/* Content */}
        <motion.main
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: 48 }}
        >
          <PolicySection id="information-we-collect" title="1. Information We Collect">
            <p>We collect information to provide and improve our AI chatbot platform. The types of information we collect include:</p>
            <SubSection title="Conversation Data">
              <p>When you interact with Konvoq AI or build chatbots using our platform, we may process the content of those conversations to deliver the service. This includes messages sent to and from your chatbots, conversation history, and metadata such as timestamps.</p>
            </SubSection>
            <SubSection title="Account Information">
              <p>When you create an account, we collect your name, email address, password (stored as a cryptographic hash), billing information, company name, and any profile details you provide.</p>
            </SubSection>
            <SubSection title="Usage Data">
              <p>We automatically collect data about how you use our platform: pages visited, features used, session duration, click patterns, error logs, API call frequency, and performance metrics.</p>
            </SubSection>
            <SubSection title="Cookies & Tracking">
              <p>We use cookies and similar technologies to maintain sessions, remember your preferences, and analyze traffic. See our <a href="/cookies" style={{ color: "var(--accent)" }}>Cookie Policy</a> for details.</p>
            </SubSection>
          </PolicySection>

          <PolicySection id="how-we-use" title="2. How We Use Your Information">
            <InfoGrid items={[
              { icon: "âš™ï¸", title: "Service Delivery", text: "To operate, maintain, and provide all features of the Konvoq AI platform." },
              { icon: "ðŸ“ˆ", title: "Improvements", text: "To analyze usage patterns and improve our AI models, features, and user experience." },
              { icon: "ðŸ›¡ï¸", title: "Security", text: "To detect fraud, abuse, and security threats, and to enforce our Terms of Service." },
              { icon: "âš–ï¸", title: "Legal Compliance", text: "To comply with applicable laws, regulations, court orders, and legal processes." },
              { icon: "ðŸ“§", title: "Communications", text: "To send you service updates, security alerts, and marketing communications (with opt-out)." },
              { icon: "ðŸ’°", title: "Billing", text: "To process payments, manage subscriptions, and send invoices." },
            ]} />
          </PolicySection>

          <PolicySection id="data-sharing" title="3. Data Sharing">
            <HighlightBox color="var(--emerald)">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes. Ever.
            </HighlightBox>
            <p style={{ marginTop: 20 }}>We may share your information only in these limited circumstances:</p>
            <SubSection title="Service Providers">
              <p>We work with trusted third-party vendors who process data on our behalf under strict data processing agreements:</p>
              <TagList items={["AWS (Infrastructure)", "Stripe (Payments)", "Sendgrid (Email)", "Datadog (Monitoring)", "Cloudflare (CDN/Security)"]} />
            </SubSection>
            <SubSection title="Legal Requirements">
              <p>We may disclose information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, safety, or property of Konvoq AI, our users, or the public.</p>
            </SubSection>
            <SubSection title="Business Transfers">
              <p>If Konvoq AI is acquired or merged, your information may be transferred as part of that transaction. We will notify you via email before your data is transferred and becomes subject to a different privacy policy.</p>
            </SubSection>
          </PolicySection>

          <PolicySection id="data-retention" title="4. Data Retention">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
              <RetentionCard
                plan="Free Plan"
                duration="30 Days"
                color="var(--text-2)"
                desc="Conversation history and session data retained for 30 days after creation."
              />
              <RetentionCard
                plan="Paid Plans"
                duration="1 Year"
                color="var(--accent)"
                desc="Full conversation history and analytics retained for 12 months."
              />
            </div>
            <p style={{ marginTop: 20, color: "var(--text-2)" }}>
              Account data is retained for the duration of your account plus 90 days after closure for legal and billing purposes. You may request deletion of your data at any time â€” see Your Rights below. Backups may retain data for up to 30 additional days.
            </p>
          </PolicySection>

          <PolicySection id="security-measures" title="5. Security Measures">
            <p>We implement industry-leading security practices to protect your data:</p>
            <InfoGrid items={[
              { icon: "ðŸ†", title: "SOC 2 Type II", text: "Annually audited for security, availability, and confidentiality controls." },
              { icon: "ðŸ”", title: "Encryption at Rest", text: "All stored data is encrypted using AES-256 encryption." },
              { icon: "ðŸ”’", title: "Encryption in Transit", text: "All data transmitted over TLS 1.3 with perfect forward secrecy." },
              { icon: "ðŸ‘¤", title: "Access Controls", text: "Strict role-based access controls and least-privilege principles." },
              { icon: "ðŸ”‘", title: "MFA", text: "Multi-factor authentication required for all Konvoq AI team members." },
              { icon: "ðŸ§ª", title: "Pen Testing", text: "Quarterly penetration testing by independent third-party security firms." },
            ]} />
          </PolicySection>

          <PolicySection id="your-rights" title="6. Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              {[
                { right: "Right to Access", desc: "Request a copy of all personal data we hold about you." },
                { right: "Right to Correction", desc: "Request correction of inaccurate or incomplete data." },
                { right: "Right to Deletion", desc: "Request deletion of your personal data ('right to be forgotten')." },
                { right: "Right to Portability", desc: "Receive your data in a structured, machine-readable format." },
                { right: "Right to Opt-Out", desc: "Opt out of marketing communications at any time." },
                { right: "Right to Object", desc: "Object to processing based on legitimate interests." },
              ].map(({ right, desc }) => (
                <div
                  key={right}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "16px 20px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <div style={{ width: 6, borderRadius: 3, background: "var(--grad-btn)", flexShrink: 0, minHeight: 24 }} />
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: 4 }}>{right}</p>
                    <p style={{ color: "var(--text-2)", fontSize: 14 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 20, color: "var(--text-2)" }}>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:privacy@konvoq.ai" style={{ color: "var(--accent)" }}>privacy@konvoq.ai</a>.
              We will respond within 30 days.
            </p>
          </PolicySection>

          <PolicySection id="cookies" title="7. Cookies">
            <p>We use cookies and similar tracking technologies to improve your experience:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              {[
                { name: "Session Cookies", purpose: "Maintain your login session and authentication state.", required: true },
                { name: "Analytics Cookies", purpose: "Understand how users interact with our platform to improve it.", required: false },
                { name: "Preference Cookies", purpose: "Remember your settings like language, theme, and dashboard layout.", required: false },
              ].map(({ name, purpose, required }) => (
                <div
                  key={name}
                  style={{
                    padding: "16px 20px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: 4 }}>{name}</p>
                    <p style={{ color: "var(--text-2)", fontSize: 14 }}>{purpose}</p>
                  </div>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      background: required ? "var(--accent-muted-strong)" : "rgba(161,161,170,0.1)",
                      color: required ? "var(--accent)" : "var(--text-2)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {required ? "Required" : "Optional"}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 16, color: "var(--text-2)" }}>
              See our full <a href="/cookies" style={{ color: "var(--accent)" }}>Cookie Policy</a> for detailed information.
            </p>
          </PolicySection>

          <PolicySection id="childrens-privacy" title="8. Children's Privacy">
            <HighlightBox color="var(--amber)">
              Konvoq AI is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
            </HighlightBox>
            <p style={{ marginTop: 16, color: "var(--text-2)" }}>
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us at{" "}
              <a href="mailto:privacy@konvoq.ai" style={{ color: "var(--accent)" }}>privacy@konvoq.ai</a>{" "}
              and we will delete such information from our systems promptly. Users between 13 and 18 must have parental consent before using our platform.
            </p>
          </PolicySection>

          <PolicySection id="policy-changes" title="9. Changes to This Policy">
            <p style={{ color: "var(--text-2)", lineHeight: 1.8 }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
            </p>
            <ul style={{ color: "var(--text-2)", lineHeight: 1.8, paddingLeft: 20, marginTop: 12 }}>
              <li>Update the "Last Updated" date at the top of this page</li>
              <li>Send an email notification to registered users</li>
              <li>Display a prominent notice in the dashboard</li>
              <li>Provide at least 30 days notice before changes take effect</li>
            </ul>
            <p style={{ color: "var(--text-2)", lineHeight: 1.8, marginTop: 12 }}>
              Your continued use of Konvoq AI after the effective date of changes constitutes your acceptance of the revised Privacy Policy.
            </p>
          </PolicySection>

          <PolicySection id="contact-us" title="10. Contact Us">
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
              }}
            >
              <p style={{ color: "var(--text-2)", marginBottom: 24, lineHeight: 1.8 }}>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <ContactItem label="Email" value="privacy@konvoq.ai" href="mailto:privacy@konvoq.ai" />
                <ContactItem label="DPO Email" value="dpo@konvoq.ai" href="mailto:dpo@konvoq.ai" />
                <ContactItem label="Address" value="Konvoq AI, Inc. â€” 1209 Orange St, Wilmington, DE 19801, USA" />
              </div>
            </div>
          </PolicySection>
        </motion.main>
      </div>
    </PageLayout>
  );
}

/* â”€â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      style={{ scrollMarginTop: 100 }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 20,
          paddingBottom: 12,
          borderBottom: "1px solid var(--border)",
          color: "var(--text-1)",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "var(--text-2)", lineHeight: 1.8, fontSize: 15, display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </motion.section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 8 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-1)", marginBottom: 8 }}>{title}</h3>
      {children}
    </div>
  );
}

function InfoGrid({ items }: { items: { icon: string; title: string; text: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16,
        marginTop: 16,
      }}
    >
      {items.map(({ icon, title, text }) => (
        <div
          key={title}
          style={{
            padding: "20px",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
          }}
        >
          <span style={{ fontSize: 24, display: "block", marginBottom: 10 }}>{icon}</span>
          <p style={{ fontWeight: 600, color: "var(--text-1)", marginBottom: 6, fontSize: 14 }}>{title}</p>
          <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.6 }}>{text}</p>
        </div>
      ))}
    </div>
  );
}

function HighlightBox({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "16px 20px",
        background: `${color}10`,
        border: `1px solid ${color}30`,
        borderRadius: "var(--radius)",
        borderLeft: `3px solid ${color}`,
        color: "var(--text-1)",
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            padding: "4px 12px",
            background: "var(--surface-3)",
            border: "1px solid var(--border)",
            borderRadius: 999,
            fontSize: 12,
            color: "var(--text-2)",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function RetentionCard({
  plan,
  duration,
  color,
  desc,
}: {
  plan: string;
  duration: string;
  color: string;
  desc: string;
}) {
  return (
    <div
      style={{
        padding: "24px",
        background: "var(--surface-2)",
        border: `1px solid ${color}30`,
        borderRadius: "var(--radius-lg)",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 8 }}>{plan}</p>
      <p style={{ fontSize: 36, fontWeight: 800, color, marginBottom: 8 }}>{duration}</p>
      <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--text-3)",
          minWidth: 80,
          paddingTop: 2,
        }}
      >
        {label}
      </span>
      {href ? (
        <a href={href} style={{ color: "var(--accent)", fontWeight: 500 }}>
          {value}
        </a>
      ) : (
        <span style={{ color: "var(--text-1)" }}>{value}</span>
      )}
    </div>
  );
}


