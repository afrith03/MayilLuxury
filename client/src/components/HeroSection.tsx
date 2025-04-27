const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#1A2F4B" }}
    >
      {/* Background with mandala patterns on sides */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-[80vh] opacity-90">
        <img src="/assets/mandala-pattern.svg" alt="" className="h-full w-auto" />
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-[80vh] opacity-90">
        <img src="/assets/mandala-pattern.svg" alt="" className="h-full w-auto" />
      </div>

      {/* Top and bottom decorative borders */}
      <div className="absolute top-12 left-0 right-0 h-10 overflow-hidden">
        <img src="/assets/luxury-border.svg" alt="" className="w-full" />
      </div>

      <div className="absolute bottom-12 left-0 right-0 h-10 overflow-hidden">
        <img src="/assets/luxury-border.svg" alt="" className="w-full" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto relative py-16 px-6">
          {/* Content with enhanced styling */}
          <h1 className="font-cormorant text-5xl md:text-7xl text-white leading-tight mb-6 scroll-reveal drop-shadow-lg tracking-wider font-bold">
            {/* <div className="mb-3">Experience</div> */}
            <div className="mt-2 mb-3">
              <span className="bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-300 text-transparent bg-clip-text">Mayil Sambranis</span>
            </div>
          </h1>

          {/* Decorative gold border */}
          <div className="w-40 h-1 bg-[#D4AF37] mx-auto my-8"></div>

          <p className="text-xl md:text-2xl text-[#E6D2AC] mb-12 font-light scroll-reveal italic font-cormorant">
            Discover the divine fragrance of tradition, crafted with purity and devotion
          </p>

          <button className="bg-[#D4AF37] hover:bg-[#C4A447] text-[#1A2F4B] font-bold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg scroll-reveal uppercase tracking-widest text-sm border border-[#E6D2AC] border-opacity-30">
            <a href="#products"> View our products</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
