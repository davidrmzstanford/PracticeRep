import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout.js'
export default function Page() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/articles')
      const articles = await response.json()
      setArticles(articles)
    }
    fetchData()
  }, [])
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Web technologies articles
      </h1>
      <p className="italic font-bold">This page fetch data from the client side, not good for SEO.</p>
      <ul>
        {articles.map( article => (
          <li key={article.slug}>
            <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
            <p>{article.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}