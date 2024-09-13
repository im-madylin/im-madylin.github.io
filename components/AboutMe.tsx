import Image from "next/image";
import { introContents } from "../contents/aboutMe";

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
      <div className="flex w-full flex-col items-center justify-center gap-20">
        <h2 className="text-center text-7xl font-bold">Introduction</h2>
        <div className="flex w-full flex-col items-center justify-center gap-16">
          {introContents.map((content, index) => {
            const regex = new RegExp(`(${content.highlights.join("|")})`, "g");
            const answer = content.answer.split(regex);
            return (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-8 text-left"
              >
                <h3 className="w-full text-3xl font-bold">
                  Q. {content.question}
                </h3>
                <p className="w-full text-xl font-semibold text-gray-500">
                  {answer.map((text, index) =>
                    content.highlights.includes(text) ? (
                      <span key={index} className="text-black">
                        {text}
                      </span>
                    ) : (
                      <span key={index}>{text}</span>
                    ),
                  )}
                </p>
              </div>
            );
          })}
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
