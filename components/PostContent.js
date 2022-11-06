import markdownStyles from './markdown-style.module.css'

export default function PostContent({ content }) {
  return (
    <div className="text-left">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
