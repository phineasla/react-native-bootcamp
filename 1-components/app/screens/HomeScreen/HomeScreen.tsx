import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {Search, SearchProps} from './components/Search';
import {Forecast, forecastMock} from '../../models/Forecast';
import {WeatherItem} from './components/WeatherItems';
import {Weather} from '../../models/Weather';
import {SAFE_SPACING} from '../../constants/style';
import {HSpacer} from '../../components/Spacer';

const DEFAULT_LOCATION = 'ho chi minh';

const Spacer = () => <HSpacer height={6} />;

export const HomeScreen = () => {
  const forecast: Forecast = forecastMock;

  const onSearchSubmit: SearchProps['onSubmit'] = value => {
    console.log('Search value:', value);
  };

  const renderItem: ListRenderItem<Weather> = info => (
    <WeatherItem data={info.item} />
  );

  return (
    <View style={styles.container}>
      <Search defaultValue={DEFAULT_LOCATION} onSubmit={onSearchSubmit} />
      <FlatList
        data={forecast?.list}
        renderItem={renderItem}
        style={styles.flatList}
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
});
