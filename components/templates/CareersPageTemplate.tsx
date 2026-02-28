"use client";

import { motion, type Variants } from "framer-motion";
import PageLayout from "@/components/templates/MarketingPageTemplate";

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
const PERKS = [
  {
    icon: "🌍",
    title: "Remote First",
    desc: "Work from anywhere. We have team members in 12 countries and we believe the best talent isn't in any single city.",
    color: "var(--cyan)",
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    desc: "Top-of-market salaries benchmarked against the best companies in tech. We pay well because great people deserve it.",
    color: "var(--emerald)",
  },
  {
    icon: "📈",
    title: "Meaningful Equity",
    desc: "Generous equity packages. As we grow, so do you. Every team member has real ownership in what we're building.",
    color: "var(--violet)",
  },
  {
    icon: "🏥",
    title: "Full Health Coverage",
    desc: "Comprehensive health, dental, and vision insurance for you and your dependents. Your wellbeing comes first.",
    color: "var(--rose)",
  },
  {
    icon: "📚",
    title: "$2K Learning Budget",
    desc: "Annual budget for courses, books, conferences, or anything that makes you better at your craft. No questions asked.",
    color: "var(--amber)",
  },
  {
    icon: "🌴",
    title: "Unlimited PTO",
    desc: "Take the time you need. We trust you to manage your time well and come back recharged and ready to do great work.",
    color: "#A78BFA",
  },
];

const JOBS = [
  {
    title: "Senior AI/ML Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--violet)",
    hot: true,
  },
  {
    title: "Staff Frontend Engineer (React/Next.js)",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--violet)",
    hot: false,
  },
  {
    title: "Product Designer (UI/UX)",
    dept: "Design",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--cyan)",
    hot: true,
  },
  {
    title: "Technical Customer Success Manager",
    dept: "Customer Success",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--emerald)",
    hot: false,
  },
  {
    title: "Senior Backend Engineer (Go)",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--violet)",
    hot: false,
  },
  {
    title: "Head of Marketing",
    dept: "Marketing",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--rose)",
    hot: true,
  },
  {
    title: "Data Scientist",
    dept: "AI Research",
    location: "Remote",
    type: "Full-time",
    deptColor: "var(--amber)",
    hot: false,
  },
  {
    title: "Developer Advocate",
    dept: "DevRel",
    location: "Remote",
    type: "Full-time",
    deptColor: "#A78BFA",
    hot: false,
  },
];

