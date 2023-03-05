import { examples } from '~/apis/Autogen/examples'
import { apiClient } from '~/apis/apiClient'
import { restMock } from '~/apis/mocks/restMock'

export const mockTodosPutById = restMock.put(
  apiClient.api.todos._id(':id'),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(examples.ToDo))
  },
)
