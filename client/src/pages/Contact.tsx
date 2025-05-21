import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/contact/ContactSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - BraveShop</title>
        <meta name="description" content="Get in touch with the BraveShop team. We're here to help with product inquiries, customer support, and feedback." />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions, feedback, or inquiries.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come see our products in person at our flagship store.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573814498!2d-73.98784492346016!3d40.758985471383395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1656543769252!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BraveShop Store Location"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">123 Commerce St, New York, NY 10001</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 10am - 8pm<br />Sunday: 11am - 6pm</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">Phone: +1 (234) 567-8901<br />Email: contact@braveshop.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
