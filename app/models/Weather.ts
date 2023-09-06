export interface WeatherTemperature {
  value: number;
  max: number;
  min: number;
  unit?: string;
}

export interface Weather {
  city: string;
  temp: WeatherTemperature;
  icon: string;
  description: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
}
