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
      <div className="flex w-full flex-col gap-24 p-36">
        <div ref={h1Animate.ref} className="text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800">
            WHO AM I
          </div>
          <h1 className="w-full text-center text-6xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            사용자 중심의 경험을 만드는 프론트엔드 개발자로,<br />
            협력과 소통을 통해 더 나은 서비스를 구현합니다.
          </p>
        </div>
        <div ref={imageAnimate.ref} className="relative rounded-2xl overflow-hidden shadow-2xl">
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
