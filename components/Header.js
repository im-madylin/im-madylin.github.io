import Link from "next/link"
import { useRouter } from "next/router"
import TitleColor from "./TitleColor"

export default function Header() {
    const router = useRouter();
     
    return (
        <header className="flex justify-between items-center py-5 bg-gray-50">
            <div className="flex ml-10 cursor-pointer hover:scale-105">
                <Link href="/">
                    <a className="text-3xl font-bold text-gray-700">
                        <TitleColor>M</TitleColor>
                        ad
                        <TitleColor>Y</TitleColor>
                        lin's 
                        <TitleColor>BLOG</TitleColor>
                        🦋
                    </a>
                </Link>
            </div>
            <div className="flex flex-grow justify-evenly max-w-xs">
                <div className={`${router.pathname === '/about' ? 'text-blue-500' : 'text-gray-700'} flex items-center cursor-pointer hover:scale-105 font-bold`}>
                    <Link href="/about">
                        <a>About Me</a>
                    </Link>
                </div>
                <div className="flex items-center cursor-pointer hover:scale-105 font-bold text-gray-700">
                    <p>Search</p>
                </div>
            </div>
        </header>
    )
}