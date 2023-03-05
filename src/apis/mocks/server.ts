import { setupServer } from 'msw/node'
import { mockHandlers } from '~/apis/mocks/handlers'

export const server = setupServer(...mockHandlers)
