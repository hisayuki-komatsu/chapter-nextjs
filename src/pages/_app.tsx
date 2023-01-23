import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
// import styles
import '../styles/globals.css'
import { theme } from '../../styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App