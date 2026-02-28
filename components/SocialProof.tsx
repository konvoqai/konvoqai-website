"use client";

import { motion, useInView, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef, useEffect } from "react";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) =>
    decimals > 0
      ? v.toFixed(decimals)
      : Math.floor(v).toLocaleString()
  );

  useEffect(() => {
    if (isInView) spring.set(target);
  }, [isInView, target, spring]);

  return (
    <motion.div
      ref={ref}
      style={{
        fontSize: 42,
        fontWeight: 900,
        letterSpacing: "-0.05em",
        background: "var(--grad-text)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1,
      }}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.div>
  );
}

const stats = [
  { target: 12000, suffix: "+", label: "Active businesses" },
  { target: 40, suffix: "M+", label: "Conversations handled" },
  { target: 4.8, suffix: "★", label: "G2 average rating", decimals: 1 },
  { target: 3, prefix: "< ", suffix: " min", label: "Average setup time" },
];

const logos = [
  "Shopify", "HubSpot", "Salesforce", "Zendesk",
  "Stripe", "Notion", "Slack", "Webflow",
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SocialProof() {
  return (
    <section
      id="proof"
      style={{
        padding: "64px 24px",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 40 }}
        >
          Trusted by 12,000+ businesses worldwide
        </motion.div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                flex: 1,
                maxWidth: 200,
                textAlign: "center",
                padding: "0 32px",
                borderLeft: i > 0 ? "1px solid var(--border)" : "none",
              }}
            >
              <AnimatedNumber
                target={s.target}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
              />
              <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 6 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo chips */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo}
              whileHover={{
                color: "var(--text-2)",
                borderColor: "var(--border-2)",
              }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "10px 22px",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-3)",
                cursor: "default",
              }}
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
