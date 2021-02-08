import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export function useSetupLocationServices() {
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  return errorMsg;
}

export function useLocationServices() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return location;
}
