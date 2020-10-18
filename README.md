# Location Guesser

This is a react-native project built using EXPO.
Packages used:
  - react-navigation
  - react-native-paper (for themeing)
  - react-redux
  - redux

## Installation

Install node.js v14
[See](https://tecadmin.net/install-nodejs-with-nvm/) for instructions (compatible with MacOS and Linux)
You might need npm and nvm to do this. Node14 can also be installed via download.

Run `npm install -g expo-cli`

For more info see [here](https://reactnative.dev/docs/environment-setup)

## Running Locally

Run `npm run start` or `npm run ios`

This then gives a bunch of options, you can run it in your own phone or use the XCode simulator (requires Xcode installation)

## Themes

In App.js it is now possible to edit the theme of react-native-paper components

You can also use the theme in other components. The hook useTheme (import from react-native-paper) allows acces to the theme and then you can access parts of the theme for different components there.