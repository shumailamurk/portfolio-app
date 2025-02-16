"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 80 },
  { name: "JavaScript", percentage: 75 },
  { name: "TypeScript", percentage: 75 },
  { name: "Next.js + Tailwind", percentage: 90 },
];

const Skill = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-10 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-8">
        My Skills
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="6"
                fill="none"
              />
              {/* Animated Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#grad1)"
                strokeWidth="6"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="283"
                initial={{ strokeDashoffset: 283 }}
                animate={{ strokeDashoffset: 283 - (283 * skill.percentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                strokeLinecap="round"
                className="drop-shadow-lg animate-glow"
              />
              {/* Shiny Gradient */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFB800" />
                </linearGradient>
              </defs>
            </svg>

            {/* Skill Name & Percentage */}
            <div className="absolute flex flex-col items-center text-center animate-pulse">
              <span className="text-md sm:text-lg font-bold text-[#FFD700] drop-shadow-md">
                {skill.name}
              </span>
              <span className="text-lg sm:text-xl font-bold">
                {skill.percentage}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
