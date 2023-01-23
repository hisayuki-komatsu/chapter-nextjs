import { ComponentMeta, Story } from '@storybook/react'
import { StyledButton, Props } from './index'

export default {
  // グループ名
  title: 'StyledButton',

  // 使用するコンポーネント
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary: Story<Props> = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Primary
    </StyledButton>
  )
}

export const Transparent: Story<Props> = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}
