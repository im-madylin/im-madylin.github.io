import Image from 'next/image'
import ItsMe from '/public/about_me.jpg'

export default function AboutContent() {
  return (
    <div className="mx-10 flex items-center justify-center space-x-24">
      <div className="border-8 border-blue-500 p-3">
        <Image
          src={ItsMe}
          width={400}
          height={400}
          alt="Picture of the author"
        ></Image>
      </div>
      <div className="flex flex-col text-gray-700">
        <span className="text-2xl font-bold">Hello! I am madylin.</span>
        <span>
          이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵
        </span>
        <span>
          이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵
        </span>
        <span>
          이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵
        </span>
      </div>
    </div>
  )
}
