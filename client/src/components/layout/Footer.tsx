import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BraveShop</h3>
            <p className="text-gray-400 mb-4">
              Your destination for premium lifestyle products. We offer a curated selection of quality items to enhance your everyday life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-all">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-all">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-all">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-all">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-all">
                  Home Goods
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-all">
                  Gifts
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-all">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">123 Commerce St, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-gray-400"></i>
                <span className="text-gray-400">+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-gray-400"></i>
                <span className="text-gray-400">contact@braveshop.com</span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-gray-400"></i>
                <span className="text-gray-400">WhatsApp: +1 (234) 567-8901</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} BraveShop. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Shipping Info</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
