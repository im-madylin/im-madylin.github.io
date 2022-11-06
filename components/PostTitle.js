import Link from 'next/link'

export default function PostTitle({ title, coverImage, date, tag }) {
  return (
    <div className="mt-16 mb-8 inline-block">
      <h1 className="text-left text-4xl font-semibold ">{title}</h1>
      <div className="mt-3 flex text-left text-gray-500">
        <p className="">{date} | &nbsp;</p>
        {tag.map((t) => {
          return (
            <Link key={t} href="/">
              <a>{t} &nbsp;</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
