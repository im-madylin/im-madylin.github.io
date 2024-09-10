import Cover from "../components/Cover";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <main className="flex h-full w-full flex-col">
        <Cover />
      </main>
      <footer className="items-center justify-center"></footer>
    </div>
  );
}
