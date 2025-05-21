import { Link } from "wouter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Products for Your Lifestyle</h1>
            <p className="text-lg mb-6">Discover our curated collection of high-quality products that enhance your everyday experience.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/products" className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-all flex items-center justify-center">
                <span>Browse Products</span>
              </Link>
              <Link href="/contact" className="bg-secondary text-white font-semibold px-6 py-3 rounded-md hover:bg-secondary/90 transition-all flex items-center justify-center">
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Premium products showcase" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
