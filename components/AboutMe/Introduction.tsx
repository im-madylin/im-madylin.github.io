import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { introContents } from "../../contents/aboutMe";
import EscapeRegExp from "../Utils/EscapeRegExp";

gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const scroller = useRef<HTMLDivElement | null>(null);
  const introductions = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const introSet = gsap.utils.toArray(".introduction");

    const to = gsap.to(introSet, {
      xPercent: () => -100 * (introSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current, // 스크롤 트리거 설정
        markers: false, // 디버그용 마커를 false로
        pin: true, // 해당 영역 고정
        pinSpacing: true, // 핀 후 영역을 차지하도록
        scrub: 1, // 스크롤에 따라 애니메이션 조절
        invalidateOnRefresh: true, // 새로고침 시 재계산
        anticipatePin: 1, // 핀을 예상하여 약간의 지연 처리
        snap: 1 / (introSet.length - 1), // 요소 간 스냅

        // 새로고침 시 스크롤이 끝날 시점을 다시 계산
        end: () => "+=" + window.innerWidth * (introSet.length - 1),
      },
    });

    // 컴포넌트가 언마운트되면 애니메이션을 정리
    return () => {
      to.kill();
      ScrollTrigger.refresh(); // 새로고침 시에도 트리거를 다시 설정
    };
  }, []);

  useEffect(() => {
    // 페이지가 로드되었을 때 ScrollTrigger를 강제로 새로고침
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div
      id="introductions"
      ref={scroller}
      className="flex min-h-screen w-full flex-col items-start justify-center gap-28 bg-appleGray-80 p-36"
    >
      <motion.div className="w-full items-center justify-center">
        <motion.h2 className="text-center text-7xl font-bold">
          Introduction
        </motion.h2>
      </motion.div>
      <div className="overflow-hidden">
        <div className="flex items-start justify-start gap-20 overflow-hidden">
          {introContents.map((content, index) => {
            const regex = new RegExp(
              `(${content.highlights.map(EscapeRegExp).join("|")})`,
              "g",
            );
            const answer = content.answer.split(regex);
            return (
              <div
                key={index}
                ref={introductions}
                className="introduction flex w-[800px] flex-col items-center justify-center gap-8 whitespace-normal text-left"
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
      </div>
    </div>
  );
};

export default Introduction;
