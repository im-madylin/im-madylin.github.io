import Image from "next/image";
import { projectContents } from "../contents/projects";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-36 p-36"
    >
      <h1 className="w-full justify-start text-left text-6xl font-bold">
        Projects
      </h1>

      {projectContents.map((content, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center justify-center gap-10"
        >
          <div className="flex w-full flex-col gap-4 text-center">
            <h2 className="text-7xl font-bold">{content.title}</h2>
            <h3 className="text-5xl font-bold">{content.subtitle}</h3>
          </div>
          <div className="flex w-full flex-col text-center text-lg font-semibold text-gray-500">
            <p>{content.period}</p>
            <p>{content.members}</p>
          </div>
          <Image
            src={content.image}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-cover"
            alt="project thumbnail"
          />
          <div className="flex w-full flex-col gap-8 text-lg font-bold">
            <p>{content.description}</p>
            <p className="text-gray-500">사용 기술 : {content.techStack}</p>
          </div>
          {/* <MoreInfoBTN /> */}
        </div>
      ))}
    </section>
  );
};

export default Projects;
