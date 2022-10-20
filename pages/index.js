import Head from 'next/head'
import Filter from '../components/Filter'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MadYlin&apos;s BLOG</title>
        <meta name="descr\iption" content="study" />
      </Head>
      <Filter></Filter>
      <div className="mx-52 flex flex-col justify-center p-3">
        <Content></Content>
        <Content></Content>
        <Content></Content>
      </div>
    </div>
  )
}
