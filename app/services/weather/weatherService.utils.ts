import {Weather} from '../../models/Weather';
import {GetWeatherResponse} from './weatherService.type';

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
  };
}
