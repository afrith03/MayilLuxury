export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Traditional Temple Sambrani",
    description: "Our signature blend used in sacred temples across India for centuries, crafted for purity and divine connection.",
    price: "₹499",
    image: "/assets/WhatsApp Image 2025-04-03 at 10.55.13 PM.jpeg"
  },
  {
    id: 2,
    name: "Rose Infused Sambrani",
    description: "A harmonious blend of traditional sambrani with the soothing essence of roses, perfect for meditation spaces.",
    price: "₹599",
    image: "/assets/WhatsApp Image 2025-04-03 at 10.55.37 PM.jpeg"
  },
  {
    id: 3,
    name: "Premium Sandalwood Sambrani",
    description: "Enhanced with sacred Mysore sandalwood, this luxury sambrani creates a serene atmosphere for prayer and reflection.",
    price: "₹799",
    image: "/assets/WhatsApp Image 2025-04-03 at 10.57.25 PM.jpeg"
  },
  {
    id: 4,
    name: "Luxury Festive Collection",
    description: "A special blend created for auspicious occasions and celebrations, combining premium ingredients for a divine experience.",
    price: "₹999",
    image: "/assets/WhatsApp Image 2025-04-03 at 11.05.55 PM.jpeg"
  }
];
