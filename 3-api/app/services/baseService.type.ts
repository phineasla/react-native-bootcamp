import {PROBLEM_CODE} from 'apisauce';
import {AxiosError, RawAxiosRequestHeaders} from 'axios';

export interface ServiceConfig {
  baseURL: string;
  timeout: number;
  headers: RawAxiosRequestHeaders;
}

export interface ServiceErrorResponse<T> {
  ok: false;
  problem: PROBLEM_CODE;
  originalError: AxiosError;

  data?: T;
  status?: number;
}
export interface ServiceOkResponse<T> {
  ok: true;
  problem?: undefined;
  originalError?: undefined;

  data: T;
  status?: number;
}

export type ServiceResponse<T, U = T> =
  | ServiceErrorResponse<U>
  | ServiceOkResponse<T>;
