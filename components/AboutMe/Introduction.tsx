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
        scrub: 1,
        snap: {
          snapTo: 1 / (introSet.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        end: () =>
          "+=" +
          (window.innerWidth * (introSet.length - 1) + window.innerHeight),
        pinSpacing: true,
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
      className="flex h-screen w-full flex-col items-center justify-center gap-28 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="flex w-full justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800">
            MY STORY
          </div>
          <h2 className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-7xl font-bold text-transparent">
            Introduction
          </h2>
        </div>
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
                <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      Q
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {content.question}
                    </h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-lg leading-8 text-gray-600">
                      {answer.map((text, idx) =>
                        content.highlights.includes(text) ? (
                          <span
                            key={idx}
                            className="rounded bg-blue-100 px-1 font-semibold text-blue-800"
                          >
                            {text}
                          </span>
                        ) : (
                          <span key={idx}>{text}</span>
                        ),
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
