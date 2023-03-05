import { examples } from '~/apis/Autogen/examples'
import { apiClient } from '~/apis/apiClient'
import { restMock } from '~/apis/mocks/restMock'

export const mockTodosGetById = restMock.get(
  apiClient.api.todos._id(':id'),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(examples.ToDo))
  },
)
