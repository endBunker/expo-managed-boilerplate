import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type RootStackParams = {
  Home: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>
export type HomeScreenRouteProp = RouteProp<RootStackParams, 'Home'>
export type HomeScreenProps = StackScreenProps<RootStackParams, 'Home'>
