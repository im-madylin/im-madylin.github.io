import TitleColor from './TitleColor'

export default function AboutTitle() {
  return (
    <div className="m-10 flex flex-col items-center">
      <span className="text-3xl font-bold text-gray-700">
        About
        <TitleColor> Me</TitleColor>
      </span>
      <span className=" text-gray-700">Let me introduce my self</span>
    </div>
  )
}
