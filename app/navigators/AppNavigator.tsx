import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, HomeScreenParams} from '../screens/HomeScreen/HomeScreen';
import {NAVID_HOME_SCREEN, NAVID_WEATHER_SCREEN} from '../constants/navigation';
import {
  WeatherScreen,
  WeatherScreenParams,
} from '../screens/WeatherScreen/WeatherScreen';

export type AppNavigatorParamList = {
  [NAVID_HOME_SCREEN]: HomeScreenParams;
  [NAVID_WEATHER_SCREEN]: WeatherScreenParams;
};

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVID_HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={NAVID_WEATHER_SCREEN} component={WeatherScreen} />
    </Stack.Navigator>
  );
};
