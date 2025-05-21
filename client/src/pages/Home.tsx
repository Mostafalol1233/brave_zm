import { Link } from "wouter";
import bravezm_logo from "@/assets/bravezm_logo.png";
import { motion } from "framer-motion";

export default function Home() {
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

      <div className="container mx-auto px-4 py-12 z-10 flex flex-col items-center justify-center">
        <motion.div 
          className="bg-black/80 border-4 border-red-600 rounded-lg shadow-2xl p-8 max-w-lg w-full text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div 
            className="mb-8 flex flex-col items-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.img 
              src={bravezm_logo} 
              alt="BRAVEZM Logo" 
              className="w-40 h-40 object-contain mb-6 drop-shadow-2xl"
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.h1 
              className="text-white text-3xl font-bold mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              BRAVEZM Gaming
            </motion.h1>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Exclusive Gaming Characters & Community
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col space-y-4 mb-8 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link href="/shop" className="inline-block w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-6 rounded-lg transition duration-300">
                Shop Gaming Characters
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link href="/connect" className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold py-4 px-6 rounded-lg transition duration-300">
                Connect With Us
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <Link href="/about" className="inline-block w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-6 rounded-lg transition duration-300">
                About Our Team
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
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
