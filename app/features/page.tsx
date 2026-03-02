import type { Metadata } from "next";
import FeaturesPageTemplate from "@/components/templates/FeaturesPageTemplate";

export const metadata: Metadata = {
  title: "AI Chatbot Features",
  description:
    "Explore Konvoq AI chatbot features for support teams, including training, routing, analytics, human handoff, and enterprise security.",
};

export default function Page() {
  return <FeaturesPageTemplate />;
}
