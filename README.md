# Expo Managed Workflow Boilerplate

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://github.com/expo/expo)

A simple expo managed workflow boilerplate

## Tech Stack

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Testing with [Jest](https://jestjs.io/) and [`jest-expo`](https://github.com/expo/expo/tree/master/packages/jest-expo)
- Screen Navigation with [React Navigation 5](https://reactnavigation.org/)
- State Management with [MobX](https://mobx.js.org/README.html), [`mobx-react-lite`](https://mobx.js.org/react-integration.html) and [MobX-State-Tree](https://mobx-state-tree.js.org/intro/welcome)
- Internationalization with [`i18n-js`](https://github.com/fnando/i18n-js)

## How to use

### Installation

```bash
yarn
# or
npm install
```

## File Structure

```markdown
expo-boilerplate
├── .expo
├── asset
├── components
├── config
├── constants
│── i18n
│── models
│── navigator
│── screens
│── services
│   ├── api
│   └── graphql
├── test
│   ├── __snapshots__
│   └── __mock__
│── theme
│── utils
├── README.md
├── App.tsx
├── .env
└── package.json
```
