"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Page = () => {
  // Default dark mode enabled
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode on first render
    document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      if (!prevMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return !prevMode;
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center px-8 md:px-16 bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/your-background.jpg')] bg-cover bg-center opacity-40"></div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-5 right-5 bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-4 py-2 rounded-md shadow-md transition-all duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left text-center md:text-left"
        >
          <h2 className="text-4xl font-bold">Hi There,</h2>
          <h1 className="text-5xl font-extrabold mt-2 text-[#D2B48C]">
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: ["I'm Shumaila Murk"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
          </h1>
          <h3 className="text-2xl font-medium mt-2 text-black dark:text-gray-300">
            Fullstack Developer | UI/UX Designer
          </h3>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-6">
            <a
              href="https://github.com/shumailamurk"
              className="text-gray-900 dark:text-[#D2B48C] text-3xl transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shumaila-murk-9540112b9/"
              className="text-blue-600 dark:text-[#D2B48C] text-3xl transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/shumailamurk/"
              className="text-pink-500 dark:text-[#D2B48C] text-3xl transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554013868187"
              className="text-blue-700 dark:text-[#D2B48C] text-3xl transition-all duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-96 h-96 overflow-hidden border-[6px] border-[#D2B48C] shadow-lg shadow-[#D2B48C]/50 transition-all duration-500 hover:shadow-[#FFD700] hover:scale-110 hover:border-[#FFD700] hover:brightness-110"
        >
          <Image
            src="/anii2.png"
            alt="Shumaila Murk"
            width={384}
            height={384}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
