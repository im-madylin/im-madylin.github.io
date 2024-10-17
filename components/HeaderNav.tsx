"use client";

import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedSection, setSelectedSection] = useState("about");

  // 선택된 섹션으로 스크롤 이동
  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      // setSelectedSection(section);
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
    <nav
      className={`flex h-16 w-full items-center justify-between border-b border-gray-300 bg-appleGray-50/95 px-36 transition-all duration-300 ${
        isSticky ? "fixed left-0 top-0 z-50" : "relative"
      }`}
    >
      <div className="text-2xl font-semibold">프론트엔드 개발자 이하현</div>
      <ul className="flex h-full items-center justify-center gap-12">
        {/* About Me */}
        <li className="flex h-full flex-col justify-between">
          <div className="h-0"></div>
          <button
            onClick={() => scrollToSection("about")}
            className="text-base font-medium"
          >
            About Me
          </button>
          <div
            className={`h-0 border-b ${selectedSection === "about" ? "border-black" : ""}`}
          ></div>
        </li>

        {/* Projects */}
        <li className="flex h-full flex-col justify-between">
          <div className="h-0"></div>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-base font-medium"
          >
            Projects
          </button>
          <div
            className={`h-0 border-b ${selectedSection === "projects" ? "border-black" : ""}`}
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
