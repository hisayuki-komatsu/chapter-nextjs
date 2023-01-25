import styled from 'styled-components'

type Props = {
  onClick?: () => void
}

export const TestPrimaryButton = ({ onClick }: Props) => {
  const TEXT = 'Accept'

  return (
    <div>
      <Button onClick={onClick}>{TEXT}</Button>
    </div>
  )
}

const Button = styled.button`
  border-radius: 8px;
  padding: 8px;
  background-color: #3376ff;
  color: #ffffff;
`
