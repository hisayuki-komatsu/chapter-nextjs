const initMocks = () => {
  if (typeof window === 'undefined') return

  const { worker } = require('./browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

initMocks()

export {}
