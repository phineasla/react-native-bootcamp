import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HStack, VStack} from '../../../components/Stack';
import {Weather} from '../../../models/Weather';
import {getWeatherIconUrl} from '../../../utils/weather.utils';
import FastImage from 'react-native-fast-image';
import {getDayAndMonth, getTime} from '../../../utils/date.utils';
import {images} from '../../../assets/images';

export type WeatherItemProps = {
  data: Weather;
};

export const WeatherItem = ({data}: WeatherItemProps) => {
  const date = new Date(data.timestamp * 1000);
  const localIcon =
    images.weather[data.icon as keyof typeof images.weather] ??
    images.weather.default;
  return (
    <HStack space={3} style={styles.container}>
      <VStack style={styles.dateContainer}>
        <Text style={styles.time}>{getTime(date)}</Text>
        <Text style={styles.date}>{getDayAndMonth(date)}</Text>
      </VStack>
      <Text style={styles.temperature}>{data.temp.value}&deg;</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.imageContainer}>
        <View style={styles.imageBackground} />
        <FastImage
          // https://github.com/DylanVann/react-native-fast-image/issues/710
          // source={{uri: getWeatherIconUrl(data.icon)}}
          source={localIcon}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {width: '15%'},
  time: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  date: {textAlign: 'center'},
  imageContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 9,
  },
  imageBackground: {
    width: 60,
    height: 60,
    backgroundColor: 'grey',
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
  },
  temperature: {
    fontSize: 20,
  },
  description: {
    textTransform: 'capitalize',
    width: '35%',
  },
  image: {
    width: 80,
    height: 80,
  },
});
