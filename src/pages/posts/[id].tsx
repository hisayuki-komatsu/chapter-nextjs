// getStaticPathsを使用した複数ページのSSG
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
// import hooks
import { useRouter } from 'next/router'

type Props = {
  id: string
}

const Post: NextPage<Props> = ({ id }) => {
  const router = useRouter()

  if (router.isFallback) {
    // fallbackページ向けの表示を返す
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  )
}

// getStaticPathsは生成したいページのパスパラメータの組み合わせを返す
// このファイルはpages/posts/[id].tsxなので、path parameterとしてidの値を返す必要がある
export const getStaticPaths: GetStaticPaths = async () => {
  // それぞれのページのパスパラメータをまとめたもの
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]

  // fallbackをfalseにすると、pathsで定義されたページ以外は404ページを表示する
  return { paths, fallback: false }
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

// getStaticPaths実行時にそれぞれのpathに対してgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<Props, PostParams> = async (
  context,
) => {
  return {
    props: {
      // paramsにgetStaticPathsで指定した値がそれぞれ入っている
      id: context.params!['id'],
    },
  }
}

export default Post
