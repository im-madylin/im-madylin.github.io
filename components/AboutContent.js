import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export default function AboutContent() {
  return (
    <div className="mx-10 mb-10 flex justify-center space-x-10">
      <div className="">
        <div className="inline-flex border-8 border-blue-500 p-2">
          <Image
            src="/about_me.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-gray-700">
          <div className="mt-8 flex flex-row">
            <RiDoubleQuotesL />
            <p className="font-bold">
              어떠한 위대한 일도 하루 아침에 이루어지지 않는다.
            </p>
            <RiDoubleQuotesR />
          </div>
          <p>- Epictetus -</p>
        </div>
        <div className="mt-5 flex justify-center space-x-3">
          <a
            href="https://github.com/im-madylin"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-4xl"
          >
            <BsGithub />
          </a>
          <a href="mailto:im.madylin@gmail.com">
            <AiFillMail className="cursor-pointer text-4xl" />
          </a>
        </div>
      </div>
      <div className="mr-5 mt-14 flex flex-col text-gray-700">
        <div className="mb-2 flex flex-col space-y-10">
          <div className="text-2xl font-bold">Hello! I am Madylin😊</div>
          <div className="text-lg text-gray-700">
            개발자로 성장하기 위해 한 계단씩 올라가는 중 입니다.
            <br /> 함께 일하고 싶은 동료, 소통하는 동료가 되겠습니다.
          </div>
          <div className="text-gray-700">
            elice SW engineer track - 2021.10 ~ 2022.02
            <br />
            42 Seoul cadet - 2022.07 ~ ing
          </div>
        </div>
        {/* <span className="text-xl font-extrabold">
          {tags.map((content) => `#${content.title}`).join(', ')}
        </span> */}
      </div>
    </div>
  )
}
