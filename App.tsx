import 'react-native-gesture-handler'
import * as React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import { Provider, initializeStore } from 'models'
import { Navigator } from './navigator'

if (__DEV__) {
  require('./config/ReactotronConfig')
}

export default function App() {
  const store = initializeStore()

  return (
    <Provider value={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  )
}
