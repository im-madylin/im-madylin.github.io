import Head from 'next/head'
import Filter from '../components/Filter'
import PostList from '../components/PostList'
import { getAllPosts } from './api/post'

export default function Home({ allPosts }) {
  return (
    <div>
      <Head>
        <title>MadYlin&apos;s BLOG</title>
        <meta name="description" content="study" />
      </Head>
      <Filter></Filter>
      <PostList posts={allPosts} />
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'data',
    'slug',
    'coverImage',
    'excerpt',
    'tag',
  ])
  return {
    props: { allPosts },
  }
}
