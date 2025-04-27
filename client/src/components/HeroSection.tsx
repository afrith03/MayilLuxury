import ShapeDivider from "./ui/shape-divider";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/WhatsApp Image 2025-04-03 at 10.57.25 PM.jpeg')" }}
    >
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-mayilBlue bg-opacity-70"></div>
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          backgroundImage: "url('/assets/hero-pattern.svg')",
          backgroundSize: "200px 200px"
        }}
      ></div>
      
      {/* Top and bottom decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <img src="/assets/ornate-border.svg" alt="" className="w-full transform rotate-180" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <img src="/assets/ornate-border.svg" alt="" className="w-full" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-royalGold opacity-80"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 border-t-4 border-r-4 border-royalGold opacity-80"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-4 border-l-4 border-royalGold opacity-80"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-royalGold opacity-80"></div>
          
          {/* Content with enhanced styling */}
          <h1 className="font-cormorant text-5xl md:text-7xl text-white leading-tight mb-2 scroll-reveal drop-shadow-lg tracking-wide">
            Welcome to 
            <div className="mt-2 mb-3">
              <span className="bg-gradient-to-r from-amber-300 via-royalGold to-amber-300 text-transparent bg-clip-text font-bold">Mayil Sambranis</span>
            </div>
          </h1>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-royalGold to-transparent"></div>
            <div className="mx-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L14.5 8.5L20.5 9.5L16 13.5L17.5 19.5L12 16.5L6.5 19.5L8 13.5L3.5 9.5L9.5 8.5L12 3Z" fill="#FFD700"/>
              </svg>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-royalGold via-royalGold to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-beige mb-10 font-light scroll-reveal italic">
            Experience the divine fragrance of tradition, crafted with purity and devotion
          </p>
          
          <button className="bg-gradient-to-r from-amber-500 via-royalGold to-amber-500 hover:from-royalGold hover:to-amber-400 text-mayilBlue font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg scroll-reveal border border-amber-300">
            Explore Our Sambranis
          </button>
        </div>
      </div>
      
      <ShapeDivider />
    </section>
  );
};

export default HeroSection;
