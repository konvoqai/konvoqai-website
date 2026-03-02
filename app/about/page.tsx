import type { Metadata } from "next";
import AboutPageTemplate from "@/components/templates/AboutPageTemplate";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Konvoq builds AI chatbot software for support, docs, and customer conversations with a focus on clarity, trust, and speed.",
};

export default function Page() {
  return <AboutPageTemplate />;
}
