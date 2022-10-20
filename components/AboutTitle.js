import TitleColor from "./TitleColor"

export default function AboutTitle() {
    return (
        <div className="flex flex-col items-center m-10">
            <span className="text-3xl font-bold text-gray-700">
                About
                <TitleColor> Me</TitleColor>
            </span>
            <span className="text-gray-700">Let's me introduce my self</span>
        </div>
    )
}