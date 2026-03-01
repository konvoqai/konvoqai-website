"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";

const metrics = [
  { value: 12000, suffix: "+", label: "Teams using Konvoq" },
  { value: 40, suffix: "M", label: "Messages processed" },
  { value: 91, suffix: "%", label: "Average resolution rate" },
  { value: 3, suffix: " min", label: "Median launch time", prefix: "< " },
];

const logos = [
  "Shopify",
  "HubSpot",
  "Salesforce",
  "Zendesk",
  "Webflow",
  "Notion",
  "Stripe",
  "Linear",
];

// Non-uniform logo stagger delays — makes it feel hand-crafted
const logoDelays = [0, 0.04, 0.09, 0.13, 0.18, 0.24, 0.29, 0.35];

function AnimatedStat({ value, suffix = "", prefix = "", label }: { value: number; suffix?: string; prefix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { stiffness: 70, damping: 20 });
  const display = useTransform(spring, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <div ref={ref} className="section-surface" style={{ padding: 18 }}>
      <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.06em" }}>
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section id="proof" style={{ padding: "120px 24px 0" }}>
      <div className="site-container">
        <div className="section-frame" style={{ padding: 28 }}>
          <SectionHeader
            badge="In production with real teams"
            heading={<>Numbers from operators running it daily.</>}
            description={<>Konvoq is deployed by growth teams, support leaders, and product operators who need cleaner automation without a messy support experience.</>}
            align="left"
            style={{ marginBottom: 26 }}
          />

          {/* Stats — first column slightly wider, emphasising the primary metric */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
              gap: 12,
              marginBottom: 18,
            }}
          >
            {metrics.map((metric) => (
              <AnimatedStat key={metric.label} {...metric} />
            ))}
          </div>

          {/* Logos — stagger individually, scale in */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: logoDelays[index], ease: "easeOut" }}
                className="section-surface"
                style={{
                  padding: "12px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-2)",
                }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
