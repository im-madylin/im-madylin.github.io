import PostPreview from './PostPreview'

export default function PostList({ posts }) {
  return (
    <div className="m-auto flex max-w-screen-lg flex-col justify-center p-3">
      {posts.map((post) => {
        return (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            tag={post.tag}
          />
        )
      })}
    </div>
  )
}
