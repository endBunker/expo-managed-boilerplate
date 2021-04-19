import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import { Provider, initializeStore, IRoot } from 'models'
import { Navigator } from 'navigators'

if (__DEV__) {
  require('./config/reactotron-config')
}

export default function App() {
  const [store, setStore] = useState<IRoot | undefined>(undefined)

  // Kick off initial async loading actions
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      setStore(await initializeStore())
    })()
  }, [])

  if (!store) return null
  return (
    <Provider value={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  )
}
