'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';


const Page = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 h-full sm:h-[90vh] bg-[url('/bg2.jpg')] bg-cover sm:bg-cover bg-center sm:bg-top bg-no-repeat opacity-70 sm:opacity-80"></div>

      {/* Profile Image */}
      <div className="relative z-10">
        <img 
          src="/anii2.png" 
          alt="Profile" 
          className="w-44 h-44 rounded-full border-4 border-pink-400 shadow-lg shadow-pink-500 animate-glow"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center mt-8">
        {/* About Me Heading with Typewriter Effect */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[Pacifico] mb-4 sm:mb-6 md:mb-10">
          <Typewriter
            options={{
              strings: [
                '<span style="color:pink;">About Me</span>',
                '<span style="color:skyblue;">About Me</span>'
              ],
              autoStart: true,
              loop: true,
              delay: 75
            }}
          />
        </h2>
        
        {/* About Me Content */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-[Prata] tracking-wide text-justify sm:text-center">
          I am a creative <strong>Frontend Developer</strong> and <strong>UI/UX Designer</strong> who loves building intuitive and responsive web applications. 
          With a strong passion for design and development, I create websites that not only look great but also provide a seamless user experience. 
          I enjoy experimenting with new tools and technologies to stay ahead in the ever-evolving web development world.
        </p>
      </div>

      {/* Custom CSS for Glow Animation */}
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 15px #ff69b4, 0 0 25px #ff1493, 0 0 35px #ff69b4; }
          50% { box-shadow: 0 0 20px #ff1493, 0 0 30px #ff69b4, 0 0 40px #ff1493; }
          100% { box-shadow: 0 0 15px #ff69b4, 0 0 25px #ff1493, 0 0 35px #ff69b4; }
        }

        .animate-glow {
          animation: glow 1.5s infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Page;
