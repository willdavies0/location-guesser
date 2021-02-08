import React from 'react';

import { Image } from 'react-native';

function Compass({ angle = 0 }) {
  return (
    <Image
      source={require('../../assets/images/compass.jpg')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'center',
        transform: [{ rotate: `${360 - angle}deg` }]
      }}
    />
  );
}

export default Compass;
