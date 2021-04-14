import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from 'screens'

type RootStack = {
  Home: undefined
}

export const Root = () => {
  const Stack = createStackNavigator<RootStack>()

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default Root
