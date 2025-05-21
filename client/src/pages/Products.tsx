import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductGrid from "@/components/product/ProductGrid";
import CTASection from "@/components/home/CTASection";

const Products = () => {
  const [location] = useLocation();
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    
    if (category) {
      setCategoryId(parseInt(category));
    } else {
      setCategoryId(undefined);
    }
  }, [location]);
  
  return (
    <>
      <Helmet>
        <title>Our Products - BraveShop</title>
        <meta name="description" content="Browse our complete collection of premium products. Find electronics, fashion items, home goods, and more with excellent quality and fast shipping." />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse our complete collection of premium products. Each item is carefully selected for quality and value.
          </p>
        </div>
      </div>
      
      <ProductGrid 
        title="All Products" 
        description="Explore our full range of high-quality products designed to enhance your lifestyle. Filter by category to find exactly what you're looking for."
        categoryId={categoryId}
      />
      
      <CTASection />
    </>
  );
};

export default Products;
