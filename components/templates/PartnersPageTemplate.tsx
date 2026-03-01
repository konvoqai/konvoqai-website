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
const TIERS = [
  {
    icon: "ðŸ¤",
    title: "Referral Partner",
    badge: "Most popular",
    badgeColor: "var(--accent)",
    color: "var(--accent)",
    commission: "30% recurring",
    highlights: [
      "30% recurring commission on all referred revenue",
      "Dedicated partner success manager",
      "Co-branded landing pages",
      "Real-time earnings dashboard",
      "Monthly payouts via Stripe",
    ],
    cta: "Become a Referral Partner",
    featured: false,
  },
  {
    icon: "ðŸ—ï¸",
    title: "Solution Partner",
    badge: "For agencies",
    badgeColor: "var(--accent-strong)",
    color: "var(--accent-strong)",
    commission: "20% recurring + build fees",
    highlights: [
      "Build, customize, and resell on Konvoq",
      "Co-marketing campaigns and joint case studies",
      "Priority technical support (4-hour SLA)",
      "White-labeling options available",
      "Partner portal with sales enablement",
    ],
    cta: "Apply as Solution Partner",
    featured: true,
  },
  {
    icon: "ðŸ”Œ",
    title: "Technology Partner",
    badge: "For SaaS companies",
    badgeColor: "var(--emerald)",
    color: "var(--emerald)",
    commission: "Joint GTM + API access",
    highlights: [
      "Native integration listing in Konvoq marketplace",
      "Joint go-to-market execution with our team",
      "Dedicated API sandbox and early access",
      "Co-authored content and webinars",
      "Featured in Konvoq partner directory",
    ],
    cta: "Explore Technology Partnership",
    featured: false,
  },
];

const BENEFITS = [
  { icon: "ðŸ’¸", title: "Revenue Share", desc: "Earn meaningful recurring commissions on every customer you bring to Konvoq â€” month after month.", color: "var(--emerald)" },
  { icon: "ðŸ“£", title: "Co-Marketing", desc: "Joint campaigns, case studies, webinars, and content that drives demand for both of us.", color: "var(--accent)" },
  { icon: "ðŸ–¥ï¸", title: "Partner Portal", desc: "Track your referrals, commissions, and leads in one dedicated partner dashboard.", color: "var(--accent-strong)" },
  { icon: "ðŸ›¡ï¸", title: "Technical Support", desc: "Priority support access to help you and your clients succeed faster with Konvoq.", color: "var(--danger)" },
  { icon: "ðŸ…", title: "Partner Badge", desc: "Display your Certified Konvoq Partner badge on your website, proposals, and marketing.", color: "var(--amber)" },
  { icon: "ðŸ”®", title: "Early Access", desc: "Get early access to new features and influence our roadmap through quarterly partner advisory calls.", color: "#A78BFA" },
];

const PARTNER_NAMES = [
  "Acme Agency", "FlowMetrics", "HelpdeskPro", "NovaTech", "BrightCRM",
  "Launchpad.io", "ClearData", "ZenDesk Connect", "Orbit Analytics",
  "PulseAI", "SyncHQ", "SwiftScale",
];

const FAQS = [
  {
    q: "How long does partner approval take?",
    a: "We review all partner applications within 5 business days. If approved, you'll receive access to the partner portal and a welcome call with your partner success manager within 24 hours of approval.",
  },
  {
    q: "When and how do I receive commission payments?",
    a: "Commissions are paid monthly via Stripe to partners with a balance of $100 or more. You can view your real-time earnings, pending commissions, and payout history in your partner dashboard.",
  },
  {
    q: "Can I be more than one type of partner?",
    a: "Yes â€” many of our strongest partners are both Referral and Solution Partners. If you're an agency that also refers clients, we'll work with you to set up the right structure and ensure you're compensated for both activities.",
  },
];

