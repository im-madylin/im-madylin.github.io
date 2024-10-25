"use client";

import { FaArrowUp } from "react-icons/fa";
import useAnimateOnLoad from "../../hooks/useAnimateOnLoad";

const GoUpBTN: React.FC = () => {
  const buttonRef = useAnimateOnLoad({
    duration: 1,
    delay: 2,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-4 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-3xl bg-appleGray-100/70"
    >
      <FaArrowUp className="text-2xl text-appleGray-500" />
    </div>
  );
};

export default GoUpBTN;
