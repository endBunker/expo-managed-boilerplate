import { createContext, useContext } from 'react'
import { Root, IRoot } from './Root'

let _store: IRoot | null = null
if (_store && __DEV__) {
  const makeInspectable = require('mobx-devtools-mst')
  makeInspectable(_store)
}

export function initializeStore() {
  _store = Root.create({ test: '' })
  return _store
}

export function useStore(): IRoot {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}

const RootStoreContext = createContext<null | IRoot>(_store)
export const Provider = RootStoreContext.Provider
