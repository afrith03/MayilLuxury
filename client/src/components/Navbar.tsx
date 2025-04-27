import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled || true ? 'bg-ivory bg-opacity-90 backdrop-blur-sm shadow-md border-b-2 border-royalGold' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <img 
              src="/assets/mayil-logo-traditional.svg" 
              alt="Mayil Sambranis Logo" 
              className="w-14 h-14 drop-shadow-md"
            />
          </div>
          <span className="font-cormorant text-2xl text-mayilBlue font-bold tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-royalGold via-amber-500 to-royalGold">Mayil</span> 
            <span className="text-emeraldGreen">Sambranis</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="font-medium hover:text-emeraldGreen transition-colors">Home</a></li>
          <li><a href="#about" className="font-medium hover:text-emeraldGreen transition-colors">About</a></li>
          <li><a href="#products" className="font-medium hover:text-emeraldGreen transition-colors">Products</a></li>
          <li><a href="#why-choose" className="font-medium hover:text-emeraldGreen transition-colors">Why Choose Us</a></li>
          <li><a href="#testimonials" className="font-medium hover:text-emeraldGreen transition-colors">Testimonials</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-peacockBlue focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
        
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-peacockBlue bg-opacity-95 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex justify-end p-4">
            <button 
              onClick={closeMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li><a href="#home" onClick={closeMenu} className="text-white text-2xl font-playfair hover:text-royalGold transition-colors">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="text-white text-2xl font-playfair hover:text-royalGold transition-colors">About</a></li>
            <li><a href="#products" onClick={closeMenu} className="text-white text-2xl font-playfair hover:text-royalGold transition-colors">Products</a></li>
            <li><a href="#why-choose" onClick={closeMenu} className="text-white text-2xl font-playfair hover:text-royalGold transition-colors">Why Choose Us</a></li>
            <li><a href="#testimonials" onClick={closeMenu} className="text-white text-2xl font-playfair hover:text-royalGold transition-colors">Testimonials</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