// â”€â”€â”€ Partner Application Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function PartnerApplicationForm() {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    partnerType: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
          background: "var(--surface-2)", border: "1px solid var(--emerald)",
          borderRadius: "var(--radius-xl)", padding: "56px 48px", textAlign: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>ðŸŽ‰</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Application received!</h3>
        <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7 }}>
          Thanks for applying! Our partner team will review your application and get back to you within 5 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-2)", marginBottom: 8 }}>
            Company Name *
          </label>
          <input
            required
            value={formData.company}
            onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
            placeholder="Acme Inc."
            style={{
              width: "100%", padding: "12px 16px", background: "var(--surface-3)",
              border: "1px solid var(--border-2)", borderRadius: "var(--radius)",
              color: "var(--text-1)", fontSize: 15, outline: "none",
              fontFamily: "inherit",
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-2)", marginBottom: 8 }}>
            Website *
          </label>
          <input
            required
            type="url"
            value={formData.website}
            onChange={e => setFormData(p => ({ ...p, website: e.target.value }))}
            placeholder="https://yourcompany.com"
            style={{
              width: "100%", padding: "12px 16px", background: "var(--surface-3)",
              border: "1px solid var(--border-2)", borderRadius: "var(--radius)",
              color: "var(--text-1)", fontSize: 15, outline: "none",
              fontFamily: "inherit",
            }}
          />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-2)", marginBottom: 8 }}>
          Partnership Type *
        </label>
        <select
          required
          value={formData.partnerType}
          onChange={e => setFormData(p => ({ ...p, partnerType: e.target.value }))}
          style={{
            width: "100%", padding: "12px 16px", background: "var(--surface-3)",
            border: "1px solid var(--border-2)", borderRadius: "var(--radius)",
            color: formData.partnerType ? "var(--text-1)" : "var(--text-3)",
            fontSize: 15, outline: "none", cursor: "pointer",
            fontFamily: "inherit",
            appearance: "none",
          }}
        >
          <option value="" disabled>Select partnership type</option>
          <option value="referral">Referral Partner â€” Earn 30% recurring commission</option>
          <option value="solution">Solution Partner â€” Build and resell on Konvoq</option>
          <option value="technology">Technology Partner â€” Native integration & joint GTM</option>
        </select>
      </div>
      <div>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-2)", marginBottom: 8 }}>
          Tell us about your business and why you want to partner *
        </label>
        <textarea
          required
          value={formData.description}
          onChange={e => setFormData(p => ({ ...p, description: e.target.value }))}
          placeholder="What does your company do? Who are your customers? How do you see Konvoq fitting into your business?"
          rows={5}
          style={{
            width: "100%", padding: "12px 16px", background: "var(--surface-3)",
            border: "1px solid var(--border-2)", borderRadius: "var(--radius)",
            color: "var(--text-1)", fontSize: 15, outline: "none", resize: "vertical",
            fontFamily: "inherit", lineHeight: 1.6,
          }}
        />
      </div>
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
        Submit Application â†’
      </motion.button>
      <p style={{ fontSize: 12, color: "var(--text-3)", textAlign: "center" }}>
        We review every application. You&apos;ll hear back within 5 business days.
      </p>
    </form>
  );
}

