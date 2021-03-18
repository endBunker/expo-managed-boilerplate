import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import i18n from '../../i18n'

export function Home() {
  return (
    <View style={styles.container}>
      <Text testID='welcome'>{i18n.t('common.welcome')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
})
