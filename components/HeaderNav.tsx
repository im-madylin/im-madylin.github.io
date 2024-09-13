"use client";

import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedSection, setSelectedSection] = useState("about");

  // Function to scroll to a specific section
  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      setSelectedSection(section);
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scrolling and update the sticky state and selected section
  useEffect(() => {
    const handleScroll = () => {
      const coverSectionHeight =
        document.getElementById("cover")?.offsetHeight || 0;
      const scrollTop = window.scrollY;

      // Update sticky state
      setIsSticky(scrollTop > coverSectionHeight);

      // Determine the current section based on scroll position
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

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-appleGray-50/95 flex h-16 w-full items-center justify-between border-b border-gray-300 px-36 transition-all duration-300 ${
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
