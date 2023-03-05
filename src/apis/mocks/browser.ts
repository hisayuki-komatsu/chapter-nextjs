import { setupWorker } from 'msw'
import { mockHandlers } from '~/apis/mocks/handlers'

export const worker = setupWorker(...mockHandlers)
