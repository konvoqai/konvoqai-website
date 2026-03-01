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
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "description", title: "Description of Service" },
  { id: "account", title: "Account Registration" },
  { id: "acceptable-use", title: "Acceptable Use Policy" },
  { id: "billing", title: "Subscription & Billing" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "data-privacy", title: "Data Processing & Privacy" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact" },
];

export default function TermsPageTemplate() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, rgba(122, 162, 255, 0.12) 0%, transparent 100%)",
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(122, 162, 255, 0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
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
              <span>ðŸ“‹</span> Legal
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}
          >
            Terms of{" "}
            <span className="grad-text">Service</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ color: "var(--text-2)", fontSize: 17, marginBottom: 8 }}>
            Last updated: <strong style={{ color: "var(--text-1)" }}>February 28, 2026</strong>
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--text-2)", fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}
          >
            Please read these Terms of Service carefully before using the Konvoq AI platform. By
            accessing or using our service, you agree to be bound by these terms.
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
        {/* Sidebar */}
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
                  background: activeSection === id ? "rgba(122, 162, 255, 0.14)" : "transparent",
                  border: "none",
                  borderRadius: "var(--radius)",
                  padding: "8px 12px",
                  textAlign: "left",
                  cursor: "pointer",
                  color: activeSection === id ? "var(--accent-strong)" : "var(--text-2)",
                  fontSize: 13,
                  fontWeight: activeSection === id ? 600 : 400,
                  transition: "all 0.2s",
                  borderLeft: activeSection === id ? "2px solid var(--accent-strong)" : "2px solid transparent",
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
          <TermsSection id="acceptance" title="1. Acceptance of Terms">
            <p>
              By accessing or using Konvoq AI (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service
              (&ldquo;Terms&rdquo;) and our Privacy Policy. If you are using the Service on behalf of an organization,
              you represent that you have authority to bind that organization to these Terms.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Konvoq AI, Inc. (&ldquo;Konvoq&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). If you do not agree to these Terms, do not use
              the Service.
            </p>
          </TermsSection>

          <TermsSection id="description" title="2. Description of Service">
            <p>
              Konvoq AI provides a Software-as-a-Service (SaaS) AI chatbot platform that enables businesses to build,
              deploy, and manage intelligent conversational AI assistants. The platform includes:
            </p>
            <FeatureList items={[
              "AI-powered chatbot builder with no-code and code-first options",
              "Multi-channel deployment (website, mobile, API, messaging platforms)",
              "Conversation analytics and performance dashboards",
              "Integration marketplace with 100+ third-party services",
              "Team collaboration and workspace management tools",
              "Enterprise features including SSO, audit logs, and custom AI models",
            ]} />
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time with
              reasonable notice.
            </p>
          </TermsSection>

          <TermsSection id="account" title="3. Account Registration and Security">
            <p>To use the Service, you must create an account. You agree to:</p>
            <FeatureList items={[
              "Provide accurate, current, and complete registration information",
              "Maintain and promptly update your account information",
              "Maintain the security of your password and account credentials",
              "Accept responsibility for all activities that occur under your account",
              "Notify us immediately at security@konvoq.ai of any unauthorized account access",
            ]} />
            <InfoBox color="var(--amber)">
              You are responsible for all usage under your account, including by your team members and end users of your deployed chatbots. Shared account credentials are prohibited.
            </InfoBox>
          </TermsSection>

          <TermsSection id="acceptable-use" title="4. Acceptable Use Policy">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div
                style={{
                  padding: "24px",
                  background: "rgba(16,185,129,0.05)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p style={{ fontWeight: 700, color: "var(--emerald)", marginBottom: 12, fontSize: 14 }}>
                  âœ“ Permitted Uses
                </p>
                <ul style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.8, paddingLeft: 16 }}>
                  <li>Customer support automation</li>
                  <li>Lead generation and qualification</li>
                  <li>Internal helpdesk and HR assistants</li>
                  <li>E-commerce product recommendations</li>
                  <li>Educational and training applications</li>
                  <li>Content creation assistance</li>
                </ul>
              </div>
              <div
                style={{
                  padding: "24px",
                  background: "rgba(239, 68, 68, 0.07)",
                  border: "1px solid rgba(239, 68, 68, 0.22)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p style={{ fontWeight: 700, color: "var(--danger)", marginBottom: 12, fontSize: 14 }}>
                  âœ— Prohibited Uses
                </p>
                <ul style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.8, paddingLeft: 16 }}>
                  <li>Illegal, harmful, or fraudulent activities</li>
                  <li>Generating spam or deceptive content</li>
                  <li>Impersonating individuals or organizations</li>
                  <li>Collecting data without user consent</li>
                  <li>Bypassing security measures</li>
                  <li>Reverse engineering the platform</li>
                </ul>
              </div>
            </div>
            <p style={{ marginTop: 16, color: "var(--text-2)" }}>
              Violations of this Acceptable Use Policy may result in immediate suspension or termination of your account
              without refund.
            </p>
          </TermsSection>

          <TermsSection id="billing" title="5. Subscription and Billing">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
              {[
                { label: "Billing Cycle", value: "Monthly or Annual", icon: "ðŸ“…" },
                { label: "Auto-Renewal", value: "Enabled by default", icon: "ðŸ”„" },
                { label: "Money-Back", value: "30-day guarantee", icon: "ðŸ’°" },
              ].map(({ label, value, icon }) => (
                <div
                  key={label}
                  style={{
                    padding: "20px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{icon}</span>
                  <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                  <p style={{ fontWeight: 600, color: "var(--text-1)" }}>{value}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>Auto-Renewal:</strong> Subscriptions automatically renew at the end of each billing period. You
              may cancel at any time from your account settings; cancellation takes effect at the end of the current
              billing period.
            </p>
            <p>
              <strong>30-Day Money-Back Guarantee:</strong> If you are not satisfied within the first 30 days of a paid
              subscription, contact us at billing@konvoq.ai for a full refund. This applies to first-time subscribers
              only.
            </p>
            <p>
              <strong>Pricing Changes:</strong> We will provide at least 30 days advance notice of any price increases.
              Price changes take effect at the next renewal period.
            </p>
            <p>
              <strong>Taxes:</strong> Prices are exclusive of taxes. You are responsible for all applicable taxes,
              levies, or duties imposed by taxing authorities.
            </p>
          </TermsSection>

          <TermsSection id="intellectual-property" title="6. Intellectual Property">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div
                style={{
                  padding: "24px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p style={{ fontWeight: 700, color: "var(--accent)", marginBottom: 12 }}>Your Content</p>
                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                  You retain full ownership of all content you create, upload, or process through Konvoq AI â€” including
                  conversation flows, training data, documents, and chatbot configurations. You grant us a limited
                  license to process this content solely to provide the Service.
                </p>
              </div>
              <div
                style={{
                  padding: "24px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p style={{ fontWeight: 700, color: "var(--accent-strong)", marginBottom: 12 }}>Our Platform</p>
                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                  Konvoq AI retains all rights to the platform, including the software, AI models, user interface,
                  documentation, trademarks, and all related intellectual property. No license to our IP is granted
                  except as expressly stated in these Terms.
                </p>
              </div>
            </div>
            <p style={{ marginTop: 16, color: "var(--text-2)" }}>
              Feedback and suggestions you provide about our Service may be used by us without any obligation to you.
            </p>
          </TermsSection>

          <TermsSection id="data-privacy" title="7. Data Processing and Privacy">
            <p>
              By using Konvoq AI, you agree to our{" "}
              <a href="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</a>, which is incorporated into
              these Terms by reference.
            </p>
            <p>
              For enterprise customers subject to GDPR, CCPA, or similar regulations, we offer a Data Processing
              Agreement (DPA) upon request. Please contact{" "}
              <a href="mailto:legal@konvoq.ai" style={{ color: "var(--accent)" }}>legal@konvoq.ai</a> or download our
              standard DPA at <a href="/gdpr" style={{ color: "var(--accent)" }}>konvoq.ai/gdpr</a>.
            </p>
            <p>
              You represent that you have obtained all necessary consents from your end users to process their data
              using Konvoq AI's platform.
            </p>
          </TermsSection>

          <TermsSection id="liability" title="8. Limitation of Liability">
            <InfoBox color="var(--danger)">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, KONVOQ AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR DATA.
            </InfoBox>
            <p style={{ marginTop: 16 }}>
              In no event shall Konvoq AI&apos;s total liability to you for all claims exceed the greater of (a) the
              amount you paid for the Service in the twelve months prior to the claim, or (b) one hundred US dollars
              ($100).
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for
              incidental or consequential damages, so some of the above limitations may not apply to you.
            </p>
          </TermsSection>

          <TermsSection id="indemnification" title="9. Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless Konvoq AI, its officers, directors, employees, and
              agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses,
              or fees (including reasonable attorneys&apos; fees) arising from:
            </p>
            <FeatureList items={[
              "Your violation of these Terms of Service",
              "Your use of the Service in violation of applicable laws",
              "Your Content and the deployment of your chatbots to end users",
              "Your violation of any third-party rights, including intellectual property rights",
            ]} />
          </TermsSection>

          <TermsSection id="termination" title="10. Termination">
            <p>
              <strong>By You:</strong> You may terminate your account at any time through your account settings or by
              contacting support@konvoq.ai. Termination takes effect at the end of the current billing period.
            </p>
            <p>
              <strong>By Konvoq AI:</strong> We may suspend or terminate your account immediately and without notice
              if you violate these Terms, engage in fraudulent activity, pose a security risk, or if required by law.
            </p>
            <p>
              <strong>Effect of Termination:</strong> Upon termination, your access to the Service will cease. We
              will retain your data for 30 days after termination to allow you to export it, after which it will be
              permanently deleted.
            </p>
            <p>
              Sections relating to intellectual property, limitation of liability, indemnification, and governing law
              survive termination.
            </p>
          </TermsSection>

          <TermsSection id="governing-law" title="11. Governing Law">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "24px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span style={{ fontSize: 48 }}>âš–ï¸</span>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 8 }}>Delaware, USA</p>
                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                  without regard to its conflict of law provisions. Any legal action or proceeding shall be brought
                  exclusively in the federal or state courts located in Delaware, and you consent to personal
                  jurisdiction in those courts.
                </p>
              </div>
            </div>
            <p style={{ marginTop: 16, color: "var(--text-2)" }}>
              For disputes less than $10,000, either party may elect binding arbitration through the American
              Arbitration Association. Class action lawsuits are waived.
            </p>
          </TermsSection>

          <TermsSection id="contact" title="12. Contact">
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
              }}
            >
              <p style={{ color: "var(--text-2)", marginBottom: 24, lineHeight: 1.8 }}>
                For legal inquiries, questions about these Terms, or to request a Data Processing Agreement:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Legal Email", value: "legal@konvoq.ai", href: "mailto:legal@konvoq.ai" },
                  { label: "Support", value: "support@konvoq.ai", href: "mailto:support@konvoq.ai" },
                  { label: "Address", value: "Konvoq AI, Inc. â€” 1209 Orange St, Wilmington, DE 19801, USA" },
                ].map(({ label, value, href }) => (
                  <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
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
                      <a href={href} style={{ color: "var(--accent-strong)", fontWeight: 500 }}>{value}</a>
                    ) : (
                      <span style={{ color: "var(--text-1)" }}>{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TermsSection>
        </motion.main>
      </div>
    </PageLayout>
  );
}

/* â”€â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function TermsSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} variants={fadeUp} style={{ scrollMarginTop: 100 }}>
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

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-2)", fontSize: 14 }}>
          <span style={{ color: "var(--accent-strong)", fontWeight: 700, flexShrink: 0 }}>â†’</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "16px 20px",
        background: `${color}08`,
        border: `1px solid ${color}25`,
        borderLeft: `3px solid ${color}`,
        borderRadius: "var(--radius)",
        color: "var(--text-1)",
        fontSize: 14,
        lineHeight: 1.7,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}


