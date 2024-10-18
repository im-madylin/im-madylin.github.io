import AboutMe from "../components/AboutMe/AboutMe";
import Cover from "../components/Cover/Cover";
import Projects from "../components/Projects/Projects";
import FAB from "../components/Utils/FloatingActionBTN";
import GoUpBTN from "../components/Utils/GoUpBTN";
import HeaderNav from "../components/Utils/HeaderNav";

export default function Home() {
  return (
    <div>
      <FAB />
      <GoUpBTN />
      <main>
        <Cover />
        <HeaderNav />
        <AboutMe />
        <Projects />
      </main>
      <footer className="items-center justify-center"></footer>
    </div>
  );
}
