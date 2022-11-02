import Link from 'next/link'
import Image from 'next/image'
import Tag from './Tag'

export default function PostPreview({
  title,
  coverImage,
  date,
  slug,
  excerpt,
  tag,
}) {
  return (
    <div className="mb-5 flex h-72 rounded-2xl bg-gray-50 p-5 shadow duration-75 ease-in hover:scale-[1.01] hover:shadow-lg">
      <div className="m-3 flex flex-col ">
        <div className="flex space-x-3">
          {tag.map((t) => {
            return <Tag key={slug}>{t}</Tag>
          })}
        </div>
        <div className="my-3">
          <Link as={`posts/${slug}`} href="/posts/[slug]">
            <a className="text-2xl font-semibold text-gray-700">{title}</a>
          </Link>
        </div>
        <div className="leading-7">
          <Link as={`posts/${slug}`} href="/posts/[slug]">
            <a className="block overflow-hidden text-ellipsis whitespace-normal text-lg text-gray-700">
              {excerpt}
            </a>
          </Link>
        </div>
        <div className="my-3 text-sm text-gray-500">{date}</div>
      </div>
      <div className="mt-8 mr-6 ml-6 h-48 shadow">
        <Image
          src="/sample.jpg"
          width={560}
          height={560}
          alt="Picture of post"
          className="rounded-lg"
        ></Image>
        {/* <Link as={`posts/${slug}`} href="/posts/[slug]">
          <image src={coverImage} alt={`Cover Image for ${title}`}></image>
        </Link> */}
      </div>
      {/* </Link> */}
    </div>
  )
}
