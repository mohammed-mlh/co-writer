import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="text-slate-700 font-inter">

     <Navbar />
    <HeroSection />
    <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <CtaSection />
      <Footer/>
   </div>
  );
}
