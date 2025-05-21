import { ProductCardProps } from "@/lib/types";
import { motion } from "framer-motion";

const StarRating = ({ rating }: { rating: number }) => {
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

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  rating,
  reviewCount,
  whatsappMessage,
}: ProductCardProps) => {
  const handleWhatsAppShare = () => {
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(`${whatsappMessage} ($${price.toFixed(2)})`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all"
      whileHover={{ y: -5 }}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-56 object-cover" 
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <StarRating rating={rating} />
          <span className="text-gray-600 text-sm ml-2">
            {rating.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all">
              <i className="far fa-heart text-gray-600"></i>
            </button>
            <button 
              className="bg-secondary text-white p-2 rounded-full hover:bg-secondary/90 transition-all"
              onClick={handleWhatsAppShare}
              aria-label="Share on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
