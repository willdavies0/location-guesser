import React from 'react';
import { CenterWrapper, Compass, useMagnetometer } from '../utils/';

export default function PlayScreen(props) {
  const [data] = useMagnetometer();

  return (
    <CenterWrapper>
      <Compass angle={data.angle} />
    </CenterWrapper>
  );
}
