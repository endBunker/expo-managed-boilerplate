import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { Platform, useColorScheme } from 'react-native'
import { ThemeProvider } from '@shopify/restyle'
import { Provider, initializeStore, IRoot } from 'models'
import { Navigation } from 'navigation'
import { defaultTheme, darkTheme } from 'themes'

export default function App() {
  const [store, setStore] = useState<IRoot | undefined>(undefined)
  const scheme = useColorScheme()

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
        <ThemeProvider theme={scheme === 'light' ? defaultTheme : darkTheme}>
          <Navigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  )
}
