import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "fas fa-truck",
      title: "Fast Shipping",
      description: "We deliver your orders quickly and efficiently to anywhere in the country."
    },
    {
      icon: "fas fa-medal",
      title: "Quality Products",
      description: "Every item in our store is carefully selected for its quality and durability."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Our customer service team is available round the clock to assist you."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose BraveShop?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing an exceptional shopping experience with quality products and outstanding service.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg text-center"
              variants={item}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
