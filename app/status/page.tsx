"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

// ─── Reusable helpers ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--border-2)",
        borderRadius: 100,
        padding: "6px 16px",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--text-2)",
        marginBottom: 24,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          background: "var(--grad-aurora)",
          borderRadius: "50%",
        }}
      />
      {children}
    </div>
  );
}

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    name: "API",
    desc: "REST API endpoints and authentication",
    icon: "🔌",
    status: "Operational",
    uptime: "100.00%",
    latency: "42ms",
  },
  {
    name: "Widget CDN",
    desc: "Chat widget delivery and static assets",
    icon: "🌐",
    status: "Operational",
    uptime: "99.99%",
    latency: "18ms",
  },
  {
    name: "Dashboard",
    desc: "Web application and user interface",
    icon: "📊",
    status: "Operational",
    uptime: "99.98%",
    latency: "210ms",
  },
  {
    name: "AI Processing",
    desc: "Language model inference and response generation",
    icon: "🧠",
    status: "Operational",
    uptime: "99.97%",
    latency: "680ms",
  },
  {
    name: "Webhooks",
    desc: "Real-time event delivery and notifications",
    icon: "🔔",
    status: "Operational",
    uptime: "99.99%",
    latency: "95ms",
  },
  {
    name: "Training Pipeline",
    desc: "Knowledge base ingestion and model fine-tuning",
    icon: "⚙️",
    status: "Operational",
    uptime: "99.96%",
    latency: "—",
  },
];

const incidents = [
  {
    date: "Feb 12, 2026",
    title: "Elevated API Latency",
    description:
      "Some API requests experienced response times 3-4x higher than normal due to a database connection pool exhaustion during a traffic spike. All requests continued to succeed throughout the incident.",
    duration: "Resolved in 23 min",
    severity: "Minor",
    severityColor: "var(--amber)",
    severityBg: "rgba(245,158,11,0.1)",
    severityBorder: "rgba(245,158,11,0.2)",
    affected: ["API"],
  },
  {
    date: "Jan 28, 2026",
    title: "Widget CDN Slowdown (EU Region)",
    description:
      "The EU edge nodes for our widget CDN experienced elevated load times due to a misconfigured cache TTL following a routine deployment. Users in Europe saw widget load times increase from ~20ms to ~400ms.",
    duration: "Resolved in 41 min",
    severity: "Minor",
    severityColor: "var(--amber)",
    severityBg: "rgba(245,158,11,0.1)",
    severityBorder: "rgba(245,158,11,0.2)",
    affected: ["Widget CDN"],
  },
  {
    date: "Dec 15, 2025",
    title: "AI Processing Delay",
    description:
      "A queuing backlog in the AI inference layer caused response generation delays across all regions. Chatbot responses took 8-15 seconds instead of the usual 1-2 seconds. No data was lost.",
    duration: "Resolved in 1h 12min",
    severity: "Degraded",
    severityColor: "var(--rose)",
    severityBg: "rgba(244,63,94,0.1)",
    severityBorder: "rgba(244,63,94,0.2)",
    affected: ["AI Processing"],
  },
];

// Generate 30 uptime bars — mostly operational, a couple degraded
function generateUptimeBars(): Array<{ status: "operational" | "degraded" | "outage"; date: string }> {
  const bars = [];
  const today = new Date("2026-02-28");
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    // Feb 12 = index 16 from 29 days ago perspective
    const dayOfMonth = d.getDate();
    const month = d.getMonth(); // 1 = Feb
    let status: "operational" | "degraded" | "outage" = "operational";
    if (month === 1 && dayOfMonth === 12) status = "degraded"; // Feb 12
    if (month === 0 && dayOfMonth === 28) status = "degraded"; // Jan 28
    bars.push({ status, date: dateStr });
  }
  return bars;
}

const uptimeBars = generateUptimeBars();

// ─── Component ───────────────────────────────────────────────────────────────

