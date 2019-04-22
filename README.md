[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

# 🎣 @kevinwolf/expo-enable-hooks

Easily enable hooks on an Expo project.

## The problem

Expo does not support React Native >= 0.59.0 yet (the one with hooks enabled), so if you want to `useState`, `useEffect` or any hook, you will receive an error.

## This solution

This package patches the `node_modules/react-native/Libraries/Renderer` folder, adding support for hooks following [this workflow](https://github.com/facebook/react-native/issues/21967#issuecomment-434113687).

## Installation

This package is distributed via NPM. Install it as a development dependency on your project.

```sh
yarn add -D @kevinwolf/expo-enable-hooks
```

> **IMPORTANT**: Make sure you have installed `react@>=16.8.0` to use React Hooks.

## Usage

Just add the binary of this package as a `postinstall` hook on your `package.json`

```json
{
  "scripts": {
    "postinstall": "expo-enable-hooks"
  }
}
```

[version-badge]: https://img.shields.io/npm/v/@kevinwolf/expo-enable-hooks.svg?style=flat-square
[package]: https://www.npmjs.com/package/@kevinwolf/expo-enable-hooks
[downloads-badge]: https://img.shields.io/npm/dm/@kevinwolf/expo-enable-hooks.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@kevinwolf/expo-enable-hooks
[license-badge]: https://img.shields.io/npm/l/@kevinwolf/expo-enable-hooks.svg?style=flat-square
[license]: https://github.com/kevinwolfcr/expo-enable-hooks/blob/master/LICENSE
