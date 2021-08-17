import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationDarkTheme, NavigationDefaultTheme } from 'themes'

import { Root } from './navigators'

export const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <NavigationContainer theme={scheme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme}>
      <Root />
    </NavigationContainer>
  )
}
