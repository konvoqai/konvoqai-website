"use client";

import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/PageLayout";

// ─── Reusable SectionLabel ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-2)",
      borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-2)",
      marginBottom: 24,
    }}>
      <div style={{ width: 6, height: 6, background: "var(--grad-aurora)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

// ─── Variants ────────────────────────────────────────────────────────────────
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

// ─── Data ────────────────────────────────────────────────────────────────────
const PRESS_STATS = [
  { value: "500+", label: "Articles written" },
  { value: "50+", label: "Media features" },
  { value: "12", label: "Industry awards" },
];

const PRESS_LOGOS = [
  "TechCrunch", "Forbes", "Wired", "VentureBeat", "The Verge", "Product Hunt",
];

const PRESS_ARTICLES = [
  {
    outlet: "TechCrunch",
    outletColor: "var(--rose)",
    title: "Konvoq raises $12M to bring AI chatbots to SMBs",
    excerpt: "The Series A, led by Sequoia Capital, will help the startup expand its AI-powered chatbot platform to small and medium businesses worldwide — a market largely ignored by enterprise AI vendors.",
    date: "December 2025",
    tag: "Funding",
  },
  {
    outlet: "Forbes",
    outletColor: "var(--amber)",
    title: "The 10 AI startups reshaping customer service",
    excerpt: "Konvoq earns the #3 spot on our annual list of AI companies transforming how businesses interact with their customers. With 12,000+ customers and a 94% resolution rate, the numbers speak for themselves.",
    date: "January 2026",
    tag: "Feature",
  },
  {
    outlet: "Wired",
    outletColor: "var(--text-1)",
    title: "How Konvoq is making enterprise AI accessible to everyone",
    excerpt: "Inside the startup that figured out how to strip away the complexity of large language models without stripping away the capability — and why it might be the most important AI company most people haven't heard of.",
    date: "November 2025",
    tag: "Deep Dive",
  },
  {
    outlet: "VentureBeat",
    outletColor: "var(--violet)",
    title: "Konvoq's AI achieves 94% resolution rate, outperforming human agents",
    excerpt: "New benchmark data released by Konvoq shows their AI chatbot resolves 94% of customer inquiries without human escalation — compared to an industry average of 68% for human agents.",
    date: "February 2026",
    tag: "Research",
  },
  {
    outlet: "Product Hunt",
    outletColor: "var(--amber)",
    title: "#1 Product of the Day: Konvoq AI Chatbot Builder",
    excerpt: "Konvoq topped Product Hunt with 2,400+ upvotes on launch day, as makers and founders praised the drag-and-drop chatbot builder and zero-code setup experience.",
    date: "September 2025",
    tag: "Launch",
  },
  {
    outlet: "The Verge",
    outletColor: "var(--cyan)",
    title: "Building chatbots used to be hard. Konvoq changed that.",
    excerpt: "We spent two weeks building chatbots with every major platform on the market. Konvoq was the only one where we had a fully functioning, context-aware bot live in production in under 30 minutes.",
    date: "October 2025",
    tag: "Review",
  },
];

const PRESS_KIT_ITEMS = [
  { icon: "🖼️", title: "Logo Files", desc: "PNG, SVG, and EPS formats. Light and dark variants included." },
  { icon: "📐", title: "Brand Guidelines", desc: "Color palette, typography, usage rules, and spacing standards." },
  { icon: "📸", title: "Founder Photos", desc: "High-resolution headshots of Aryan Mehta and Priya Sharma." },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function PressPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px 120px" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6,239,255,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 90% 50%, rgba(244,63,94,0.05) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Press Room</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 24,
            }}>
              Konvoq in <span className="grad-text">the news</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: 20, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 56px",
            }}>
              Read what the world&apos;s leading technology media are saying about how Konvoq is changing AI-powered customer conversations.
            </motion.p>
            {/* Stats */}
            <motion.div variants={stagger} style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
              {PRESS_STATS.map((stat) => (
                <motion.div key={stat.label} variants={fadeIn} style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: 40, fontWeight: 800,
                    background: "var(--grad-text)", WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>{stat.value}</div>
                  <div style={{ fontSize: 14, color: "var(--text-2)", marginTop: 4 }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured In ── */}
      <section style={{ padding: "60px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.p variants={fadeUp} style={{
              textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "var(--text-3)", marginBottom: 32,
            }}>
              Featured in
            </motion.p>
            <motion.div variants={stagger} style={{
              display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
            }}>
              {PRESS_LOGOS.map((name) => (
                <motion.div key={name} variants={fadeIn}
                  whileHover={{ scale: 1.06, transition: { duration: 0.15, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius)", padding: "12px 28px",
                    fontSize: 15, fontWeight: 700, color: "var(--text-2)",
                    cursor: "default",
                  }}
                >
                  {name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Press Articles ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Coverage</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Latest coverage
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
              {PRESS_ARTICLES.map((article, i) => (
                <motion.div key={i} variants={fadeIn}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: "28px 28px 24px",
                    display: "flex", flexDirection: "column", gap: 0, cursor: "pointer",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div aria-hidden style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, ${article.outletColor}, transparent)`,
                  }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{
                      fontSize: 13, fontWeight: 800, color: article.outletColor,
                      letterSpacing: "0.02em",
                    }}>{article.outlet}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 600, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "var(--text-3)",
                      background: "var(--surface-3)", borderRadius: 100, padding: "3px 10px",
                    }}>{article.tag}</span>
                  </div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, lineHeight: 1.4, color: "var(--text-1)",
                    marginBottom: 12,
                  }}>{article.title}</h3>
                  <p style={{
                    fontSize: 14, color: "var(--text-2)", lineHeight: 1.6, flex: 1, marginBottom: 20,
                  }}>{article.excerpt}</p>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: 16, borderTop: "1px solid var(--border)",
                  }}>
                    <span style={{ fontSize: 12, color: "var(--text-3)" }}>{article.date}</span>
                    <span style={{ fontSize: 13, color: "var(--cyan)", fontWeight: 600 }}>Read article →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Press Kit ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Press Kit</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Assets for media
              </h2>
              <p style={{ fontSize: 17, color: "var(--text-2)", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
                Download high-quality brand assets for use in editorial and press coverage.
              </p>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 40 }}>
              {PRESS_KIT_ITEMS.map((item) => (
                <motion.div key={item.title} variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: "28px 24px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 20 }}>{item.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: "easeOut" } }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: "100%", padding: "10px 0",
                      background: "transparent", border: "1px solid var(--border-2)",
                      borderRadius: 100, color: "var(--text-1)", fontWeight: 600,
                      fontSize: 14, cursor: "pointer",
                    }}
                  >
                    Download ↓
                  </motion.button>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ textAlign: "center" }}>
              <motion.button
                whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "14px 40px", background: "var(--grad-btn)", borderRadius: 100,
                  fontWeight: 700, fontSize: 15, color: "#fff", cursor: "pointer", border: "none",
                }}
              >
                Download Full Press Kit (.zip)
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Press Contact ── */}
      <section style={{ padding: "80px 24px 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Press Contact</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16,
            }}>
              Get in touch with our PR team
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7 }}>
              We love working with journalists and content creators. Reach out and we&apos;ll get back to you quickly.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeIn}
            style={{
              background: "var(--surface-2)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "40px 48px",
              display: "flex", flexDirection: "column", gap: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(6,239,255,0.2), rgba(139,92,246,0.2))",
                border: "1px solid var(--border-2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>📬</div>
              <div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Press enquiries</div>
                <a href="mailto:pr@konvoq.ai" style={{ fontSize: 20, fontWeight: 700, color: "var(--cyan)", textDecoration: "none" }}>
                  pr@konvoq.ai
                </a>
              </div>
            </div>
            <div style={{ height: 1, background: "var(--border)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,239,255,0.15))",
                border: "1px solid var(--border-2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>⚡</div>
              <div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Average response time</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-1)" }}>Under 24 hours</div>
                <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 2 }}>
                  Breaking news? Mark your subject line <span style={{ color: "var(--amber)", fontWeight: 600 }}>[URGENT]</span>
                </div>
              </div>
            </div>
            <motion.a
              href="mailto:pr@konvoq.ai"
              whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: "easeOut" } }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "14px 0", background: "var(--grad-btn)", borderRadius: 100,
                fontWeight: 700, fontSize: 15, color: "#fff", textDecoration: "none",
              }}
            >
              Email press team →
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
