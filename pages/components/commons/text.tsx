import styled from 'styled-components'

export const Text = () => {
  return (
    <div>
      <P>Themeから参照した色を使用しています</P>
    </div>
  )
}

const P = styled.p`
  /* themeから値を参照してスタイルを適用 */
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`
