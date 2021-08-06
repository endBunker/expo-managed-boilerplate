import { createTheme } from '@shopify/restyle'

const palette = {
  redLight: '#FC5C65',
  redPrimary: '#FF453A',

  greyLight: '#DCDCDC',
  greyPrimary: '#C7C7CC',
  greyDark: '#898989',

  whiteSmoke: '#F2F2F2',

  black: '#1C1C1E',
  white: '#FFFFFF',
}

export const defaultTheme = createTheme({
  colors: {
    primary: palette.redLight,

    mainBackground: palette.whiteSmoke,
    cardPrimaryBackground: palette.white,

    border: palette.greyPrimary,

    buttonPrimaryBackground: palette.redLight,
    buttonInactiveBackground: palette.greyPrimary,

    inputPrimaryBackground: palette.greyPrimary,

    textPrimaryColor: palette.black,
    textButtonColor: palette.white,
    textInputColor: palette.greyDark,
    textError: palette.redPrimary,

    iconInputColor: palette.greyDark,
    iconLightColor: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
})

export const darkTheme: ThemeTypes = {
  ...defaultTheme,
}

export type ColorsK = keyof typeof defaultTheme.colors
export type SpacingK = keyof typeof defaultTheme.spacing
export type BreakpointsK = keyof typeof defaultTheme.breakpoints
export type ThemeTypes = typeof defaultTheme
export default defaultTheme
