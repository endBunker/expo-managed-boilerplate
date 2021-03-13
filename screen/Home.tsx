import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

import i18n from '../i18n'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t('common.welcome')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: tailwind('flex-1 bg-white items-center justify-center'),
  text: tailwind('text-lg font-light')
})
