import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default function CenterWrapper(props) {
  return <View style={styles.container}>{props.children}</View>;
}
