import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

import Loading from './src/Loading';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        setIsLoading(true);
        await Location.requestPermissionsAsync();
        const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
        console.log(latitude, longitude);
        setIsLoading(false);
      }
      catch {
        Alert.alert("Permission denied.");
      }
    }
    getLocation();
  }, []);

  return (
    isLoading && <Loading />
  );
};

export default App;
