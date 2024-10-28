import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { introContents } from "../../contents/aboutMe";
import EscapeRegExp from "../Utils/EscapeRegExp";

gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const scroller = useRef<HTMLDivElement | null>(null);

  // 가로 스크롤 애니메이션
  useEffect(() => {
    const introSet = gsap.utils.toArray<HTMLElement>(".introduction");

    const to = gsap.to(introSet, {
      xPercent: () => -100 * (introSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (introSet.length - 1),
          duration: { min: 0.5, max: 0.9 },
          delay: 0.1,
          ease: "power1.inOut",
        },
        invalidateOnRefresh: true,
        end: () => "+=" + window.innerWidth * (introSet.length - 1),
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
      className="flex h-screen w-full flex-col items-center justify-center gap-28 bg-appleGray-80"
    >
      <div className="flex w-full justify-center">
        <h2 className="text-left text-7xl font-bold">Introduction</h2>
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex items-start justify-start overflow-hidden">
          {introContents.map((content, index) => {
            const regex = new RegExp(
              `(${content.highlights.map(EscapeRegExp).join("|")})`,
              "g",
            );
            const answer = content.answer.split(regex);
            return (
              <div
                key={index}
                className="introduction flex h-full w-full flex-shrink-0 flex-col items-center justify-start gap-8 px-36 text-left"
              >
                <h3 className="w-full text-left text-3xl font-bold">
                  Q. {content.question}
                </h3>
                <p className="w-full text-left text-xl font-semibold leading-8 text-gray-500">
                  {answer.map((text, idx) =>
                    content.highlights.includes(text) ? (
                      <span key={idx} className="text-black">
                        {text}
                      </span>
                    ) : (
                      <span key={idx}>{text}</span>
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
