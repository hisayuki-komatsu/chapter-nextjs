import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Text } from '../components/commons/Text'
import { apiClient } from '~/apis/apiClient'
import { TestPrimaryButton } from '~/components/commons/TestPrimaryButton'

const Home = () => {
  const router = useRouter()
  const onSubmit = () => router.push('/ssr')
  const reload = () => router.reload()

  useEffect(() => {
    const getTodos = async () => {
      const todos = await apiClient.api.todos.$get()
      console.log(todos)
    }
    getTodos()
  }, [])

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
