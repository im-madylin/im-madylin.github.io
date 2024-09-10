import GoUpBTN from "../components/\bGoUpBTN";
import Cover from "../components/Cover";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <NavBar />
      <GoUpBTN />
      <main className="flex h-full w-full flex-col">
        <Cover />
      </main>
      <footer className="items-center justify-center"></footer>
    </div>
  );
}
