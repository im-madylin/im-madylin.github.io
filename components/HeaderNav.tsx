const Header: React.FC = () => {
  return (
    <nav className="bg-appleGray-50/70 flex h-20 w-full items-center justify-between border-b border-gray-300 px-36">
      <div className="text-2xl font-semibold">프론트엔드 개발자 이하현</div>
      <ul className="flex h-full items-center justify-center gap-12">
        <li className="flex h-full flex-col justify-between">
          <div className="h-0"></div>
          <a href="#about" className="text-base font-medium">
            About Me
          </a>
          <div className="h-0 border-b border-black"></div>
        </li>
        <li className="flex h-full flex-col justify-between">
          <div className="h-0"></div>
          <a href="#projects" className="text-base font-medium">
            Projects
          </a>
          <div className="h-0 border-b"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
