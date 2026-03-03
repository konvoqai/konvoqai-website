"use client";

import { motion, type Variants } from "framer-motion";
import {
  Users2, ShoppingCart, Headphones, Globe, TrendingUp, MessageSquare,
  Cloud, Target, GitMerge, Database, ShoppingBag, Store, Package,
  Mail, HelpCircle, Layout, Layers, FileText, BarChart3, Activity,
  MessageCircle, Video, Hash, Phone, Code2, type LucideIcon,
} from "lucide-react";
import Button from "@/components/atoms/Button";
import PageLayout from "@/components/templates/MarketingPageTemplate";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "var(--surface-3)", border: "1px solid var(--border-2)",
      borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-2)",
      marginBottom: 24,
    }}>
      <div style={{ width: 6, height: 6, background: "var(--text-1)", borderRadius: "50%" }} />
      {children}
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const categories: Array<{
  label: string;
  Icon: LucideIcon;
  accent: string;
  glowColor: string;
  integrations: Array<{ Icon: LucideIcon; name: string; description: string }>;
}> = [
  {
    label: "CRM",
    Icon: Users2,
    accent: "var(--accent)",
    glowColor: "var(--accent-muted)",
    integrations: [
      { Icon: Cloud,    name: "Salesforce", description: "Sync leads, contacts, and opportunities. Log chat conversations automatically." },
      { Icon: Target,   name: "HubSpot",    description: "Push chatbot contacts straight into your HubSpot CRM and trigger workflows." },
      { Icon: GitMerge, name: "Pipedrive",  description: "Create deals and activities from chat interactions without leaving Konvoq." },
      { Icon: Database, name: "Zoho CRM",   description: "Bi-directional sync of customer data and conversation transcripts." },
    ],
  },
  {
    label: "E-commerce",
    Icon: ShoppingCart,
    accent: "var(--text-1)",
    glowColor: "var(--accent-muted)",
    integrations: [
      { Icon: ShoppingBag,  name: "Shopify",     description: "Answer product, order, and shipping questions with real-time store data." },
      { Icon: ShoppingCart, name: "WooCommerce", description: "Connect your WordPress store and let the AI handle order status queries." },
      { Icon: Store,        name: "BigCommerce", description: "Sync your catalog and automate FAQs about products, returns, and refunds." },
      { Icon: Package,      name: "Magento",     description: "Enterprise-grade commerce integration with full product catalog access." },
    ],
  },
  {
    label: "Helpdesk",
    Icon: Headphones,
    accent: "var(--accent-strong)",
    glowColor: "var(--accent-muted)",
    integrations: [
      { Icon: Headphones,    name: "Zendesk",    description: "Escalate unresolved chats to Zendesk tickets with full conversation history." },
      { Icon: MessageCircle, name: "Intercom",   description: "Use Konvoq as first-line AI and hand off complex issues to Intercom agents." },
      { Icon: Mail,          name: "Freshdesk",  description: "Create Freshdesk tickets automatically when the chatbot cannot resolve issues." },
      { Icon: HelpCircle,    name: "Help Scout", description: "Route conversations to the right Help Scout mailbox based on topic." },
    ],
  },
  {
    label: "CMS",
    Icon: Globe,
    accent: "var(--text-1)",
    glowColor: "var(--accent-muted)",
    integrations: [
      { Icon: Globe,     name: "WordPress", description: "Auto-train on your WordPress pages, posts, and WooCommerce products." },
      { Icon: Layout,    name: "Webflow",   description: "Embed the Konvoq widget on any Webflow site with a single code snippet." },
      { Icon: Layers,    name: "Framer",    description: "Drop the Konvoq component into any Framer project in seconds." },
      { Icon: FileText,  name: "Notion",    description: "Train your chatbot on your entire Notion workspace with one click." },
    ],
  },
  {
    label: "Analytics",
    Icon: TrendingUp,
    accent: "var(--text-1)",
    glowColor: "var(--accent-muted)",
    integrations: [
      { Icon: TrendingUp, name: "Google Analytics", description: "Track chat engagement as GA4 events and connect to your existing dashboards." },
      { Icon: BarChart3,  name: "Mixpanel",         description: "Send conversation events to Mixpanel for deep funnel and retention analysis." },
      { Icon: Activity,   name: "Amplitude",         description: "Correlate chatbot interactions with product usage across your user base." },
      { Icon: Database,   name: "Heap",              description: "Capture every chat touchpoint automatically with Heap's retroactive tracking." },
    ],
  },
  {
    label: "Communication",
    Icon: MessageSquare,
    accent: "var(--accent)",
    glowColor: "var(--accent-muted)",
    integrations: [
      { Icon: MessageSquare, name: "Slack",           description: "Get real-time alerts for new conversations and handoff requests in Slack." },
      { Icon: Video,         name: "Microsoft Teams", description: "Notify your support team in Teams channels when intervention is needed." },
      { Icon: Hash,          name: "Discord",         description: "Deploy Konvoq as a Discord bot to support your community 24/7." },
      { Icon: Phone,         name: "WhatsApp",        description: "Take your AI chatbot to WhatsApp Business and reach customers where they are." },
    ],
  },
];
const marqueeLogos = [
  "Salesforce", "HubSpot", "Shopify", "Zendesk", "Intercom", "Slack",
  "WordPress", "Webflow", "Google Analytics", "Mixpanel", "Pipedrive", "Freshdesk",
  "WooCommerce", "Microsoft Teams", "WhatsApp", "Discord", "Notion", "Amplitude",
];

