import React, { useEffect, useState } from 'react';
import { Magnetometer } from 'expo-sensors';
import { Asset } from 'expo-asset';
import CenterWrapper from '../utils/CenterWrapper';
import { round, calculateAngle, calculateDirection } from '../../utils';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  rotatingContainer: {
    flex: 1,
    alignSelf: 'center'
  }
});

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
  const uri = Asset.fromModule(require('../../assets/images/compass.jpg')).uri;
  const [imgWidth, setImgWidth] = useState(100);
  const [imgHeight, setImgHeight] = useState(100);
  const [data, interval, setMagnetometerInterval] = useMagnetometer();
  const imgRef = React.useRef();

  const pressables = [
    { text: 'Faster', variant: '+' },
    { text: 'Slower', variant: '-' }
  ];

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setImgWidth(Dimensions.get('window').width);
      const aspectRatio = width / height;
      setImgHeight(Dimensions.get('window').width / aspectRatio);
    });

    return () => {};
  }, []);

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
        <Image
          ref={imgRef}
          source={require('../../assets/images/compass.jpg')}
          style={{
            width: imgWidth,
            height: imgHeight,
            resizeMode: 'center',
            transform: [{ rotate: 360 - data.angle + 'deg' }]
          }}
        />
      </View>
    </CenterWrapper>
  );
}
