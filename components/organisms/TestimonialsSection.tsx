"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const testimonials = [
  {
    quote: "Konvoq reduced our support load without changing the tone of the product. It feels native to the experience, not pasted on.",
    name: "Ava Chen",
    role: "Head of Support, Northline",
  },
  {
    quote: "The biggest win is the handoff quality. When a conversation reaches a human, the context is already organized and useful.",
    name: "Marcus Reid",
    role: "VP Customer Operations, Ledgerbase",
  },
  {
    quote: "We launched faster than expected and the reporting made it obvious where to improve source content instead of guessing.",
    name: "Priya Shah",
    role: "Growth Lead, Patternwise",
  },
];

// Each card enters from a different direction — left, up, right
const cardInitialX = [-16, 0, 16];
const cardInitialY = [0, 18, 0];

// Slightly varied hover — outer two tilt, center stays flat
const cardHovers = [
  { y: -3, rotate: 0.5 },
  { y: -5 },
  { y: -3, rotate: -0.5 },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="What teams say"
          heading={<>The people running it told us it felt different from day one.</>}
          description={<>The value is not only containment. It is the quality of the operating model around every automated answer.</>}
          style={{ marginBottom: 28 }}
        />

        {/* Slightly asymmetric column widths — breaks the 1/3 sameness */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.08fr 0.92fr", gap: 14 }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="section-surface"
              initial={{ opacity: 0, x: cardInitialX[index], y: cardInitialY[index] }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={cardHovers[index]}
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Large opening quote mark — replaces the robotic "Customer note" label */}
              <div
                style={{
                  fontSize: 40,
                  lineHeight: 1,
                  color: "var(--accent)",
                  fontWeight: 800,
                  marginBottom: -8,
                  fontFamily: "Georgia, serif",
                  opacity: 0.7,
                }}
              >
                &ldquo;
              </div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: "var(--text-2)", flex: 1 }}>
                {testimonial.quote}
              </p>
              <div style={{ paddingTop: 4, borderTop: "1px solid color-mix(in srgb, var(--border) 60%, transparent)" }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{testimonial.name}</div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
