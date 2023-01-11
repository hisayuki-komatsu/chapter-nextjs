// Container Component
import { useCallback, useState } from 'react'
import { Button } from './button'

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text)
  }, [])

  return cb
}

type Props = {
  label: string
  maximum: number
}

export const ButtonContainer = ({ label, maximum }: Props) => {
  // アラートを表示させるためのフック
  const displayPopup = usePopup()
  const [count, setCount] = useState(0)

  const onClick = useCallback(() => {
    const newCount = count + 1
    setCount(newCount)

    if (newCount >= maximum) {
      displayPopup(`You've clicked ${newCount} times`)
    }
  }, [count, maximum])

  const disabled = count >= maximum
  const text = disabled
    ? "Can't click any more"
    : `You've clicked ${count} times`

  return (
    <Button disabled={disabled} onClick={onClick} label={label} text={text} />
  )
}
