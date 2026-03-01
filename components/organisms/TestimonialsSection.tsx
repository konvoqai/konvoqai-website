"use client";

import { motion } from "framer-motion";

const people = ["AC", "MR", "PS", "JL", "NV"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "34px 24px 110px" }}>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 18,
            alignItems: "center",
            padding: "28px 28px",
            border: "1px solid color-mix(in srgb, var(--border) 74%, transparent)",
            borderRadius: 28,
            background: "color-mix(in srgb, var(--surface-2) 82%, transparent)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div>
            <div style={{ fontSize: "clamp(28px, 3.8vw, 40px)", lineHeight: 1.2, letterSpacing: "-0.04em", fontWeight: 760, marginBottom: 10 }}>
              You do not just get a platform. You get a crew.
            </div>
            <div style={{ color: "var(--text-2)", lineHeight: 1.7, fontSize: 15, maxWidth: 640 }}>
              Teams switch because the product feels more operational from day one and the handoff quality is materially better than generic chatbot tooling.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {people.map((person, index) => (
              <motion.div
                key={person}
                initial={{ opacity: 0, scale: 0.84 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.28, delay: index * 0.04, ease: "easeOut" }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  display: "grid",
                  placeItems: "center",
                  marginLeft: index > 0 ? -10 : 0,
                  border: "1px solid color-mix(in srgb, var(--border) 78%, transparent)",
                  background: index % 2 === 0 ? "var(--accent-muted)" : "color-mix(in srgb, var(--surface-2) 82%, transparent)",
                  color: "var(--text-1)",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {person}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
