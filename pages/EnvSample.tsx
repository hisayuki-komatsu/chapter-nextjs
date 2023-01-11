import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  console.log('process.env.TEST', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* サーバーサイド描画時は'test1'と表示され、クライアントサイドで際描画されると何も表示されない */}
        <p>{process.env.TEST}</p>
        {/* test2が表示される */}
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

// getStaticPropsは常にサーバーサイドで実行されるので、全ての環境変数を参照できる
export const getStaticProps: GetStaticProps = async (context) => {
  console.log('process.env.TEST', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return {
    props: {},
  }
}

export default EnvSample