function MarqueeTrack() {
  return (
    <div style={{ display: "flex", gap: 16, willChange: "transform" }}>
      {[...marqueeLogos, ...marqueeLogos].map((name, i) => (
        <div
          key={`${name}-${i}`}
          style={{
            flexShrink: 0, padding: "10px 20px",
            background: "var(--surface-2)", border: "1px solid var(--border)",
            borderRadius: 100, fontSize: 13, fontWeight: 500, color: "var(--text-1)",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default function IntegrationsPageTemplate() {
  return (
    <PageLayout>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600,
          background: "radial-gradient(circle, var(--accent-muted-strong) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "-10%", width: 500, height: 500,
          background: "radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "100px 24px 64px" }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Integrations</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800,
                letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 auto 24px", maxWidth: 780,
              }}
            >
              Integrations for your AI chatbot
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 19, color: "var(--text-2)", maxWidth: 540,
                margin: "0 auto 48px", lineHeight: 1.7,
              }}
            >
              Connect your CRM, help desk, CMS, analytics, and chat tools without a heavy setup.
            </motion.p>
          </motion.div>
        </section>

        {/* Marquee */}
        <section style={{ padding: "0 0 80px", overflow: "hidden" }}>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 120,
              background: "linear-gradient(to right, var(--background), transparent)",
              zIndex: 2, pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", right: 0, top: 0, bottom: 0, width: 120,
              background: "linear-gradient(to left, var(--background), transparent)",
              zIndex: 2, pointerEvents: "none",
            }} />
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: 16, marginBottom: 12 }}
            >
              <MarqueeTrack />
            </motion.div>
            <motion.div
              animate={{ x: [-1800, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: 16 }}
            >
              <MarqueeTrack />
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
            {categories.map((category) => (
              <div key={category.label}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: "var(--radius)",
                    background: "var(--surface-2)", border: "1px solid var(--border-2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: category.accent,
                  }}>
                    <category.Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h2 style={{
                      fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em",
                      color: "var(--text-1)", marginBottom: 2,
                    }}>
                      {category.label}
                    </h2>
                    <div style={{ fontSize: 13, color: "var(--text-3)" }}>
                      {category.integrations.length} integrations
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="px-4 sm:px-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={staggerContainer}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: 16,
                  }}
                >
                  {category.integrations.map((integration) => (
                    <motion.div
                      key={integration.name}
                      variants={cardVariants}
                      className="mx-auto w-full max-w-sm min-w-0 overflow-hidden sm:max-w-none"
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-lg)",
                        padding: 28,
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{
                        position: "absolute", top: -40, right: -40, width: 140, height: 140,
                        background: `radial-gradient(circle, ${category.glowColor} 0%, transparent 70%)`,
                        borderRadius: "50%", pointerEvents: "none",
                      }} />
                      <div style={{
                        width: 48, height: 48, borderRadius: 14, marginBottom: 16,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "var(--surface-2)", border: "1px solid var(--border)",
                        color: "var(--text-1)",
                      }}>
                        <integration.Icon size={22} strokeWidth={1.6} />
                      </div>
                      <h3 style={{
                        fontSize: 17, fontWeight: 700, color: "var(--text-1)",
                        marginBottom: 8, letterSpacing: "-0.01em",
                      }}>
                        {integration.name}
                      </h3>
                      <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 20 }}>
                        {integration.description}
                      </p>
                      <button style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        background: "var(--surface-2)", border: "1px solid var(--border-2)",
                        color: "var(--text-1)", fontWeight: 600, fontSize: 13,
                        padding: "8px 16px", borderRadius: 8, cursor: "pointer",
                        fontFamily: "inherit",
                      }}>
                        Connect
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Can't find your integration */}
        <section style={{ padding: "80px 24px 100px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              maxWidth: 700, margin: "0 auto", textAlign: "center",
              background: "var(--surface)", border: "1px solid var(--border-2)",
              borderRadius: "var(--radius-xl)", padding: "64px 48px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center top, var(--accent-muted-strong) 0%, transparent 60%)",
              pointerEvents: "none",
            }} />
            <motion.div
              variants={fadeUp}
              style={{
                width: 64, height: 64, margin: "0 auto 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 18, border: "1px solid var(--border-2)",
                background: "var(--surface-2)", color: "var(--text-1)",
              }}
            >
              <Code2 size={28} strokeWidth={1.6} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionLabel>Custom Integration</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800,
              letterSpacing: "-0.02em", color: "var(--text-1)", marginBottom: 16,
            }}>
              Need another integration?
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              color: "var(--text-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 36,
            }}>
              Use our API and webhooks to connect internal tools, or ask us to add the integration you need.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/api-reference" variant="primary" size="lg">
                View API docs
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Request an integration
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}



