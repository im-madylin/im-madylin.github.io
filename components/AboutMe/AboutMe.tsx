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
      className="flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-white"
    >
      <div className="flex w-full flex-col gap-12 p-4 sm:gap-16 sm:p-8 md:gap-20 md:p-16 lg:gap-24 lg:p-36">
        <div ref={h1Animate.ref} className="text-center">
          <div className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-800 sm:mb-4 sm:px-6 sm:py-2 sm:text-sm">
            WHO AM I
          </div>
          <h1 className="w-full bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg md:text-xl">
            사용자 중심의 경험을 만드는 프론트엔드 개발자로,
            <br className="hidden sm:block" />
            협력과 소통을 통해 더 나은 서비스를 구현합니다.
          </p>
        </div>
        <div
          ref={imageAnimate.ref}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src="/images/html_image.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-cover"
            alt="html code"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
      <Introduction />
      <SkillAndTools />
    </section>
  );
};

export default AboutMe;
