export const pagesPath = {
  posts: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/posts/[id]' as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
  },
  samples: {
    EnvSample: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/EnvSample' as const,
        hash: url?.hash,
      }),
    },
    about: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/about' as const,
        hash: url?.hash,
      }),
    },
    image_sample: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/image-sample' as const,
        hash: url?.hash,
      }),
    },
    isr: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/isr' as const,
        hash: url?.hash,
      }),
    },
    page: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/page' as const,
        hash: url?.hash,
      }),
    },
    sayhello: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/sayhello' as const,
        hash: url?.hash,
      }),
    },
    ssg: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/ssg' as const,
        hash: url?.hash,
      }),
    },
    ssr: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/samples/ssr' as const,
        hash: url?.hash,
      }),
    },
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
}

export type PagesPath = typeof pagesPath
