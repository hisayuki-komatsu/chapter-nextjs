import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Header } from '.'

export default {
  component: Header,
} as ComponentMeta<typeof Header>

export const LoggedIn: ComponentStoryObj<typeof Header> = {
  args: { user: { name: 'Jane Doe' } },
}

export const LoggedOut: ComponentStoryObj<typeof Header> = {
  args: {},
}
