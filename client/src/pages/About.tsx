import { Link } from "wouter";
import bravezm_logo from "@/assets/bravezm_logo.png";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  nickname: string;
  link: string;
  role: string;
  delay?: number;
}

function TeamMember({ name, nickname, link, role, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div 
      className="bg-black/60 border-2 border-red-600 rounded-lg p-4 text-center"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{
        delay: delay,
        duration: 0.5,
        type: "spring", 
        stiffness: 300, 
        damping: 15
      }}
    >
      <h3 className="text-white text-xl font-bold mb-1">{nickname}</h3>
      <p className="text-gray-300 mb-2">{name}</p>
      <p className="text-gray-400 mb-3">{role}</p>
      <motion.a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View Profile
      </motion.a>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url(${bravezm_logo})`,
          backgroundSize: '250px',
          backgroundRepeat: 'repeat',
        }}
      />

      <motion.div 
        className="w-full bg-black/80 border-b border-red-600 p-4 fixed top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <img 
                src={bravezm_logo} 
                alt="BRAVEZM Logo" 
                className="w-10 h-10 object-contain mr-3 cursor-pointer"
              />
            </Link>
            <h1 className="text-white text-xl font-bold">BRAVEZM Gaming</h1>
          </motion.div>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/" className="text-white hover:text-red-400 transition">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/connect" className="text-white hover:text-red-400 transition">
                Connect
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/shop" className="text-white hover:text-red-400 transition">
                Shop
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/about" className="text-red-500 font-bold">
                About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-24 z-10">
        <motion.div 
          className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-8 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-white text-3xl font-bold mb-2">Our Team</h1>
            <p className="text-gray-300 mb-6">Meet the awesome people behind BRAVEZM Gaming</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TeamMember 
              name="Abdelrahman Gharib" 
              nickname="00-00" 
              link="https://crossfire.z8games.com/profile/27850491"
              role="Character Designer"
              delay={0.2}
            />
            <TeamMember 
              name="Karim" 
              nickname="KMO" 
              link="https://crossfire.z8games.com/profile/26826798"
              role="Game Developer"
              delay={0.4}
            />
            <TeamMember 
              name="Bemora" 
              nickname=".-LoL-." 
              link="https://bemora.vercel.app/"
              role="Web Developer"
              delay={0.6}
            />
          </div>
          
          <motion.div 
            className="mt-12 text-center border-t border-gray-800 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BRAVEZM Gaming. All rights reserved.</p>
            <motion.a 
              href="https://wa.me/201156522916?text=My%20rating%20=%20⭐⭐⭐⭐⭐" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-sm mt-2 inline-block"
              whileHover={{ scale: 1.1, color: "#ff0000" }}
              whileTap={{ scale: 0.9 }}
            >
              Designed with ❤️ by Mostafa
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}