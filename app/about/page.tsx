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

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Data ────────────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: "❤️",
    title: "Customer Obsession",
    desc: "Every decision starts with a simple question: does this make our customers more successful? We build with empathy, listen relentlessly, and measure success by the value we create.",
    color: "var(--rose)",
  },
  {
    icon: "⚡",
    title: "Move Fast",
    desc: "Speed is a feature. We ship weekly, learn from real users, and iterate without bureaucracy. Perfect is the enemy of good — we'd rather ship and learn than plan and delay.",
    color: "var(--amber)",
  },
  {
    icon: "🔍",
    title: "Default to Transparency",
    desc: "We share wins, losses, metrics, and mistakes openly. Internally and with our customers. Trust is built through honesty, not polish.",
    color: "var(--cyan)",
  },
  {
    icon: "🛠️",
    title: "Ship with Care",
    desc: "We move fast but never cut corners on quality, reliability, or security. Every feature we ship represents a promise to our customers that it will just work.",
    color: "var(--violet)",
  },
];

const TEAM = [
  { initials: "AM", name: "Aryan Mehta", role: "CEO & Co-founder", color: "var(--cyan)" },
  { initials: "PS", name: "Priya Sharma", role: "CTO & Co-founder", color: "var(--violet)" },
  { initials: "MC", name: "Marcus Chen", role: "Head of AI Research", color: "var(--rose)" },
  { initials: "SR", name: "Sofia Rodriguez", role: "Head of Design", color: "var(--emerald)" },
  { initials: "JP", name: "James Park", role: "Head of Growth", color: "var(--amber)" },
  { initials: "AP", name: "Ananya Patel", role: "Head of Customer Success", color: "#A78BFA" },
];

const TIMELINE = [
  { year: "2024 Q1", event: "Founded", desc: "Aryan and Priya left their senior roles at a big tech company with one mission: make AI conversations accessible to every business." },
  { year: "2024 Q3", event: "First 100 Customers", desc: "Reached our first milestone — 100 paying customers — proving that businesses were hungry for a simpler AI chatbot solution." },
  { year: "2025 Q1", event: "Series A Raised", desc: "Closed a $12M Series A led by Sequoia Capital, with participation from Y Combinator and Andreessen Horowitz." },
  { year: "2025 Q4", event: "10,000 Customers", desc: "Crossed the 10,000 customer mark and expanded the team to 50 people across 12 countries." },
  { year: "2026", event: "Global Expansion", desc: "Launched dedicated infrastructure in Europe and Asia-Pacific, with support for 42 languages and regional compliance." },
];

