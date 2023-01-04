import { GetStaticProps, NextPage } from 'next'
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

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にこのページのgetStaticPropsが実行されました`

  return {
    props: {
      message,
    },
    revalidate: 60,
  }
}

export default ISR
