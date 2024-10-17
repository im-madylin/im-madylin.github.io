import { useEffect, useRef, useState } from "react";

const useAnimateOnScroll = (
  options = { threshold: 0, rootMargin: "0px 0px -10% 0px" },
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        const isBelowViewport = entry.boundingClientRect.top >= 0;

        // 뷰포트 하단에서 진입할 때 등장
        if (isIntersecting && isBelowViewport) {
          setIsInView(true);
        }
        // 뷰포트 하단을 벗어날 때 퇴장
        else if (!isIntersecting && isBelowViewport) {
          setIsInView(false);
        }
      },
      { rootMargin: options.rootMargin, threshold: options.threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options.rootMargin, options.threshold]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return { ref, isInView, fadeInVariants };
};

export default useAnimateOnScroll;
