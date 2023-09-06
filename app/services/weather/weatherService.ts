import {ApiResponse} from 'apisauce';
import {BaseService} from '../baseService';
import {
  GetWeatherRequestParams,
  GetWeatherResponse,
} from './weatherService.type';
import Config from '../../config';
import {ServiceResponse} from '../baseService.type';
import {Weather} from '../../models/Weather';
import {parseGetWeatherResponse} from './weatherService.utils';

class WeatherService extends BaseService {
  async getWeather(
    params: GetWeatherRequestParams,
  ): Promise<ServiceResponse<Weather>> {
    const response: ApiResponse<GetWeatherResponse> = await this.apisauce.get(
      '/weather',
      {appid: Config.API_KEY, q: params.city},
    );
    if (!response.ok) {
      return {
        ok: false,
        problem: response.problem,
        originalError: response.originalError,
        status: response.status,
      };
    }
    const rawData = response.data as GetWeatherResponse;
    const data: Weather = parseGetWeatherResponse(rawData);
    return {
      ok: true,
      data,
      status: response.status,
    };
  }
}

export const weatherService = new WeatherService();
