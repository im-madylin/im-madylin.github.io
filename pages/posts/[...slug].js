import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostTitle from '../../components/PostTitle'
import PostContent from '../../components/PostContent'
import { getPostBySlug, getAllPosts } from '../api/post'
import markdownToHtml from '../api/markdownToHtml'
import Spinner from '../../components/Spinner'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-screen bg-gray-50">
          <div className="m-auto max-w-screen-lg text-left">
            <Head>
              <title>{post.title}</title>
            </Head>
            <PostTitle
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tag={post.tag}
            />
            <PostContent content={post.content} />
          </div>
        </div>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tag',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split('/'),
        },
      }
    }),
    fallback: false,
  }
}
