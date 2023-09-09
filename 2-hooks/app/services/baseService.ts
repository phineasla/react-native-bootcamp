import {ApisauceInstance, create} from 'apisauce';
import {ServiceConfig} from './baseService.type';
import Config from '../config';

export const DEFAULT_SERVICE_CONFIG: ServiceConfig = {
  baseURL: Config.API_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
};

export class BaseService {
  config: ServiceConfig;
  apisauce: ApisauceInstance;

  constructor(config: ServiceConfig = DEFAULT_SERVICE_CONFIG) {
    this.config = config;
    this.apisauce = create(this.config);
  }
}
