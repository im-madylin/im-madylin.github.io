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
      className="hover:shadow-3xl fixed bottom-20 right-6 z-50 flex w-12 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
    >
      {menu.map((item, index) => (
        <a
          key={index}
          href={isFABHovered ? item.href : undefined}
          target={isFABHovered ? "_blank" : undefined}
          rel={isFABHovered ? "noreferrer" : undefined}
          className={`flex transform items-center justify-center transition-all duration-300 ease-in-out ${
            isFABHovered
              ? "h-10 w-10 rounded-xl border border-blue-100 bg-blue-50 text-2xl text-blue-600 shadow-lg hover:scale-110 hover:text-blue-700"
              : "h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:from-blue-600 hover:to-indigo-600"
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
