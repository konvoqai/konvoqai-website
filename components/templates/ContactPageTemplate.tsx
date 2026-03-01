"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/templates/MarketingPageTemplate";

// â”€â”€â”€ Reusable SectionLabel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "var(--surface-3)", border: "1px solid var(--border-2)",
      borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-2)",
      marginBottom: 24,
    }}>
      <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

// â”€â”€â”€ Variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CONTACT_CHANNELS = [
  {
    icon: "ðŸ’¼",
    label: "Sales",
    email: "sales@konvoq.ai",
    response: "Response within 1 hour",
    note: null,
    color: "var(--accent)",
    href: "mailto:sales@konvoq.ai",
  },
  {
    icon: "ðŸ› ï¸",
    label: "Support",
    email: "support@konvoq.ai",
    response: "Response within 2 hours",
    note: "Priority queue for paid plans",
    color: "var(--emerald)",
    href: "mailto:support@konvoq.ai",
  },
  {
    icon: "ðŸ“°",
    label: "Press",
    email: "pr@konvoq.ai",
    response: "Response within 24 hours",
    note: null,
    color: "var(--amber)",
    href: "mailto:pr@konvoq.ai",
  },
  {
    icon: "ðŸ‘‹",
    label: "Careers",
    email: "careers@konvoq.ai",
    response: null,
    note: "See all open roles",
    color: "var(--accent-strong)",
    href: "mailto:careers@konvoq.ai",
  },
];

const SOCIALS = [
  { name: "Twitter / X", handle: "@konvoqai", icon: "ð•", href: "https://twitter.com/konvoqai" },
  { name: "LinkedIn", handle: "Konvoq AI", icon: "in", href: "https://linkedin.com/company/konvoq" },
  { name: "GitHub", handle: "konvoq-ai", icon: "âŒ¥", href: "https://github.com/konvoq-ai" },
  { name: "YouTube", handle: "Konvoq", icon: "â–¶", href: "https://youtube.com/@konvoqai" },
];

// â”€â”€â”€ Styled Input â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{
        display: "block", fontSize: 13, fontWeight: 600,
        color: "var(--text-2)", marginBottom: 8,
      }}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "13px 16px", background: "var(--surface-3)",
  border: "1px solid var(--border-2)", borderRadius: "var(--radius)",
  color: "var(--text-1)", fontSize: 15, outline: "none",
  fontFamily: "inherit", transition: "border-color 0.15s",
};

