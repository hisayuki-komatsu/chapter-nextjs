import { useEffect, useState } from 'react'

const Sayhello = () => {
  const [data, setDate] = useState({ name: '' })
  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setDate(profile)
      })
  }, [])

  return <div>hello {data.name}</div>
}

export default Sayhello
