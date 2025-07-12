"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import useAnimateOnLoad from "../../hooks/useAnimateOnLoad";

const FloatingActionBTN: React.FC = () => {
  const [isFABHovered, setIsFABHovered] = useState(false);

  const buttonRef = useAnimateOnLoad({
    duration: 1,
    delay: 2,
  });

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
    <div
      ref={buttonRef}
      onMouseEnter={() => setIsFABHovered(true)}
      onMouseLeave={() => setIsFABHovered(false)}
      className="hover:shadow-3xl fixed bottom-16 right-4 z-50 flex w-10 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white/90 p-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 sm:bottom-20 sm:right-6 sm:w-12 sm:gap-3 sm:p-4"
    >
      {menu.map((item, index) => (
        <a
          key={index}
          href={isFABHovered ? item.href : undefined}
          target={isFABHovered ? "_blank" : undefined}
          rel={isFABHovered ? "noreferrer" : undefined}
          className={`flex transform items-center justify-center transition-all duration-300 ease-in-out ${
            isFABHovered
              ? "h-8 w-8 rounded-xl border border-blue-100 bg-blue-50 text-lg text-blue-600 shadow-lg hover:scale-110 hover:text-blue-700 sm:h-10 sm:w-10 sm:text-2xl"
              : "h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:from-blue-600 hover:to-indigo-600 sm:h-3 sm:w-3"
          }`}
          title={isFABHovered ? item.name : undefined}
        >
          {isFABHovered ? item.tag : null}
        </a>
      ))}
    </div>
  );
};

export default FloatingActionBTN;
