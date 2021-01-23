import React, { useState, useEffect } from 'react';
import { Asset } from 'expo-asset';

import { Image, Dimensions } from 'react-native';

function Compass({ angle = 0 }) {
  const uri = Asset.fromModule(require('../../assets/images/compass.jpg')).uri;
  const [imgWidth, setImgWidth] = useState(100);
  const [imgHeight, setImgHeight] = useState(100);

  const imgRef = React.useRef();

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setImgWidth(Dimensions.get('window').width);
      const aspectRatio = width / height;
      setImgHeight(Dimensions.get('window').width / aspectRatio);
    });

    return () => {};
  }, []);

  return (
    <Image
      ref={imgRef}
      source={require('../../assets/images/compass.jpg')}
      style={{
        width: imgWidth,
        height: imgHeight,
        resizeMode: 'center',
        transform: [{ rotate: `${360 - angle}deg` }]
      }}
    />
  );
}

export default Compass;
