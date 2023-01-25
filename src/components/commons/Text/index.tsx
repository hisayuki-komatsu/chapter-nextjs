import styled from 'styled-components'

export const Text = () => {
  return (
    <div>
      <P>Themeから参照した色を使用しています</P>
    </div>
  )
}

const P = styled.p`
  color: #3374ff;
  font-size: 14px;
  margin: 8px;
`
