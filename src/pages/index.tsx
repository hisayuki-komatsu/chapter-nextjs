import { useRouter } from 'next/router'
// import components
import { Text } from '../components/commons/Text'
import { TestPrimaryButton } from '../components/commons/TestPrimaryButton'

const Home = () => {
  const router = useRouter()
  const onSubmit = () => router.push('/ssr')
  const reload = () => router.reload()

  return (
    <>
      <div>
        <span>Hello Hisa!!</span>
        <button onClick={onSubmit}>Go To SSR</button>
      </div>
      <div>
        <button onClick={reload}>reload</button>
        <Text />
      </div>
      <div>
        <TestPrimaryButton />
      </div>
    </>
  )
}

export default Home
