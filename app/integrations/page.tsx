import type { Metadata } from "next";
import IntegrationsPageTemplate from "@/components/templates/IntegrationsPageTemplate";

export const metadata: Metadata = {
  title: "AI Chatbot Integrations",
  description:
    "Connect Konvoq with your CRM, help desk, CMS, analytics, and communication tools to run one AI chatbot across your stack.",
};

export default function Page() {
  return <IntegrationsPageTemplate />;
}
