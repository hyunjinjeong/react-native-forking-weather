import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

import Loading from './src/Loading';
import API_KEY from './env';
import Weather from './src/Weather';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const getWeather = async (latitude: number, longitude: number) => {
      const { data: { main: { temp }}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      setTemp(temp);
    };
    
    const getLocation = async () => {
      try {
        setIsLoading(true);
        await Location.requestPermissionsAsync();
        const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
        await getWeather(latitude, longitude);
        setIsLoading(false);
      }
      catch {
        Alert.alert("Permission denied.");
      }
    }

    getLocation();
  }, []);

  return (
    isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />
  );
};

export default App;
