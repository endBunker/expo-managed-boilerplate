import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationDarkTheme, NavigationDefaultTheme, defaultTheme, darkTheme } from 'themes'
import { ThemeProvider } from '@shopify/restyle'

import { Root } from './navigators'

export const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <ThemeProvider theme={scheme === 'light' ? defaultTheme : darkTheme}>
      <NavigationContainer theme={scheme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme}>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  )
}