// â”€â”€â”€ Contact Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", topic: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const getFieldStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === field ? "var(--accent)" : "var(--border-2)",
    boxShadow: focusedField === field ? "0 0 0 3px var(--accent-muted)" : "none",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          textAlign: "center", padding: "60px 32px",
          background: "var(--surface-2)", border: "1px solid var(--border-2)",
          borderRadius: "var(--radius-xl)",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ fontSize: 56, marginBottom: 20 }}
        >âœ…</motion.div>
        <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Message sent!</h3>
        <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7 }}>
          Thanks for reaching out! We&apos;ll get back to you at <strong style={{ color: "var(--text-1)" }}>{form.email}</strong> as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}
      style={{
        background: "var(--surface-2)", border: "1px solid var(--border-2)",
        borderRadius: "var(--radius-xl)", padding: "40px 36px",
        display: "flex", flexDirection: "column", gap: 20,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Full Name *">
          <input
            required
            value={form.name}
            onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="Jane Smith"
            style={getFieldStyle("name")}
          />
        </Field>
        <Field label="Work Email *">
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="jane@company.com"
            style={getFieldStyle("email")}
          />
        </Field>
      </div>
      <Field label="Company">
        <input
          value={form.company}
          onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
          onFocus={() => setFocusedField("company")}
          onBlur={() => setFocusedField(null)}
          placeholder="Acme Corp"
          style={getFieldStyle("company")}
        />
      </Field>
      <Field label="What can we help with?">
        <select
          value={form.topic}
          onChange={e => setForm(p => ({ ...p, topic: e.target.value }))}
          onFocus={() => setFocusedField("topic")}
          onBlur={() => setFocusedField(null)}
          style={{
            ...getFieldStyle("topic"),
            appearance: "none",
            cursor: "pointer",
            color: form.topic ? "var(--text-1)" : "var(--text-3)",
          }}
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="sales">Sales â€” Pricing & Plans</option>
          <option value="support">Support â€” Technical Help</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="press">Press & Media</option>
        </select>
      </Field>
      <Field label="Message *">
        <textarea
          required
          value={form.message}
          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell us what you're working on and how we can help..."
          rows={5}
          style={{
            ...getFieldStyle("message"),
            resize: "vertical", lineHeight: 1.6,
          }}
        />
      </Field>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, transition: { duration: 0.15, ease: "easeOut" } }}
        whileTap={{ scale: 0.97 }}
        style={{
          padding: "16px 0", background: "var(--grad-btn)", borderRadius: 100,
          fontWeight: 700, fontSize: 16, color: "#fff", cursor: "pointer",
          border: "none", fontFamily: "inherit",
        }}
      >
        Send Message â†’
      </motion.button>
      <p style={{ fontSize: 12, color: "var(--text-3)", textAlign: "center" }}>
        By submitting this form you agree to our privacy policy. We&apos;ll never share your email with third parties.
      </p>
    </form>
  );
}

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function ContactPageTemplate() {
  return (
    <PageLayout>
      {/* â”€â”€ Hero â”€â”€ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px 80px" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(91, 140, 255, 0.1) 0%, transparent 70%)",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 900, lineHeight: 1.0,
              letterSpacing: "-0.04em", marginBottom: 20,
            }}>
              Let&apos;s <span className="grad-text">talk</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: 20, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              Whether you&apos;re exploring Konvoq for your business, need technical help, or just want to say hello â€” we&apos;re here and we respond fast.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Two Column Layout â”€â”€ */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, alignItems: "start",
        }}>
          {/* Left: Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.02em" }}>
              Send us a message
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", marginBottom: 28, lineHeight: 1.6 }}>
              Fill out the form and we&apos;ll get back to you within a few hours. For faster help, choose the right topic below.
            </p>
            <ContactForm />
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div initial="hidden" animate="visible" variants={stagger}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Contact channels */}
            <motion.div variants={fadeUp}>
              <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.01em" }}>
                Reach the right team
              </h2>
            </motion.div>
            {CONTACT_CHANNELS.map((channel) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                variants={fadeIn}
                whileHover={{ x: 4, transition: { duration: 0.15, ease: "easeOut" } }}
                style={{
                  background: "var(--surface-2)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius)", padding: "18px 20px",
                  display: "flex", alignItems: "center", gap: 16,
                  textDecoration: "none", cursor: "pointer",
                  transition: "border-color 0.15s",
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "var(--radius)", flexShrink: 0,
                  background: `${channel.color}15`, border: `1px solid ${channel.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                }}>{channel.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-1)", marginBottom: 3 }}>
                    {channel.label}
                  </div>
                  <div style={{ fontSize: 14, color: channel.color, fontWeight: 600, marginBottom: 3 }}>
                    {channel.email}
                  </div>
                  {channel.response && (
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>{channel.response}</div>
                  )}
                  {channel.note && (
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>{channel.note}</div>
                  )}
                </div>
                <div style={{ color: "var(--text-3)", fontSize: 16 }}>â†’</div>
              </motion.a>
            ))}

            {/* Live Chat Promo */}
            <motion.div variants={fadeIn}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
              style={{
                background: "linear-gradient(135deg, var(--accent-muted), rgba(122, 162, 255, 0.12))",
                border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)",
                padding: "24px 20px", marginTop: 8, cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "var(--radius)", flexShrink: 0,
                  background: "var(--grad-btn)", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 20,
                }}>ðŸ’¬</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                    Try our AI chatbot for instant answers
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5, marginBottom: 12 }}>
                    We use our own product! Get instant answers to common questions 24/7.
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04, transition: { duration: 0.15, ease: "easeOut" } }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      padding: "8px 20px", background: "var(--grad-btn)", borderRadius: 100,
                      fontWeight: 700, fontSize: 13, color: "#fff", cursor: "pointer",
                      border: "none", fontFamily: "inherit",
                    }}
                  >
                    Open live chat
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Office location */}
            <motion.div variants={fadeIn}
              style={{
                background: "var(--surface-2)", border: "1px solid var(--border)",
                borderRadius: "var(--radius)", padding: "18px 20px",
                display: "flex", gap: 14, alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: 22, flexShrink: 0 }}>ðŸŒ</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                  Fully Remote
                </div>
                <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>
                  Our team spans 12 countries across every timezone. No headquarters â€” just great people everywhere.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Social Links â”€â”€ */}
      <section style={{ padding: "60px 24px 100px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.p variants={fadeUp} style={{
              fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--text-3)", marginBottom: 28,
            }}>
              Follow us
            </motion.p>
            <motion.div variants={stagger} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeIn}
                  whileHover={{ y: -4, scale: 1.04, transition: { duration: 0.15, ease: "easeOut" } }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "var(--surface-2)", border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius)", padding: "12px 20px",
                    textDecoration: "none", cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-1)" }}>{social.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-2)" }}>{social.handle}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}


