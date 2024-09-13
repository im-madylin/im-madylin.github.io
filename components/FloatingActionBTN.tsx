const NavBar: React.FC = () => {
  const menu = [
    { name: "Github", href: "#" },
    { name: "Email", href: "#" },
    { name: "Blog", href: "#" },
  ];
  return (
    <div className="bg-appleGray-100/70 fixed bottom-16 right-5 z-10 flex w-10 flex-col items-center justify-center gap-2 rounded-3xl p-4">
      {menu.map((item, index) => (
        <div
          key={index}
          className="bg-appleGray-500 h-3 w-3 rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default NavBar;
