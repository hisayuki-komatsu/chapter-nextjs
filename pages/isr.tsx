import { NextPage } from 'next'
import Head from 'next/head'

type Props = {
  message: string
}

const ISR: NextPage<Props> = ({ message }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
        <p>{message}</p>
      </main>
    </div>
  )
}
