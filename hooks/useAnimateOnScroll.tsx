import gsap from "gsap";
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

        if (isIntersecting && isBelowViewport) {
          setIsInView(true);
        } else if (!isIntersecting && isBelowViewport) {
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

  useEffect(() => {
    if (ref.current) {
      if (isInView) {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "easeInOut",
        });
      } else {
        gsap.to(ref.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "easeInOut",
        });
      }
    }
  }, [isInView]);

  return { ref };
};

export default useAnimateOnScroll;
