import { mockTodosDeleteById } from '~/apis/mocks/v1/todos/[:id]/delete'
import { mockTodosGetById } from '~/apis/mocks/v1/todos/[:id]/get'
import { mockTodosPutById } from '~/apis/mocks/v1/todos/[:id]/put'

export const mockTodosById = [
  mockTodosDeleteById,
  mockTodosGetById,
  mockTodosPutById,
]
