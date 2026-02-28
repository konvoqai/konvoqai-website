import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import SocialProofSection from "@/components/organisms/SocialProofSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import IntegrationsSection from "@/components/organisms/IntegrationsSection";
import UseCasesSection from "@/components/organisms/UseCasesSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import PricingSection from "@/components/organisms/PricingSection";
import FaqSection from "@/components/organisms/FaqSection";
import CtaSection from "@/components/organisms/CtaSection";
import Footer from "@/components/organisms/Footer";

export default function HomePageTemplate() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <UseCasesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
