import Link from 'next/link'
import { useRouter } from 'next/router'
import TitleColor from './TitleColor'
import { BiSearchAlt2 } from 'react-icons/bi'

export default function Header() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between bg-gray-50 py-5">
      <div className="ml-10 flex cursor-pointer hover:scale-105">
        <Link href="/">
          <a className="text-3xl font-bold text-gray-700">
            <TitleColor>M</TitleColor>
            ad
            <TitleColor>Y</TitleColor>
            lin&apos;s
            <TitleColor> BLOG</TitleColor>
            🦋
          </a>
        </Link>
      </div>
      <div className="mr-10 flex max-w-xs space-x-8">
        <div
          className={`${
            router.pathname === '/about' ? 'text-blue-500' : 'text-gray-700'
          } flex cursor-pointer items-center font-bold hover:scale-110`}
        >
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </div>
        <BiSearchAlt2 className="cursor-pointer text-2xl hover:scale-110" />
      </div>
    </header>
  )
}
