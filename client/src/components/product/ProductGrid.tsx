import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { ProductCardProps, CategoryType } from "@/lib/types";
import { motion } from "framer-motion";

type ProductGridProps = {
  title?: string;
  description?: string;
  showFilters?: boolean;
  limit?: number;
  categoryId?: number;
};

const ProductGrid = ({
  title = "Our Featured Products",
  description = "Discover our handpicked selection of premium quality items that our customers love. Each product is selected for its exceptional quality and value.",
  showFilters = true,
  limit,
  categoryId,
}: ProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(categoryId || null);
  
  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: ["/api/categories"],
  });
  
  const queryUrl = activeCategory
    ? `/api/products?categoryId=${activeCategory}`
    : "/api/products";
  
  const { data: products, isLoading, error } = useQuery<ProductCardProps[]>({
    queryKey: [queryUrl],
  });
  
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(limit || 6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="bg-gray-200 h-56 w-full"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="flex justify-between">
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !products) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-red-500">Failed to load products. Please try again later.</p>
        </div>
      </section>
    );
  }

  const displayProducts = limit ? products.slice(0, limit) : products;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        {showFilters && categories && categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center mb-8 gap-2">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeCategory === null
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All Products
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {displayProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
        
        {limit && products.length > limit && (
          <div className="text-center mt-12">
            <a 
              href="/products" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
            >
              View All Products
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
