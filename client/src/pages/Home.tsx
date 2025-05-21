import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductGrid from "@/components/product/ProductGrid";
import Features from "@/components/home/Features";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/contact/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BraveShop - Premium Products for Your Lifestyle</title>
        <meta name="description" content="Discover our curated collection of high-quality products that enhance your everyday experience. BraveShop offers premium lifestyle products with fast shipping and excellent customer service." />
      </Helmet>
      
      <Hero />
      <FeaturedCategories />
      <ProductGrid limit={6} />
      <Features />
      <AboutSection />
      <TeamSection />
      <ReviewsSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
