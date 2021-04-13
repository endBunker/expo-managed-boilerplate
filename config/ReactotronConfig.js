import Reactotron from 'reactotron-react-native'
import { mst } from 'reactotron-mst'

import { Root } from '../models'

Reactotron.configure().use(mst()).useReactNative().connect()

Reactotron.trackMstNode(Root)
