import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konvoq — AI Chatbot for Websites",
  description:
    "Konvoq trains a custom AI chatbot on your website, docs, and data — then deploys it in minutes. Convert more. Support better. Grow without hiring.",
  keywords: [
    "AI chatbot",
    "website chatbot",
    "customer support automation",
    "GPT-4o",
    "Claude",
    "Gemini",
    "SaaS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
