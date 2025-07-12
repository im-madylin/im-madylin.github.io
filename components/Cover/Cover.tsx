"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import useAnimateOnLoad from "../../hooks/useAnimateOnLoad";
import TypingText from "./TypingText";

const Cover: React.FC = () => {
  // 애니메이션 옵션 설정
  const h1Ref = useAnimateOnLoad({
    duration: 1,
    delay: 1,
  });

  const textRef = useAnimateOnLoad({
    duration: 1,
    delay: 1.5,
  });

  const iconRef = useAnimateOnLoad({
    duration: 1,
    delay: 2,
  });

  // 아이콘 바운스 애니메이션
  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: 0,
        duration: 0.9,
        yoyoEase: true,
        yoyo: true,
        repeat: -1,
      });
    }
  }, [iconRef]);

  return (
    <section
      id="cover"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-300/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-300/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div ref={h1Ref} className="text-center">
            <div className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-800 sm:mb-4 sm:px-6 sm:py-2 sm:text-sm">
              Frontend Developer
            </div>
            <h1 className="bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              안녕하세요,
              <br />
              <span className="text-blue-600">이하현</span>입니다
            </h1>
          </div>
          <div
            ref={textRef}
            className="h-24 w-full max-w-xs px-4 sm:h-20 sm:max-w-2xl"
          >
            <TypingText />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>

      <div
        ref={iconRef}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm">
          <LiaAngleDoubleDownSolid className="text-2xl text-blue-600" />
        </div>
      </div>
    </section>
  );
};

export default Cover;
