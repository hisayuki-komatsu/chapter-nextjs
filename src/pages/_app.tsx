import type { AppProps } from 'next/app'
import { env } from '~/constants/env'

const prepare = () => {
  if (
    process.env.NODE_ENV === 'development' &&
    env.NEXT_PUBLIC_MOCK_API_ENABLED
  ) {
    require('../api/mocks/worker')
  }

  return Promise.resolve()
}

const App = ({ Component, pageProps }: AppProps) => {
  let isReady = false
  prepare().then(() => (isReady = true))
  return <Component {...pageProps} />
}

export default App
