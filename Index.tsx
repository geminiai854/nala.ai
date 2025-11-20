import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactSection from "@/components/ImpactSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <IntroSection />
      <FeaturesSection />
      <ImpactSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default Index;
