"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";

const Cover: React.FC = () => {
  const imageVariants = {
    hidden: { scale: 3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const h1Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const iconAndDateVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const bounceAnimation = {
    visible: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="cover"
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-14">
        <motion.div initial="hidden" animate="visible" variants={h1Variants}>
          <h1 className="text-center text-6xl font-bold">
            프론트엔드 개발자 이하현 입니다.
          </h1>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <p className="mt-4 text-center text-3xl">
            IT기업에서 사용자 경험을 향상시키기 위해 노력한 경험이 있습니다.{" "}
            <br />
            소통과 협력의 가치를 깊이 인지하고 있습니다.
          </p>
        </motion.div>
      </div>
      <div className="relative h-full w-full">
        <motion.div
          className="relative h-full w-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/images/profile.webp"
            fill
            sizes="100vw"
            className="object-cover"
            alt="profile"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconAndDateVariants}
        >
          <p className="absolute bottom-3 left-4 z-10 text-base text-gray-300">
            Last Update 2024.09.13
          </p>
          <motion.div animate="visible" variants={bounceAnimation}>
            <LiaAngleDoubleDownSolid className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform justify-center text-5xl text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cover;
