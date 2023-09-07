import Config from '../config';

export function getWeatherIconUrl(iconId: string, scale = '2x') {
  if (scale) {
    return `${Config.API_ICON_URL}${iconId}@${scale}.png`;
  }
  return `${Config.API_ICON_URL}${iconId}.png`;
}
