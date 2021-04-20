import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from 'screens'

import { RootStackParams } from './types'

const RootStack = createStackNavigator<RootStackParams>()

export const Root = () => {
  const { Navigator, Screen } = RootStack

  return (
    <Navigator>
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}

export default Root
