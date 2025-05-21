import { Link } from "wouter";
import bravezm_logo from "@/assets/bravezm_logo.png";

interface TeamMemberProps {
  name: string;
  nickname: string;
  link: string;
  role: string;
}

function TeamMember({ name, nickname, link, role }: TeamMemberProps) {
  return (
    <div className="bg-black/60 border-2 border-red-600 rounded-lg p-4 text-center">
      <h3 className="text-white text-xl font-bold mb-1">{nickname}</h3>
      <p className="text-gray-300 mb-2">{name}</p>
      <p className="text-gray-400 mb-3">{role}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
      >
        View Profile
      </a>
    </div>
  );
}

export default function About() {
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
            <Link href="/shop" className="text-white hover:text-red-400 transition">
              Shop
            </Link>
            <Link href="/about" className="text-red-500 font-bold">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 z-10">
        <div className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-6 max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-white text-3xl font-bold mb-2">Our Team</h1>
            <p className="text-gray-300 mb-6">Meet the awesome people behind BRAVEZM Gaming</p>
          </div>
          
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TeamMember 
              name="Abdelrahman Gharib" 
              nickname="00-00" 
              link="https://crossfire.z8games.com/profile/27850491"
              role="Character Designer"
            />
            <TeamMember 
              name="Karim" 
              nickname="KMO" 
              link="https://crossfire.z8games.com/profile/26826798"
              role="Game Developer"
            />
            <TeamMember 
              name="Bemora" 
              nickname=".-LoL-." 
              link="https://bemora.vercel.app/"
              role="Web Developer"
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