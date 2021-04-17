import { createContext, useContext } from 'react'
import { Root, IRoot } from './Root'

let store: IRoot | null = null

export function initializeStore() {
  store = Root.create({ test: '' })
  if (__DEV__) {
    const { Mst } = require('../config/ReactotronConfig')
    Mst(store)
  }
  return store
}

export function useStore(): IRoot {
  const _store = useContext(RootStoreContext)
  if (_store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return _store
}

const RootStoreContext = createContext<null | IRoot>(store)
export const Provider = RootStoreContext.Provider
