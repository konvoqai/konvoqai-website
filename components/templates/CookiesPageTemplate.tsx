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

type CookieCategory = {
  id: string;
  label: string;
  required: boolean;
  defaultEnabled: boolean;
  color: string;
  icon: string;
  desc: string;
  cookies: { name: string; provider: string; purpose: string; duration: string }[];
};

const cookieCategories: CookieCategory[] = [
  {
    id: "necessary",
    label: "Strictly Necessary",
    required: true,
    defaultEnabled: true,
    color: "var(--emerald)",
    icon: "ðŸ”’",
    desc: "These cookies are essential for the website to function correctly and cannot be disabled. They are usually set in response to actions you take such as logging in or filling in forms.",
    cookies: [
      { name: "witzo_access_token", provider: "Konvoq AI", purpose: "Stores your authentication token for secure login sessions", duration: "15 minutes" },
      { name: "witzo_refresh_token", provider: "Konvoq AI", purpose: "Allows automatic renewal of your authentication session", duration: "7 days" },
      { name: "csrf_token", provider: "Konvoq AI", purpose: "Prevents cross-site request forgery attacks", duration: "24 hours" },
      { name: "__session", provider: "Konvoq AI", purpose: "Maintains your user session across page loads", duration: "Session" },
    ],
  },
  {
    id: "analytics",
    label: "Performance & Analytics",
    required: false,
    defaultEnabled: true,
    color: "var(--accent)",
    icon: "ðŸ“Š",
    desc: "These cookies help us understand how visitors interact with our website by collecting anonymous information. The data is aggregated and does not identify any individual.",
    cookies: [
      { name: "_ga", provider: "Google Analytics", purpose: "Distinguishes unique users and sessions for traffic analysis", duration: "2 years" },
      { name: "_ga_*", provider: "Google Analytics", purpose: "Maintains session state for Google Analytics 4", duration: "2 years" },
      { name: "ph_*", provider: "PostHog", purpose: "Product analytics and user behavior tracking", duration: "1 year" },
      { name: "_dd_s", provider: "Datadog", purpose: "Real user monitoring and performance tracking", duration: "Session" },
    ],
  },
  {
    id: "functional",
    label: "Functional",
    required: false,
    defaultEnabled: true,
    color: "var(--accent-strong)",
    icon: "âš™ï¸",
    desc: "Functional cookies enable enhanced functionality and personalization, such as remembering your language preference, theme, and dashboard layout.",
    cookies: [
      { name: "konvoq_theme", provider: "Konvoq AI", purpose: "Remembers your preferred UI theme (dark/light)", duration: "1 year" },
      { name: "konvoq_lang", provider: "Konvoq AI", purpose: "Stores your preferred language setting", duration: "1 year" },
      { name: "konvoq_sidebar", provider: "Konvoq AI", purpose: "Saves your sidebar collapse/expand preferences", duration: "6 months" },
      { name: "intercom-session-*", provider: "Intercom", purpose: "Powers the live chat support widget", duration: "Session" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Advertising",
    required: false,
    defaultEnabled: false,
    color: "var(--amber)",
    icon: "ðŸ“£",
    desc: "These cookies are used to deliver relevant advertisements and track the effectiveness of marketing campaigns. They may be set by third-party advertising partners.",
    cookies: [
      { name: "_fbp", provider: "Meta (Facebook)", purpose: "Tracks conversions for Facebook ad campaigns", duration: "3 months" },
      { name: "_gcl_au", provider: "Google Ads", purpose: "Conversion tracking for Google advertising campaigns", duration: "3 months" },
      { name: "li_gc", provider: "LinkedIn", purpose: "LinkedIn Insight Tag for B2B ad retargeting", duration: "2 years" },
      { name: "hubspotutk", provider: "HubSpot", purpose: "Tracks visitor sessions for HubSpot CRM analytics", duration: "13 months" },
    ],
  },
];

export default function CookiesPageTemplate() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    necessary: true,
    analytics: true,
    functional: true,
    marketing: false,
  });
  const [expanded, setExpanded] = useState<string | null>("necessary");
  const [saved, setSaved] = useState(false);

  const toggle = (id: string) => {
    if (id === "necessary") return;
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
    setSaved(false);
  };

  const savePreferences = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => {
    setEnabled({ necessary: true, analytics: true, functional: true, marketing: true });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 64px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)",
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
                border: "1px solid rgba(245,158,11,0.3)",
                background: "rgba(245,158,11,0.08)",
                color: "var(--amber)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              <span>ðŸª</span> Privacy
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}
          >
            Cookie{" "}
            <span className="grad-text">Policy</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ color: "var(--text-2)", fontSize: 17, marginBottom: 8 }}>
            Last updated: <strong style={{ color: "var(--text-1)" }}>February 28, 2026</strong>
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--text-2)", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}
          >
            We use cookies and similar technologies to provide, improve, and protect our services. This policy
            explains what cookies we use and how you can control them.
          </motion.p>
        </motion.div>
      </section>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px 100px" }}>
        {/* What Are Cookies */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: 64 }}
        >
          <motion.h2
            variants={fadeUp}
            style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}
          >
            What Are Cookies?
          </motion.h2>
          <motion.div
            variants={fadeUp}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <div
              style={{
                padding: "24px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>ðŸª</span>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>What they are</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                Cookies are small text files placed on your device by websites you visit. They are widely used to
                make websites work efficiently and to provide information to website owners.
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
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>ðŸŽ¯</span>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>How we use them</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                We use cookies for authentication, remembering your preferences, analyzing site traffic, and
                delivering relevant content. You have control over which non-essential cookies you accept.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Cookie Categories â€” Interactive Cards */}
        <section style={{ marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ marginBottom: 32 }}
          >
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
              Cookie Categories
            </h2>
            <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.7 }}>
              Manage your cookie preferences below. Toggle each category to enable or disable it. Strictly necessary
              cookies cannot be disabled as they are required for the site to function.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cookieCategories.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  background: "var(--surface-2)",
                  border: `1px solid ${expanded === cat.id ? cat.color + "40" : "var(--border)"}`,
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    cursor: "pointer",
                  }}
                  onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "var(--radius)",
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {cat.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 16 }}>{cat.label}</span>
                      {cat.required && (
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "rgba(16,185,129,0.1)",
                            color: "var(--emerald)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          ALWAYS ON
                        </span>
                      )}
                    </div>
                    <p style={{ color: "var(--text-2)", fontSize: 13 }}>{cat.cookies.length} cookies</p>
                  </div>

                  {/* Toggle Switch */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 12, color: enabled[cat.id] ? cat.color : "var(--text-3)", fontWeight: 600 }}>
                      {enabled[cat.id] ? "Enabled" : "Disabled"}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggle(cat.id); }}
                      style={{
                        width: 48,
                        height: 28,
                        borderRadius: 999,
                        border: "none",
                        background: enabled[cat.id] ? cat.color : "var(--surface-3)",
                        cursor: cat.required ? "not-allowed" : "pointer",
                        position: "relative",
                        transition: "background 0.2s",
                        opacity: cat.required ? 0.6 : 1,
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: 4,
                          left: enabled[cat.id] ? 24 : 4,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "#fff",
                          transition: "left 0.2s",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                        }}
                      />
                    </button>
                  </div>

                  {/* Expand indicator */}
                  <span
                    style={{
                      color: "var(--text-3)",
                      fontSize: 12,
                      transition: "transform 0.2s",
                      transform: expanded === cat.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    â–¼
                  </span>
                </div>

                {/* Expanded Content */}
                {expanded === cat.id && (
                  <div style={{ borderTop: "1px solid var(--border)", padding: "24px" }}>
                    <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{cat.desc}</p>

                    {/* Cookie Table */}
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid var(--border)" }}>
                            {["Cookie Name", "Provider", "Purpose", "Duration"].map((h) => (
                              <th
                                key={h}
                                style={{
                                  padding: "10px 12px",
                                  textAlign: "left",
                                  color: "var(--text-3)",
                                  fontWeight: 600,
                                  fontSize: 12,
                                  letterSpacing: "0.05em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {cat.cookies.map((cookie, i) => (
                            <tr
                              key={cookie.name}
                              style={{
                                borderBottom: i < cat.cookies.length - 1 ? "1px solid var(--border)" : "none",
                              }}
                            >
                              <td style={{ padding: "12px", fontFamily: "monospace", color: cat.color, fontSize: 12 }}>
                                {cookie.name}
                              </td>
                              <td style={{ padding: "12px", color: "var(--text-2)" }}>{cookie.provider}</td>
                              <td style={{ padding: "12px", color: "var(--text-2)", maxWidth: 280 }}>{cookie.purpose}</td>
                              <td style={{ padding: "12px", color: "var(--text-2)", whiteSpace: "nowrap" }}>{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* How to Manage Cookies */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
            How to Manage Cookies in Your Browser
          </h2>
          <p style={{ color: "var(--text-2)", marginBottom: 24, fontSize: 15, lineHeight: 1.7 }}>
            In addition to using our preference controls above, you can manage cookies directly in your browser.
            Please note that disabling cookies may affect website functionality.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              {
                browser: "Google Chrome",
                icon: "ðŸŒ",
                steps: ["Open Settings (â‹® menu)", "Privacy and Security â†’ Cookies", "Manage and delete cookies"],
              },
              {
                browser: "Mozilla Firefox",
                icon: "ðŸ¦Š",
                steps: ["Open Settings (â‰¡ menu)", "Privacy & Security panel", "Cookies and Site Data section"],
              },
              {
                browser: "Apple Safari",
                icon: "ðŸ§­",
                steps: ["Open Preferences (âŒ˜,)", "Privacy tab", "Manage Website Data"],
              },
            ].map(({ browser, icon, steps }) => (
              <div
                key={browser}
                style={{
                  padding: "24px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>{browser}</h3>
                <ol style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {steps.map((step, i) => (
                    <li key={step} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text-2)", alignItems: "flex-start" }}>
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "var(--surface-3)",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "var(--text-3)",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Third-Party Cookies */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
            Third-Party Cookies
          </h2>
          <p style={{ color: "var(--text-2)", marginBottom: 20, fontSize: 15, lineHeight: 1.7 }}>
            Some cookies on our site are set by third-party services. These parties have their own privacy policies.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { name: "Google Analytics", purpose: "Website analytics", privacy: "https://policies.google.com/privacy" },
              { name: "PostHog", purpose: "Product analytics", privacy: "https://posthog.com/privacy" },
              { name: "Intercom", purpose: "Customer support chat", privacy: "https://www.intercom.com/legal/privacy" },
              { name: "Stripe", purpose: "Payment processing", privacy: "https://stripe.com/privacy" },
              { name: "Meta (Facebook)", purpose: "Advertising (if enabled)", privacy: "https://www.facebook.com/privacy/policy" },
              { name: "LinkedIn", purpose: "Advertising (if enabled)", privacy: "https://www.linkedin.com/legal/privacy-policy" },
            ].map(({ name, purpose, privacy }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 20px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  gap: 16,
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{name}</span>
                  <span style={{ color: "var(--text-3)", fontSize: 13, marginLeft: 12 }}>{purpose}</span>
                </div>
                <a
                  href={privacy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", fontSize: 13, textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  Privacy Policy â†’
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            padding: "32px",
            background: "var(--surface-2)",
            border: "1px solid var(--border-2)",
            borderRadius: "var(--radius-xl)",
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 40, flexShrink: 0 }}>ðŸ“¬</span>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Questions About Cookies?</h3>
            <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
              If you have questions about our use of cookies or other tracking technologies, please contact our
              Privacy Team at{" "}
              <a href="mailto:privacy@konvoq.ai" style={{ color: "var(--accent)", fontWeight: 600 }}>
                privacy@konvoq.ai
              </a>
              . We aim to respond to all enquiries within 48 hours.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Sticky Cookie Preference Bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 24px",
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid var(--border-2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          zIndex: 100,
          flexWrap: "wrap",
        }}
      >
        <div>
          <p style={{ fontWeight: 600, marginBottom: 2 }}>
            {saved ? "âœ“ Cookie preferences saved!" : "Your Cookie Preferences"}
          </p>
          <p style={{ color: "var(--text-2)", fontSize: 13 }}>
            {Object.entries(enabled).filter(([k, v]) => v).map(([k]) => cookieCategories.find(c => c.id === k)?.label).filter(Boolean).join(", ")}
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={savePreferences}
            style={{
              padding: "10px 20px",
              background: "var(--surface-3)",
              border: "1px solid var(--border-2)",
              borderRadius: "var(--radius)",
              color: "var(--text-1)",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Save Preferences
          </button>
          <button
            onClick={acceptAll}
            style={{
              padding: "10px 20px",
              background: "var(--grad-btn)",
              border: "none",
              borderRadius: "var(--radius)",
              color: "#000",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Accept All
          </button>
        </div>
      </motion.div>
    </PageLayout>
  );
}


