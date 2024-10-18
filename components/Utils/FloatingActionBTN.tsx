"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";

const FloatingActionBTN: React.FC = () => {
  const [isFABHovered, setIsFABHovered] = useState(false);

  const btnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const menu = [
    {
      name: "Github",
      tag: <FaGithub />,
      href: "https://github.com/im-madylin",
    },
    {
      name: "Blog",
      tag: <IoNewspaper />,
      href: "https://im-madylin.tistory.com",
    },
    { name: "Email", tag: <IoIosMail />, href: "mailto:im.madylin@gmail.com" },
  ];
  return (
    <motion.button
      initial="hidden"
      animate="visible"
      variants={btnVariants}
      onMouseEnter={() => setIsFABHovered(true)}
      onMouseLeave={() => setIsFABHovered(false)}
      className="fixed bottom-16 right-5 z-10 flex w-10 flex-col items-center justify-center gap-2 rounded-3xl bg-appleGray-100/70 p-4"
    >
      {menu.map((item, index) => {
        return isFABHovered ? (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex h-fit transform items-center justify-center text-2xl text-gray-800 transition-all duration-1000 ease-in-out hover:scale-125"
          >
            {item.tag}
          </a>
        ) : (
          <div
            key={index}
            className="h-3 w-3 rounded-full bg-appleGray-500 transition-all duration-1000 ease-in-out"
          ></div>
        );
      })}
    </motion.button>
  );
};

export default FloatingActionBTN;
