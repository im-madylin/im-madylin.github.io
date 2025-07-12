import AboutMe from "../components/AboutMe/AboutMe";
import SkillAndTools from "../components/AboutMe/SkillAndTools";
import ContactMe from "../components/Contact/ContactMe";
import Cover from "../components/Cover/Cover";
import Projects from "../components/Projects/Projects";
import ErrorBoundary from "../components/Utils/ErrorBoundary";
import FAB from "../components/Utils/FloatingActionBTN";
import GoUpBTN from "../components/Utils/GoUpBTN";
import HeaderNav from "../components/Utils/HeaderNav";

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <FAB />
        <GoUpBTN />
        <main>
          <Cover />
          <HeaderNav />
          <AboutMe />
          <SkillAndTools />
          <Projects />
          <ContactMe />
        </main>
        <footer className="items-center justify-center"></footer>
      </div>
    </ErrorBoundary>
  );
}
