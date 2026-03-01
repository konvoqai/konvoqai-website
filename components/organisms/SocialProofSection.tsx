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
            badge="Trusted by operators"
            heading={<>Proof that the system is working in the real world.</>}
            description={<>Konvoq is deployed by growth teams, support leaders, and product operators who need cleaner automation without a messy support experience.</>}
            align="left"
            style={{ marginBottom: 26 }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 18 }}>
            {metrics.map((metric) => (
              <AnimatedStat key={metric.label} {...metric} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
          >
            {logos.map((logo) => (
              <div
                key={logo}
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
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

