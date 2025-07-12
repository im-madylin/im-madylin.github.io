"use client";

import Image from "next/image";
import { skillContents } from "../../contents/aboutMe";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import EscapeRegExp from "../Utils/EscapeRegExp";

const SkillAndTools: React.FC = () => {
  const h2Animate = useAnimateOnScroll();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-12 bg-white p-4 sm:gap-16 sm:p-8 md:gap-20 md:p-16 lg:gap-28 lg:p-36">
      <div ref={h2Animate.ref} className="text-center">
        <div className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-800 sm:mb-4 sm:px-6 sm:py-2 sm:text-sm">
          TECH STACK
        </div>
        <h2 className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-7xl">
          Skills & Tools
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg md:text-xl">
          다양한 기술과 도구를 활용하여 사용자 경험을 향상시키는 서비스를
          개발합니다.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 items-start justify-center gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
        {skillContents.map((content, index) => {
          const regex = new RegExp(
            `(${content.highlights.map(EscapeRegExp).join("|")})`,
            "g",
          );
          return (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 sm:h-16 sm:w-16">
                  <div className="flex gap-0">
                    <Image
                      src={content.logo}
                      width={24}
                      height={24}
                      alt={`${content.name} 로고`}
                      className="rounded sm:h-8 sm:w-8"
                    />
                    {content.logo2 && (
                      <Image
                        src={content.logo2}
                        width={24}
                        height={24}
                        alt={`${content.name} 로고 2`}
                        className="-ml-1.5 rounded sm:-ml-2 sm:h-8 sm:w-8"
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
                  {content.name}
                </h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {content.description.map((text, index) => {
                  const answer = text.split(regex);
                  return (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-gray-600 sm:text-base"
                    >
                      {answer.map((text, index) =>
                        content.highlights.includes(text) ? (
                          <span
                            key={index}
                            className="rounded bg-blue-100 px-1 font-semibold text-blue-800"
                          >
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
  );
};

export default SkillAndTools;
