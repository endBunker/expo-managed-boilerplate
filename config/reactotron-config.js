import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { mst } from 'reactotron-mst'

Reactotron.configure().use(mst()).use(asyncStorage()).useReactNative().connect()

export const Mst = (store) => Reactotron.trackMstNode(store)
