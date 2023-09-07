import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {HStack} from '../../../components/Stack';
import {Weather} from '../../../models/Weather';
import {getWeatherIconUrl} from '../../../utils/weather.utils';
import {images} from '../../../assets/images';
import FastImage from 'react-native-fast-image';

export type WeatherItemProps = {
  data: Weather;
};

export const WeatherItem = ({data}: WeatherItemProps) => {
  return (
    <HStack space={3}>
      <FastImage
        // source={{uri: getWeatherIconUrl(data.icon)}}
        // source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        source={images['10n']}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{data.description}</Text>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
});
