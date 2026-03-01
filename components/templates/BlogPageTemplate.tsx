"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/templates/MarketingPageTemplate";

// â”€â”€â”€ Reusable helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "var(--surface-3)",
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

// â”€â”€â”€ Animation variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const categories = ["All", "Product", "Guides", "Case Studies", "News"];

const blogPosts = [
  {
    emoji: "ðŸ¤–",
    gradient: "linear-gradient(135deg, rgba(91, 140, 255, 0.14), rgba(122, 162, 255, 0.14))",
    borderColor: "rgba(91, 140, 255, 0.24)",
    accentColor: "var(--accent)",
    title: "The Complete Guide to Training AI on Your Knowledge Base",
    excerpt:
      "Learn how to structure, clean, and upload your documentation so your chatbot answers questions with precision.",
    author: "Priya Sharma",
    authorInitial: "P",
    authorColor: "var(--accent)",
    date: "Feb 22, 2026",
    readTime: "8 min read",
    category: "Guides",
  },
  {
    emoji: "ðŸ“Š",
    gradient: "linear-gradient(135deg, rgba(122, 162, 255, 0.14), rgba(239, 68, 68, 0.14))",
    borderColor: "rgba(122, 162, 255, 0.24)",
    accentColor: "var(--accent-strong)",
    title: "5 Metrics Every Customer Support Team Should Track",
    excerpt:
      "From CSAT to resolution rate â€” the numbers that actually reveal how well your AI is performing.",
    author: "Marcus Lee",
    authorInitial: "M",
    authorColor: "var(--accent-strong)",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    category: "Guides",
  },
  {
    emoji: "ðŸ†",
    gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.14), rgba(91, 140, 255, 0.14))",
    borderColor: "rgba(16,185,129,0.2)",
    accentColor: "var(--emerald)",
    title: "How We Achieved 94% Resolution Rate with Zero Agents",
    excerpt:
      "A behind-the-scenes look at how Konvoq's own support team is powered entirely by AI.",
    author: "Sarah Chen",
    authorInitial: "S",
    authorColor: "var(--emerald)",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    category: "Case Studies",
  },
  {
    emoji: "âš¡",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(239, 68, 68, 0.14))",
    borderColor: "rgba(245,158,11,0.2)",
    accentColor: "var(--amber)",
    title: "GPT-4o vs Claude 3.5: Which Model for Customer Support?",
    excerpt:
      "We ran 10,000 test queries across both models. Here's an honest breakdown of speed, accuracy, and cost.",
    author: "Dev Patel",
    authorInitial: "D",
    authorColor: "var(--amber)",
    date: "Feb 10, 2026",
    readTime: "11 min read",
    category: "Product",
  },
  {
    emoji: "ðŸ›ï¸",
    gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.14), rgba(122, 162, 255, 0.14))",
    borderColor: "rgba(239, 68, 68, 0.22)",
    accentColor: "var(--danger)",
    title: "Shopify Store Reduced Support Tickets by 70% Using AI",
    excerpt:
      "ShopEasy's journey from 2,000 monthly tickets to just 600 â€” without adding a single agent.",
    author: "Amara Johnson",
    authorInitial: "A",
    authorColor: "var(--danger)",
    date: "Feb 6, 2026",
    readTime: "7 min read",
    category: "Case Studies",
  },
  {
    emoji: "ðŸŒ",
    gradient: "linear-gradient(135deg, rgba(91, 140, 255, 0.14), rgba(34, 197, 94, 0.14))",
    borderColor: "rgba(91, 140, 255, 0.18)",
    accentColor: "var(--accent)",
    title: "Building a Multilingual Chatbot: Step-by-Step Guide",
    excerpt:
      "How to enable 50+ languages in your Konvoq chatbot and ensure culturally appropriate responses.",
    author: "Lena MÃ¼ller",
    authorInitial: "L",
    authorColor: "var(--accent)",
    date: "Feb 2, 2026",
    readTime: "9 min read",
    category: "Guides",
  },
];

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function BlogPageTemplate() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      {/* Background glows */}
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
            right: "15%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(122, 162, 255, 0.09) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(91, 140, 255, 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* â”€â”€ Hero â”€â”€ */}
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
              <SectionLabel>Blog</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 20,
                color: "var(--text-1)",
              }}
            >
              Insights, guides, and news from{" "}
              <span className="grad-text">the Konvoq team</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
              }}
            >
              Everything you need to master AI-powered customer support â€”
              from beginner tutorials to advanced optimization strategies.
            </motion.p>
          </motion.div>
        </section>

        {/* â”€â”€ Featured Post â”€â”€ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 60px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "linear-gradient(135deg, rgba(91, 140, 255, 0.1) 0%, rgba(122, 162, 255, 0.1) 50%, rgba(239, 68, 68, 0.07) 100%)",
                border: "1px solid var(--border-2)",
                borderRadius: "var(--radius-xl)",
                padding: "48px 48px",
                cursor: "pointer",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 40,
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Big decorative emoji background */}
              <div
                style={{
                  position: "absolute",
                  right: 60,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: 140,
                  opacity: 0.08,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                ðŸ¤–
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#000",
                      background: "var(--grad-btn)",
                      borderRadius: 100,
                      padding: "4px 12px",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      background: "var(--accent-muted-strong)",
                      border: "1px solid rgba(91, 140, 255, 0.24)",
                      borderRadius: 100,
                      padding: "4px 12px",
                    }}
                  >
                    News
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    color: "var(--text-1)",
                    marginBottom: 16,
                    maxWidth: 600,
                  }}
                >
                  How AI Chatbots Are Replacing Traditional Support Teams in 2026
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                    maxWidth: 560,
                    marginBottom: 28,
                  }}
                >
                  The shift has been seismic. Over 60% of Fortune 500 companies
                  now run AI-first support. We break down why, how, and what it
                  means for the humans who were doing those jobs.
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "var(--grad-btn)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#000",
                        flexShrink: 0,
                      }}
                    >
                      J
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-1)" }}>
                        James Watkins
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>
                        Feb 26, 2026 Â· 12 min read
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: "var(--grad-btn)",
                      border: "none",
                      borderRadius: "var(--radius)",
                      padding: "10px 22px",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#000",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Read Article â†’
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* â”€â”€ Category Filter â”€â”€ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 40px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background:
                    activeCategory === cat
                      ? "var(--grad-btn)"
                      : "var(--surface-2)",
                  border:
                    activeCategory === cat
                      ? "none"
                      : "1px solid var(--border-2)",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: activeCategory === cat ? "#000" : "var(--text-2)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* â”€â”€ Blog Grid â”€â”€ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {filtered.map((post) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = post.borderColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {/* Cover */}
                <div
                  style={{
                    background: post.gradient,
                    borderBottom: `1px solid ${post.borderColor}`,
                    padding: "36px 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 52,
                    height: 130,
                  }}
                >
                  {post.emoji}
                </div>

                {/* Body */}
                <div style={{ padding: "24px 24px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: post.accentColor,
                        background: post.gradient,
                        border: `1px solid ${post.borderColor}`,
                        borderRadius: 100,
                        padding: "3px 10px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: "var(--text-1)",
                      marginBottom: 10,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-2)",
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTop: "1px solid var(--border)",
                      paddingTop: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${post.accentColor}, var(--surface-3))`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#000",
                        }}
                      >
                        {post.authorInitial}
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-1)" }}>
                          {post.author}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{post.date}</div>
                      </div>
                    </div>
                    <span style={{ color: post.accentColor, fontSize: "1.1rem" }}>â†’</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)" }}
            >
              No posts in this category yet.
            </motion.div>
          )}
        </section>

        {/* â”€â”€ Newsletter â”€â”€ */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)",
              padding: "60px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative gradient */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 600,
                height: 300,
                background: "radial-gradient(ellipse, rgba(122, 162, 255, 0.16) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <SectionLabel>Newsletter</SectionLabel>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                  marginBottom: 12,
                }}
              >
                Stay ahead of the AI curve
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-2)",
                  marginBottom: 32,
                  maxWidth: 440,
                  margin: "0 auto 32px",
                }}
              >
                Get our best guides, case studies, and product updates delivered
                weekly. No spam, unsubscribe anytime.
              </p>
              <div
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
                  placeholder="you@company.com"
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
                />
                <motion.button
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
                  Subscribe â†’
                </motion.button>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", marginTop: 16 }}>
                Join 12,000+ support leaders who read us every week.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}


