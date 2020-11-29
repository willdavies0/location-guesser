import React, { useEffect, useState } from 'react';
import { Magnetometer } from 'expo-sensors';
import { Text, TouchableOpacity } from 'react-native';
import CenterWrapper from '../utils/CenterWrapper';
import { round, calculateAngle, calculateDirection } from '../../utils';

const useMagnetometer = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0
  });
  const [subscription, setSubscription] = useState(null);
  const [interval, setInterval] = useState(500);

  useEffect(() => {
    if (subscription) _unsubscribe();
    else _subscribe();
    return () => _unsubscribe();
  }, []);

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener(({ x, y, z }) => {
        setData({ x, y, z, angle: calculateAngle({ x, y, offset: true }) });
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const setMagnetometerInterval = variant => {
    let newInterval = variant === '+' ? interval / 2 : interval * 2;
    setInterval(newInterval);
    Magnetometer.setUpdateInterval(newInterval);
  };

  return [data, interval, setMagnetometerInterval];
};

export default function CalibrateScreen() {
  const [data, interval, setMagnetometerInterval] = useMagnetometer();

  const pressables = [
    { text: 'Faster', variant: '+' },
    { text: 'Slower', variant: '-' }
  ];
  return (
    <CenterWrapper>
      <Text>Current Interval: {interval}ms</Text>
      {Object.keys(data).map((coord, i) => (
        <Text key={i}>
          {coord}: {round(data[coord])}
        </Text>
      ))}
      <Text>Direction: {calculateDirection(data.angle, true)}</Text>
      {pressables.map((p, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setMagnetometerInterval(p.variant)}
        >
          <Text>{p.text}</Text>
        </TouchableOpacity>
      ))}
    </CenterWrapper>
  );
}
