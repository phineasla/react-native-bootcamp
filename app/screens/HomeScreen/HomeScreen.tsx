import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatorParamList} from '../../navigators/AppNavigator';
import {NAVID_HOME_SCREEN} from '../../constants/navigation';
import {FlatList, StyleSheet, View} from 'react-native';
import {weatherService} from '../../services/weather/weatherService';
import {Search, SearchProps} from './components/Search';
import {Forecast} from '../../models/Forecast';

export type HomeScreenParams = undefined;

type HomeScreenProps = NativeStackScreenProps<
  AppNavigatorParamList,
  typeof NAVID_HOME_SCREEN
>;

const DEFAULT_LOCATION = 'ho chi minh';

export const HomeScreen = (props: HomeScreenProps) => {
  const [city, setCity] = useState(DEFAULT_LOCATION);
  const [forecast, setForecast] = useState<Forecast>();

  const onSearchSubmit: SearchProps['onSubmit'] = useCallback(
    value => setCity(value),
    [setCity],
  );

  useEffect(() => {
    weatherService.getForecast({city}).then(response => {
      if (!response.ok) {
        // Mr.Stark, I don't feel so good
        return console.warn(response);
      }
      setForecast(response.data);
    });
  }, [city]);

  return (
    <View style={styles.container}>
      <Search defaultValue={city} onSubmit={onSearchSubmit} />
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
