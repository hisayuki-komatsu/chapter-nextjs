type LocalStorageMockFunction = {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string | null) => void
  clear: () => void
}

export const localStorageMock = ((): LocalStorageMockFunction => {
  let store: Record<string, string | null> = {}

  const getItem: LocalStorageMockFunction['getItem'] = (key) =>
    store[key] || null

  const setItem: LocalStorageMockFunction['setItem'] = (key, value) =>
    (store[key] = value)

  const clear: LocalStorageMockFunction['clear'] = () => (store = {})

  return {
    getItem,
    setItem,
    clear,
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})
