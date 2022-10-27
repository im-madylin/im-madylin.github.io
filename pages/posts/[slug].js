import useRouter from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostTitle from '../../components/PostTitle'
import PostContent from '../../components/PostContent'
import { getPostBySlug, getAllPosts } from '../api/post'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post.slug) return <ErrorPage statusCode={404} />
  return (
    // {router.isFallback ? (<PostTitle>Loading..</PostTitle>) : }
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostTitle
        title={post.title}
        coverImage={post.coverImage}
        data={post.data}
        tag={post.tag}
      />
      <PostContent content={post.content} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'data',
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
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
