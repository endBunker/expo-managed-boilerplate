import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { DefaultTheme, DarkTheme } from 'themes'

import { Root } from './navigators'

export const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Root />
    </NavigationContainer>
  )
}
