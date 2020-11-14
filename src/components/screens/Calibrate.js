import React, { useState } from 'react';
import { Text } from 'react-native';
import Wrapper from '../utils/Wrapper';

const useMagnetometer = () => {
  const [value, setValue] = useState({});
  magnetometer.subscribe(values => {
    console.log(values);
    setValue(values);
  });
  return value;
};

export default function CalibrateScreen() {
  const value = useMagnetometer();
  return (
    <Wrapper>
      <Text>Calibrate Screen: {value}</Text>
    </Wrapper>
  );
}
