import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { useContext } from 'react';
import UserContext from '../components/UserContext'

export default function Page() {
  const {profile} = useContext(UserContext)
  return (
    <Layout
      title=""
      description="Generated by create next app"
      >
      {profile && (
        <div>
          {profile.username},
        </div>
      )}
      <h1 className='wt-title'>
        Welcome to <a href="https://www.adaltas.com">web technologies!</a>
      </h1>

      <ul>
        <li>
          <Link href="/articles">
            View our articles
          </Link>
        </li>
        <li>
          <Link href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
      </ul>
    </Layout>
  )
}