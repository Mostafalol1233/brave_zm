import { Link } from "wouter";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Lifestyle?</h2>
            <p className="text-lg opacity-90">
              Discover our premium collection and find products that match your style and needs.
            </p>
          </div>
          <div>
            <Link 
              href="/products" 
              className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-all"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
