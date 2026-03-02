import type { Metadata } from "next";
import PricingPageTemplate from "@/components/templates/PricingPageTemplate";

export const metadata: Metadata = {
  title: "AI Chatbot Pricing",
  description:
    "See Konvoq pricing for AI chatbot support, from startup plans to enterprise deployments with security, routing, and analytics.",
};

export default function Page() {
  return <PricingPageTemplate />;
}
