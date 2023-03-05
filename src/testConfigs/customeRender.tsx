// 参考: https://testing-library.com/docs/react-testing-library/setup/#custom-render
import {
  RenderOptions,
  RenderResult,
  render as render,
} from '@testing-library/react'
import { ReactNode, ReactElement } from 'react'
import { SWRConfig } from 'swr'

type Props = {
  children: ReactNode
}

const TestProvider: React.FC<Props> = ({ children }) => {
  return <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: TestProvider, ...options })

// eslint-disable-next-line import/export
export * from '@testing-library/react'

// eslint-disable-next-line import/export
export { customRender as render }
