interface SocialLinkProps {
  href: string;
  bgColor: string;
  hoverColor: string;
  icon: string;
  label: string;
}

export function SocialLink({ href, bgColor, hoverColor, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`social-icon flex items-center justify-center p-3 ${bgColor} text-white rounded-lg 
                  hover:${hoverColor} transition duration-300`}
    >
      <i className={`${icon} mr-2`}></i>
      <span>{label}</span>
    </a>
  );
}

interface SocialLinksGridProps {
  facebookUrl: string;
  youtubeUrl: string;
  whatsappUrl: string;
  whatsappChannelUrl: string;
  discordUrl: string;
}

export function SocialLinksGrid({ 
  facebookUrl, 
  youtubeUrl, 
  whatsappUrl, 
  whatsappChannelUrl, 
  discordUrl 
}: SocialLinksGridProps) {
  return (
    <div className="flex flex-col space-y-4">
      {/* First row of buttons */}
      <div className="grid grid-cols-2 gap-4">
        <SocialLink 
          href={facebookUrl}
          bgColor="bg-blue-600"
          hoverColor="bg-blue-700"
          icon="fab fa-facebook-f"
          label="Facebook"
        />
        
        <SocialLink 
          href={youtubeUrl}
          bgColor="bg-red-600"
          hoverColor="bg-red-700"
          icon="fab fa-youtube"
          label="YouTube"
        />
      </div>
      
      {/* Second row of buttons */}
      <div className="grid grid-cols-2 gap-4">
        <SocialLink 
          href={whatsappUrl}
          bgColor="bg-green-500"
          hoverColor="bg-green-600"
          icon="fab fa-whatsapp"
          label="WhatsApp"
        />
        
        <SocialLink 
          href={discordUrl}
          bgColor="bg-indigo-600"
          hoverColor="bg-indigo-700"
          icon="fab fa-discord"
          label="Discord"
        />
      </div>
      
      {/* Larger button at the bottom */}
      <div className="mt-2">
        <a 
          href={whatsappChannelUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon flex items-center justify-center p-3 bg-green-600 text-white rounded-lg 
                    hover:bg-green-700 transition duration-300 w-full"
        >
          <i className="fab fa-whatsapp mr-2"></i>
          <span>انضم لقناة الواتساب</span>
        </a>
      </div>
    </div>
  );
}

interface FooterSocialLinksProps {
  facebookUrl: string;
  youtubeUrl: string;
  discordUrl: string;
  whatsappChannelUrl: string;
}

export function FooterSocialLinks({ 
  facebookUrl, 
  youtubeUrl, 
  discordUrl, 
  whatsappChannelUrl 
}: FooterSocialLinksProps) {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
        <i className="fab fa-youtube"></i>
      </a>
      <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
        <i className="fab fa-discord"></i>
      </a>
      <a href={whatsappChannelUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
