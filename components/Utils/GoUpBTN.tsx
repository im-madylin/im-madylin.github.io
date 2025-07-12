"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoUpBTN: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 0, y: -50 });
      gsap.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out",
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="hover:shadow-3xl fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-blue-700/50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="맨 위로 스크롤"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default GoUpBTN;