export default function StatusPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  }

  return (
    <PageLayout>
      {/* Background ambient glows */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>System Status</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 28,
                color: "var(--text-1)",
              }}
            >
              System Status
            </motion.h1>

            {/* All Systems Operational badge */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(16,185,129,0.1)",
                  border: "2px solid rgba(16,185,129,0.3)",
                  borderRadius: "var(--radius-lg)",
                  padding: "18px 32px",
                }}
              >
                {/* Pulsing dot */}
                <div style={{ position: "relative", width: 16, height: 16 }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "var(--emerald)",
                      borderRadius: "50%",
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "var(--emerald)",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--emerald)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  All Systems Operational
                </span>
              </div>
            </motion.div>

            {/* Uptime summary */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", justifyContent: "center", gap: 32 }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--emerald)" }}>
                  99.99%
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>
                  Uptime (last 90 days)
                </div>
              </div>
              <div
                style={{
                  width: 1,
                  height: 50,
                  background: "var(--border)",
                  alignSelf: "center",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text-1)" }}>
                  0
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>Active incidents</div>
              </div>
              <div
                style={{
                  width: 1,
                  height: 50,
                  background: "var(--border)",
                  alignSelf: "center",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text-1)" }}>
                  42ms
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>Avg API latency</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Service Status Rows ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                gap: 16,
                padding: "14px 28px",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface-3)",
              }}
            >
              {["Service", "Status", "Uptime", "Latency"].map((h) => (
                <div
                  key={h}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Rows */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {services.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  variants={slideIn}
                  whileHover={{ background: "rgba(255,255,255,0.02)" }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto auto",
                    gap: 16,
                    padding: "20px 28px",
                    borderBottom: i < services.length - 1 ? "1px solid var(--border)" : "none",
                    alignItems: "center",
                    transition: "background 0.2s",
                  }}
                >
                  {/* Service name */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "var(--radius)",
                        background: "var(--surface-3)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        flexShrink: 0,
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-1)" }}>
                        {svc.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>{svc.desc}</div>
                    </div>
                  </div>

                  {/* Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      borderRadius: 100,
                      padding: "5px 12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--emerald)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--emerald)",
                      }}
                    >
                      {svc.status}
                    </span>
                  </div>

                  {/* Uptime */}
                  <div style={{ textAlign: "center", minWidth: 70 }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-1)" }}>
                      {svc.uptime}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-3)" }}>30d</div>
                  </div>

                  {/* Latency */}
                  <div style={{ textAlign: "center", minWidth: 60 }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--cyan)" }}>
                      {svc.latency}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-3)" }}>p50</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── 30-Day Uptime Visualization ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div style={{ marginBottom: 32 }}>
              <SectionLabel>Uptime History</SectionLabel>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                }}
              >
                30-Day Uptime
              </h2>
            </div>

            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 28px",
              }}
            >
              {/* Bar chart */}
              <div
                style={{
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-end",
                  height: 56,
                  marginBottom: 10,
                  position: "relative",
                }}
              >
                {uptimeBars.map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.015, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{
                      flex: 1,
                      height: bar.status === "operational" ? "100%" : bar.status === "degraded" ? "60%" : "20%",
                      background:
                        bar.status === "operational"
                          ? "var(--emerald)"
                          : bar.status === "degraded"
                          ? "var(--amber)"
                          : "var(--rose)",
                      borderRadius: 3,
                      opacity: hoveredBar !== null && hoveredBar !== i ? 0.4 : 1,
                      cursor: "pointer",
                      transformOrigin: "bottom",
                      transition: "opacity 0.15s",
                    }}
                  />
                ))}

                {/* Hover tooltip */}
                {hoveredBar !== null && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 8px)",
                      left: `calc(${(hoveredBar / 30) * 100}% - 40px)`,
                      background: "var(--surface-3)",
                      border: "1px solid var(--border-2)",
                      borderRadius: "var(--radius)",
                      padding: "6px 10px",
                      fontSize: "0.75rem",
                      color: "var(--text-1)",
                      pointerEvents: "none",
                      whiteSpace: "nowrap",
                      zIndex: 10,
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>{uptimeBars[hoveredBar].date}</div>
                    <div
                      style={{
                        color:
                          uptimeBars[hoveredBar].status === "operational"
                            ? "var(--emerald)"
                            : "var(--amber)",
                        textTransform: "capitalize",
                      }}
                    >
                      {uptimeBars[hoveredBar].status}
                    </div>
                  </div>
                )}
              </div>

              {/* Date labels */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Jan 30, 2026</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Feb 28, 2026</span>
              </div>

              {/* Legend */}
              <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
                {[
                  { color: "var(--emerald)", label: "Operational" },
                  { color: "var(--amber)", label: "Degraded performance" },
                  { color: "var(--rose)", label: "Outage" },
                ].map((l) => (
                  <div
                    key={l.label}
                    style={{ display: "flex", alignItems: "center", gap: 7 }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        background: l.color,
                        borderRadius: 2,
                      }}
                    />
                    <span style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Incident History ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 72px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: 32 }}
          >
            <SectionLabel>Incident History</SectionLabel>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-1)",
              }}
            >
              Past Incidents
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginTop: 8 }}>
              No active incidents. Displaying resolved incidents from the last 90 days.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {incidents.map((inc) => (
              <motion.div
                key={inc.title}
                variants={fadeUp}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px 28px",
                  borderLeft: `4px solid ${inc.severityColor}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: inc.severityColor,
                          background: inc.severityBg,
                          border: `1px solid ${inc.severityBorder}`,
                          borderRadius: 100,
                          padding: "3px 10px",
                        }}
                      >
                        {inc.severity}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--emerald)",
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          borderRadius: 100,
                          padding: "3px 10px",
                        }}
                      >
                        Resolved
                      </span>
                      {inc.affected.map((a) => (
                        <span
                          key={a}
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: "var(--text-3)",
                            background: "var(--surface-3)",
                            border: "1px solid var(--border)",
                            borderRadius: 100,
                            padding: "3px 9px",
                          }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-1)",
                      }}
                    >
                      {inc.title}
                    </h3>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-1)" }}>
                      {inc.date}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--emerald)", marginTop: 2 }}>
                      {inc.duration}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.65 }}>
                  {inc.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginTop: 16, textAlign: "center" }}
          >
            <a
              href="#"
              style={{
                fontSize: "0.88rem",
                color: "var(--text-2)",
                textDecoration: "none",
                borderBottom: "1px dashed var(--border-2)",
                paddingBottom: 2,
              }}
            >
              View full incident history →
            </a>
          </motion.div>
        </section>

        {/* ── Subscribe to Status Updates ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(6,239,255,0.07) 100%)",
              border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)",
              padding: "56px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔔</div>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                  marginBottom: 12,
                }}
              >
                Get status updates instantly
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-2)",
                  marginBottom: 32,
                  maxWidth: 420,
                  margin: "0 auto 32px",
                  lineHeight: 1.7,
                }}
              >
                Subscribe to receive real-time notifications when incidents occur
                or when services are restored.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 28px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--emerald)",
                  }}
                >
                  <span>✓</span>
                  <span>You're subscribed! We'll notify you of any incidents.</span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  style={{
                    display: "flex",
                    gap: 12,
                    maxWidth: 480,
                    margin: "0 auto",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    style={{
                      flex: 1,
                      minWidth: 220,
                      background: "var(--surface-3)",
                      border: "1px solid var(--border-2)",
                      borderRadius: "var(--radius)",
                      padding: "13px 18px",
                      fontSize: "0.95rem",
                      color: "var(--text-1)",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--emerald)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-2)";
                    }}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: "var(--grad-btn)",
                      border: "none",
                      borderRadius: "var(--radius)",
                      padding: "13px 24px",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#000",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Subscribe →
                  </motion.button>
                </form>
              )}

              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", marginTop: 16 }}>
                You can also follow{" "}
                <a
                  href="https://twitter.com/konvoqstatus"
                  style={{ color: "var(--cyan)", textDecoration: "none" }}
                >
                  @konvoqstatus
                </a>{" "}
                on X for real-time updates.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}
