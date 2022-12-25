import { NextPage } from 'next'
import Head from 'next/head'

type Props = {}

const SSG: NextPage<Props> = () => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
      </main>
    </div>
  )
}

export default SSG
