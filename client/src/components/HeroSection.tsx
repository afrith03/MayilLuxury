import ShapeDivider from "./ui/shape-divider";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/WhatsApp Image 2025-04-03 at 10.57.25 PM.jpeg')" }}
    >
      <div className="absolute inset-0 bg-peacockBlue bg-opacity-60"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl md:text-6xl text-white leading-tight mb-6 scroll-reveal">
            Welcome to <span className="text-royalGold">Mayil Sambranis</span>
          </h1>
          <p className="text-lg md:text-xl text-beige mb-8 font-light scroll-reveal">
            Experience the divine fragrance of tradition, crafted with purity and devotion
          </p>
          <button className="bg-royalGold hover:bg-amber-400 text-peacockBlue font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg scroll-reveal">
            Explore Our Sambranis
          </button>
        </div>
      </div>
      
      <ShapeDivider />
    </section>
  );
};

export default HeroSection;
