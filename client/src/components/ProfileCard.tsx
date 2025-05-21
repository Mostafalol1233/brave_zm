import { SocialLinksGrid } from "./SocialLinks";
import { socialLinks, contentCards } from "@/lib/constants";
import bravezm_logo from "@/assets/bravezm_logo.png";
import { ContentCard } from "./ContentCard";

// Import the game character images
import hazeImage from "@/assets/image_1747848727752.png";
import hexoImage from "@/assets/image_1747848814603.png";
import voltaImage from "@/assets/image_1747848882152.png";
import dualWarriorsImage from "@/assets/image_1747848951098.png";
import sandDragonImage from "@/assets/image_1747850487073.png";
import mintacoreImage from "@/assets/image_1747850550234.png";

export function ProfileCard() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black">
      {/* Background with logo pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url(${bravezm_logo})`,
          backgroundSize: '250px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 z-10 flex flex-col items-center justify-center">
        {/* Content Box with Red Border */}
        <div className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-6 max-w-2xl w-full">
          {/* Logo Centered */}
          <div className="mb-6 flex flex-col items-center">
            <img 
              src={bravezm_logo} 
              alt="BRAVEZM Logo" 
              className="w-36 h-36 md:w-44 md:h-44 object-contain mb-4 drop-shadow-2xl"
            />
            <h1 className="text-white text-2xl font-bold mb-2">Gaming Characters Shop</h1>
            <p className="text-gray-300 text-center">Get exclusive access to powerful game characters</p>
          </div>
          
          {/* Game Character Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
          
          {/* Social Media Links */}
          <div className="max-w-2xl w-full mx-auto mt-6">
            <h2 className="text-white text-xl font-bold mb-4 text-center">Connect With Us</h2>
            <SocialLinksGrid 
              facebookUrl={socialLinks.facebook}
              youtubeUrl={socialLinks.youtube}
              whatsappUrl={socialLinks.whatsapp}
              whatsappChannelUrl={socialLinks.whatsappChannel}
              discordUrl={socialLinks.discord}
            />
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BRAVEZM Gaming. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
