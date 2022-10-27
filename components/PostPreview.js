import Link from 'next/link'

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
      <div className="flex flex-col">
        {/* <div>{tag}</div> */}
        <div className="">
          <Link as={`posts/${slug}`} href="/posts/[slug]">
            <a className="text-2xl font-semibold text-gray-700">{title}</a>
          </Link>
        </div>
        <div>
          <Link as={`posts/${slug}`} href="/posts/[slug]">
            <a>{excerpt}</a>
          </Link>
        </div>
        <div>{date}</div>
      </div>
      <div>
        {/* <image src="/sample.png" width={300} height={300}></image> */}
        {/* <Link as={`posts/${slug}`} href="/posts/[slug]">
          <image src={coverImage} alt={`Cover Image for ${title}`}></image>
        </Link> */}
      </div>
      {/* </Link> */}
    </div>
  )
}
