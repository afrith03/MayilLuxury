import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const bgColors = [
    "bg-peacockBlue", 
    "bg-emeraldGreen", 
    "bg-deepPurple"
  ];

  return (
    <div id="products" className="group relative scroll-reveal">
      <div className={`absolute inset-0 ${bgColors[index % bgColors.length]} rounded-lg transform rotate-2 group-hover:rotate-3 transition-transform duration-300`}></div>
      <div className="relative bg-gradient-to-br from-beige to-ivory rounded-lg overflow-hidden shadow-lg border border-royalGold p-6 transform group-hover:translate-y-[-5px] transition-all duration-300">
        
        <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <h3 className="font-playfair text-xl font-bold text-peacockBlue mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-emeraldGreen font-semibold">{product.price}</span>
          <button className="bg-peacockBlue hover:bg-peacockTeal text-white py-2 px-4 rounded-full text-sm transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
