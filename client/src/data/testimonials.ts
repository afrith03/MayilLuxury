export interface Testimonial {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
  accentColor: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "I've been using Mayil Sambranis for my daily prayers for over a year now. The fragrance is divine and creates the perfect spiritual atmosphere in my home temple. The Traditional Temple blend has become an essential part of my daily rituals.",
    rating: 5,
    accentColor: "border-peacockBlue"
  },
  {
    name: "Rajesh Iyer",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "The Premium Sandalwood Sambrani is exceptional. As a yoga instructor, I use it in my studio and my students always comment on the calming atmosphere it creates. The quality is unmatched - truly temple-grade as promised.",
    rating: 5,
    accentColor: "border-emeraldGreen"
  },
  {
    name: "Anita Desai",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    text: "I gifted the Rose Infused Sambrani to my mother who is very particular about traditional items. She was impressed by the authentic fragrance and how long-lasting each cup is. Will definitely be ordering more for family pujas.",
    rating: 4.5,
    accentColor: "border-deepPurple"
  }
];
