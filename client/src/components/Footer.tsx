const Footer = () => {
  return (
    <footer className="bg-peacockBlue text-white pt-16 pb-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 background-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-royalGold rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-feather-alt text-peacockBlue text-xl"></i>
              </div>
              <span className="font-rozha text-2xl">Mayil <span className="text-emeraldGreen">Sambranis</span></span>
            </div>
            <p className="text-gray-300 mb-4">
              Preserving the sacred tradition of premium Sambranis, handcrafted with devotion and purity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-royalGold transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-royalGold transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-royalGold transition-colors" aria-label="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-playfair text-lg mb-4 border-b border-emeraldGreen pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-royalGold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-royalGold transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-royalGold transition-colors">Products</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-royalGold transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-royalGold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-playfair text-lg mb-4 border-b border-emeraldGreen pb-2">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-royalGold transition-colors">Traditional Temple Sambrani</a></li>
              <li><a href="#" className="text-gray-300 hover:text-royalGold transition-colors">Rose Infused Sambrani</a></li>
              <li><a href="#" className="text-gray-300 hover:text-royalGold transition-colors">Premium Sandalwood Sambrani</a></li>
              <li><a href="#" className="text-gray-300 hover:text-royalGold transition-colors">Festive Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-royalGold transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-playfair text-lg mb-4 border-b border-emeraldGreen pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-emeraldGreen"></i>
                <span className="text-gray-300">123 Temple Street, Mylapore, Chennai - 600004, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-emeraldGreen"></i>
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-emeraldGreen"></i>
                <span className="text-gray-300">info@mayilsambranis.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mayil Sambranis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
