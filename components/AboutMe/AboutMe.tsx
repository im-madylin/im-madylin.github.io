"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import Introduction from "./Introduction";
import SkillAndTools from "./SkillAndTools";

const AboutMe: React.FC = () => {
  const h1Animate = useAnimateOnScroll();
  const imageAnimate = useAnimateOnScroll();

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-start gap-36 p-36"
    >
      <div className="flex w-full flex-col gap-24">
        <motion.div ref={h1Animate.ref}>
          <motion.h1
            className="w-full justify-start text-left text-6xl font-bold"
            initial="hidden"
            animate={h1Animate.isInView ? "visible" : "hidden"}
            exit="exit"
            variants={h1Animate.fadeInVariants}
          >
            About Me
          </motion.h1>
        </motion.div>
        <motion.div
          ref={imageAnimate.ref}
          initial="hidden"
          animate={imageAnimate.isInView ? "visible" : "hidden"}
          exit="exit"
          variants={imageAnimate.fadeInVariants}
        >
          <Image
            src="/images/html_image.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-cover"
            alt="html code"
          />
        </motion.div>
      </div>
      <Introduction />
      <SkillAndTools />
    </section>
  );
};

export default AboutMe;
