"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import useAnimateOnLoad from "../../hooks/useAnimateOnLoad";

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

  const imageRef = useAnimateOnLoad(
    {
      duration: 2,
    },
    true,
  );

  const dateRef = useAnimateOnLoad({
    duration: 1,
    delay: 2,
  });

  const iconRef = useAnimateOnLoad({
    duration: 1,
    delay: 2,
  });

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
      className="flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-14">
        <div ref={h1Ref}>
          <h1 className="text-center text-6xl font-bold">
            프론트엔드 개발자 이하현 입니다.
          </h1>
        </div>
        <div ref={textRef}>
          <p className="mt-4 text-center text-3xl">
            IT기업에서 사용자 경험을 향상시키기 위해 노력한 경험이 있습니다.{" "}
            <br />
            소통과 협력의 가치를 깊이 인지하고 있습니다.
          </p>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div ref={imageRef} className="relative h-full w-full">
          <Image
            src="/images/profile.webp"
            fill
            sizes="100vw"
            className="object-cover"
            alt="profile"
          />
        </div>
        <div>
          <div ref={dateRef}>
            <p className="absolute bottom-3 left-4 z-10 text-base text-gray-300">
              Last Update 2024.09.13
            </p>
          </div>
          <div ref={iconRef}>
            <LiaAngleDoubleDownSolid className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform justify-center text-5xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
