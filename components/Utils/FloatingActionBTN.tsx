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
      className="fixed bottom-16 right-5 z-10 flex w-10 flex-col items-center justify-center gap-2 rounded-3xl bg-appleGray-100/70 p-4"
    >
      {menu.map((item, index) => (
        <a
          key={index}
          href={isFABHovered ? item.href : undefined}
          target={isFABHovered ? "_blank" : undefined}
          rel={isFABHovered ? "noreferrer" : undefined}
          className={`flex transform items-center justify-center transition-transform duration-500 ease-in-out ${
            isFABHovered
              ? "my-0.5 text-2xl text-gray-800 hover:scale-125"
              : "h-3 w-3 rounded-full bg-appleGray-500"
          }`}
        >
          {isFABHovered ? item.tag : null}
        </a>
      ))}
    </div>
  );
};

export default FloatingActionBTN;
