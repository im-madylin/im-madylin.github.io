import { motion } from "framer-motion";
import { introContents } from "../../contents/aboutMe";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import EscapeRegExp from "../Utils/EscapeRegExp";

const Introduction: React.FC = () => {
  const introductionAnimate = useAnimateOnScroll();

  return (
    <motion.div
      ref={introductionAnimate.ref}
      className="flex w-full flex-col items-center justify-center gap-28"
    >
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
            `(${content.highlights.map(EscapeRegExp).join("|")})`,
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
  );
};

export default Introduction;
