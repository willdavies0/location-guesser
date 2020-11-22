import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-native';
import * as C from '../../constants';
import CenterWrapper from '../utils/CenterWrapper';

export default function HomeScreen(props) {
  const calibrated = useSelector(store => store.calibrated);

  const play = () => {
    let newScreen = C.SCREENS.PLAY;
    if (!calibrated) newScreen = C.SCREENS.CALIBRATE;
    props.navigation.navigate(newScreen);
  };

  return (
    <CenterWrapper>
      <Button title="play" onPress={() => play()} />
    </CenterWrapper>
  );
}
