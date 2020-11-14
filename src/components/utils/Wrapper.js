import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default function Wrapper(props) {
  return <View style={styles.container}>{props.children}</View>;
}
