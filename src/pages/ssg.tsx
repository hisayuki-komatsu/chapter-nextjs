import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type Props = { message: string }

const SSG: NextPage<Props> = ({ message }) => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

// getStaticPropsはビルド時に実行される
// getStaticPropsはexportする必要があり、asyncと共に定義する必要がある
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const dateString = new Date().toLocaleTimeString()
  const message = `${dateString}にgetStaticPropsが実行されました`
  console.log(message)
  return {
    props: { message },
  }
}

export default SSG
