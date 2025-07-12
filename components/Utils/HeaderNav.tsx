"use client";

import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedSection, setSelectedSection] = useState("aboutme");

  // 선택된 섹션으로 스크롤 이동
  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      const headerHeight = 64; // 헤더 높이

      if (section === "aboutme") {
        // About Me 섹션의 경우 Cover 바로 다음 위치로 이동
        const coverElement = document.getElementById("cover");
        const coverHeight = coverElement?.offsetHeight || 0;
        const elementPosition = coverHeight + 10; // Cover 바로 다음 + 10px 여백

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      } else {
        const elementPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const coverSectionHeight =
        document.getElementById("cover")?.offsetHeight || 0;
      const scrollTop = window.scrollY;

      // 헤더가 스크롤에 따라 스티키 상태로 업데이트
      setIsSticky(scrollTop > coverSectionHeight);

      // 현재 스크롤 위치에 따라 선택된 섹션 업데이트
      const sections = ["aboutme", "skills", "projects", "contact"];
      let currentSection = "aboutme"; // 기본값을 aboutme로 설정

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          // About Me 섹션의 경우 더 관대한 범위 적용
          if (section === "aboutme") {
            if (
              scrollTop >= coverSectionHeight - 100 &&
              scrollTop < sectionTop + sectionHeight - 100
            ) {
              currentSection = section;
            }
          } else {
            if (
              scrollTop >= sectionTop - 200 &&
              scrollTop < sectionTop + sectionHeight - 100
            ) {
              currentSection = section;
            }
          }
        }
      }
      setSelectedSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 고정된 헤더의 높이만큼 상단에 여백 추가 */}
      <div className={`${isSticky ? "h-16" : ""}`} />

      <nav
        className={`flex h-16 w-full items-center border-b border-gray-200 bg-white/95 px-4 backdrop-blur-md transition-all duration-300 sm:px-8 md:px-16 lg:px-36 ${
          isSticky ? "fixed left-0 top-0 z-50 shadow-lg" : "relative"
        }`}
      >
        <ul className="flex h-full w-full items-center justify-end gap-4 sm:gap-8 md:gap-12">
          {/* About Me */}
          <li className="group flex h-full flex-col justify-between">
            <div className="h-0"></div>
            <button
              onClick={() => scrollToSection("aboutme")}
              className="relative rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
            >
              About Me
            </button>
            <div
              className={`h-0.5 transition-all duration-300 ${
                selectedSection === "aboutme" ? "bg-blue-600" : "bg-transparent"
              }`}
            ></div>
          </li>

          {/* Skills & Tools */}
          <li className="group flex h-full flex-col justify-between">
            <div className="h-0"></div>
            <button
              onClick={() => scrollToSection("skills")}
              className="relative rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
            >
              Skills & Tools
            </button>
            <div
              className={`h-0.5 transition-all duration-300 ${
                selectedSection === "skills" ? "bg-blue-600" : "bg-transparent"
              }`}
            ></div>
          </li>

          {/* Projects */}
          <li className="group flex h-full flex-col justify-between">
            <div className="h-0"></div>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
            >
              Projects
            </button>
            <div
              className={`h-0.5 transition-all duration-300 ${
                selectedSection === "projects"
                  ? "bg-blue-600"
                  : "bg-transparent"
              }`}
            ></div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
