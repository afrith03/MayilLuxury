import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, location, image, text, rating, accentColor } = testimonial;
  
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="star-half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };
  
  return (
    <div className="testimonial-slide w-full flex-shrink-0 px-4">
      <div className={`bg-ivory rounded-lg p-8 shadow-lg border-t-4 ${accentColor} relative testimonial-card`}>
        <div className="flex items-start mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-royalGold">
            <img 
              src={image} 
              alt={`${name} photo`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-playfair text-lg font-bold text-peacockBlue">{name}</h4>
            <p className="text-emeraldGreen">{location}</p>
          </div>
          <div className="ml-auto text-royalGold">
            <i className="fas fa-quote-right text-4xl opacity-30"></i>
          </div>
        </div>
        <p className="text-gray-700 italic">
          "{text}"
        </p>
        <div className="mt-4 flex text-royalGold">
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
