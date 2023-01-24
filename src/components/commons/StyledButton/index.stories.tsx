import { ComponentMeta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import components
import { StyledButton, Props } from './index'
import React, { useState } from 'react'

export default {
  // グループ名
  title: 'StyledButton',
  // 使用するコンポーネント
  component: StyledButton,
  // onClickが呼ばれたときにclickedというアクションを出力する
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledButton>

// incrementという名前でactionを出力するための関数をつくる
const incrementAction = action('increment')

export const Primary: Story<Props> = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    // 現在のカウントを渡して、Actionを呼ぶ
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="success" onClick={onClick}>
      Count: {count}
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
