import type { Metadata } from "next";
import HomePageTemplate from "@/components/templates/HomePageTemplate";

export const metadata: Metadata = {
  title: "AI Chatbot for Website Support",
  description:
    "Konvoq helps teams launch an AI chatbot for website support, docs, and sales handoff. Train on your content and answer customers faster.",
};

export default function Page() {
  return <HomePageTemplate />;
}
