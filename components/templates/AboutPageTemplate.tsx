"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/atoms/Button";
import SectionHeader from "@/components/molecules/SectionHeader";
import PageLayout from "@/components/templates/MarketingPageTemplate";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const principles = [
  {
    title: "Customer signal over internal opinion",
    description:
      "We ship from real support transcripts, sales objections, and onboarding bottlenecks instead of abstract product theory.",
  },
  {
    title: "Operational simplicity",
    description:
      "The product is designed so lean teams can launch AI support without adding integration debt or daily babysitting.",
  },
  {
    title: "Trust is product work",
    description:
      "Reliability, transparency, data controls, and documentation are treated as first-class UX, not enterprise add-ons.",
  },
  {
    title: "Fast iteration, deliberate polish",
    description:
      "We move quickly on product direction and slow down where details affect confidence, clarity, and conversion.",
  },
];

const timeline = [
  {
    period: "2024",
    title: "Konvoq started as a response to bloated AI implementation projects.",
    body:
      "The founding team saw support and success teams waiting weeks for chatbot changes, paying too much for brittle deployments, and still getting poor answer quality.",
  },
  {
    period: "2025",
    title: "The platform matured into a full operating layer for AI conversations.",
    body:
      "Knowledge ingestion, handoff flows, analytics, and governance became part of a single product instead of a stitched-together stack of tools.",
  },
  {
    period: "Today",
    title: "We focus on making enterprise-grade AI feel practical.",
    body:
      "That means faster launches, fewer moving parts, clearer controls, and a product experience that looks credible in front of technical buyers.",
  },
];

const leadership = [
  {
    name: "Aryan Mehta",
    role: "CEO and co-founder",
    summary: "Owns product direction, go-to-market alignment, and the commercial model behind the platform.",
  },
  {
    name: "Priya Sharma",
    role: "CTO and co-founder",
    summary: "Leads platform architecture, model orchestration, and the product's reliability standards.",
  },
  {
    name: "Marcus Chen",
    role: "Head of AI systems",
    summary: "Focuses on retrieval quality, evaluation loops, and how answers improve over time.",
  },
  {
    name: "Sofia Rodriguez",
    role: "Head of design",
    summary: "Drives the interface system, onboarding clarity, and the product's conversion-facing polish.",
  },
];

