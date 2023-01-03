import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type Props = {
  message: string
}

const SSR: NextPage<Props> = ({ message }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.icon"></link>
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}
