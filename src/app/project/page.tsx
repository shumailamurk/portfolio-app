"use client";

import { useEffect, useState } from "react";
import Skill from "./skill";

export default function LatestBlog() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Modern e-commerce marketplace",
      summary:
        "A modern e-commerce platform offering a seamless shopping experience with a sleek UI, secure payments, and fast delivery. Built with Next.js, Tailwind CSS, and Sanity CMS.",
      imgSrc: "/pro1.jpg",
      link: "https://e-commerce-website-figma-1-52375xpah-shumailamurks-projects.vercel.app",
    },
    {
      id: 2,
      title: "Personal Blog",
      summary:
        "A tech-focused blog where developers can explore tutorials, coding tips, and the latest industry trends. Powered by Next.js, Tailwind, and Sanity CMS for a seamless reading experience.",
      imgSrc: "/pro2.jpg",
      link: "https://blog-app-tan-zeta.vercel.app",
    },
    {
      id: 3,
      title: "Instantly Create & Share Your Professional Resume",
      summary:
        "QuickCV simplifies professional resume building by providing an intuitive interface and shareable links, making job applications effortless.",
      imgSrc: "/pro3.jpg",
      link: "https://5th-milestone-shareable-resume.vercel.app",
    },
    {
      id: 4,
      title: "Play, Learn & Compete in the Ultimate Chess Game",
      summary:
        "ChessMaster is an interactive chess game built for beginners and experts alike. Play against AI, challenge friends, and sharpen your strategic skills in an elegant, user-friendly interface.",
      imgSrc: "/pro5.jpg",
      link: "https://chess-game-d58xonx6v-shumailamurks-projects.vercel.app",
    },
    {
      id: 5,
      title: "Marketing Website",
      summary:
        "Elevate Your Brand with Smart Marketing",
      imgSrc: "/pro4.jpg",
      link: "https://vercel.com/project5",
    },
  ];

  if (!hydrated) return null;

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-center text-3xl font-bold text-yellow-600 mb-16">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md shadow-lg p-4 border-2 border-yellow-500 flex flex-col"
              style={{ minHeight: "400px" }}
            >
              <img
                src={post.imgSrc}
                alt={post.title}
                className="h-40 w-full object-cover rounded-md"
              />
              <div className="mt-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{post.summary}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-yellow-500 text-white px-6 rounded-md hover:bg-yellow-600 transition text-sm flex items-center justify-center"
                  style={{ height: "36px" }}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}

          <Skill/>
        </div>
      </section>
    </>
  );
}
