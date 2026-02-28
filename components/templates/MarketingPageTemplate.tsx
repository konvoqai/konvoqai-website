"use client";

import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function MarketingPageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>{children}</main>
      <Footer />
    </>
  );
}
