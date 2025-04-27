import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-peacockBlue mb-4 scroll-reveal">Our Premium Sambranis</h2>
          <div className="w-20 h-1 bg-royalGold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 scroll-reveal">
            Discover our collection of exquisite Sambranis, crafted with devotion to bring spiritual purity and divine fragrance to your sacred spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-royalGold hover:bg-amber-400 text-peacockBlue font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto">
            View All Products
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
