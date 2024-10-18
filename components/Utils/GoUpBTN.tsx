"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const GoUpBTN: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <motion.button
      onClick={scrollToTop}
      initial="hidden"
      animate="visible"
      variants={btnVariants}
      className="fixed bottom-4 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-3xl bg-appleGray-100/70"
    >
      <FaArrowUp className="text-2xl text-appleGray-500" />
    </motion.button>
  );
};

export default GoUpBTN;