export default function AboutPageTemplate() {
  return (
    <PageLayout>
      <div style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 50% 0%, rgba(91, 140, 255, 0.12), transparent 34%)",
            maskImage: "linear-gradient(180deg, black 0%, transparent 82%)",
          }}
        />

        <section style={{ padding: "48px 24px 40px" }}>
          <div className="site-container">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  badge="About"
                  heading={<>We build AI conversation software that feels dependable the first time a serious team sees it.</>}
                  description="Konvoq exists to give support, success, and product teams a calmer way to deploy AI. Less orchestration overhead. Better controls. A cleaner operating model from day one."
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                style={{
                  marginTop: 32,
                  display: "grid",
                  gridTemplateColumns: "1.05fr 0.95fr",
                  gap: 20,
                }}
              >
                <div className="section-frame" style={{ padding: 28 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                      marginBottom: 14,
                    }}
                  >
                    Our thesis
                  </div>
                  <h2 style={{ margin: "0 0 16px", fontSize: 34, lineHeight: 1.08, letterSpacing: "-0.05em" }}>
                    AI support should look enterprise-ready without feeling enterprise-heavy.
                  </h2>
                  <p style={{ margin: "0 0 18px", color: "var(--text-2)", lineHeight: 1.75 }}>
                    We are opinionated about visual clarity, product confidence, and operational simplicity because those are the factors that decide whether AI actually gets adopted inside a company.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Button href="/careers" size="lg">View roles</Button>
                    <Button href="/contact" variant="secondary" size="lg">Talk to the team</Button>
                  </div>
                </div>

                <div
                  className="section-frame"
                  style={{
                    padding: 24,
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 12,
                  }}
                >
                  {[
                    ["Remote-first", "Operating model"],
                    ["12+ countries", "Team distribution"],
                    ["B2B SaaS", "Primary customer base"],
                    ["2024", "Founded"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      style={{
                        padding: 18,
                        borderRadius: "var(--radius)",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{value}</div>
                      <div style={{ color: "var(--text-2)", fontSize: 13 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: "0 24px 36px" }}>
          <div className="site-container">
            <div className="section-frame" style={{ padding: 28 }}>
              <div style={{ maxWidth: 860 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(91, 140, 255, 0.24)",
                    color: "var(--accent)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Mission
                </div>
                <p style={{ margin: 0, fontSize: "clamp(24px, 3.4vw, 36px)", lineHeight: 1.38, letterSpacing: "-0.04em" }}>
                  We want AI conversation infrastructure to feel as straightforward as shipping a polished SaaS feature, not as messy as coordinating five vendors and a custom services project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 36px" }}>
          <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <SectionHeader
                badge="Principles"
                align="left"
                heading={<>How we think about product, trust, and growth.</>}
                description="The same rules shape the company, the design system, and the way the platform is sold."
                style={{ margin: 0 }}
              />
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="section-surface"
                  style={{ padding: 20 }}
                >
                  <div style={{ display: "flex", gap: 14 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 12,
                        background: "var(--accent-muted)",
                        border: "1px solid rgba(91, 140, 255, 0.24)",
                        color: "var(--accent)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{principle.title}</h3>
                      <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72 }}>{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 36px" }}>
          <div className="site-container">
            <div style={{ marginBottom: 24 }}>
              <SectionHeader
                badge="Timeline"
                align="left"
                heading={<>A short history of the company and the product direction behind it.</>}
                description="We are still early, but the product decisions are driven by a consistent operating belief."
                style={{ margin: 0 }}
              />
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="section-frame"
                  style={{ padding: 24, display: "grid", gridTemplateColumns: "180px 1fr", gap: 20 }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "8px 12px",
                        borderRadius: 999,
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        color: "var(--text-1)",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.period}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 10px", fontSize: 22, lineHeight: 1.25 }}>{item.title}</h3>
                    <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72 }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 36px" }}>
          <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <SectionHeader
                badge="Leadership"
                align="left"
                heading={<>A small team, with product, design, and systems discipline at the center.</>}
                description="We stay intentionally lean so feedback loops remain fast and product decisions stay close to customers."
                style={{ margin: 0 }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }}>
              {leadership.map((person) => (
                <div key={person.name} className="section-surface" style={{ padding: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      display: "grid",
                      placeItems: "center",
                      background: "var(--accent-muted)",
                      border: "1px solid rgba(91, 140, 255, 0.24)",
                      color: "var(--accent)",
                      fontWeight: 800,
                      marginBottom: 16,
                    }}
                  >
                    {person.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{person.name}</h3>
                  <div style={{ color: "var(--text-3)", fontSize: 13, marginBottom: 10 }}>{person.role}</div>
                  <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.68, fontSize: 14 }}>{person.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 24px 88px" }}>
          <div className="site-container">
            <div className="section-frame" style={{ padding: 28, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 20 }}>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    marginBottom: 14,
                  }}
                >
                  Careers
                </div>
                <h2 style={{ margin: "0 0 12px", fontSize: 34, letterSpacing: "-0.05em", lineHeight: 1.08 }}>
                  Join a team shaping a more credible standard for AI product experiences.
                </h2>
                <p style={{ margin: 0, color: "var(--text-2)", lineHeight: 1.72, maxWidth: 560 }}>
                  If you care about product quality, technical clarity, and building software that earns trust quickly, we should talk.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 12, flexWrap: "wrap" }}>
                <Button href="/careers" size="lg">See open roles</Button>
                <Button href="/contact" variant="secondary" size="lg">Introduce yourself</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

