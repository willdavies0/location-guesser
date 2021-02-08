import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Text } from 'react-native';
import * as C from '../../constants';
import { CenterWrapper, useSetupLocationServices } from '../utils/';

export default function HomeScreen(props) {
  const calibrated = useSelector(store => store.calibrated);
  const locationError = useSetupLocationServices();

  const play = () => {
    let newScreen = C.SCREENS.PLAY;
    if (!calibrated) newScreen = C.SCREENS.CALIBRATE;
    props.navigation.navigate(newScreen);
  };

  return (
    <CenterWrapper>
      <Button title="play" onPress={() => play()} />
      <Text>{locationError}</Text>
    </CenterWrapper>
  );
}
