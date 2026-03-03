import CtaSection from "@/components/organisms/CtaSection";
import FaqSection from "@/components/organisms/FaqSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import IntegrationsSection from "@/components/organisms/IntegrationsSection";
import Navbar from "@/components/organisms/Navbar";
import PricingSection from "@/components/organisms/PricingSection";
import SocialProofSection from "@/components/organisms/SocialProofSection";
import UseCasesSection from "@/components/organisms/UseCasesSection";

export default function HomePageTemplate() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="marketing-main">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <UseCasesSection />
        <PricingSection />
        {/* <TestimonialsSection /> */}
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
