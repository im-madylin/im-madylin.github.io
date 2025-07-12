import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimateOnLoad = (
  animationOptions: gsap.TweenVars,
  isZoom: boolean = false,
) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      // 기본 상태 설정
      const initialProps = {
        opacity: 0,
        y: isZoom ? 0 : -50,
        scale: isZoom ? 3 : 1,
      };

      // 초기 상태 설정
      gsap.set(elementRef.current, initialProps);

      // 애니메이션 시작
      const animation = gsap.fromTo(elementRef.current, initialProps, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "easeInOut",
        ...animationOptions,
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  return elementRef;
};

export default useAnimateOnLoad;
