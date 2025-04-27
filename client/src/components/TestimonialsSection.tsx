import { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideIntervalRef = useRef<number | null>(null);

  const updateSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const startAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    
    // Auto-advance testimonials every 5 seconds
    autoSlideIntervalRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);
  };

  // Handle touch/mouse events for mobile swiping
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let currentX: number;
    if ('touches' in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    updateSlider();
    startAutoSlide();
    
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-beige relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-peacockBlue mb-4 scroll-reveal">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-royalGold mx-auto mb-6"></div>
        </div>
        
        <div className="testimonial-carousel relative max-w-4xl mx-auto">
          <div className="overflow-hidden"
               onMouseDown={handleDragStart}
               onMouseMove={handleDragMove}
               onMouseUp={handleDragEnd}
               onMouseLeave={handleDragEnd}
               onTouchStart={handleDragStart}
               onTouchMove={handleDragMove}
               onTouchEnd={handleDragEnd}>
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index} 
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 bg-peacockBlue text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-emeraldGreen transition-colors duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 bg-peacockBlue text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-emeraldGreen transition-colors duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-peacockBlue' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