const CULTURE_CARDS = [
  {
    title: "Async by default",
    desc: "We write things down. No unnecessary meetings, no timezone discrimination. Your best work happens when you're focused.",
    grad: "linear-gradient(135deg, rgba(6,239,255,0.15), rgba(139,92,246,0.15))",
  },
  {
    title: "Ship early, iterate fast",
    desc: "We celebrate shipping, even when things aren't perfect. Every deploy is a learning opportunity. Done beats perfect.",
    grad: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(244,63,94,0.15))",
  },
  {
    title: "Radical ownership",
    desc: "At Konvoq, there's no 'someone else's problem.' We take ownership of outcomes, not just tasks.",
    grad: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,239,255,0.15))",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function CareersPageTemplate() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px 120px" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(139,92,246,0.1) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(6,239,255,0.06) 0%, transparent 60%)",
        }} />
        {/* Animated gradient orbs */}
        <motion.div aria-hidden
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute", width: 600, height: 600, borderRadius: "50%",
            background: "var(--violet)", filter: "blur(120px)",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>We&apos;re Hiring</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 24,
            }}>
              Build the future of{" "}
              <span className="grad-text">AI conversations</span>{" "}
              with us
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: 20, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 48px",
            }}>
              Join a world-class, remote-first team obsessed with building AI that actually helps people. No office politics. Just meaningful work and great colleagues.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a href="#open-positions"
                whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
                  background: "var(--grad-btn)", borderRadius: 100, fontWeight: 700, fontSize: 15,
                  color: "#fff", textDecoration: "none",
                }}>
                See open roles
              </motion.a>
              <motion.a href="/about"
                whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
                  background: "transparent", border: "1px solid var(--border-2)", borderRadius: 100,
                  fontWeight: 700, fontSize: 15, color: "var(--text-1)", textDecoration: "none",
                }}>
                About the company
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Perks & Benefits</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                We take care of our people
              </h2>
              <p style={{ fontSize: 17, color: "var(--text-2)", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
                Great work comes from people who feel supported. Here&apos;s how we do that.
              </p>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {PERKS.map((perk) => (
                <motion.div key={perk.title} variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: "28px 24px",
                    cursor: "default", position: "relative", overflow: "hidden",
                  }}
                >
                  <div aria-hidden style={{
                    position: "absolute", top: 0, right: 0, width: 80, height: 80,
                    background: perk.color, opacity: 0.05, borderRadius: "50%",
                    filter: "blur(20px)",
                  }} />
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{perk.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "var(--text-1)" }}>{perk.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="open-positions" style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Open Positions</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Find your role
              </h2>
              <p style={{ fontSize: 17, color: "var(--text-2)", marginTop: 16 }}>
                {JOBS.length} open positions · All remote · Full-time
              </p>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {JOBS.map((job) => (
                <motion.div key={job.title} variants={fadeIn}
                  whileHover={{ x: 4, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderRadius: "var(--radius)", padding: "20px 28px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: 16, flexWrap: "wrap", cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ fontWeight: 700, fontSize: 16, color: "var(--text-1)" }}>{job.title}</span>
                        {job.hot && (
                          <span style={{
                            background: "rgba(244,63,94,0.15)", color: "var(--rose)",
                            border: "1px solid rgba(244,63,94,0.25)", borderRadius: 100,
                            fontSize: 10, fontWeight: 700, padding: "2px 8px", letterSpacing: "0.08em",
                          }}>HOT</span>
                        )}
                      </div>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{
                          fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 100,
                          background: `${job.deptColor}15`, color: job.deptColor,
                          border: `1px solid ${job.deptColor}30`,
                        }}>{job.dept}</span>
                        <span style={{ fontSize: 13, color: "var(--text-2)" }}>📍 {job.location}</span>
                        <span style={{ fontSize: 13, color: "var(--text-2)" }}>🕐 {job.type}</span>
                      </div>
                    </div>
                  </div>
                  <motion.a href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "10px 22px", background: "var(--grad-btn)",
                      borderRadius: 100, fontWeight: 700, fontSize: 14,
                      color: "#fff", textDecoration: "none", whiteSpace: "nowrap",
                    }}>
                    Apply →
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Culture</SectionLabel>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                How we work
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {CULTURE_CARDS.map((card, i) => (
                <motion.div key={i} variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", cursor: "default" }}
                >
                  {/* Gradient placeholder for photo */}
                  <div style={{
                    height: 180, background: card.grad,
                    border: "1px solid var(--border)", borderBottom: "none",
                    borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)", border: "1px solid var(--border-2)",
                    }} />
                  </div>
                  <div style={{
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    borderTop: "none", borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
                    padding: "24px",
                  }}>
                    <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── General Application ── */}
      <section style={{ padding: "80px 24px 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}
            style={{
              background: "var(--surface-2)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "56px 48px", textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            <div aria-hidden style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
            }} />
            <motion.div variants={fadeUp} style={{ position: "relative" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>💌</div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em" }}>
                Don&apos;t see your role?
              </h2>
              <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 32 }}>
                We&apos;re always looking for exceptional people. Send us a note and tell us what you&apos;d love to build at Konvoq. We read every message.
              </p>
              <motion.a href="mailto:careers@konvoq.ai?subject=General Application"
                whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
                  background: "var(--grad-btn)", borderRadius: 100, fontWeight: 700, fontSize: 15,
                  color: "#fff", textDecoration: "none",
                }}>
                Send a general application →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

