"use client";

import { FaArrowUp } from "react-icons/fa";

const GoUpBTN: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-3xl bg-appleGray-100/70"
    >
      <FaArrowUp className="text-2xl text-appleGray-500" />
    </button>
  );
};

export default GoUpBTN;
