import React from 'react';
import { Provider, DefaultTheme } from 'react-native-paper';
import Root from './src/index';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#099c09',
    background: '#6d706d'
  }
};

export default function App() {
  return (
    <Provider theme={theme}>
      <Root />
    </Provider>
  );
}
