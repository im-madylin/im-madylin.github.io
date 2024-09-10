import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import FAB from "../components/FloatingActionBTN";
import GoUpBTN from "../components/GoUpBTN";
import HeaderNav from "../components/HeaderNav";

export default function Home() {
  return (
    <div>
      <FAB />
      <GoUpBTN />
      <main>
        <Cover />
        <HeaderNav />
        <AboutMe />
      </main>
      <footer className="items-center justify-center"></footer>
    </div>
  );
}
