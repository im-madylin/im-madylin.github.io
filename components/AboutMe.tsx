"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { introContents, skillContents } from "../contents/aboutMe";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const AboutMe: React.FC = () => {
  const aboutMeAnimate = useAnimateOnScroll();
  const introductionAnimate = useAnimateOnScroll();

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-start gap-36 p-36"
    >
      <div className="flex w-full flex-col gap-24">
        <motion.div ref={aboutMeAnimate.ref}>
          <motion.h1
            className="w-full justify-start text-left text-6xl font-bold"
            initial="hidden"
            animate={aboutMeAnimate.isInView ? "visible" : "hidden"}
            exit="exit"
            variants={aboutMeAnimate.fadeInVariants}
          >
            About Me
          </motion.h1>
        </motion.div>
        <motion.div>
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
      <motion.div
        ref={introductionAnimate.ref}
        className="flex w-full flex-col items-center justify-center gap-28"
      >
        {/* Introduction */}
        <motion.h2
          initial="hidden"
          animate={introductionAnimate.isInView ? "visible" : "hidden"}
          exit="exit"
          variants={introductionAnimate.fadeInVariants}
          className="text-center text-7xl font-bold"
        >
          Introduction
        </motion.h2>
        <div className="flex w-full flex-col items-center justify-center gap-20">
          {introContents.map((content, index) => {
            const regex = new RegExp(
              `(${content.highlights.map(escapeRegExp).join("|")})`,
              "g",
            );
            const answer = content.answer.split(regex);
            return (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-8 text-left"
              >
                <h3 className="w-full text-3xl font-bold">
                  Q. {content.question}
                </h3>
                <p className="w-full text-xl font-semibold leading-8 text-gray-500">
                  {answer.map((text, index) =>
                    content.highlights.includes(text) ? (
                      <span key={index} className="text-black">
                        {text}
                      </span>
                    ) : (
                      <span key={index}>{text}</span>
                    ),
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Skills & Tools */}
      <div className="flex w-full flex-col items-center justify-center gap-28">
        <h2 className="text-center text-7xl font-bold">Skills & Tools</h2>
        <div className="grid w-full grid-cols-2 items-start justify-center gap-24">
          {skillContents.map((content, index) => {
            const regex = new RegExp(
              `(${content.highlights.map(escapeRegExp).join("|")})`,
              "g",
            );
            return (
              <div key={index} className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0">
                    <Image
                      src={content.logo}
                      width={40}
                      height={40}
                      alt="logo"
                    ></Image>
                    {content.logo2 ? (
                      <Image
                        src={content.logo2}
                        width={40}
                        height={40}
                        alt="logo"
                      ></Image>
                    ) : null}
                  </div>
                  <h3 className="text-4xl font-semibold">{content.name}</h3>
                </div>
                <div className="flex flex-col gap-1">
                  {content.description.map((text, index) => {
                    const answer = text.split(regex);
                    return (
                      <p
                        key={index}
                        className="text-xl font-semibold text-gray-500"
                      >
                        {answer.map((text, index) =>
                          content.highlights.includes(text) ? (
                            <span key={index} className="text-black">
                              {text}
                            </span>
                          ) : (
                            <span key={index}>{text}</span>
                          ),
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
