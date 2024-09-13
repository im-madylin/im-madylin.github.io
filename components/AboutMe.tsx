import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-start gap-24 p-20"
    >
      <h1 className="w-full justify-start text-left text-6xl font-bold">
        About Me
      </h1>
      <Image
        src="/images/html_image.webp"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full object-cover"
        alt="html code"
      />
      <div>
        <h2>Introduction</h2>
        <div>
          <h3>질문</h3>
          <p>답변</p>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <div>
          <div>
            <div>로고</div>
            <h3>스킬명</h3>
          </div>
          <p>설명</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
