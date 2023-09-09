import Config from '../config';

export function getWeatherIconUrl(iconId: string, scale = '2x') {
  if (scale) {
    return `${Config.API_ICON_URL}${iconId}@${scale}.png`;
  }
  return `${Config.API_ICON_URL}${iconId}.png`;
}

export function kelvinToCelcius(value: number) {
  return ((value - 273.15) * 9) / 5 + 32;
}
