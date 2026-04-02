import { Link } from "wouter";
import bravezm_logo from "@/assets/zenith_logo.svg";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  nickname: string;
  link: string;
  role: string;
  delay?: number;
}

function TeamMember({
  name,
  nickname,
  link,
  role,
  delay = 0,
}: TeamMemberProps) {
  return (
    <motion.div
      className="bg-black/70 backdrop-blur-sm border-2 border-red-500/80 rounded-xl p-5 text-center shadow-lg shadow-red-900/20"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
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
        damping: 15,
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
    <div className="zenith-page">
      <div
        className="zenith-watermark"
        style={{
          backgroundImage: `url(${bravezm_logo})`,
          backgroundSize: "250px",
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div
        className="zenith-nav p-4"
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
                alt="Zenith Logo"
                className="w-10 h-10 object-contain mr-3 cursor-pointer"
              />
            </Link>
            <h1 className="text-white text-xl font-bold">Zenith Gaming</h1>
          </motion.div>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="/"
                className="text-white hover:text-red-400 transition"
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="/connect"
                className="text-white hover:text-red-400 transition"
              >
                Connect
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="/shop"
                className="text-white hover:text-red-400 transition"
              >
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
          className="zenith-panel p-6 max-w-4xl mx-auto"
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
            <p className="text-gray-300 mb-6">
              Meet the awesome people behind Zenith Gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <TeamMember
              name="Abdelrahman Gharib"
              nickname="00~00"
              link="https://crossfire.z8games.com/profile/27850491"
              role="Character Designer"
              delay={0.2}
            />
            <TeamMember
              name="Bemora"
              nickname="CF WIKI"
              link="https://crossfire.wiki"
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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zenith Gaming. All rights reserved.
            </p>
            <motion.a
              href="https://linktr.ee/Mustafa_Bemo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-sm mt-2 inline-block"
              whileHover={{ scale: 1.1, color: "#ff0000" }}
              whileTap={{ scale: 0.9 }}
            >
              Designed with ❤️ by Wiki
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
