"use client";

import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function MarketingPageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="marketing-main">{children}</main>
      <Footer />
    </div>
  );
}

