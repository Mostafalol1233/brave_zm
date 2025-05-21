import { SocialLinksGrid } from "./SocialLinks";
import { socialLinks } from "@/lib/constants";
import bravezm_logo from "@/assets/bravezm_logo.png";

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
        <div className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-6 max-w-md w-full">
          {/* Logo Centered */}
          <div className="mb-6 flex flex-col items-center">
            <img 
              src={bravezm_logo} 
              alt="BRAVEZM Logo" 
              className="w-36 h-36 md:w-44 md:h-44 object-contain mb-4 drop-shadow-2xl"
            />
          </div>
          
          {/* Social Media Links */}
          <div className="max-w-2xl w-full mx-auto">
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
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BRAVEZM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
