import { mockTodosById } from '~/apis/mocks/v1/todos/[:id]'
import { mockTodosGet } from '~/apis/mocks/v1/todos/get'
import { mockTodosPost } from '~/apis/mocks/v1/todos/post'

export const mockTodos = [mockTodosGet, mockTodosPost, ...mockTodosById]
