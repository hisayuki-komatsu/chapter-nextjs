import { render } from '@testing-library/react'
import { TestPrimaryButton } from './index'
import '@testing-library/jest-dom'

it('Button click events should fire correctly.', () => {
  const { container } = render(<TestPrimaryButton />)

  expect(container).toMatchSnapshot()
})
