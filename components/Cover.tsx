import Image from "next/image";

const Cover: React.FC = () => {
  return (
    <section
      id="cover"
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-14">
        <h1 className="text-center text-6xl font-bold">
          프론트엔드 개발자 이하현 입니다.
        </h1>
        <p className="mt-4 text-center text-3xl">
          IT기업에서 사용자 경험을 향상시키기 위해 노력한 경험이 있습니다.{" "}
          <br />
          소통과 협력의 가치를 깊이 인지하고 있습니다.
        </p>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/images/profile.jpg"
          fill
          sizes="100vw"
          className="object-cover"
          alt="profile"
        />
        <p className="absolute bottom-3 left-4 z-10 text-base text-gray-300">
          Last Update 2024.09.13
        </p>
      </div>
    </section>
  );
};

export default Cover;
