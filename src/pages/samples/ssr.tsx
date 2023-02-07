import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  message: string
}

const SSR: NextPage<Props> = ({ message }) => {
  const router = useRouter()
  const onBack = () => router.back()

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
        <button onClick={onBack}>Go Back</button>
      </main>
    </div>
  )
}

// getServerSidePropsはページへのリクエストがある度に実行される
export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にこのページのgetServerSideProprsが実行されました`
  console.log(message)

  return {
    props: {
      message,
    },
  }
}

export default SSR
