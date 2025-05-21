import { useQuery } from "@tanstack/react-query";
import { ReviewType } from "@/lib/types";
import { motion } from "framer-motion";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="text-yellow-400 flex">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  const { data: reviews, isLoading, error } = useQuery<ReviewType[]>({
    queryKey: ["/api/reviews"],
  });

  if (isLoading) {
    return (
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our products and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 h-4 w-24 rounded"></div>
                </div>
                <div className="bg-gray-200 h-20 w-full rounded mb-4"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4"></div>
                  <div>
                    <div className="bg-gray-200 h-4 w-20 rounded mb-1"></div>
                    <div className="bg-gray-200 h-3 w-16 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviews) {
    return (
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-red-500">Failed to load reviews. Please try again later.</p>
        </div>
      </section>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our products and service.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={item}
            >
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {review.verified ? "Verified Buyer" : "Customer"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="/reviews" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
