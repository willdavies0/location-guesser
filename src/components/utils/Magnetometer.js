import { useState, useEffect } from 'react';
import { Magnetometer } from 'expo-sensors';
import { calculateAngle, calculateDirection } from '../../utils';

const useMagnetometer = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
    angle: 0,
    direction: ''
  });
  const [subscription, setSubscription] = useState(null);
  const [interval, setInterval] = useState(500);

  useEffect(() => {
    if (subscription) _unsubscribe(subscription);
    else _subscribe();
    return () => _unsubscribe(subscription);
  }, []);

  const _subscribe = () => {
    // setSubscription(
    setSubscription(
      Magnetometer.addListener(({ x, y, z }) => {
        const angle = calculateAngle({ x, y, offset: true });
        setData({ x, y, z, angle, direction: calculateDirection(angle) });
      })
    );
  };

  const _unsubscribe = s => {
    Magnetometer.removeAllListeners();
    setSubscription(null);
  };

  const setMagnetometerInterval = variant => {
    let newInterval = variant === '+' ? interval / 2 : interval * 2;
    setInterval(newInterval);
    Magnetometer.setUpdateInterval(newInterval);
  };

  return [data, interval, setMagnetometerInterval];
};

export default useMagnetometer;
