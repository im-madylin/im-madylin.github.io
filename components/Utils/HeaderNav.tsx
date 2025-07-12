"use client";

import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedSection, setSelectedSection] = useState("about");

  // 선택된 섹션으로 스크롤 이동
  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
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
      const sections = ["about", "projects"];
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          if (
            scrollTop >= sectionTop - 100 &&
            scrollTop < sectionTop + sectionHeight - 100
          ) {
            currentSection = section;
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
        className={`flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/95 backdrop-blur-md px-4 transition-all duration-300 sm:px-8 md:px-16 lg:px-36 ${
          isSticky ? "fixed left-0 top-0 z-50 shadow-lg" : "relative"
        }`}
      >
        <div className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            이하현
          </span>
          <span className="ml-2 text-gray-600">Frontend Developer</span>
        </div>
        <ul className="flex h-full items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {/* About Me */}
          <li className="group flex h-full flex-col justify-between">
            <div className="h-0"></div>
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-base font-medium text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              About Me
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div
              className={`h-0.5 transition-all duration-300 ${
                selectedSection === "about" ? "bg-blue-600" : "bg-transparent"
              }`}
            ></div>
          </li>

          {/* Projects */}
          <li className="group flex h-full flex-col justify-between">
            <div className="h-0"></div>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative text-base font-medium text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Projects
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div
              className={`h-0.5 transition-all duration-300 ${
                selectedSection === "projects" ? "bg-blue-600" : "bg-transparent"
              }`}
            ></div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
