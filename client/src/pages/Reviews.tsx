import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { ReviewType } from "@/lib/types";
import CTASection from "@/components/home/CTASection";

const Reviews = () => {
  const { data: reviews, isLoading, error } = useQuery<ReviewType[]>({
    queryKey: ["/api/reviews"],
  });

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

  return (
    <>
      <Helmet>
        <title>Customer Reviews - BraveShop</title>
        <meta name="description" content="Read what our customers are saying about BraveShop products and services. Real testimonials from verified buyers." />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Read what our customers are saying about our products and services. We're proud of our reputation for quality and excellence.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <div className="text-yellow-400 flex mr-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="font-semibold">4.8/5 Average Rating</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">What Our Customers Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We value every feedback from our customers. It helps us to continuously improve our products and services.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, index) => (
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
          ) : error || !reviews ? (
            <div className="text-center text-red-500">
              Failed to load reviews. Please try again later.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
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
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <a 
              href="#review-form" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default Reviews;
