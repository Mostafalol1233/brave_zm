import { Link } from "wouter";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    "Curated Selection",
    "Quality Guaranteed",
    "Competitive Prices",
    "Fast Delivery",
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="BraveShop Team" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">About BraveShop</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2018, BraveShop has grown from a small startup to a trusted online retailer. 
              Our mission is to provide customers with high-quality products that enhance their daily lives.
            </p>
            <p className="text-gray-700 mb-6">
              We carefully curate our selection to ensure that every item meets our strict standards for quality, 
              functionality, and value. Our team of experts search globally to bring you the best products at competitive prices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-2"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all text-center"
              >
                Our Products
              </Link>
              <Link 
                href="/contact" 
                className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-gray-50 transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
