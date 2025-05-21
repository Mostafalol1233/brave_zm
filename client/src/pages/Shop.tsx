import { ContentCard } from "@/components/ContentCard";
import { Link } from "wouter";

// Import the game character images
import hazeImage from "@/assets/image_1747848727752.png";
import hexoImage from "@/assets/image_1747848814603.png";
import voltaImage from "@/assets/image_1747848882152.png";
import dualWarriorsImage from "@/assets/image_1747848951098.png";
import sandDragonImage from "@/assets/image_1747850487073.png";
import mintacoreImage from "@/assets/image_1747850550234.png";
import bravezm_logo from "@/assets/bravezm_logo.png";

export default function Shop() {
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
            <Link href="/">
              <img 
                src={bravezm_logo} 
                alt="BRAVEZM Logo" 
                className="w-10 h-10 object-contain mr-3 cursor-pointer"
              />
            </Link>
            <h1 className="text-white text-xl font-bold">BRAVEZM Gaming</h1>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-white hover:text-red-400 transition">
              Home
            </Link>
            <Link href="/connect" className="text-white hover:text-red-400 transition">
              Connect
            </Link>
            <Link href="/shop" className="text-red-500 font-bold">
              Shop
            </Link>
            <Link href="/about" className="text-white hover:text-red-400 transition">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 z-10">
        <div className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-6 max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-white text-3xl font-bold mb-2">Gaming Characters Shop</h1>
            <p className="text-gray-300">Get exclusive access to powerful game characters</p>
          </div>
          
          {/* Game Character Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ContentCard
              title="Stage 1: Haze"
              description="Unlock the power of Haze with dual-colored hair and lightning powers."
              imageUrl={hazeImage}
              linkText="Buy Now"
              linkUrl="https://wa.me/201156522916?text=I%20want%20to%20buy%20Stage%201%3A%20Haze%20character"
            />
            <ContentCard
              title="Stage 2: Hexo"
              description="Master the dark arts with Hexo's multiple blades and combat techniques."
              imageUrl={hexoImage}
              linkText="Buy Now"
              linkUrl="https://wa.me/201156522916?text=I%20want%20to%20buy%20Stage%202%3A%20Hexo%20character"
            />
            <ContentCard
              title="Stage 3: Volta"
              description="Harness raw power with Volta's unique mask and close-combat abilities."
              imageUrl={voltaImage}
              linkText="Buy Now"
              linkUrl="https://wa.me/201156522916?text=I%20want%20to%20buy%20Stage%203%3A%20Volta%20character"
            />
            <ContentCard
              title="Stage 4: Dual Warriors"
              description="Command both pink and blue warriors with complementary fighting styles."
              imageUrl={dualWarriorsImage}
              linkText="Buy Now"
              linkUrl="https://wa.me/201156522916?text=I%20want%20to%20buy%20Stage%204%3A%20Dual%20Warriors%20character%20pack"
            />
            <ContentCard
              title="Stage 5: Sand Dragon"
              description="Control the ancient Sand Dragon with powerful desert magic and sand manipulation."
              imageUrl={sandDragonImage}
              linkText="Buy Now"
              linkUrl="https://wa.me/201156522916?text=I%20want%20to%20buy%20Stage%205%3A%20Sand%20Dragon%20character"
            />
            <ContentCard
              title="Stage 6: Mintacore"
              description="Master the final stage with Mintacore's legendary weapons and fire-based abilities."
              imageUrl={mintacoreImage}
              linkText="Buy Now"
              linkUrl="https://wa.me/201156522916?text=I%20want%20to%20buy%20Stage%206%3A%20Mintacore%20character"
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
              Designed with ❤️ by Mostafa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}