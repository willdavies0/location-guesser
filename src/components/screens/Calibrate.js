import React from 'react';
import { round, calculateDirection } from '../../utils';
import { useMagnetometer, Compass, CenterWrapper } from '../utils/';

import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rotatingContainer: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default function CalibrateScreen() {
  const [data, interval, setMagnetometerInterval] = useMagnetometer();

  const pressables = [
    { text: 'Faster', variant: '+' },
    { text: 'Slower', variant: '-' }
  ];

  return (
    <CenterWrapper>
      <Text>Current Interval: {interval}ms</Text>
      <Text>Angle: {round(data.angle)}</Text>
      <Text>Direction: {calculateDirection(data.angle, true)}</Text>
      {pressables.map((p, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setMagnetometerInterval(p.variant)}
        >
          <Text>{p.text}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.rotatingContainer}>
        <Compass angle={data.angle} />
      </View>
    </CenterWrapper>
  );
}
