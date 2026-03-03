import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("konvoq-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = stored || system;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://konvoq.ai"),
  title: {
    default: "Konvoq | AI Chatbot for Website Support",
    template: "%s | Konvoq",
  },
  description:
    "Konvoq is an AI chatbot platform for website support, docs, and sales handoff. Train on your content, answer faster, and route conversations with context.",
  keywords: [
    "AI chatbot",
    "website chatbot",
    "AI support agent",
    "customer support automation",
    "help desk AI",
    "sales handoff",
    "SaaS chatbot",
  ],
  openGraph: {
    title: "Konvoq | AI Chatbot for Website Support",
    description:
      "Train an AI chatbot on your website and docs, answer support questions faster, and route high-intent conversations with context.",
    url: "https://konvoq.ai",
    siteName: "Konvoq",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

