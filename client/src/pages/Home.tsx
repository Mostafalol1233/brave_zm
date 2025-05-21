import { Link } from "wouter";
import bravezm_logo from "@/assets/bravezm_logo.png";

export default function Home() {
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 z-10 flex flex-col items-center justify-center">
        <div className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-8 max-w-lg w-full text-center">
          {/* Logo Centered */}
          <div className="mb-8 flex flex-col items-center">
            <img 
              src={bravezm_logo} 
              alt="BRAVEZM Logo" 
              className="w-40 h-40 object-contain mb-6 drop-shadow-2xl"
            />
            <h1 className="text-white text-3xl font-bold mb-3">BRAVEZM Gaming</h1>
            <p className="text-gray-300">Exclusive Gaming Characters & Community</p>
          </div>
          
          {/* Main Navigation Buttons */}
          <div className="flex flex-col space-y-4 mb-8 mt-6">
            <Link href="/shop" className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-6 rounded-lg transition duration-300">
              Shop Gaming Characters
            </Link>
            <Link href="/connect" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold py-4 px-6 rounded-lg transition duration-300">
              Connect With Us
            </Link>
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center">
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
