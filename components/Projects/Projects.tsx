"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { projectContents } from "../../contents/projects";
import MoreInfoBTN from "./MoreInfoBTN";

gsap.registerPlugin(ScrollTrigger);

interface ProjectContent {
  title: string;
  subtitle: string;
  period: string;
  members: string;
  image: string;
  description: string;
  techStack: string;
  detail: string;
}

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 프로젝트 카드들에 대한 스크롤 애니메이션 설정
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)",
              });
            },
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="flex items-center justify-center py-8 sm:py-12 md:py-16">
        <div className="px-4 text-center">
          <div className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-800 sm:mb-4 sm:px-6 sm:py-2 sm:text-sm">
            MY WORK
          </div>
          <h1 className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text pb-2 text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg md:text-xl">
            여러 프로젝트 경험을 통해 프론트엔드 역량과 문제 해결 능력을
            강화하고 있습니다.
          </p>
        </div>
      </div>

      <div className="space-y-12 pb-12 sm:space-y-16 sm:pb-16 md:space-y-20 md:pb-20 lg:space-y-24 lg:pb-24">
        {projectContents.map((content, index) => (
          <div
            key={`project-${index}`}
            className="flex items-center justify-center px-4 sm:px-6 md:px-8"
          >
            <ProjectCard content={content} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

// 프로젝트 카드를 별도 컴포넌트로 분리하여 성능 최적화
const ProjectCard = memo(
  ({ content, index }: { content: ProjectContent; index: number }) => {
    // 기술 스택 배열을 미리 계산하여 성능 최적화
    const techStackArray = useMemo(
      () => content.techStack.split(", "),
      [content.techStack],
    );

    // 버튼 클릭 핸들러를 useCallback으로 최적화
    const handleMoreInfoClick = useCallback(() => {
      // 추후 프로젝트 상세 페이지 연결
      console.log(`프로젝트 ${content.title} 상세 정보`);
    }, [content.title]);

    return (
      <div className="project-card group w-full max-w-6xl transform-gpu rounded-3xl border border-gray-100/50 bg-white/80 p-6 shadow-2xl backdrop-blur-sm will-change-transform sm:p-8 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 sm:h-8 sm:w-8"></div>
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                {content.title}
              </h2>
              <h3 className="text-lg font-semibold text-gray-600 sm:text-xl md:text-2xl">
                {content.subtitle}
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
                <span className="font-semibold">기간:</span>
                <span>{content.period}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
                <span className="font-semibold">팀 구성:</span>
                <span>{content.members}</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
              {content.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-gray-800 sm:text-sm">
                사용 기술
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {techStackArray.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 sm:px-3 sm:py-1 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div onClick={handleMoreInfoClick}>
              <MoreInfoBTN />
            </div>
          </div>

          <div className="relative order-first transform-gpu overflow-hidden rounded-2xl shadow-lg lg:order-last">
            <Image
              src={content.image}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              alt={`${content.title} 프로젝트 썸네일`}
              loading="lazy"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default Projects;
