import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface WeatherProps {
  temp: number;
}

const Weather: React.FC<WeatherProps> = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
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
