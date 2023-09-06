import {Config} from './config.base';

/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
export const DevConfig: Config = {
  API_URL: 'https://api.openweathermap.org/data/2.5/',
  API_ICON_URL: 'https://openweathermap.org/img/wn/',
  API_KEY: '858db5c46ba3527131331335914b0c3c',
};
