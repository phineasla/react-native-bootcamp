import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {City} from '../../models/Forecast';
import {Weather} from '../../models/Weather';
import {AppNavigatorParamList} from '../../navigators/AppNavigator';

export type WeatherScreenParams = {
  weather: Weather;
  city: City;
};

type WeatherScreenProps = NativeStackScreenProps<AppNavigatorParamList>;

export const WeatherScreen = (props: WeatherScreenProps) => {
  return <></>;
};
