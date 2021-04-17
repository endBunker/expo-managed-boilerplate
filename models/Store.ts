import { createContext, useContext } from 'react'
import { onSnapshot } from 'mobx-state-tree'
import { Root, IRoot } from './Root'
import { load, save } from '../utils/storage'

let store: IRoot | null = null

const ROOT_STATE_STORAGE_KEY = 'toDoApp'
const initialState = { test: '' }

export async function initializeStore() {
  const storage = await load(ROOT_STATE_STORAGE_KEY)
  if (storage && Root.is(storage)) store = Root.create(storage)
  else store = Root.create(initialState)

  if (__DEV__) {
    const { Mst } = require('../config/ReactotronConfig')
    Mst(store)
  }

  onSnapshot(store, async (snapshot) => {
    await save(ROOT_STATE_STORAGE_KEY, snapshot)
  })

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
