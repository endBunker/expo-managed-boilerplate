import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type RootStackParams = {
  Home: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<RootStack, 'Home'>
export type HomeScreenRouteProp = RouteProp<RootStack, 'Home'>
export type HomeScreenProps = StackScreenProps<RootStack, 'Home'>