const INVESTORS = [
  { name: "Y Combinator", note: "W24 Batch" },
  { name: "Sequoia", note: "Series A Lead" },
  { name: "Andreessen Horowitz", note: "a16z" },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px 120px" }}>
        {/* Aurora background */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,239,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 40%, rgba(139,92,246,0.07) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>About Konvoq</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 24,
            }}>
              We&apos;re building the future of{" "}
              <span className="grad-text">customer conversations</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: 20, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 48px",
            }}>
              Konvoq was born from a simple belief: every business deserves world-class AI — not just the ones with billion-dollar engineering budgets.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
              {[["50+", "Team Members"], ["12K+", "Customers"], ["42", "Languages"], ["12", "Countries"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 800, background: "var(--grad-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={scaleIn}
            style={{
              background: "var(--surface-2)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-xl)",
              padding: "60px 56px", position: "relative", overflow: "hidden",
            }}
          >
            {/* Decorative quote mark */}
            <div aria-hidden style={{
              position: "absolute", top: 20, left: 40, fontSize: 160, lineHeight: 1,
              fontWeight: 900, color: "rgba(6,239,255,0.04)", fontFamily: "serif", userSelect: "none",
            }}>&ldquo;</div>
            <div style={{ position: "relative" }}>
              <p style={{
                fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, lineHeight: 1.5,
                color: "var(--text-1)", marginBottom: 32,
              }}>
                Our mission is to democratize AI-powered customer engagement — making it as easy as writing an email, not as hard as hiring a team of engineers.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", background: "var(--grad-btn)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 700, color: "#fff",
                }}>AM</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>Aryan Mehta</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)" }}>CEO & Co-founder, Konvoq</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Our Story</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                From frustration to <span className="grad-text">founding</span>
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <motion.div variants={fadeUp}>
                <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.8, marginBottom: 24 }}>
                  In early 2024, Aryan and Priya were working at a large enterprise software company, watching their customers struggle to implement even the most basic AI chatbots. Weeks of engineering work. Six-figure contracts. Results that still disappointed.
                </p>
                <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.8, marginBottom: 24 }}>
                  They knew it didn&apos;t have to be this way. The technology existed. What was missing was the right abstraction layer — a platform that handled all the complexity so businesses could just focus on the conversations they wanted to have.
                </p>
                <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.8 }}>
                  They quit their jobs in March 2024, incorporated Konvoq, and shipped the first version in eight weeks. By September, they had 100 paying customers and had never run a single ad. Today, 12,000+ businesses trust Konvoq to power their most important conversations.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div style={{
                  background: "var(--surface-2)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-xl)",
                  padding: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
                }}>
                  {[
                    { label: "Founded", value: "March 2024" },
                    { label: "HQ", value: "Fully Remote" },
                    { label: "Team size", value: "50+ people" },
                    { label: "Customers", value: "12,000+" },
                  ].map(item => (
                    <div key={item.label} style={{
                      background: "var(--surface-3)", borderRadius: "var(--radius)", padding: "20px 24px",
                    }}>
                      <div style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{item.label}</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-1)" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Company Values ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Our Values</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                What we believe in
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {VALUES.map((v, i) => (
                <motion.div key={v.title} variants={fadeIn}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: 32, position: "relative", overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  <div aria-hidden style={{
                    position: "absolute", top: -40, right: -40, width: 120, height: 120,
                    borderRadius: "50%", background: v.color, opacity: 0.05, filter: "blur(20px)",
                  }} />
                  <div style={{
                    width: 48, height: 48, borderRadius: "var(--radius)", marginBottom: 20,
                    background: `${v.color}18`, border: `1px solid ${v.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "var(--text-1)" }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>{v.desc}</p>
                  <div aria-hidden style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${v.color}, transparent)`, opacity: 0.5,
                  }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>The Team</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Meet the people building <span className="grad-text">Konvoq</span>
              </h2>
              <p style={{ fontSize: 18, color: "var(--text-2)", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
                A small, world-class team distributed across 12 countries.
              </p>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
              {TEAM.map((member) => (
                <motion.div key={member.name} variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: "32px 24px", textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
                    background: `linear-gradient(135deg, ${member.color}40, ${member.color}18)`,
                    border: `2px solid ${member.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, fontWeight: 800, color: member.color,
                  }}>
                    {member.initials}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-1)", marginBottom: 6 }}>{member.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)" }}>{member.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Our Journey</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                How we got here
              </h2>
            </motion.div>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div aria-hidden style={{
                position: "absolute", left: 20, top: 0, bottom: 0, width: 2,
                background: "linear-gradient(180deg, var(--cyan), var(--violet), var(--rose))",
                opacity: 0.3,
              }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {TIMELINE.map((item, i) => (
                  <motion.div key={i} variants={fadeIn} style={{
                    display: "flex", gap: 32, paddingLeft: 56, paddingBottom: 40, position: "relative",
                  }}>
                    <div aria-hidden style={{
                      position: "absolute", left: 12, top: 6, width: 18, height: 18, borderRadius: "50%",
                      background: "var(--grad-btn)", border: "3px solid var(--black)",
                      boxShadow: "0 0 12px rgba(6,239,255,0.4)",
                    }} />
                    <div style={{
                      background: "var(--surface-2)", border: "1px solid var(--border-2)",
                      borderRadius: "var(--radius)", padding: "20px 24px", flex: 1,
                    }}>
                      <div style={{
                        fontSize: 11, color: "var(--cyan)", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", marginBottom: 8,
                      }}>{item.year}</div>
                      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{item.event}</div>
                      <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Investors ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Backed By</SectionLabel>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 48 }}>
                World-class investors who believe in our mission
              </h2>
            </motion.div>
            <motion.div variants={stagger} style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              {INVESTORS.map((inv) => (
                <motion.div key={inv.name} variants={fadeIn}
                  whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius-lg)", padding: "32px 48px", textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text-1)", marginBottom: 8 }}>{inv.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)" }}>{inv.note}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section style={{ padding: "100px 24px 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Join the team</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20,
            }}>
              Help us shape how the world <span className="grad-text">communicates</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 40 }}>
              We&apos;re a remote-first team of builders, designers, and AI enthusiasts. If you believe in our mission, we&apos;d love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a href="/careers"
                whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
                  background: "var(--grad-btn)", borderRadius: 100, fontWeight: 700, fontSize: 15,
                  color: "#fff", textDecoration: "none",
                }}>
                View open roles →
              </motion.a>
              <motion.a href="/contact"
                whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
                  background: "transparent", border: "1px solid var(--border-2)", borderRadius: 100,
                  fontWeight: 700, fontSize: 15, color: "var(--text-1)", textDecoration: "none",
                }}>
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
