"use client";

import Image from "next/image";
import { skillContents } from "../../contents/aboutMe";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import EscapeRegExp from "../Utils/EscapeRegExp";

const SkillAndTools: React.FC = () => {
  const h2Animate = useAnimateOnScroll();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-28 p-36 bg-white">
      <div ref={h2Animate.ref} className="text-center">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800">
          TECH STACK
        </div>
        <h2 className="text-7xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">Skills & Tools</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          다양한 기술과 도구를 활용하여 사용자 경험을 향상시키는 서비스를 개발합니다.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 items-start justify-center gap-8">
        {skillContents.map((content, index) => {
          const regex = new RegExp(
            `(${content.highlights.map(EscapeRegExp).join("|")})`,
            "g",
          );
          return (
            <div key={index} className="group rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="flex gap-0">
                    <Image
                      src={content.logo}
                      width={32}
                      height={32}
                      alt={`${content.name} 로고`}
                      className="rounded"
                    />
                    {content.logo2 && (
                      <Image
                        src={content.logo2}
                        width={32}
                        height={32}
                        alt={`${content.name} 로고 2`}
                        className="rounded -ml-2"
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{content.name}</h3>
              </div>
              <div className="space-y-3">
                {content.description.map((text, index) => {
                  const answer = text.split(regex);
                  return (
                    <p
                      key={index}
                      className="text-gray-600 leading-relaxed"
                    >
                      {answer.map((text, index) =>
                        content.highlights.includes(text) ? (
                          <span key={index} className="bg-blue-100 text-blue-800 font-semibold px-1 rounded">
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