// â”€â”€â”€ FAQ Item â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "var(--surface-2)", border: "1px solid var(--border)",
      borderRadius: "var(--radius)", overflow: "hidden",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", padding: "20px 24px", background: "transparent",
          border: "none", color: "var(--text-1)", fontWeight: 600, fontSize: 16,
          textAlign: "left", cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "space-between", gap: 16,
          fontFamily: "inherit",
        }}
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ fontSize: 20, color: "var(--text-3)", flexShrink: 0 }}
        >+</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ overflow: "hidden" }}
      >
        <div style={{ padding: "0 24px 20px", fontSize: 15, color: "var(--text-2)", lineHeight: 1.7 }}>
          {a}
        </div>
      </motion.div>
    </div>
  );
}

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function PartnersPageTemplate() {
  return (
    <PageLayout>
      {/* â”€â”€ Hero â”€â”€ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px 120px" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 50%, var(--accent-muted) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Partner Program</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 24,
            }}>
              Grow together <span className="grad-text">with Konvoq</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: 20, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 48px",
            }}>
              Join our partner ecosystem and build a revenue stream helping businesses deploy the best AI chatbot platform on the market. We&apos;re growing fast and we want you to grow with us.
            </motion.p>
            <motion.div variants={stagger} style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                ["$2M+", "Partner commissions paid"],
                ["300+", "Active partners"],
                ["30%", "Recurring commission"],
              ].map(([val, label]) => (
                <motion.div key={label} variants={fadeIn} style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: 36, fontWeight: 800,
                    background: "var(--grad-text)", WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>{val}</div>
                  <div style={{ fontSize: 14, color: "var(--text-2)", marginTop: 4 }}>{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Partnership Tiers â”€â”€ */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Partnership Tiers</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Find the right partnership model
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {TIERS.map((tier) => (
                <motion.div key={tier.title} variants={fadeIn}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: tier.featured ? `linear-gradient(160deg, ${tier.color}10, var(--surface-2))` : "var(--surface-2)",
                    border: `1px solid ${tier.featured ? tier.color + "40" : "var(--border)"}`,
                    borderRadius: "var(--radius-xl)", padding: "36px 32px",
                    position: "relative", overflow: "hidden", cursor: "default",
                  }}
                >
                  {tier.featured && (
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: tier.color, color: "#000",
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "4px 12px", borderRadius: 100,
                    }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{tier.icon}</div>
                  <div style={{
                    display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: tier.badgeColor,
                    background: `${tier.badgeColor}15`, border: `1px solid ${tier.badgeColor}30`,
                    borderRadius: 100, padding: "3px 10px", marginBottom: 16,
                  }}>{tier.badge}</div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{tier.title}</h3>
                  <div style={{
                    fontSize: 14, fontWeight: 600, color: tier.color, marginBottom: 24,
                  }}>{tier.commission}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                    {tier.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: "50%", background: `${tier.color}20`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, marginTop: 1,
                        }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: tier.color }} />
                        </div>
                        <span style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a href="#apply"
                    whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: "easeOut" } }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "12px 0",
                      background: tier.featured ? "var(--grad-btn)" : "transparent",
                      border: tier.featured ? "none" : `1px solid ${tier.color}40`,
                      borderRadius: 100, fontWeight: 700, fontSize: 14, color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {tier.cta}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Benefits â”€â”€ */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Partner Benefits</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Everything you need to succeed
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {BENEFITS.map((b) => (
                <motion.div key={b.title} variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: "28px 24px",
                    cursor: "default", display: "flex", gap: 18, alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: "var(--radius)", flexShrink: 0,
                    background: `${b.color}15`, border: `1px solid ${b.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                  }}>{b.icon}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Current Partners â”€â”€ */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.p variants={fadeUp} style={{
              textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "var(--text-3)", marginBottom: 32,
            }}>Trusted by 300+ partners</motion.p>
            <motion.div variants={stagger} style={{
              display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center",
            }}>
              {PARTNER_NAMES.map((name) => (
                <motion.div key={name} variants={fadeIn}
                  whileHover={{ scale: 1.06, transition: { duration: 0.15, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius)", padding: "10px 20px",
                    fontSize: 13, fontWeight: 600, color: "var(--text-2)", cursor: "default",
                  }}
                >
                  {name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Testimonial â”€â”€ */}
      <section style={{ padding: "60px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
            style={{
              background: "var(--surface-2)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "48px 56px", textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            <div aria-hidden style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)",
            }} />
            <div style={{ fontSize: 48, marginBottom: 20, color: "var(--emerald)" }}>&ldquo;</div>
            <p style={{
              fontSize: 20, fontWeight: 600, lineHeight: 1.6, color: "var(--text-1)", marginBottom: 32,
            }}>
              Partnering with Konvoq was the best business decision we made last year. We added $180K in recurring revenue in our first six months by simply referring clients we were already working with.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--emerald), var(--accent))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 700, color: "#000",
              }}>TD</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Tyler Davis</div>
                <div style={{ fontSize: 13, color: "var(--text-2)" }}>Founder, Orbit Analytics â€” Referral Partner</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Application Form â”€â”€ */}
      <section id="apply" style={{ padding: "80px 24px 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionLabel>Apply Now</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Apply to the partner program
              </h2>
              <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7 }}>
                Tell us a bit about your business and which partnership model interests you most.
              </p>
            </motion.div>
            <motion.div variants={fadeIn}
              style={{
                background: "var(--surface-2)", border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-xl)", padding: "40px 40px",
              }}
            >
              <PartnerApplicationForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€ */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionLabel>FAQ</SectionLabel>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Partner program questions
              </h2>
            </motion.div>
            <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQS.map((faq, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <FaqItem q={faq.q} a={faq.a} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}


