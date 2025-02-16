"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 bg-white dark:bg-black text-black dark:text-gray-100 overflow-hidden transition-colors duration-300">
      
      {/* Background Video with Higher Opacity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80"
      >
        <source src="/vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold leading-tight text-black dark:text-white"
        >
          Welcome to 
          <span className="text-yellow-400 font-bold"> My Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-black dark:text-gray-200"
        >
          I create beautiful & functional web experiences.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => router.push("/home")}
          className="relative mt-6 inline-block px-6 py-3 font-semibold text-white bg-black rounded-lg overflow-hidden transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105"
        >
          <span className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="absolute w-40 h-40 bg-yellow-400 opacity-30 blur-2xl rounded-full animate-ping"></span>
            <span className="absolute w-24 h-24 bg-yellow-500 opacity-40 blur-xl rounded-full animate-pulse"></span>
          </span>
          <span className="relative">Explore My Work</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

