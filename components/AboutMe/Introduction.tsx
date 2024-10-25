import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { introContents } from "../../contents/aboutMe";
import EscapeRegExp from "../Utils/EscapeRegExp";

gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const scroller = useRef<HTMLDivElement | null>(null);
  const introductions = useRef<HTMLDivElement | null>(null);

  // 가로 스크롤 애니메이션
  useEffect(() => {
    const introSet = gsap.utils.toArray(".introduction");

    const to = gsap.to(introSet, {
      xPercent: () => -100 * (introSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (introSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div
      id="introductions"
      ref={scroller}
      className="flex h-screen w-full flex-col items-start justify-center gap-28 bg-appleGray-80 p-36"
    >
      <div className="w-full items-center justify-center">
        <h2 className="text-center text-7xl font-bold">Introduction</h2>
      </div>
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
