import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

import Loading from './src/Loading';
import API_KEY from './env';
import Weather, { Condition } from './src/Weather';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState<Condition>(Condition.Clear);

  useEffect(() => {
    const getWeather = async (latitude: number, longitude: number) => {
      const {
        data: {
          main: { temp },
          weather
        }
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      
      setTemp(temp);
      setCondition(weather[0].main);
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
    isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  );
};

export default App;
