import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'components'
import i18n from 'i18n'

export function Home() {
  return (
    <View style={styles.container}>
      <Text variant='subheader' testID='welcome'>
        {i18n.t('common.welcome')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
