"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!theme) setTheme("dark"); // Only set dark mode if theme is not already set
  }, [theme]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full shadow-md py-4 px-8 flex justify-between items-center z-50 bg-white dark:bg-gray-900"
    >
      <Link href="/home">
        <span className="text-2xl font-bold font-dancing-script shimmer-effect">
          Shumaila Murk
        </span>
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-2 text-gray-800 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-6">
        {["home", "about", "project", "contact"].map((section) => (
          <motion.div key={section} whileHover={{ scale: 1.1 }}>
            {pathname === "/" ? (
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="px-4 py-2 cursor-pointer transition-all duration-300 rounded-lg text-black dark:text-white hover:text-yellow-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ) : (
              <Link
                href={`/${section}`}
                className={`px-4 py-2 transition-all duration-300 rounded-lg ${
                  pathname === `/${section}`
                    ? "font-bold text-yellow-500 border-2 border-yellow-400 shadow-[0_0_10px_#ffea00]"
                    : "border-2 border-transparent"
                } hover:border-yellow-500 hover:shadow-[0_0_10px_#ffea00] text-black dark:text-white`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div id="mobile-menu" className="absolute top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-800 p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-800 dark:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={30} />
            </button>
            <nav className="mt-12 flex flex-col space-y-4">
              {["home", "about", "project", "contact"].map((section) => (
                pathname === "/" ? (
                  <ScrollLink
                    key={section}
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="text-xl font-semibold text-black dark:text-white py-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                ) : (
                  <Link
                    key={section}
                    href={`/${section}`}
                    className="text-xl font-semibold text-black dark:text-white py-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full transition-all duration-300"
      >
        {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
      </button>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

        .font-dancing-script {
          font-family: "Dancing Script", cursive;
        }

        .shimmer-effect {
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: inherit;
          animation: shimmer 2s infinite linear;
          display: inline-block;
          color: #ffd700;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .active {
          color: #ffea00;
          font-weight: bold;
          border-bottom: 2px solid #ffea00;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
