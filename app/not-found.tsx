"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";

const quickLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Documentation", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,239,255,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            top: "30%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 560 }}>
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grad-text"
            style={{
              fontSize: "clamp(100px, 22vw, 200px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
              fontFamily: "Nunito, sans-serif",
              marginBottom: 32,
              display: "block",
            }}
          >
            404
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Badge */}
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
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--rose)",
                  borderRadius: "50%",
                }}
              />
              Page not found
            </div>

            <h1
              style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: 16,
                fontFamily: "Nunito, sans-serif",
                color: "var(--text-1)",
              }}
            >
              Looks like you&apos;re lost
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "var(--text-2)",
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 420,
                margin: "0 auto 40px",
              }}
            >
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
              Let&apos;s get you back on track.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 56,
              }}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "var(--text-1)",
                    color: "var(--black)",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  ← Go home
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border-2)",
                    color: "var(--text-1)",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Contact support
                </Link>
              </motion.div>
            </div>

            {/* Quick links */}
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  marginBottom: 16,
                }}
              >
                Popular pages
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {quickLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.07, ease: "easeOut" }}
                    whileHover={{ borderColor: "var(--border-2)" }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: "inline-block",
                        padding: "8px 18px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        fontSize: 13,
                        color: "var(--text-2)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

