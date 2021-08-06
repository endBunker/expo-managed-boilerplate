import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { ThemeTypes } from 'themes'
import i18n from 'i18n'

export function Home() {
  const { colors } = useTheme<ThemeTypes>()

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.textPrimaryColor }} testID='welcome'>
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
