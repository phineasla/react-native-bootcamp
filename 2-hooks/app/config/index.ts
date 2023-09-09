import {BaseConfig} from './config.base';
import {DevConfig} from './config.dev';

const Config = {...BaseConfig, ...DevConfig};

export default Config;
