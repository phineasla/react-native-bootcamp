import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {weatherService} from '../../services/weather/weatherService';
import {Search, SearchProps} from './components/Search';
import {Forecast} from '../../models/Forecast';
import {WeatherItem} from './components/WeatherItems';
import {Weather} from '../../models/Weather';
import {SAFE_SPACING} from '../../constants/style';
import {HSpacer} from '../../components/Spacer';

const DEFAULT_LOCATION = 'ho chi minh';

const Spacer = () => <HSpacer height={6} />;

export const HomeScreen = () => {
  const [city, setCity] = useState(DEFAULT_LOCATION);
  const [forecast, setForecast] = useState<Forecast>();

  const onSearchSubmit: SearchProps['onSubmit'] = useCallback(
    value => setCity(value),
    [setCity],
  );

  const renderItem: ListRenderItem<Weather> = useCallback(
    info => <WeatherItem data={info.item} />,
    [],
  );

  useEffect(() => {
    weatherService
      .getForecast({city})
      .then(response => {
        if (!response.ok) {
          // Mr.Stark, I don't feel so good
          return console.warn(response);
        }
        setForecast(response.data);
      })
      .catch(console.error);
  }, [city]);

  return (
    <View style={styles.container}>
      <Search defaultValue={city} onSubmit={onSearchSubmit} />
      <FlatList
        data={forecast?.list}
        renderItem={renderItem}
        style={styles.flatList}
        ListHeaderComponent={
          <Text style={styles.header}>{forecast?.city.name}</Text>
        }
        ItemSeparatorComponent={Spacer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  flatList: {
    marginTop: 8,
    marginHorizontal: SAFE_SPACING,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
