import React, { useEffect, useState, useCallback } from 'react';
import { round } from '../../utils';
import { useMagnetometer, Compass, CenterWrapper } from '../utils/';
import * as C from '../../constants';

import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const rotatingContainer = correct => {
  let styles = { flex: 1, borderWidth: 10 };
  if (correct) styles.borderColor = 'green';
  else styles.borderColor = 'red';
  return styles;
};

const calibrated = (angle, range = 10) => {
  const halfRange = range / 2;
  if (angle < halfRange || angle > 360 - halfRange) {
    return true;
  }
  return false;
};

const defaultText = 'Point device north';

function useCalibrateState(calibratedAction) {
  const [displayText, setDisplayText] = useState(defaultText);
  const [aligned, setAligned] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const [data] = useMagnetometer();

  const calibrateRange = useSelector(store => store.calibrate.range);
  const calibrateTimeoutValue = useSelector(
    store => store.calibrate.timeoutValue
  ); // in ms

  const setCalibrateState = useCallback(
    (newAligned, newTimeoutId) => {
      if (newAligned) {
        setDisplayText('Hold here to calibrate');
      } else {
        setDisplayText(defaultText);
      }
      setAligned(newAligned);
      setTimeoutId(newTimeoutId);
    },
    [setDisplayText, setAligned, setTimeoutId]
  );

  useEffect(() => {
    if (calibrated(data.angle, calibrateRange)) {
      if (!aligned) {
        let t = setTimeout(() => {
          setTimeoutId(null);
          calibratedAction();
        }, calibrateTimeoutValue);
        setCalibrateState(true, t);
      }
    } else {
      clearTimeout(timeoutId);
      setCalibrateState(false, null);
    }
  }, [data.angle, setCalibrateState, calibrateRange, calibrateTimeoutValue]);

  return { aligned, displayText, angle: data.angle };
}

export default function CalibrateScreen(props) {
  const dispatch = useDispatch();
  const calibratedAction = () => {
    dispatch({ type: C.SET_CALIBRATED, value: true });
    props.navigation.navigate(C.SCREENS.PLAY);
  };
  const { aligned, displayText, angle } = useCalibrateState(calibratedAction);

  return (
    <CenterWrapper>
      <Text>Angle: {round(angle)}</Text>
      <Text>{displayText}</Text>
      <View style={rotatingContainer(aligned)}>
        <Compass angle={angle} />
      </View>
    </CenterWrapper>
  );
}
