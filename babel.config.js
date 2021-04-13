module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.ios.jsx',
            '.ios.ts',
            '.ios.tsx',
            '.android.js',
            '.android.jsx',
            '.android.ts',
            '.android.tsx',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
          ],
          root: ['./'],
          alias: {
            tests: ['./test/'],
            '@components': './components',
            '@navigation': './navigators',
            '@screens': './screens',
            i18n: 'i18n',
            '@models': './models',
            '@hooks': './hooks',
          },
        },
      ],
    ],
  }
}
