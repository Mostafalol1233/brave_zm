import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import Features from "@/components/home/Features";
import CTASection from "@/components/home/CTASection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - BraveShop</title>
        <meta name="description" content="Learn about BraveShop - our story, our team, and our commitment to providing high-quality products and exceptional customer service." />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About BraveShop</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Learn about our company, our mission, and the talented team behind our premium products.
          </p>
        </div>
      </div>
      
      <AboutSection />
      <Features />
      <TeamSection />
      <CTASection />
    </>
  );
};

export default About;
