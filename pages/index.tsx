import { useRouter } from 'next/router'
// import styles
import styles from '../styles/Home.module.css'
// import components
import { Text } from './components/commons/text'

const Home = () => {
  const router = useRouter()
  const onSubmit = () => router.push('/ssr')
  const reload = () => router.reload()

  return (
    <>
      <div className={styles.container}>
        <span>Hello Hisa!!</span>
        <button onClick={onSubmit}>Go To SSR</button>
      </div>
      <div>
        <button onClick={reload}>reload</button>
        <Text />
      </div>
    </>
  )
}

export default Home
