import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import weatherOptions from "./weatherOptions";

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
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={144} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.halfContainer}>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 40,
    color: 'white'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Weather;
