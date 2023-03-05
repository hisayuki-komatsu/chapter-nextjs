import { envsafe, url, str, bool } from 'envsafe'

export const env = envsafe({
  NEXT_PUBLIC_API_BASE_URL: url({
    input: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  NEXT_PUBLIC_MOCK_API_ENABLED: bool({
    input: process.env.NEXT_PUBLIC_MOCK_API_ENABLED,
    devDefault: true,
  }),
  NODE_ENV: str({
    devDefault: 'development',
    choices: ['development', 'test', 'production'],
  }),
})
