import { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-20 scroll-reveal">
      <div className="w-16 h-16 mb-6 bg-royalGold rounded-full flex items-center justify-center mx-auto">
        <i className={`${feature.icon} text-peacockBlue text-2xl`}></i>
      </div>
      <h3 className="font-playfair text-xl font-semibold text-center mb-4">{feature.title}</h3>
      <p className="text-center text-beige">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
