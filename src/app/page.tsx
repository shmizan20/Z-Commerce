import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BuilderSection from "../components/BuilderSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BuilderSection />
        <HowItWorks />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
