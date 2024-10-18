"use client";

import Image from "next/image";
import { skillContents } from "../../contents/aboutMe";

const SkillAndTools: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-28">
      <h2 className="text-center text-7xl font-bold">Skills & Tools</h2>
      <div className="grid w-full grid-cols-2 items-start justify-center gap-24">
        {skillContents.map((content, index) => {
          const regex = new RegExp(
            `(${content.highlights.map(escapeRegExp).join("|")})`,
            "g",
          );
          return (
            <div key={index} className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0">
                  <Image
                    src={content.logo}
                    width={40}
                    height={40}
                    alt="logo"
                  ></Image>
                  {content.logo2 ? (
                    <Image
                      src={content.logo2}
                      width={40}
                      height={40}
                      alt="logo"
                    ></Image>
                  ) : null}
                </div>
                <h3 className="text-4xl font-semibold">{content.name}</h3>
              </div>
              <div className="flex flex-col gap-1">
                {content.description.map((text, index) => {
                  const answer = text.split(regex);
                  return (
                    <p
                      key={index}
                      className="text-xl font-semibold text-gray-500"
                    >
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
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export default SkillAndTools;
