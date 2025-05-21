import { SocialLinksGrid } from "@/components/SocialLinks";
import { socialLinks } from "@/lib/constants";
import { Link } from "wouter";
import bravezm_logo from "@/assets/bravezm_logo.png";

export default function Connect() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black">
      {/* Background with logo pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url(${bravezm_logo})`,
          backgroundSize: '250px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Navigation */}
      <div className="w-full bg-black/80 border-b border-red-600 p-4 fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={bravezm_logo} 
              alt="BRAVEZM Logo" 
              className="w-10 h-10 object-contain mr-3"
            />
            <h1 className="text-white text-xl font-bold">BRAVEZM Gaming</h1>
          </div>
          <div className="flex space-x-4">
            <Link href="/connect" className="text-red-500 font-bold">
              Connect
            </Link>
            <Link href="/shop" className="text-white hover:text-red-400 transition">
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 z-10">
        <div className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-6 max-w-lg mx-auto">
          {/* Logo Centered */}
          <div className="mb-6 flex flex-col items-center">
            <img 
              src={bravezm_logo} 
              alt="BRAVEZM Logo" 
              className="w-32 h-32 object-contain mb-4 drop-shadow-2xl"
            />
            <h1 className="text-white text-2xl font-bold mb-2">Connect With Us</h1>
            <p className="text-gray-300 text-center mb-6">Follow us on social media and join our gaming community</p>
          </div>
          
          {/* Social Media Links */}
          <div className="max-w-md w-full mx-auto">
            <SocialLinksGrid 
              facebookUrl={socialLinks.facebook}
              youtubeUrl={socialLinks.youtube}
              whatsappUrl={socialLinks.whatsapp}
              whatsappChannelUrl={socialLinks.whatsappChannel}
              discordUrl={socialLinks.discord}
            />
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BRAVEZM Gaming. All rights reserved.</p>
            <a 
              href="https://wa.me/201156522916?text=My%20rating%20=%20⭐⭐⭐⭐⭐" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-sm mt-2 inline-block"
            >
              Developed by Mostafa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}