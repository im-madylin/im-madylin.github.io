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

  const dateRef = useAnimateOnLoad({
    duration: 1,
    delay: 2,
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

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <div ref={h1Ref} className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800">
              Frontend Developer
            </div>
            <h1 className="flex items-center justify-center gap-4 bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-6xl font-bold text-transparent">
              안녕하세요,
              <br />
              <span className="text-blue-600">이하현</span>입니다
            </h1>
          </div>
          <div ref={textRef} className="h-20 max-w-2xl px-4">
            <TypingText />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
          >
            <span className="font-semibold">About Me</span>
            <LiaAngleDoubleDownSolid className="transition-transform group-hover:translate-y-1" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
          >
            Projects
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>

      <div ref={dateRef} className="absolute bottom-4 left-4 z-20">
        <p className="text-sm text-gray-500">Last Update 2025.01.12</p>
      </div>

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
