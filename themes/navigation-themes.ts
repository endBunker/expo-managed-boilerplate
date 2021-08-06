import { defaultTheme, darkTheme } from './themes'

const NavigationDefaultTheme = {
  dark: false,
  colors: {
    primary: defaultTheme.colors.primary,
    background: defaultTheme.colors.mainBackground,
    card: defaultTheme.colors.cardPrimaryBackground,
    text: defaultTheme.colors.textPrimaryColor,
    border: defaultTheme.colors.border,
    notification: defaultTheme.colors.textError,
  },
}

const NavigationDarkTheme = {
  dark: true,
  colors: {
    primary: darkTheme.colors.primary,
    background: darkTheme.colors.mainBackground,
    card: darkTheme.colors.cardPrimaryBackground,
    text: darkTheme.colors.textPrimaryColor,
    border: darkTheme.colors.border,
    notification: darkTheme.colors.textError,
  },
}

export { NavigationDefaultTheme, NavigationDarkTheme }
