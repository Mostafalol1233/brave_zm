import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  links: { path: string; label: string }[];
};

const MobileMenu = ({ isOpen, links }: MobileMenuProps) => {
  const [location] = useLocation();
  
  const isActive = (path: string) => location === path;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden pb-4"
        >
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
