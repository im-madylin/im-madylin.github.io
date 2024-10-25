"use client";

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
      className="flex min-h-screen w-full flex-col items-center justify-start overflow-hidden"
    >
      <div className="flex w-full flex-col gap-24 p-36">
        <div ref={h1Animate.ref}>
          <h1 className="w-full justify-start text-left text-6xl font-bold">
            About Me
          </h1>
        </div>
        <div ref={imageAnimate.ref}>
          <Image
            src="/images/html_image.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-cover"
            alt="html code"
          />
        </div>
      </div>
      <Introduction />
      <SkillAndTools />
    </section>
  );
};

export default AboutMe;
