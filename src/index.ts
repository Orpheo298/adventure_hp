import * as angular from 'angular';

import '@uirouter/angularjs';
import routesConfig from './routes';
import services from './app/services/services';

import './index.less';

export const app: string = 'app';

angular
  .module(app, [
    'ui.router',
    services.name,
    ])
  .config(routesConfig);
