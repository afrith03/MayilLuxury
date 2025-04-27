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
    image: "https://images.unsplash.com/photo-1609340902621-f0afe7a7a244?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Rose Infused Sambrani",
    description: "A harmonious blend of traditional sambrani with the soothing essence of roses, perfect for meditation spaces.",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1591818229250-539c1d30ab96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Premium Sandalwood Sambrani",
    description: "Enhanced with sacred Mysore sandalwood, this luxury sambrani creates a serene atmosphere for prayer and reflection.",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1591473692198-eed362b9a330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];
