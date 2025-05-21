import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { CategoryType } from "@/lib/types";
import { motion } from "framer-motion";

const FeaturedCategories = () => {
  const { data: categories, isLoading, error } = useQuery<CategoryType[]>({
    queryKey: ["/api/categories"],
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md animate-pulse">
                <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2 w-24 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-36 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-28 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !categories) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
          <p className="text-red-500">Failed to load categories. Please try again later.</p>
        </div>
      </section>
    );
  }

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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all"
              variants={item}
            >
              <div className={`bg-${category.color}/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <i className={`${category.icon} text-${category.color} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link 
                href={`/products?category=${category.id}`} 
                className={`text-${category.color} font-medium hover:underline`}
              >
                View Products
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
