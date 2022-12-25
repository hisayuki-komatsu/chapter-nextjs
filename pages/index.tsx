import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return <div className={styles.container}>Hello Hisa!!</div>
}

export default Home
