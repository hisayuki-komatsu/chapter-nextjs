import { examples } from '~/apis/Autogen/examples'
import { apiClient } from '~/apis/apiClient'
import { restMock } from '~/apis/mocks/restMock'

export const mockTodosDeleteById = restMock.delete(
  apiClient.api.todos._id(':id'),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(examples.ToDo))
  },
)
