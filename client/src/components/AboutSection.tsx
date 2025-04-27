const AboutSection = () => {
  return (
    <section id="about" className="py-20 background-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-peacockBlue mb-4 scroll-reveal">The Tradition of Sambrani</h2>
          <div className="w-20 h-1 bg-royalGold mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 scroll-reveal">
            <div className="relative">
              <img 
                src="/assets/WhatsApp Image 2025-04-03 at 10.55.37 PM.jpeg" 
                alt="Traditional Sambrani crafted by Mayil Sambranis" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-royalGold rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 scroll-reveal">
            <h3 className="text-2xl text-emeraldGreen mb-4">A Sacred Heritage</h3>
            <p className="mb-4 text-gray-700">
              For centuries, Sambrani (Dhoop) has been an integral part of Indian spiritual practices. The aromatic resin produces a divine fragrance when burnt, purifying spaces and elevating the soul to higher spiritual planes.
            </p>
            <p className="mb-6 text-gray-700">
              At Mayil Sambranis, we preserve this ancient tradition by handcrafting our products using time-honored methods. Our artisans carefully select the finest natural ingredients, ensuring each Sambrani cup carries the essence of purity and devotion.
            </p>
            
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-emeraldGreen flex items-center justify-center mr-3">
                <i className="fas fa-om text-ivory text-xs"></i>
              </div>
              <span className="font-medium">Pure natural ingredients</span>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-emeraldGreen flex items-center justify-center mr-3">
                <i className="fas fa-hands-praying text-ivory text-xs"></i>
              </div>
              <span className="font-medium">Traditional artisan crafting</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-emeraldGreen flex items-center justify-center mr-3">
                <i className="fas fa-star text-ivory text-xs"></i>
              </div>
              <span className="font-medium">Temple-grade quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
