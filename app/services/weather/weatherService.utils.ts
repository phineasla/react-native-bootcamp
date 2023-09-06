import {Forecast} from '../../models/Forecast';
import {Weather} from '../../models/Weather';
import {GetForecastResponse} from './getForecast.type';
import {GetWeatherResponse} from './getWeather.type';

export function parseGetWeatherResponse(rawData: GetWeatherResponse): Weather {
  const {icon, description} = rawData.weather[0];
  const {humidity, pressure, temp, temp_min, temp_max} = rawData.main;
  const windSpeed = rawData.wind.speed;
  return {
    city: rawData.name,
    temp: {
      value: temp,
      min: temp_min,
      max: temp_max,
    },
    icon,
    description,
    humidity,
    pressure,
    windSpeed,
    timestamp: rawData.dt,
  };
}

export function parseGetForecastResponse(
  rawData: GetForecastResponse,
): Forecast {
  const {city, list: rawList} = rawData;
  const list: Weather[] = rawList.map(rawWeather => {
    const {icon, description} = rawWeather.weather[0];
    const {humidity, pressure, temp, temp_min, temp_max} = rawWeather.main;
    const windSpeed = rawWeather.wind.speed;
    return {
      city: city.name,
      temp: {
        value: temp,
        min: temp_min,
        max: temp_max,
      },
      icon,
      description,
      humidity,
      pressure,
      windSpeed,
      timestamp: rawWeather.dt,
    };
  });
  return {city, list};
}
