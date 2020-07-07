import React from "react";
import { View, Text, StyleSheet } from "react-native";

export enum Condition {
  'Thunderstrom',
  'Drizzle',
  'Rain',
  'Snow',
  'Haze',
  'Mist',
  'Atmosphere',
  'Clear',
  'Clouds'
};

interface WeatherProps {
  temp: number;
  condition: Condition;
}

const Weather: React.FC<WeatherProps> = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
      <Text>{condition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Weather;
