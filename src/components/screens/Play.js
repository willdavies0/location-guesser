import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {
  CenterWrapper,
  Compass,
  useMagnetometer,
  useLocationServices
} from '../utils/';

const styles = StyleSheet.create({
  compassContainer: {
    flex: 1
  }
});

export default function PlayScreen(props) {
  const location = useLocationServices();
  const [data] = useMagnetometer();

  return (
    <CenterWrapper>
      <Text>
        Location Data: {location ? JSON.stringify(location) : 'Waiting...'}
      </Text>
      <View style={styles.compassContainer}>
        <Compass angle={data.angle} />
      </View>
    </CenterWrapper>
  );
}
