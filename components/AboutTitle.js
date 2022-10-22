import TitleColor from './TitleColor'

export default function AboutTitle() {
  return (
    <div className="m-10 flex flex-col items-center">
      <span className="text-3xl font-bold text-gray-700">
        About
        <TitleColor> Me</TitleColor>
      </span>
      <span className="text-lg text-gray-700">
        안녕하세요. 개발자 이하현 입니다😄
      </span>
    </div>
  )
}
