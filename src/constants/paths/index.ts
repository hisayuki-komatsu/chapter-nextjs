export const PATHS = {
  signIn: () => '/users/sign_in' as const,
  home: () => '/home' as const,
  todoDetail: (id: number) => `/todos/${id}` as const,
  google: () => 'https://google.com',
} as const
