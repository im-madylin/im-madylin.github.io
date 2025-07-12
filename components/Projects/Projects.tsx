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
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800">
            MY WORK
          </div>
          <h1 className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text pb-2 text-6xl font-bold leading-tight text-transparent">
            Projects
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            다양한 프로젝트를 통해 쌓아온 경험과 기술력을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="space-y-24 pb-24">
        {projectContents.map((content, index) => (
          <div
            key={`project-${index}`}
            className="flex items-center justify-center px-8"
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
      <div className="project-card group w-full max-w-6xl transform-gpu rounded-3xl border border-gray-100/50 bg-white/80 p-12 shadow-2xl backdrop-blur-sm will-change-transform">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                {content.title}
              </h2>
              <h3 className="text-2xl font-semibold text-gray-600">
                {content.subtitle}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">기간:</span>
                <span>{content.period}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">팀 구성:</span>
                <span>{content.members}</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              {content.description}
            </p>

            <div className="space-y-2">
              <span className="text-sm font-semibold text-gray-800">
                사용 기술
              </span>
              <div className="flex flex-wrap gap-2">
                {techStackArray.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
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

          <div className="relative transform-gpu overflow-hidden rounded-2xl shadow-lg">
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
