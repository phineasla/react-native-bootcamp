import {Coord} from './Coord';
import {Weather} from './Weather';

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Forecast {
  list: Weather[];
  city: City;
}
