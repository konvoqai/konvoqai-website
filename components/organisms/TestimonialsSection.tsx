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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "120px 24px" }}>
      <div className="site-container">
        <SectionHeader
          badge="Customer perspective"
          heading={<>Operators adopt Konvoq because the product feels controlled.</>}
          description={<>The value is not only containment. It is the quality of the operating model around every automated answer.</>}
          style={{ marginBottom: 28 }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="section-surface"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>Customer note</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: "var(--text-2)", flex: 1 }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{testimonial.name}</div>
                <div style={{ fontSize: 13, color: "var(--text-3)" }}>{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

