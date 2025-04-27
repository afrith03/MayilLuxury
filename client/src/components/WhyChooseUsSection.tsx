import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose" className="py-20 mayil-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 background-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">Why Choose Mayil Sambranis</h2>
          <div className="w-20 h-1 bg-royalGold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-beige scroll-reveal">
            We uphold the sacred traditions while crafting premium quality Sambranis that elevate your spiritual experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
